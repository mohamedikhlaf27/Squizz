package example.Squizz.Model;

import lombok.Data;
import javax.persistence.*;

@Entity
public @Data class Question {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int questionId;
    private int quizId;
    private String question;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="choisesId")
    private Choises choises;
}
