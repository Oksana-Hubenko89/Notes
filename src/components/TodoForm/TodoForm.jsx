import React, { Component } from 'react';
import Container from "../Container";
import b from "../Style/Button.module.css";
import s from "./TodoForm.module.css";
import { connect } from "react-redux";
import todosActions from '../redux/todos/todos-actions';
import q from '../TodoList/TodoList.module.css';
import Message from '../Message';
import PropTypes from 'prop-types';
import {Input,InputGroup, InputGroupAddon,Button} from 'reactstrap';

class TodoForm extends Component {
    
    static defaultProps = {
    //  
  }
  static propTypes = {
   todos:PropTypes.arrayOf(PropTypes.object),
   onSubmit:PropTypes.func,
  }

    state = {
        todo:'',
        message:null,
    }

errorMessage=(event)=>{
    this.setState({message:event});
    setTimeout(() => {
      this.setState({message:null})  
    }, 2500);
}

    handleInputChange = event => {
        this.setState({ todo: event.currentTarget.value });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();

        const {todo}=this.state;
        const {onSubmit, todos}=this.props;

        if (todo.trim() ===''){
            this.errorMessage('Введите заметку')
        return;
        }          
       
        if (todos.find( item => item.todo.toLowerCase() === todo.toLowerCase())){
           this.errorMessage('Заметка существует')
        return;  
        }
         onSubmit(todo);

         this.setState({
             todo:'',
        })
    };
    
    render(){ 
        const { todo, message } = this.state;
        return (
            
        <Container>
          <Message message={message}/>
             <form className={s.Form} onSubmit={this.handleSubmit}> 
                <InputGroup className={s.Form} onSubmit={this.handleSubmit}>
                <Input className={s.Input} value={todo} name="todo" placeholder='Новая заметка' onChange={this.handleInputChange}/>
                <InputGroupAddon addonType="append">
                <Button className={b.primary} type='submit' >Добавить</Button>
                </InputGroupAddon>
                </InputGroup>
             </form>
       </Container>
        )
    }      
};
 const mapStateToProps = (state) => ({
 todos: state.todos.items,
});
const mapDispatchToProps = dispatch => ({

    onSubmit:  todo => dispatch(todosActions.addTodo (todo)),
})

export default connect( mapStateToProps,mapDispatchToProps)(TodoForm);
