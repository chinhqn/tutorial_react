import React, { Component } from 'react';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: "",
            txtPass:  "",
            moTa: "",
            genDer: 1,
            rdLang: 'vi'
        }
    }
    onHandleChang = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value,
        })
    };
    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    };
render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Form</h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={ this.onHandleSubmit }>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="txtName"
                                        onChange={ this.onHandleChang }
                                        value={ this.state.txtName }
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="txtPass"
                                        onChange={ this.onHandleChang }
                                        value={this.state.txtPass}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mo ta</label>
                                    <textarea
                                        name="moTa" cols="60" rows="5"
                                        className="form-control"
                                        value={this.state.moTa}
                                        onChange={ this.onHandleChang }>
                                    </textarea>
                                </div>
                                <label>Gioi tinh</label>
                                <select name="genDer" className="form-control"
                                        value={this.state.genDer}
                                        onChange={ this.onHandleChang }>>
                                    <option value={0}>Nu</option>
                                    <option value={1}>Nam</option>
                                </select>
                                <br/>
                                <label>ngon ngu</label>
                                <div className="radio">
                                    <label>
                                        <input name="rdLang" type="radio" value="en"
                                            onChange={this.onHandleChang}
                                               checked={this.state.rdLang === "en"}
                                        />
                                        Tieng Anh
                                    </label>
                                    <br/>
                                    <label>
                                        <input name="rdLang" type="radio" value="vi" onChange={this.onHandleChang}
                                               checked={this.state.rdLang === "vi"/>
                                        Tieng Viet
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary">luu lai</button>
                                <button type="reset" className="btn btn-success">Xoa trang</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default App;
