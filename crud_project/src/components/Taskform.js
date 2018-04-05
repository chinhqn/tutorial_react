import React, { Component } from 'react';
class Taskform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: true
        }
    }
    onCloseForm = () => {
        this.props.onCloseForm();
    };
    onHanleChang = (event) => {
        // console.log(event.target.name)
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if  (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name] : value
        })
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onResubmit(this.state);
        this.onClear();
        this.onCloseForm();
    };
    onClear = () => {
        this.setState({
            name: '',
            status: false
        })
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title"> Thêm Công Việc</h3>
                    <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}></span>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group" >
                            <label>Tên :</label>
                            <input type="text"
                                   className="form-control"
                                   name="name"
                                   value={this.state.name}
                                   onChange={this.onHanleChang}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select className="form-control" required="required" name="status" value={this.state.status} onChange={this.onHanleChang}>
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.onClear}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Taskform;
