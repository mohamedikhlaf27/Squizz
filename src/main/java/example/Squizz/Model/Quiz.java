package example.Squizz.Model;

import lombok.Data;
import javax.persistence.*;

@Entity
public @Data class Quiz {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int quizId;

    @ManyToOne(fetch = FetchType.EAGER) // variable holds a many-to-one relationship between two entities
    @JoinColumn(name="questionId") //Column name that holds the foreign key identifier for this relation.
    private Question question;

    private String quizName;
    private String category;
}
