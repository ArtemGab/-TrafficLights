import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "../TrafficScreen.css";

function GreenScreen() {
  let [count, setCount] = useState(15);
  let history = useHistory();

  useEffect(() => {
    count
      ? setTimeout(() => {
          setCount((prev) => prev - 1);
        }, 1000)
      : history.push("/yellow");
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <div className="traffic">
        <div className="redGreen flashlight"></div>
        <div className="yellowGreen flashlight"></div>
        <div className="green flashlight"></div>
      </div>
    </>
  );
}

export default GreenScreen;
