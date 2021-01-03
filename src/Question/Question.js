import React from 'react';
import {Link} from 'react-router-dom'

const questions = [
	{
		questionText: 'What is the capital of India?',
		answerOptions: [
			{ answerText: 'calcutta', isCorrect: false },
			{ answerText: 'kerala', isCorrect: false },
			{ answerText: 'Delhi', isCorrect: true },
			{ answerText: 'tamilnamdu', isCorrect: false },
		],
	},
	{
		questionText: 'What is the next Letter of C?',
		answerOptions: [
			{ answerText: 'A', isCorrect: false },
			{ answerText: 'D', isCorrect: true },
			{ answerText: 'F', isCorrect: false },
			{ answerText: 'Z', isCorrect: false },
		],
	},
	{
		questionText: 'Tmr is Monday ,yesterday is ?',
		answerOptions: [
			{ answerText: 'Saturday', isCorrect: true },
			{ answerText: 'Sunday', isCorrect: false },
			{ answerText: 'Tuesday', isCorrect: false },
			{ answerText: 'Thursday', isCorrect: false },
		],
	},
	{
		questionText: 'Shimla hill station is located in?',
		answerOptions: [
			{ answerText: 'Siwalk range', isCorrect: false },
			{ answerText: 'The Great Himalaya Range', isCorrect: false },
			{ answerText: 'Trans Himalays', isCorrect: false },
			{ answerText: 'Himachal Himalaya', isCorrect: true },
		],
	},
];

export class Question extends React.Component{

    constructor (props){

		super(props)

		this.state = {
			 currentQuestion: 0,
             showScore : false,
             score: 0,

		}

	}

	handleAnswerOptionClick = (isCorrect) => {

		
		if (isCorrect) {
			console.log(isCorrect);
			this.setState({
				score : this.state.score + 1,
			})
		}

		const nextQuestion = this.state.currentQuestion + 1;
        console.log(nextQuestion);
		if (nextQuestion < questions.length) {
			this.setState({
				currentQuestion : nextQuestion
			})
			
		} else {
			this.setState({
		
				showScore:true
			})
			
		}
	};
   render(){
   	console.log(this.state.currentQuestion);
   	console.log(this.state.score);
		return (
			<div >
				{this.state.showScore ? (
					<div className='score-section'>
						You scored {this.state.score} out of {questions.length}
						<br>
						</br>

						<Link to="/">Country Link</Link>
					</div>
				) : (
					<>
						<div>
							<div>
								<span>Question {this.state.currentQuestion + 1}</span>/{questions.length}
							</div>
							<div>{questions[this.state.currentQuestion].questionText}</div>
						</div>
						<div>
							{questions[this.state.currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => this.handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
			</div>
		);
    }
}
