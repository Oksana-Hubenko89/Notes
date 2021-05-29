import React from 'react';
import s from "./TodoList.module.css";
import b from '../Button/Button.module.css';
import Container from "../Container";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import todosActions from '../redux/todos/todos-actions'


//import Button from '../Button';

const TodoList = ({todos, onDelete}) =>(

    
    <Container>
   
                  <TransitionGroup component="ul" className={s.List} >
              
            {todos.map(({ id, todo,completed, onToggleCompleted }) =>
                <CSSTransition key={id} classNames={s} timeout={250}>
                <li className={s.contact} key={id} >
                  <input type="checkbox"
                    className="TodoList_checkbox"
                    checked={completed}
                    onChange={onToggleCompleted}
                    />
                  <span>{todo} </span>
                  <button className={b.Button} type="button" onClick={() => onDelete(id)} >Delete</button>
                </li>
                 </CSSTransition>
            )}           
           
            </TransitionGroup>
          
             
  </Container>);

    
const  getchangeFilter = ( allTodos, filter) => {
 
const normalizedFilter = filter.toLowerCase();

return allTodos.filter(({ todo }) =>
  todo.toLowerCase().includes(normalizedFilter),  
)};
 
const mapStateToProps = ({todos:{items,filter}}) => ({
 todos: getchangeFilter(items,filter),
 
});

const mapDispatchToProps = dispatch => ({
  onDelete: id =>dispatch(todosActions.deleteTodo(id)),
});



export default connect(mapStateToProps, mapDispatchToProps)(TodoList); 



