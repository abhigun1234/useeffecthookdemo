import React, { Component } from 'react';

class ClassCounterCondition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name:''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("updating")
        // document.title=`Clicked ${this.state.count}`
        if(prevState.count!=this.state.count){
        console.log("updating")
        document.title=`Clicked ${this.state.count}`
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
     document.title=`Clicked ${this.state.count}`
    }
 getNameChange=(e)=>{

    this.setState({name:e.target.value})
 }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={this.getNameChange}></input>
               <button onClick={()=>this.setState({count:this.state.count +1})}>counter</button>
               counter{this.state.count}
            </div>
        );
    }
}

export default ClassCounterCondition;