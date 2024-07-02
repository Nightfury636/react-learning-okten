import React, { useState } from "react";
import usePrevious from "./usePrevious";

const PreviousValueComponent: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const prevCount = usePrevious(count);

    return (
        <div>
            <p>Текущее значение: {count}</p>
            <p>Предыдущее значение: {prevCount}</p>
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
        </div>
    );
};

export default PreviousValueComponent;
