package example.Squizz.Model;
import example.Squizz.Enum.isRight;

import lombok.Data;
import javax.persistence.*;

@Entity
public @Data class Useranswer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int useranswerId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="userId")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="questionId")
    private Question question;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="choisesId")
    private Choises choises;

    private isRight isRight;
}

