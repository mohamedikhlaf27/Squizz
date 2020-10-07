package example.Squizz.Interface;

import example.Squizz.Model.PersonScore;
import org.springframework.data.repository.CrudRepository;

public interface PersonScoreRepository extends CrudRepository<PersonScore, Integer> {
}
