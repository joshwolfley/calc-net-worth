import React, { Component } from 'react';
import styles from '../index.css'
import {connect} from 'react-redux'
import {addAsset} from '../actions/asset'

class AssetForm extends Component {

    render() {
        const {addAsset} = this.props;
        
        return(
            <form /*onSubmit={this.handleSubmit}*/>
                <input className= {styles.text}
                    //ref={this.playerInput}
                    placeholder="Type Here To Add Asset Account"
                />
                <input className={styles.text}
                    //ref={this.playerInput}
                    placeholder="Type Here To Indicate Amount"
                />

                < button className={styles.submit} onClick={ () => addAsset("acc_name", 987)}>
                    Add Account
                </button>

            </form>
        );
    }
}

function mapStateToProps(state) {

}

function mapDispatchToProps(dispatch) {
    return {
        addAsset: (name, amount) => dispatch(addAsset(name, amount)) // firing off an action
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AssetForm)

