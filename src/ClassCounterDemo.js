import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassCounterDemo extends Component {
    constructor(props) {
        super(props);
         this.state={count:0}
         this.addCounter=this.addCounter.bind(this)

    }


    componentDidMount() {
     console.log('componentDidMount')
     document.title=`Clicked ${this.state.count}`
    }


    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
        document.title=`Clicked ${this.state.count}`
    }
  addCounter(){
      this.setState({count:this.state.count +1})
  }

    render() {
        return (
            <div>
              <button onClick={this.addCounter}>Incremeent</button>
                {this.state.count}
            </div>
        );
    }
}



export default ClassCounterDemo;