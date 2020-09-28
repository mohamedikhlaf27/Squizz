package example.Squizz.Util;

import org.apache.commons.validator.routines.EmailValidator;

public class Util {
    public boolean EmailValidator(String email) {
        // create the EmailValidator instance
        EmailValidator validator = EmailValidator.getInstance();

        // check for valid email addresses using isValid method
        return validator.isValid(email);
    }

    public boolean PasswordValidator(String password) {
        boolean result = false;

        if (password.isEmpty() || password.length() < 8) {
            result = false;
        } else {
            result = true;
        }

        return result;
    }
}
