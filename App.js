import { useState } from "react";
function App() {
  const questions = [
    {
      quesionText:
        "which is the javascript framework used to create single page application ?",
      answerOption: [
        { answerText: "NODE JS", isCorrect: false },
        { answerText: "React JS", isCorrect: true },
        { answerText: "Express JS", isCorrect: false },
        { answerText: "Mongo DB", isCorrect: false },
      ],
    },
    {
      quesionText: "which among these is the wen framework of the Node js ?",
      answerOption: [
        { answerText: "React js", isCorrect: false },
        { answerText: "mongo DB", isCorrect: false },
        { answerText: "Angular js", isCorrect: false },
        { answerText: "Express js", isCorrect: true },
      ],
    },
    {
      quesionText: "React js Developed by ?",
      answerOption: [
        { answerText: "Instagram", isCorrect: false },
        { answerText: "facebook", isCorrect: true },
        { answerText: "twitter", isCorrect: false },
        { answerText: "whatsap", isCorrect: false },
      ],
    },
    {
      quesionText: "What is React js ?",
      answerOption: [
        { answerText: "server-side-framework", isCorrect: false },
        { answerText: "user-interface framework", isCorrect: true },
        { answerText: "i/o", isCorrect: false },
        { answerText: "vurtual dom", isCorrect: false },
      ],
    },
    {
      quesionText: "Who created React.js ?",
      answerOption: [
        { answerText: "jordan mike", isCorrect: false },
        { answerText: "jordan walke", isCorrect: true },
        { answerText: "tim lee", isCorrect: false },
        { answerText: "jordan lee", isCorrect: false },
      ],
    },
    {
      quesionText: "in which language is react.js written ?",
      answerOption: [
        { answerText: "Python", isCorrect: false },
        { answerText: "Javascript", isCorrect: true },
        { answerText: "Java", isCorrect: false },
        { answerText: "PHP", isCorrect: false },
      ],
    },
    {
      quesionText: "identify the command used to create a react app",
      answerOption: [
        { answerText: "npm-install create-react-app", isCorrect: false },
        { answerText: "npm-install-g create-react-app", isCorrect: true },
        { answerText: "install-g create-react-app", isCorrect: false },
        { answerText: "none of the above", isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handle = (isCorrect) => {
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
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <span>Question {currentQuestion + 1}</span> / {questions.length}
          </div>
          <div>{questions[currentQuestion].quesionText}</div>
          <div className="answer-section">
            {questions[currentQuestion].answerOption.map((answerOption) => (
              <button onClick={() => handle(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default App;
