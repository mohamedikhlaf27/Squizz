package example.Squizz.Model;
import example.Squizz.Enum.rightChoice;

import lombok.Data;
import javax.persistence.*;

@Entity
public @Data class Choises {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int choisesId;
    private int questionId;
    private String choice;
    private rightChoice rightChoice;
}
