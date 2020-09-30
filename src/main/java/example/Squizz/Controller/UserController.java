package example.Squizz.Controller;

import example.Squizz.Interface.UserRepository;
import example.Squizz.Util.Authorizer;
import example.Squizz.Model.User;
import example.Squizz.Util.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;

@Controller  // This means that this class is a Controller
@RequestMapping("/user") // This means URL's start with /api (after Application path)
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired //The @utowired annotation allows you to skip configurations elsewhere
               //of what to inject and just does it for you.
    private UserRepository userRepository;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        // This returns a JSON or XML with the users
        return userRepository.findAll();
    }

    //register
    @PostMapping("/register")
    public @ResponseBody Boolean register(@RequestParam String email, String username, String password, boolean function) throws NoSuchAlgorithmException {
        Util util = new Util();

        // Check if user data is valid
        if(!util.EmailValidator(email) || !util.PasswordValidator(password)) {
            return false;
        }

        // Check if email exist
        User dBAccount = userRepository.findUserByEmail(email);

        if(dBAccount != null) {
            return false;
        }

        // Hash + salt password
        Authorizer auth = new Authorizer();
        String salt = auth.GenerateSalt();
        String hashedPassword = auth.HashPassword(password, salt);

        // Save user to database
        User user = new User(email, username, hashedPassword, function, salt);
        userRepository.save(user);

        return true;
    }

    //login
    @PostMapping("/login")
    public @ResponseBody Boolean login(@RequestParam String email, String password) throws NoSuchAlgorithmException {
        // Get user's hash by email from database
        User user = userRepository.findUserByEmail(email);
        String databaseHash = user.getPassword();

        // Hash + salt password
        Authorizer auth = new Authorizer();
        String hashedPassword = auth.HashPassword(password, user.getSalt());

        // Check if hashed password and user password are the same
        return auth.ValidatePassword(databaseHash, hashedPassword);
    }
}
