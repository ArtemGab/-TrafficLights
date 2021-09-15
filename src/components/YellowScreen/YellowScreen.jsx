import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "../TrafficScreen.css";

function YellowScreen() {
  let [count, setCount] = useState(3);
  const direction = JSON.parse(window.localStorage.getItem("direction"));
  let history = useHistory();

  useEffect(() => {
    if (count) {
      setTimeout(() => {
        setCount((prev) => prev - 1);
      }, 1000);
    } else if (!count && direction) {
      window.localStorage.setItem("direction", JSON.stringify(false));
      history.push("/red");
    } else {
      window.localStorage.setItem("direction", JSON.stringify(true));
      history.push("/green");
    }
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <div className="traffic">
        <div className="redYellow flashlight"></div>
        <div className="yellow flashlight"></div>
        <div className="greenYellow flashlight"></div>
      </div>
    </>
  );
}

export default YellowScreen;
