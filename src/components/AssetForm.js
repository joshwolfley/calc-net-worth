import React, { Component } from 'react';
import styles from '../index.css'
import {connect} from 'react-redux'
import {addAsset} from '../actions/asset'

class AssetForm extends Component {

    state = {
        assetName: '',
        assetAmount: '',
    };


    onChange = event => {
        const {target} = event;
        const {name, value} = target;
        this.setState({
                [name]: value
            });
    };

    onSubmit = () => {
        const {addAsset} = this.props;
        const {assetName,
            assetAmount
        } = this.state;

        addAsset(assetName, assetAmount);

        this.setState({
            assetName: '',
            assetAmount: '',
        })

    };

    render() {

        const{assetName,
            assetAmount
        } = this.state;

        return(
            <div className={styles.form}>
                <input
                    className= {styles.text}
                    placeholder="Type Here To Add Asset Account"
                    value={assetName}
                    onChange={ this.onChange }
                    name='assetName'
                />
                <input
                    className={styles.text}
                    placeholder="Type Here To Indicate Amount"
                    value={assetAmount}
                    onChange={ this.onChange }
                    name='assetAmount'

                />

                < button
                    className={styles.submit}
                    onClick={ this.onSubmit }>
                    Add Asset
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        assets: state.assets
    }


}

function mapDispatchToProps(dispatch) {
    return {
        addAsset: (name, amount) => dispatch(addAsset(name, amount)) // firing off an action
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AssetForm)

