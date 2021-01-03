import React from 'react';

export default class VoteFooter extends React.Component {
    render() {
        let { changeNum } = this.props;
        return <>
            <button onClick={changeNum.bind(this, 1)}>支持</button>
            <button onClick={changeNum.bind(this, 0)}>反对</button>
        </>
    }
}