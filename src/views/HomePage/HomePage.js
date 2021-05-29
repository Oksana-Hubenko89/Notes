import React, {Component} from 'react'
import PageHeading from '../../components/PageHeading';
import TodoList from '../../components/TodoList';
import s from '../../components/TodoList/TodoList.module.css';
import TodoForm from '../../components/TodoForm';
import {CSSTransition} from "react-transition-group";
import stylesHomePage from "./HomePage.module.css";
import Filter from '../../components/Filter ';
import StyleFilter from '../../components/Filter /Filter.module.css';
import { connect } from "react-redux";

class HomePage extends Component {

  static defaultProps = {
    //   
  }
  static propTypes = {
   //
  }
  state = {
    error: false,
    message:'',
  };


   handleSubmit = () => {
         this.setState({error:true})
    };
  resetError=()=>{
    this.setState({error:false})
  };
  
  render() {
         //const filterResult = this.getchangeFilter();
         const { message, error} = this.state;
     
    return (
          <div >

        
          <CSSTransition classNames={stylesHomePage}  in={true} appear  timeout={500} unmountOnExit>
          <PageHeading text="Notes" />
          </CSSTransition>
          <TodoForm onSubmitTodo={()=>{this.handleSubmit(message)}} onResetError={()=>{this.resetError()}}/>
          <h2 className={s.contact}>Заметки</h2>
          <CSSTransition classNames={StyleFilter} in={this.props.todos.length >1}
            timeout={250} unmountOnExit > 
          <Filter /> 
          </CSSTransition> 
          <TodoList /> 

          </div>  
    ) 
  }
}
const mapStateToProps = (state) => ({
 todos: state.todos.items,
});

export default connect(mapStateToProps, null) (HomePage);

  