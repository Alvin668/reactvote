import React from 'react';
import action from './store/action/index'

export default class VoteFooter extends React.Component {
    render() {
        let { store } = this.props;
        return <>
            <button onClick={this.handle.bind(this, 1)}>支持</button>
            <button onClick={this.handle.bind(this, 0)}>反对</button>
        </>
    }

    handle = lx => {
        const { store } = this.props;
        if (lx === 0) {
            store.dispatch(action.voteAction.oppose(10))
        }

        if (lx === 1) {
            store.dispatch(action.voteAction.support(100));
        }

    }
}