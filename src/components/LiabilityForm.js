import React, { Component } from 'react';

class LiabilityForm extends Component {

    render() {
        return(
            <form /*onSubmit={this.handleSubmit}*/>
                <input
                    type="text"
                    //ref={this.playerInput}
                    placeholder="Type Here To Add Liability Account"
                />
                <input
                    type="text"
                    //ref={this.playerInput}
                    placeholder="Type Here To Indicate Amount"
                />

                <input
                    type="submit"
                    value="Add Account"
                />
            </form>

        );
    }
}

export default LiabilityForm