package example.Squizz.Controller;

import example.Squizz.Interface.PersonRepository;
import example.Squizz.Util.Authorizer;
import example.Squizz.Model.Person;
import example.Squizz.Util.JwtUtil;
import example.Squizz.Util.Util;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;


@Controller  // This means that this class is a Controller
@RequestMapping("/person") // This means URL's start with /api (after Application path)
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired //The @utowired annotation allows you to skip configurations elsewhere
               //of what to inject and just does it for you.
    private PersonRepository personRepository;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Person> getAllUsers() {
        // This returns a JSON or XML with the users
        return personRepository.findAll();
    }

    //register
    @PostMapping("/register")
    public @ResponseBody String register(@RequestParam String email,  @RequestParam String username, @RequestParam String password, boolean role, HttpServletResponse response) throws NoSuchAlgorithmException {
        Util util = new Util();
        HashMap<String, Object> data = new HashMap<>();

        // Check if user data is valid
        if(!util.EmailValidator(email)) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            data.put("message", "Email is not correct.");
            return new JSONObject(data).toString();
        }

        if(!util.PasswordValidator(password)){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            data.put("message", "Password must contain at least one digit, special character, uppercase, " +
                    "lowercase and be minimun of 8 characters.");
            return new JSONObject(data).toString();
        }

        // Check if email exist
        Person dBAccount = personRepository.findPersonByEmail(email);

        if(dBAccount != null) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            data.put("message", "This email in already in use.");
            return new JSONObject(data).toString();
        }

        // Hash + salt password
        Authorizer auth = new Authorizer();
        String salt = auth.GenerateSalt();
        String hashedPassword = auth.HashPassword(password, salt);

        // Save user to database
        Person user = new Person(email, username, hashedPassword, role, salt);
        personRepository.save(user);

        data.put("message", "Registration succeeded.");
        return new JSONObject(data).toString();
    }

    //login
    @PostMapping("/login")
    public @ResponseBody String login(@RequestParam String email, @RequestParam String password, HttpServletResponse response) throws NoSuchAlgorithmException {
        HashMap<String, Object> data = new HashMap<>();

        // Get user's hash by email from database
        Person user = personRepository.findPersonByEmail(email);
        if(user == null){
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            data.put("message", "Email or password is incorrect.");
            return new JSONObject(data).toString();
        }
        String databaseHash = user.getPassword();

        // Hash + salt password
        Authorizer auth = new Authorizer();
        String hashedPassword = auth.HashPassword(password, user.getSalt());

        boolean loginCheck = auth.ValidatePassword(databaseHash, hashedPassword);

        if (loginCheck) {
            final String jwt = jwtTokenUtil.generateToken(user);
            data.put("message", "Login succeeded.");
            data.put("jwt", jwt);
        } else {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            data.put("message", "Email or password is incorrect.");
        }
        return new JSONObject(data).toString();
    }
}
