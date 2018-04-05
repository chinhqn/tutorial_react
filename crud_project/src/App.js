import React, { Component } from 'react';
import './App.css';
import Taskform from "./components/Taskform";
import Control from "./components/Control";
import Tasklist from "./components/Tasklist";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false,
        };
    };
    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks,
            })
        }

    };
    // onGenerate = () => {
    //     var tasks = [
    //         {
    //             id: this.generateID(),
    //             name: 'Hoc React',
    //             status: true
    //         },
    //         {
    //             id: this.generateID(),
    //             name: 'Hoc React2',
    //             status: true
    //         },
    //         {
    //             id: this.generateID(),
    //             name: 'Hoc React3',
    //             status: true
    //         }
    //     ];
    //     this.setState({
    //         tasks : tasks
    //     });
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // };
    s4() {
        return Math.floor((1+Math.random()) * 0x10000).toString(20).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }
    chang = () => {
        this.setState({
            isDisplayForm : !this.isDisplayForm
        });
    };
    onCloseForm = () => {
        this.setState({
            isDisplayForm:false
        })
    };
    onResubmit = (data) => {
        var { tasks } = this.state;
        data.id = this.generateID();
        tasks.push(data);
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));

    };
    onUpdateStatus = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks : tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    };
    findIndex = (id) => {
        var { tasks } = this.state;
        var result = -1;
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }
        });
        return result;
    };
    onDelete = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks : tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.onCloseForm();
    };
    render() {
        var {tasks, isDisplayForm} = this.state;// var tasks = this.state.tasks
        var elmTaskForm = isDisplayForm ?  <Taskform onCloseForm={this.onCloseForm} onResubmit={this.onResubmit} /> : '';
        var changColLg = isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12';
        var changColSm = isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={changColSm}>
                        {elmTaskForm}
                    </div>
                    <div className={changColLg}>
                        <button type="button" className="btn btn-primary" onClick={this.chang}>
                            <span className="fa fa-plus  mr-5"></span> Thêm Công Việc
                        </button>
                        <Control />
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <Tasklist tasks={tasks} onUpdateStatus={this.onUpdateStatus} onDelete={this.onDelete}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;