import React, { Component } from 'react';
class Reset extends Component {
    onReset = () => {
        // console.log('asvs');
        this.props.onSettingDefault();
    };
    render() {
        return (
            <button type="button" className="btn btn-success" onClick={this.onReset}>reset</button>
        );
    }
}

export default Reset;
