import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import "../TrafficScreen.css";

function RedScreen() {
  let [count, setCount] = useState(10);
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
        <div className="red flashlight"></div>
        <div className="yellowRed flashlight"></div>
        <div className="greenRed flashlight"></div>
      </div>
    </>
  );
}

export default RedScreen;
