import React from "react";
import ReactDOM from "react-dom";
import ToggleComponent from "./ToggleComponent";
import PreviousValueComponent from "./PreviousValueComponent";

const App: React.FC = () => (
    <div>
        <ToggleComponent />
        <PreviousValueComponent />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
