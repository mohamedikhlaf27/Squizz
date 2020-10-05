package example.Squizz.Interface;

import example.Squizz.Model.Choises;
import org.springframework.data.repository.CrudRepository;

public interface ChoisesRepository extends CrudRepository<Choises, Integer> {
}
