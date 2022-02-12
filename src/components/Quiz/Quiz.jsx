import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InterestsContext } from "../../App";
import { PunctuationQuestion } from "../PunctuationQuestion/PunctuationQuestion";
import { Wrapper } from "../Wrapper/Wrapper";
import styles from "./Quiz.module.scss";

export const Quiz = () => {
  const { interests, results, setResults } = useContext(InterestsContext);
  const [current, setCurrent] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (interests.length < 1) {
      navigate("/");
    }
  }, []);

  const handleResult = (result) => {
    setResults((prev) => {
      return [...prev, result];
    });
    setCurrent((prev) => prev + 1);
  };

  const questions = useMemo(
    () => ({
      0: (
        <PunctuationQuestion
          key={1}
          interests={interests}
          onSubmit={handleResult}
        />
      ),
      1: (
        <PunctuationQuestion
          key={2}
          interests={interests}
          onSubmit={handleResult}
        />
      ),
    }),
    [interests]
  );

  const questionsLen = Object.values(questions).length;

  console.log({ current, questionsLen });

  if (current >= questionsLen) {
    navigate("/results");
  }

  if (interests.length > 0) {
    return (
      <Wrapper>
        <div className={styles.quiz}>
          Question {current + 1}/{questionsLen}
          <div className={styles.questionCounter}>
            {Array(questionsLen)
              .fill(0)
              .map((_, idx) => {
                console.log({ results });
                const _class = getQColor(idx);

                return (
                  <span className={_class} key={idx}>
                    {idx + 1}
                  </span>
                );
              })}
          </div>
          {questions[current]}
        </div>
      </Wrapper>
    );

    function getQColor(idx) {
      const colorMapper = {
        true: styles.correct,
        false: styles.wrong,
      };

      const result = String(results[idx]);
      return current === idx ? styles.current : colorMapper[result];
    }
  }

  return <></>;
};
