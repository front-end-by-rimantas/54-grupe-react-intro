import { useState } from 'react';
import style from './TextList.module.css';
import { randomText } from '../../lib/randomText';
import { randomNumber } from '../../lib/randomNumber';

export function TextList() {
    const [texts, setTexts] = useState([]);

    function handleAddClick() {
        const newText = randomText(randomNumber(1, 20));
        setTexts(list => [...list, newText]);
    }

    return (
        <div className={style.textList}>
            <div className={style.header}>
                <p className={style.p}>Tekstai ({texts.length})</p>
                <button className={style.btn} onClick={handleAddClick}>+</button>
            </div>
            <ul className={style.content}>
                {texts.map(text => <li key={text} className={style.item}>{text}</li>)}
            </ul>
        </div>
    );
}
