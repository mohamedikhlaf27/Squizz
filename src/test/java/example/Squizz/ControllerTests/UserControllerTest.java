package example.Squizz.ControllerTests;

import example.Squizz.Interface.PersonRepository;
import example.Squizz.Model.Person;
import org.springframework.boot.test.context.SpringBootTest;
import org.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.util.Assert;
import java.util.HashMap;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.web.servlet.function.RequestPredicates.param;


@SpringBootTest
@ExtendWith(SpringExtension.class)
@AutoConfigureMockMvc
public class UserControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private PersonRepository personRepository;

    @Test
    void LoginTest() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.post("/person/login")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .param("email", "test1@example.com")
                .param("password", "Test1234&");

        MvcResult result = mvc.perform(request).andReturn();
        MvcResult results = mvc.perform(request).andExpect(status().isUnauthorized()).andReturn();

        HashMap<String, Object> data = new HashMap<>();
        data.put("message", "Email or password is incorrect.");
        JSONObject jsonObject = new JSONObject(data);

        //Assert
        Assert.isTrue(result.getResponse().getContentAsString().equals(jsonObject.toString()), "Wrong password passed");
    }

    @Test
    void RegisterTest() throws Exception {
        Person account = new Person("test@example.com", "test", "Test1234&", true, "salt");

        when(personRepository.save(account)).thenReturn(account);

        RequestBuilder request = MockMvcRequestBuilders.post("/person/register")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .param("email", "eeee@example.com")
                .param("password", "Test1234!")
                .param("username", "test")
                .param("role", String.valueOf(true));
        MvcResult result = mvc.perform(request).andReturn();

        HashMap<String, Object> data = new HashMap<>();
        data.put("message", "Registration succeeded.");
        JSONObject jsonObject = new JSONObject(data);

        //Assert
        Assert.isTrue(result.getResponse().getContentAsString().equals(jsonObject.toString()), "Registration test");

    }
}
