package example.Squizz.Model;

import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Entity
public @Data class Quiz {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int quizId;
    private String quizName;
    private String category;

    @OneToMany(fetch = FetchType.EAGER)
    private List<Question> questions;

}
