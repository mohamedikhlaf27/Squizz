package example.Squizz.Interface;

import example.Squizz.Model.Choices;
import org.springframework.data.repository.CrudRepository;

public interface ChoicesRepository extends CrudRepository<Choices, Integer> {
}
