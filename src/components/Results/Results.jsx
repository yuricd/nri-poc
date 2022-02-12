import { useContext, useEffect } from "react";
import { InterestsContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "../Wrapper/Wrapper";
import { Button } from "../Button/Button";
import reading from "../../assets/reading.png";
import superhero from "../../assets/superhero.png";
import { useLocation } from "react-router-dom";

import styles from "./Results.module.scss";

export const Results = () => {
  const { interests, results } = useContext(InterestsContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (interests.length < 1) {
      navigate("/");
    }
  }, []);

  const correctCount = results.filter(Boolean).length;
  const total = results.length;
  const satisfactory = correctCount / total === 1;

  if (interests.length > 0 && total > 0) {
    return (
      <Wrapper>
        <div className={styles.results}>
          {satisfactory ? (
            <>
              <h1>Congratulations! You nailed it!</h1>
              <img src={superhero} alt="Congratulations!" />
            </>
          ) : (
            <>
              <h1>You are almost there!</h1>
              <img src={reading} alt="Study more" />
            </>
          )}

          <h2>
            Your score was{" "}
            <span className={styles.highlight}>
              {correctCount}/{total}
            </span>
          </h2>
          {!satisfactory && (
            <p>Review the topics you did not get right and try again!</p>
          )}

          <div className={styles.bottom}>
            <Button type="link">Try again!</Button>
          </div>

          <a
            href="https://www.flaticon.com/free-stickers/superhero"
            title="superhero stickers"
            className={styles.credit}
            target="_blank"
            rel="noopener noreferrer"
          >
            Superhero stickers created by stickerfolio - Flaticon
          </a>
        </div>
      </Wrapper>
    );
  }

  return <></>;
};
