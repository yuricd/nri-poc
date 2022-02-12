import { useContext, useEffect } from "react";
import { InterestsContext } from "../../App";
import { useNavigate } from "react-router-dom";

export const Results = () => {
  const { interests } = useContext(InterestsContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (interests.length < 1) {
      navigate("/");
    }
  }, []);

  return <div>Results</div>;
};
