import React, { useState } from 'react';

export  function Questionfun() {
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

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div >
			{showScore ? (
				<div >
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div>
						<div>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div>{questions[currentQuestion].questionText}</div>
					</div>
					<div>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
