import React, { Component } from 'react';
 


export default class TaskForm extends Component {
    onCloseForm =()=>{
        this.props.onCloseForm()
    }

    constructor(props){
        super(props);
        this.state={
            name: '',
            status:false
        }
    }

    onChange=(event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name==="status"){
            value=target.value ==="true"? true: false;
        }
        this.setState({
            [name] : value
        });
    }

    onSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state);
        // Close form and clear form
        this.onClear();
        this.onCloseForm();
    }

    onClear=()=>{
        this.setState({
            name:'',
            status:false
        });
    }

    render() {
        return ( 
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">
                    Add tasks
                    <span className="glyphicon glyphicon-remove text-right"
                    onClick={this.onCloseForm}></span>
                    </h3> 
                </div> 
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                                <label >Name</label>
                                <input type="text" className="form-control" name="name" 
                                value={this.state.name} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label  >Status</label>
                            <select name="status"  className="form-control" value={this.state.status} onChange={this.onChange}  >
                                    <option value={true} >Available</option>
                                    <option value= {false} >Unavailable</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-danger btn-md"> <span className="glyphicon glyphicon-saved"></span>  Submit</button>
                        <button type="button" className="btn btn-success btn-md" onClick={this.onClear}> <span className="glyphicon glyphicon-trash"></span>  Cancel</button>
                    </form>
                </div>
            </div>
              
        );
    }


}