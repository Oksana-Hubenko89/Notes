import React, {Component} from 'react'
import PageHeading from '../../components/PageHeading';
import TodoList from '../../components/TodoList';
import { CSSTransition } from "react-transition-group";
import stylesHomePage from "./HomePage.module.css";
import Filter from '../../components/Filter ';
import StyleFilter from '../../components/Filter /Filter.module.css';
import { connect } from "react-redux";
import container from '../../components/Container/Container.module.css'
import TodoForm from '../../components/TodoForm';
import s from "../../components/TodoForm/TodoForm.module.css";

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
         const { message } = this.state;
     
    return (
          <div >
          <CSSTransition classNames={stylesHomePage}  in={true} appear  timeout={500} unmountOnExit>
          <PageHeading text="Notes" />
        </CSSTransition>
         <div className={container.container_center}>
          <TodoForm onSubmitTodo={()=>{this.handleSubmit(message)}} onResetError={()=>{this.resetError()}}/>
          <h5 className={s.note}>Заметки</h5> 
          <CSSTransition classNames={StyleFilter} in={this.props.todos.length >1}
            timeout={250} unmountOnExit > 
          <Filter /> 
          </CSSTransition> 
          <TodoList /> 
        </div>
          </div>  
    ) 
  }
}
const mapStateToProps = (state) => ({
 todos: state.todos.items,
});

export default connect(mapStateToProps, null) (HomePage);

  