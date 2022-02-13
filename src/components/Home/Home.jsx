import { useContext } from "react";
import { InterestsContext } from "../../App";
import { ChooseInterest } from "../ChooseInterests/ChooseInterests";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";

export const Home = () => {
  const navigate = useNavigate();
  const { interests } = useContext(InterestsContext);

  return (
    <div className={styles.home}>
      <ChooseInterest />

      {interests.length > 0 && (
        <div className={styles.bottom}>
          <Button onClick={handleClick}>Start!</Button>
        </div>
      )}
    </div>
  );

  function handleClick() {
    navigate("/quiz");
  }
};
