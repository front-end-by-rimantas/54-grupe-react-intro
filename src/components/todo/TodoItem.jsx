import { useState } from 'react';
import style from './Todo.module.css';

export function TodoItem({ data, handleDeleteClick }) {
    const [editing, setEditing] = useState(false);
    const [savedText, setSavedText] = useState(data.text);
    const [text, setText] = useState(data.text);

    function handleInputChange(e) {
        setText(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        if (!text) {
            return;
        }

        setSavedText(text);
        setEditing(false);
    }

    function handleEditClick() {
        setEditing(true);
    }

    function handleCancelClick() {
        setEditing(false);
    }

    if (editing) {
        return (
            <li key={data.id} className={style.li}>
                <form onSubmit={handleFormSubmit} className={style.form}>
                    <input onChange={handleInputChange} value={text} className={style.input} type="text" />
                    <button className={style.btn} type="submit">Save</button>
                    <button onClick={handleCancelClick} className={style.btn} type="button">Cancel</button>
                </form>
            </li>
        );
    } else {
        return (
            <li key={data.id} className={style.li}>
                <p className={style.p}>{savedText}</p>
                <div className={style.actions}>
                    <button onClick={handleEditClick} className={style.btn}>Edit</button>
                    <button onClick={() => handleDeleteClick(data.id)} className={style.btn}>Delete</button>
                </div>
            </li>
        );
    }
}