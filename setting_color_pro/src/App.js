import React, { Component } from 'react';
import './App.css';
import  ColorPicker from './components/ColorPicker';
import  SizeSetting from './components/SizeSetting';
import  Result from './components/Result';
import  Reset from './components/Reset';
class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          color: 'red',
          fontsize: 12,
      };
      // this.setState = this.setState.bind(this);
  };
  onSetColor = (params) => {
      this.setState({
          color: params,
      })
  };
  onChangeSize = (value) => {
      if (this.state.fontsize + value >= 8 && this.state.fontsize + value <= 36) {
          this.setState({
              fontsize: this.state.fontsize + value,
          });
      }
  };
  onSettingDefault = () => {
      this.setState({
          color: 'red',
          fontsize: 12,
      });
  };
  render() {
      return (
          <div className="container mt-50">
              <div className="row">
                  <ColorPicker color={this.state.color}  onReceiveColor={ this.onSetColor }/>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <SizeSetting fontSize={this.state.fontsize} onChangeSize={ this.onChangeSize }/>
                      <Reset onSettingDefault={this.onSettingDefault}/>
                  </div>
                  <Result color={ this.state.color } fontSize={this.state.fontsize}/>
              </div>
          </div>
      );
  }
}

export default App;
