package example.Squizz.Model;

import lombok.Data;
import javax.persistence.*;
import example.Squizz.Model.Quiz;

@Entity
public @Data class PersonScore {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int personScoreId;
    private int score;

    @OneToOne(fetch = FetchType.LAZY)
    private Quiz quiz;

}
