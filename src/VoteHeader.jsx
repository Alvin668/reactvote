import React from 'react';

export default class VoteHeader extends React.Component {

    render() {
        let { store } = this.props;
        let { title, supNum, oppNum } = store.getState().vote;
        return <>
            <div>{title}</div>
            <span>参与人数：{supNum + oppNum}</span>
        </>
    }

    componentDidMount() {
        const { store } = this.props;
        store.subscribe(() => {
            this.forceUpdate();
        });
    }
}