import React from 'react';
import {CSSTransition} from "react-transition-group";
import StyleMessage from '../../components/Message/Message.module.css'; 
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
//import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';
const Message=({ message }) =>{
  return (
  <CSSTransition classNames={StyleMessage}  in={message} appear  timeout={250} unmountOnExit>
      <div>
        <Alert color="warning">{message}</Alert>
      </div>
      
      {/* <Toast>
        <ToastHeader icon="warning">
        Внимание!
        </ToastHeader>
        <ToastBody>
           {message}
        </ToastBody>
      </Toast> */}
    </CSSTransition>  
  )
}
 
 Message.propTypes={
   message:PropTypes.string,
   };
 
 export default Message;