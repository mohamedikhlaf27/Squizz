package example.Squizz.UtilTests;

import example.Squizz.Util.Authorizer;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Random;

@SpringBootTest
public class AuthorizerTest {

    @Test
    public void GeneratesaltTest(){

        //Given
        Authorizer authorizer = new Authorizer();

        //When
        String salt = authorizer.GenerateSalt();
        String salt1 = authorizer.GenerateSalt();

        //Assert
        Assert.doesNotContain(salt, salt1, "Don't generate equal salt");
    }

    @Test
    public void ValidatePasswordTest(){

        //Given
        Authorizer authorizer = new Authorizer();

        String databaseHash = "7OZt7UHj0SStpXOn";
        String inputHash = "7OZt7UHj0SStpXOn";

        String databaseHashWrong = "7OZt7UHj0SStpXOn";
        String inputHashWrong = "7OZt7UHj0SStpX";

        //When
        boolean result = authorizer.ValidatePassword(databaseHash, inputHash);
        boolean resultWrong = authorizer.ValidatePassword(databaseHashWrong, inputHashWrong);

        //Assert
        Assert.isTrue(result, "Correct match");
        Assert.isTrue(!resultWrong, "Incorrect match");

    }

    @Test
    public void HashPasswordTest () throws NoSuchAlgorithmException {

        //Given
        Authorizer authorizer = new Authorizer();
        String password = "test1234";
        String salt = "K9n2jT7O1UlWx2+caalIew";

        //When
        String hashing = authorizer.HashPassword(password, salt);

        //Assert
        Assert.doesNotContain(hashing, password, "Don't match");
    }

}
