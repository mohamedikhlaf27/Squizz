package example.Squizz.Model;

import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Entity
public @Data class Question {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int questionId;
    private int quizId;
    private String question;

    @ManyToMany(fetch = FetchType.EAGER, cascade =CascadeType.ALL)
    //@JoinColumn(name="choisesId")
    private List<Choises> choises;
}
