import { useMemo, useState } from "react";
import { InterestUtils } from "../../utils/InterestUtils";
import { Button } from "../Button/Button";
import { isEqual } from "lodash";
import styles from "./ClickQuestion.module.scss";
import { clickQuestions } from "./questions";

export const ClickQuestion = ({ interests, type, onSubmit }) => {
  const utils = InterestUtils(interests);
  const interestAndName = useMemo(() => utils.pickInterestAndName(), []);
  const pickedName = interestAndName[1];

  const { sentenceTail, correctAnswer } = pickQuestion(type);

  const question = Question(pickedName, type, sentenceTail, correctAnswer);

  const [answer, setAnswer] = useState([]);
  const [isWrong, setIsWrong] = useState(false);

  return (
    <div>
      <p className={styles.statement}>{question.statement}</p>

      <div className={styles.selectBox}>
        {question.sentence.split(" ").map((w, idx) => (
          <button
            key={idx}
            className={[
              styles.clickable,
              answer.includes(w) && styles.selected,
              isWrong && answer.includes(w) && styles.isWrong,
            ].join(" ")}
            onClick={() => handleClickWord(w)}
          >
            {w}
          </button>
        ))}
      </div>

      {isWrong ? (
        <>
          <textarea
            value={`${question.correctAnswer.join(", ")}`}
            rows={1}
            className={styles.correct}
            disabled
          />
          <div className={styles.bottom}>
            <Button onClick={() => onSubmit(false)}>Continue</Button>
          </div>
        </>
      ) : (
        <div className={styles.bottom}>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      )}
    </div>
  );

  function handleClickWord(word) {
    if (answer.includes(word)) {
      setAnswer((prev) => prev.filter((w) => w !== word));
    } else {
      setAnswer((prev) => [...prev, word]);
    }
  }

  function handleSubmit() {
    if (question.checkIsCorrect(answer)) {
      onSubmit(true);
    } else {
      setIsWrong(true);
    }
  }

  function pickQuestion(type) {
    const len = Object.keys(clickQuestions).length;
    const rand = Math.floor(Math.random() * len);
    return clickQuestions[type][rand];
  }
};

const Question = (themeName, type, sentenceTail, correctList) => {
  const statement = `Click in all ${type} in the sentence below.`;
  const tail = sentenceTail;
  const sentence = `${themeName} ${tail}`;
  const correctAnswer = correctList;

  function checkIsCorrect(givenAnswer) {
    return isEqual(givenAnswer, correctAnswer);
  }

  return { statement, sentence, checkIsCorrect, correctAnswer };
};
