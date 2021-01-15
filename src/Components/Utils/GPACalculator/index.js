import React, { Component } from 'react';
import Header from '../../Layout/Header';
import Entry from './modules/Entry';
import View from './modules/View';
import './index.css';

class GPACalculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            marks: [],
            gpa: 0,
            grade: '',
            case: ''
        };

        this.subject = React.createRef();
        this.mark = React.createRef();
        this.score = React.createRef();
    }

    handleAdd() {
        let mark = {
            subject: this.subject.current.value,
            mark: parseFloat(this.mark.current.value),
            score: parseFloat(this.score.current.value)
        };

        let joined = this.state.marks.concat(mark);
        this.setState({ marks: joined });
    };

    getGrade() {
        let result = 0;
        let score = 0;
        if (this.state.marks.length > 0) {
            this.state.marks.map((item) => (
                // eslint-disable-next-line
                result += item.mark * item.score,
                score += item.score
            ))
            result /= score;
        }
        return result.toFixed(2);
    };

    getGpa() {
        let grade = this.getGrade();
        let gpa = '';
        if (grade > 0) {
            if (grade >= 80) {
                gpa = 'A+';
            } else {
                gpa = 'N/A';
            }
        }

        return gpa;
    };
    getCase() {
        let grade = this.getGrade();
        let gpa = '';
        if (grade > 0) {
            if (grade >= 80) {
                gpa = 'A+';
            } else {
                gpa = 'N/A';
            }
        }
        return gpa;
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.marks !== this.state.marks) {
            this.setState({
                grade: this.getGrade(),
                gpa: this.getGpa(),
                case: this.getCase()
            });
        }
    }

    render() {
        return (
            <div>
                <Header appTitle="GPA计算器" />
                <div className="container">
                    <div className="row">
                        <Entry
                            subjectRef={this.subject}
                            markRef={this.mark}
                            scorRef={this.score}
                            onClick={this.handleAdd.bind(this)} />
                        <View
                            marks={this.state.marks}
                            gpa={this.state.gpa}
                            grade={this.state.grade}
                            case={this.state.case}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default GPACalculator;