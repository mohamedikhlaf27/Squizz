package example.Squizz.Model;

import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Entity// This tells Hibernate to make a table out of this class
public @Data class Person {
    @Id //entity identifier, the primary key in the database
    @GeneratedValue(strategy=GenerationType.AUTO) //auto generate next ID
    private int personId;
    private String userName;
    private String email;
    private String password;
    private boolean role;
    private String salt;

    @OneToMany(fetch = FetchType.LAZY)//fetching strategy to load data.
    private List<PersonScore> userScores;

    public Person(){}

    public Person(String email, String username, String password, boolean role, String salt) {
        this.email = email;
        this.userName = username;
        this.password = password;
        this.role = role;
        this.salt = salt;
    }
}
