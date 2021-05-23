import React, { Component } from 'react';


export default class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
        document.title=`Clicked ${this.state.count}`
    }

    componentDidMount() {
        console.log("componentDidMount")
     document.title=`Clicked ${this.state.count}`
    }

    render() {
        return (
            <div>
               <button onClick={()=>this.setState({count:this.state.count +1})}>counter</button>
               counter{this.state.count}
            </div>
        );
    }
}

