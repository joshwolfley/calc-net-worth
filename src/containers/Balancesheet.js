import React, { Component, PropTypes } from 'react';
import Asset from '../components/Asset'
import Liability from '../components/Liability'
import styles from '../index.css'

class Balancesheet extends Component {

    state = {
        view: true
    };

    // finish = () => {
    //     this.setState({
    //         view: false,
    //     });
    // };
    //
    // edit = () => {
    //     this.setState({
    //         view: true,
    //     });
    // };

    render() {
        return (
            <div className="balancesheet">
                <h1 className = { styles.title }> My Personal Net Worth Calculator </h1>

                <Asset />
                <Liability />

                <form /*onSubmit={this.handleSubmit}*/>
                    { this.state.view ?
                        <input onClick={this.finish}
                            type="submit"
                            value="Finish"
                        />
                        :
                        <input
                            type="submit"
                            value='Back to Editing'
                        />
                    }
                </form>
            </div>
            );

    };
}

export default Balancesheet;
