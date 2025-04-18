import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Greet name="Kasonkomona Mulenga" />
    </div>
  );
}

function Greet(props) {
  const [view, setView] = useState(true);
  return (
    <div>
      {view ? <p>Welcome {props.name} </p> : <></>}
      <button
        onClick={() => {
          setView(!view);
        }}
      >
        toggle setView
      </button>
    </div>
  );
}
