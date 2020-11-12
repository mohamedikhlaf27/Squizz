package example.Squizz.Model;
import example.Squizz.Enum.rightChoice;

import lombok.Data;
import javax.persistence.*;

@Entity
public @Data class Choices {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int choicesId;
    private String choice;
    private rightChoice rightChoice;

    public Choices(){}

    public Choices(int choicesId, String choice, rightChoice rightChoice){
        this.choicesId = choicesId;
        this.choice = choice;
        this.rightChoice = rightChoice;
    }


}
