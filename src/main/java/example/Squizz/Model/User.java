package example.Squizz.Model;

import lombok.Data;

import javax.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
public @Data class User {
    @Id //entity identifier, the primary key in the database
    @GeneratedValue(strategy=GenerationType.AUTO) //auto generate next ID
    private int userId;
    private String userName;
    private String email;
    private String password;
    private boolean function;
    private String salt;

    public User(){}

    public User(String email, String username, String password, boolean function, String salt) {
        this.email = email;
        this.userName = username;
        this.password = password;
        this.function = function;
        this.salt = salt;

    }
}
