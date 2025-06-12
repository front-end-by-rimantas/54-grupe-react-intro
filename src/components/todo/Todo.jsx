import { useRef, useState } from 'react';
import style from './Todo.module.css';
import { randomNumber } from '../../lib/randomNumber';

export function Todo() {
    const [todoList, setTodoList] = useState([]);
    const [text, setText] = useState('');
    const inputRef = useRef();

    function handleInputChange(e) {
        setText(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        if (!text) {
            return;
        }

        setTodoList(list => [{ id: randomNumber(1, 1e6), text }, ...list]);
        setText(() => '');
        inputRef.current.focus();
    }

    function handleDeleteClick(id) {
        setTodoList(list => list.filter(item => item.id !== id));
    }

    // reikia <li> iskelti i atskira faila/komponenta
    return (
        <div className={style.todo}>
            <form onSubmit={handleFormSubmit} className={style.form}>
                <input ref={inputRef} onChange={handleInputChange} value={text} className={style.input} type="text" />
                <button className={style.btn} type="submit">Create</button>
            </form>
            <ul className={style.ul}>
                {todoList.map(todo => (
                    <li key={todo.id} className={style.li}>
                        <p className={style.p}>{todo.text}</p>
                        <div className={style.actions}>
                            <button onClick={() => handleDeleteClick(todo.id)} className={style.btn}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
