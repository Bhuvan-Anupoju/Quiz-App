function Results({ questionBank, userAnswers, restartQuiz }) {
  function getscore() {
    let finalscore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questionBank[index].answer) {
        finalscore++;
      }
    });
    return finalscore;
  }
  const score = getscore();
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>
        Your Score:{score}/{questionBank.length}
      </p>
      <button className="restart-button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}
export default Results;
