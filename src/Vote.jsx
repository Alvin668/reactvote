import React from 'react';
import VoteHeader from './VoteHeader'
import VoteMain from './VoteMain'
import VoteFooter from './VoteFooter'

export default class Vote extends React.Component {

    render() {
        let { store } = this.props
        return <>
            <VoteHeader store={store} />
            <VoteMain store={store} />
            <VoteFooter store={store} />
        </>
    }
}