import React, { Component } from 'react';
import './counter.css'
class Counter extends Component {
    state = {
        count: 0,
        // tags: ['tag1', 'tag2', 'tag3']
    }
    IncrementHandle = product => {
        console.log(product)
        console.log('Increment clicked', this.count)
        this.setState({ count: this.state.count + 1 })
    }
    // Incrementdecrease(){
    //     this.setStaten
    // }
    render() {
        return (
            <center>
                <div className='all'  style={{ paddingTop: 250 }} >
                    <span style={{ fontSize: 30 , backgroundColor: 'yellow'}} className="" >{this.formatcount()} </span>
                    <button onClick={this.IncrementHandle} style={{ fontSize: 18 }} className="btn btn-primary" >add num</button>
                    {/* list of render */}
                    {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
                </div >
            </center>
            
        );
    }
    // newMethod() {
    //     let classes = "m-2";
    //     classes += this.state.count === 0 ? "m-4" : "m-6";
    // }
    formatcount() {
        const { count } = this.state;
        return count === 0 ? 'zero' : count;
    }
}

export default Counter;
