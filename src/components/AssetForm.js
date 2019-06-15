import React, { Component } from 'react';
import styles from '../index.css'

class AssetForm extends Component {

    render() {
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

                <input className={styles.submit}
                    value="Add Account"
                />
            </form>

        );
    }
}

export default AssetForm

