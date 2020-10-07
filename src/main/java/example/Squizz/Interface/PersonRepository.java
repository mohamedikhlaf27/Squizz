package example.Squizz.Interface;

import example.Squizz.Model.Person;
import org.springframework.data.repository.CrudRepository;

public interface PersonRepository extends CrudRepository<Person, Integer> {
    Person findPersonByEmail(String email);
}
