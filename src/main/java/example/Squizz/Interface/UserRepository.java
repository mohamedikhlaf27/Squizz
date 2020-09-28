package example.Squizz.Interface;

import org.springframework.data.repository.CrudRepository;

import example.Squizz.Model.User;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findUserByEmail(String email);
}
