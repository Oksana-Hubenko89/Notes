import React from 'react';
import s from "./TodoList.module.css";
import Container from "../Container";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import todosActions from '../redux/todos/todos-actions'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const TodoList = ({todos, onDelete}) =>(
    
    <Container>
    <TransitionGroup component="ul" className={s.note} >
    
  {todos.map(({ id, todo}) =>
      <CSSTransition key={id} classNames={s} timeout={250}>
      <li className={s.List} key={id} >
        <InputGroup>
          <InputGroupAddon addonType="prepend"  >
          <InputGroupText >
            <Input addon color='info' type="checkbox" aria-label="Checkbox delete note" onClick={() => onDelete(id)} />
           </InputGroupText>
          </InputGroupAddon>
           <Input className={s.note} placeholder= {todo}/>
        </InputGroup>
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



