import { useRef, useState } from 'react';
import style from './Todo.module.css';
import { randomNumber } from '../../lib/randomNumber';
import { TodoItem } from './TodoItem';

export function Todo() {
    const storageKey = '54gr_todo';

    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem(storageKey)) ?? []);
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

        localStorage.setItem(storageKey, JSON.stringify(todoList));
    }

    function handleDeleteClick(id) {
        setTodoList(list => list.filter(item => item.id !== id));
        localStorage.setItem(storageKey, JSON.stringify(todoList));
    }

    // reikia <li> iskelti i atskira faila/komponenta
    return (
        <div className={style.todo}>
            <form onSubmit={handleFormSubmit} className={style.form}>
                <input ref={inputRef} onChange={handleInputChange} value={text} className={style.input} type="text" />
                <button className={style.btn} type="submit">Create</button>
            </form>
            <ul className={style.ul}>
                {todoList.map(todo => <TodoItem key={todo.id} data={todo} handleDeleteClick={handleDeleteClick} />)}
            </ul>
        </div>
    );
}
