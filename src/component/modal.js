import React, { useState, useEffect } from "react";
import {Modal , Button} from "react-bootstrap"
import {connect} from "react-redux";



class ModalNew extends React.Component {
  state = {
    firstName:this.props.firstName,
    lastName:this.props.lastName,
    email:this.props.email,
    itemIndex:this.props.itemIndex
  };

  handleClose = ()=>{
    this.props.switchShow(false)
  }

  onChangeHandler = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleChange = ()=>{
    this.props.dispatch({
      type:"changeItem",
      payload:this.state
    })
    this.props.switchShow(false)

  }
  

  render() {
    return (
      <div>
       
        <Modal show={this.props.modal} onHide={() => this.handleClose()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" name="firstName" value={this.state.firstName} onChange={(e)=>this.onChangeHandler(e)}/><br></br>
            <input type="text" name="lastName" value={this.state.lastName} onChange={(e)=>this.onChangeHandler(e)}/><br></br>
            <input type="text" name="email" value={this.state.email } onChange={(e)=>this.onChangeHandler(e)}/><br></br>
        

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleClose()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.handleChange()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        ); 
      </div>
    );
  }
}

let mapStateToProps =(state)=>{
 
return{
  list:state.list,

}
}


export default connect (mapStateToProps) (ModalNew);