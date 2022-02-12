import { useMemo, useState } from "react";
import { InterestUtils } from "../../utils/InterestUtils";
import { Button } from "../Button/Button";
import styles from "./PunctuationQuestion.module.scss";

export const PunctuationQuestion = ({ interests, onSubmit }) => {
  const utils = InterestUtils(interests);
  const interestAndName = useMemo(() => utils.pickInterestAndName(), []);
  const pickedName = interestAndName[1];
  const question = Question(pickedName);

  const [answer, setAnswer] = useState(question.sentence);
  const [isWrong, setIsWrong] = useState(false);

  return (
    <div>
      <p className={styles.statement}>{question.statement}</p>
      <textarea
        value={answer}
        rows={1}
        onChange={handleChange}
        className={isWrong ? styles.wrong : ""}
        disabled={isWrong}
      />

      {isWrong ? (
        <>
          <textarea
            value={question.correctAnswer}
            rows={1}
            className={styles.correct}
            disabled
          />
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 24 }}
          >
            <Button onClick={() => onSubmit(false)}>Continue</Button>
          </div>
        </>
      ) : (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 24 }}
        >
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      )}
    </div>
  );

  function handleChange(e) {
    setAnswer(e.target.value);
  }

  function handleSubmit() {
    if (question.checkIsCorrect(answer)) {
      onSubmit(true);
    } else {
      setIsWrong(true);
    }
  }
};

const Question = (themeName) => {
  const statement = "Fix any punctuation errors below.";
  const tail = `wants to go to the beach, but it is raining a lot.`;
  const sentence = `${themeName} `.concat(tail.replace(/[,.]/g, ""));
  const correctAnswer = `${themeName} ${tail}`;

  function checkIsCorrect(givenAnswer) {
    return givenAnswer.trim() === correctAnswer;
  }

  return { statement, sentence, checkIsCorrect, correctAnswer };
};
