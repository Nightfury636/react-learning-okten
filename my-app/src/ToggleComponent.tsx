import React from "react";
import useToggle from "./useToggle";

const ToggleComponent: React.FC = () => {
    const [isToggled, toggle] = useToggle();

    return (
        <div>
            <p>{isToggled ? "Включено" : "Выключено"}</p>
            <button onClick={toggle}>Переключить</button>
        </div>
    );
};

export default ToggleComponent;
