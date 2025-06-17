import { useState } from 'react';
import style from './PlusMinus.module.css';

export function PlusMinus() {
    const [count, setCount] = useState(0);

    function handleMinusClick() {
        setCount(n => n - 1);
    }

    function handlePlusClick() {
        setCount(n => n + 1);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={style.plusMinus}>
                        <button onClick={handleMinusClick} className={style.btn}>-</button>
                        <span className={style.count}>{count}</span>
                        <button onClick={handlePlusClick} className={style.btn}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}