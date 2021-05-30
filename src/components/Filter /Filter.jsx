import React from 'react';
import Container from "../Container";
import { connect } from "react-redux";
import todosActions from '../redux/todos/todos-actions'
import s from "../TodoForm/TodoForm.module.css";
import q from '../TodoList/TodoList.module.css';

const Filter = ({ value, onChange }) => 
<Container>
    <label className={q.note}>
        Найти  <br/>
        <input className={s.Input} value={value} type="text" onChange={onChange} />
    </label>
</Container>;

const mapStateToProps = state => ({
    value: state.todos.filter,
})
const mapDispatchToProps =dispatch=> ({
onChange: event=>dispatch(todosActions.changeFilter(event.target.value))
})

export default connect(mapStateToProps,mapDispatchToProps)(Filter);