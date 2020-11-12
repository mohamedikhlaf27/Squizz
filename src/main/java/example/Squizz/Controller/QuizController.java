package example.Squizz.Controller;


import example.Squizz.Interface.PersonRepository;
import example.Squizz.Interface.QuizRepository;
import example.Squizz.Model.Choices;
import example.Squizz.Model.Person;
import example.Squizz.Model.Question;
import example.Squizz.Model.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller  // This means that this class is a Controller
@RequestMapping("/quiz") // This means URL's start with /api (after Application path)
@CrossOrigin(origins = "http://localhost:3000")
public class QuizController {

    @Autowired
    private QuizRepository quizRepository;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Quiz> getAllUsers() {
        // This returns a JSON or XML with the users
        return quizRepository.findAll();
    }
//
//    @PostMapping("create")
//    public @ResponseBody Iterable<Quiz> createQuiz(Quiz quiz, Question question, Choices choices){
//
//        List<Question> questionList = new ArrayList<Question>();
//        List<Choices> choicesList = new ArrayList<Choices>();
//
//        return quizRepository.save();
//    }
}
