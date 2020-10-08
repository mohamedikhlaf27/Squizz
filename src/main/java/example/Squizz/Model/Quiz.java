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

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)//cascade: When we perform some action on the target entity, the same action will be applied to the associated entity.
    private List<Question> questions;

}
