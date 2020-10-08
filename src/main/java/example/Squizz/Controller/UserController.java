package example.Squizz.Controller;

import example.Squizz.Interface.PersonRepository;
import example.Squizz.Util.Authorizer;
import example.Squizz.Model.Person;
import example.Squizz.Util.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.security.NoSuchAlgorithmException;


@Controller  // This means that this class is a Controller
@RequestMapping("/person") // This means URL's start with /api (after Application path)
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired //The @utowired annotation allows you to skip configurations elsewhere
               //of what to inject and just does it for you.
    private PersonRepository personRepository;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Person> getAllUsers() {
        // This returns a JSON or XML with the users
        return personRepository.findAll();
    }

    //register
    @PostMapping("/register")
    public @ResponseBody String register(@RequestParam String email, String username, @RequestParam String password, boolean role, HttpServletResponse response) throws NoSuchAlgorithmException {
        Util util = new Util();

        // Check if user data is valid
        if(!util.EmailValidator(email)) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return "{\"message\":\"Email is not correct.\"}";
        }

        if(!util.PasswordValidator(password)){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return "{\"message\":\"Password must contain at least one digit, special character, uppercase, " +
                    "lowercase and be minimun of 8 characters.\"}";
        }

        // Check if email exist
        Person dBAccount = personRepository.findPersonByEmail(email);

        if(dBAccount != null) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return "{\"message\":\"This email in already in use.\"}";
        }

        // Hash + salt password
        Authorizer auth = new Authorizer();
        String salt = auth.GenerateSalt();
        String hashedPassword = auth.HashPassword(password, salt);

        // Save user to database
        Person user = new Person(email, username, hashedPassword, role, salt);
        personRepository.save(user);

          return "{\"message\":\"Registration succeeded\"}";
    }

    //login
    @PostMapping("/login")
    public @ResponseBody String login(@RequestParam String email, @RequestParam String password, HttpServletResponse response) throws NoSuchAlgorithmException {
        String message = "";
        // Get user's hash by email from database
        Person user = personRepository.findPersonByEmail(email);
        if(user == null){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return "{\"message\":\"Email or password is incorrect.\"}";
        }
        String databaseHash = user.getPassword();

        // Hash + salt password
        Authorizer auth = new Authorizer();
        String hashedPassword = auth.HashPassword(password, user.getSalt());

        boolean loginCheck = auth.ValidatePassword(databaseHash, hashedPassword);

        if (loginCheck) {
//            final String jwt = jwtTokenUtil.generateToken(account);
            message =  "{\"message\":\"Login succeeded.\"}";
        } else {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            message = "{\"message\":\"Email or password is incorrect.\"}";
        }
        return message;
    }
}
