import React, {Component} from 'react';

class View extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr className="bg-success text-white">
                        <td className="font-weight-bold">课程名</td>
                        <td className="font-weight-bold">成绩</td>
                        <td className="font-weight-bold">学分</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.marks.map((item, index) =>
                        <tr key={index}>
                            <td className="text-capitalize font-weight-bold">{item.subject}</td>
                            <td>{item.mark}</td>
                            <td>{item.score}</td>
                        </tr>
                    )}
                    </tbody>
                    <tfoot>
                    <tr className="bg-success text-white">
                        <td className="font-weight-bold">加权平均成绩：{this.props.grade}</td>
                        <td className="font-weight-bold">绩点：{this.props.gpa}</td>
                        <td className="font-weight-bold">等级：{this.props.case}</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default View;