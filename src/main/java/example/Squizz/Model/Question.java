package example.Squizz.Model;

import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Entity
public @Data class Question {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int questionId;
    private String title;

    @OneToMany(fetch = FetchType.EAGER, cascade =CascadeType.ALL)
    private List<Choices> choices;
}
