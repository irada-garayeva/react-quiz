import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, answer, points, numQuestions, maxPossiblePoints } = useQuiz();
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numQuestions} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
