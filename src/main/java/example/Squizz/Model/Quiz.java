package example.Squizz.Model;

import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Entity
public @Data class Quiz {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int quizId;

    @ManyToMany(fetch = FetchType.EAGER, cascade =CascadeType.ALL)
    //@JoinColumn(name="questionId")
    private List<Question> questions;

    private String quizName;
    private String category;
}
