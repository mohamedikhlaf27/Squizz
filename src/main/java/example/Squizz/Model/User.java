package example.Squizz.Model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;


@Entity // This tells Hibernate to make a table out of this class
public @Data class User implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    private String username;
    private String email;
}
