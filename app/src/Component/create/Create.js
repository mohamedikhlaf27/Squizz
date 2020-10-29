import React, { Component } from 'react';
import Navbar from "../navbar/Navbar";
import {Button, Input} from "reactstrap";
import './Create.css';
import Label from "reactstrap/es/Label";

class Create extends Component {
    state = {
        numAnswer: 1,
        numQuestions: 0
    }

    onAddAnswer = () => {
        this.setState({
            numAnswer: this.state.numAnswer + 1
        });
    }

    onAddQuestion = () => {
        this.setState({
            numQuestions: this.state.numQuestions + 1
        });
    }

    render () {
        const Answers = [];
        const Questions = [];

        //Answer
        const AnswerBtn = props => (
            <div className="pt-2">
                <Button className="btn btn-light" id="addAnswerBtn" type="submit"  onClick={props.addAnswer}>+ </Button>
                <div id="children-pane">
                    {props.children}
                </div>
            </div>
        );

        const AnswerInput = props => <div className="form-check-inline pt-1">
            <Label className="pr-2">{props.number + 1}: </Label>
            <Input type="text" id="AnswerInput" className="form-control" data-hj-allow
                   required> </Input>
        </div>

        for (let i = 0; i < this.state.numAnswer; i += 1) {
            Answers.push(<AnswerInput key={i} number={i} />);
        }
        //End Asnwer

        //Question
        const QuestionBtn = props => (
            <div className="pt-2">
                <div>
                    <Button className="btn btn-light" id="addQuestionBtn" type="submit" onClick={props.addQuestion}>Add new question </Button>
                </div>
                <div id="children-pane">
                    {props.children}
                </div>
            </div>
        );

        const QuestionsForm = props => <div className="card card-container pt-5">

            <div className="form-check-inline">
                <Label className="pr-2">Question{props.number + 2}: </Label>
                <Input type="text" id="QuestionInput" className="form-control" data-hj-allow
                       required autoFocus> </Input>
            </div>

            <Label className="pt-1">Answers</Label>

            {Answers}

            <AnswerBtn addAnswer={this.onAddAnswer}> </AnswerBtn>
        </div>

        for (let i = 0; i < this.state.numQuestions; i += 1) {
            Questions.push(<QuestionsForm key={i} number={i} />);
        }
        //End Question

        return (<>
            <Navbar/>
            <div className="container">

                <div className="justify-content-center">

                    <h2 className="pt-5"> Create a quiz</h2>

                    <div className="pt-4 pb-3 form-check-inline" id="Title">
                        <Label className="pr-2 titleLabel">Title: </Label>
                        <Input type="text" id="title" className="form-control" data-hj-allow
                               required autoFocus> </Input>
                    </div>

                    <div className="card card-container pt-5">

                        <div className="form-check-inline">
                            <Label className="pr-2">Question1: </Label>
                            <Input type="text" id="QuestionInput" className="form-control" data-hj-allow
                                   required > </Input>
                        </div>

                        <Label className="pt-1">Answers</Label>

                        {Answers}

                        <AnswerBtn addAnswer={this.onAddAnswer}> </AnswerBtn>

                    </div>

                    {Questions}

                    <QuestionBtn addQuestion={this.onAddQuestion}> </QuestionBtn>
                </div>
            </div>

            <div className="pt-2">
                <Button className="btn btn-light" id="saveQuizBtn" type="submit"> Save quiz</Button>
            </div>
            </>
        );
    }
}

export default Create;
