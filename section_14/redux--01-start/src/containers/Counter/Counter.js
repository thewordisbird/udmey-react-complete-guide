import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions'
class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.rslts.map((rslt) => (
                        <li key={rslt.id} onClick={() => this.props.onDeleteResult(rslt.id)}>{rslt.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        rslts: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
            onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
            onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
            onAddCounter: (amt) => dispatch({type: actionTypes.ADD, value: amt}),
            onSubtractCounter: (amt) => dispatch({type: actionTypes.SUBTRACT, value: amt}),
            onStoreResult: (res) => dispatch({type: actionTypes.STORE_RESULT, result: res}),
            onDeleteResult: (id)=> dispatch({type: actionTypes.DELETE_RESULT, id: id})

        }
    }


// Connect allows the store data to be passed to the specific containers, and what actions to dispatch to them.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);