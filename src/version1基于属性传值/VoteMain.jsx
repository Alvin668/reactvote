import React from 'react';

export default class VoteMain extends React.Component {
    render() {
        let { supNum, oppNum } = this.props;
        return <>
            <div>支持：{supNum}</div>
            <div>反对：{oppNum}</div>
            <div>支持率：{supNum / (supNum + oppNum)}</div>
        </>
    }
}