package example.Squizz.Model;

import lombok.Data;
import javax.persistence.*;

@Entity
public @Data class Userquizzez {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userquizzezId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="userId")
    private User user ;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="quizId")
    private Quiz quiz;

}
