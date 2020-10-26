import React, { Component } from 'react';
import Navbar from "../navbar/Navbar";
import {Button, Input} from "reactstrap";
import './Create.css';
import Label from "reactstrap/es/Label";

const ParentComponent = props => (
    <div className="pt-2">
        <Button className="btn btn-light" id="addAnswer" type="submit"  onClick={props.addChild}>+ </Button>
        <div id="children-pane">
            {props.children}
        </div>
    </div>
);

const ChildComponent = props => <div className="form-check-inline pt-1">
    <Label className="pr-2">{props.number + 1}: </Label>
    <Input type="text" id="title" className="form-control" data-hj-allow
           required> </Input>
</div>

class Create extends Component {
    state = {
        numChildren: 1
    }

    onAddChild = () => {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    }

    render () {
        const children = [];

        for (let i = 0; i < this.state.numChildren; i += 1) {
            children.push(<ChildComponent key={i} number={i} />);
        }

        return (
            <div>
                     <Navbar/>
                     <div className="container">

                         <div className="justify-content-center">

                             <h2 className="pt-5"> Create a quiz</h2>

                             <div className="pt-4 pb-2 form-check-inline" id="Title">
                                 <Label className="pr-2 titleLabel">Title: </Label>
                                 <Input type="text" id="title" className="form-control" data-hj-allow
                                       required autoFocus> </Input>
                            </div>

                            <div className="card card-container pt-5">

                                <div className="form-check-inline">
                                    <Label className="pr-2">Question: </Label>
                                    <Input type="text" id="title" className="form-control" data-hj-allow
                                           required autoFocus> </Input>
                                </div>

                                <Label className="pt-1">Answers</Label>

                                {children}

                                <ParentComponent addChild={this.onAddChild}></ParentComponent>

                            </div>
                        </div>
                    </div>

                    <div>
                        <Button className="btn btn-light" id="addQuestion" type="submit">Add new question </Button>
                    </div>

                </div>
        );
    }
}



export default Create;

// <div>
//     <Navbar/>
//
//     <div className="container">
//
//         <div className="justify-content-center">
//
//             <h2 className="pt-5"> Create a quiz</h2>
//
//             <div className="pt-4 pb-2 form-check-inline" id="Title">
//                 <Label className="pr-2 titleLabel">Title: </Label>
//                 <Input type="text" id="title" className="form-control" data-hj-allow
//                        required autoFocus> </Input>
//             </div>
//
//             <div className="card card-container pt-5">
//
//                 <div className="form-check-inline">
//                     <Label className="pr-2">Question: </Label>
//                     <Input type="text" id="title" className="form-control" data-hj-allow
//                            required autoFocus> </Input>
//                 </div>
//
//                 <Label className="pt-1">Answers</Label>
//
//                 <div className="form-check-inline pt-1">
//                     <Label className="pr-2">1: </Label>
//                     <Input type="text" id="title" className="form-control" data-hj-allow
//                            required> </Input>
//                 </div>
//
//                 <div className="pt-2">
//                     <Button className="btn btn-light" id="addAnswer" type="submit">+ </Button>
//                 </div>
//
//             </div>
//         </div>
//     </div>
//
//     <div>
//         <Button className="btn btn-light" id="addQuestion" type="submit">Add new question </Button>
//     </div>
//
// </div>
