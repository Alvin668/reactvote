import React from 'react';

export default class VoteHeader extends React.Component {

    render() {
        let { title, supNum, oppNum } = this.props;
        return <>
            <div>{title}</div>
            <span>参与人数：{supNum + oppNum}</span>
        </>
    }
}