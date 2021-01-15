import React, { Component } from 'react';

class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="col-sm-6">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>
                                <span>分数：</span>
                                <input ref={this.props.markRef} type="text" className="form-control" />
                            </td>
                            <td>
                                <span>学分：</span>
                                <input ref={this.props.scorRef} type="text" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>课程名：</span>
                                <input ref={this.props.subjectRef} type="text" className="form-control" />
                            </td>
                            <td>
                                <button className="btn btn-primary" onClick={this.props.onClick}>Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Entry;