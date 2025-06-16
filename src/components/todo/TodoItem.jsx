import { useState } from 'react';
import style from './Todo.module.css';

export function TodoItem({ data, handleDeleteClick, handleTextUpdate }) {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(data.text);

    function handleInputChange(e) {
        setText(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        if (!text) {
            return;
        }

        setEditing(false);
        handleTextUpdate(data.id, text);
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
                <p className={style.p}>{data.text}</p>
                <div className={style.actions}>
                    <button onClick={handleEditClick} className={style.btn}>Edit</button>
                    <button onClick={() => handleDeleteClick(data.id)} className={style.btn}>Delete</button>
                </div>
            </li>
        );
    }
}