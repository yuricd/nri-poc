import { useContext } from "react";
import { ThemeCard } from "../ThemeCard/ThemeCard";
import { Wrapper } from "../Wrapper/Wrapper";
import { InterestsContext } from "../../App";
import { themes } from "../../themes/themes";
import styles from "./ChooseInterests.module.scss";

export const ChooseInterest = () => {
  const { interests, setInterests } = useContext(InterestsContext);

  return (
    <Wrapper>
      <h1>
        What are your <span className={styles.highlight}>interests</span>?
      </h1>

      <div className={styles.cardsContainer}>
        {Object.entries(themes).map(([key, values]) => {
          const { title, image } = values;

          return (
            <ThemeCard
              key={key}
              title={title}
              image={image}
              selected={interests.includes(key)}
              onClick={() => handleClick(key)}
            />
          );
        })}
      </div>
    </Wrapper>
  );

  function handleClick(val) {
    if (interests.includes(val)) {
      setInterests((prev) => prev.filter((item) => item !== val));
    } else {
      setInterests((prev) => [...prev, val]);
    }
  }
};
