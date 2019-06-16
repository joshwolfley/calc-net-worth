import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addLiability} from '../actions/liability'
import styles from '../index.css'

class LiabilityForm extends Component {

    state = {
        liabilityName: '',
        liabilityAmount: '',
    };

    onChange = event => {
        const {target} = event;
        const {name, value} = target;
        this.setState({
            [name]: value
        })
    };

    onSubmit = () => {
        const {addLiability} = this.props;
        const {
            liabilityName,
            liabilityAmount
        } = this.state;

        addLiability(liabilityName, liabilityAmount);

        this.setState({
            liabilityName: '',
            liabilityAmount: '',
        })
    };

    render() {

        const{liabilityName,
            liabilityAmount
        } = this.state;

        return(
            <div className={styles.form}>
                <input
                    className={styles.text}
                    placeholder="Type Here To Add Liability Account"
                    value={liabilityName}
                    onChange={ this.onChange }
                    name='liabilityName'
                />
                <input
                    className={styles.text}
                    placeholder="Type Here To Indicate Amount"
                    value={liabilityAmount}
                    onChange={ this.onChange }
                    name={'liabilityAmount'}
                />

                < button
                    className={styles.submit}
                    onClick={ this.onSubmit }>
                    Add Liability
                </button>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        liabilities: state.liabilities
    }


}

function mapDispatchToProps(dispatch) {
    return {
        addLiability: (name, amount) => dispatch(addLiability(name, amount)) // firing off an action
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(LiabilityForm)