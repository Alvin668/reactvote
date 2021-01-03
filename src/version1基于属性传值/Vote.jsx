import React from 'react';
import VoteHeader from './VoteHeader'
import VoteMain from './VoteMain'
import VoteFooter from './VoteFooter'

export default class Vote extends React.Component {
    state = {
        supNum: 0,
        oppNum: 0
    }
    render() {
        let { title } = this.props
        let { supNum, oppNum } = this.state;
        return <>
            <VoteHeader title={title} supNum={supNum} oppNum={oppNum} />
            <VoteMain supNum={supNum} oppNum={oppNum} />
            <VoteFooter changeNum={this.changeNum} />
        </>
    }

    changeNum = (type) => {
        if (type === 1) {
            this.setState({
                supNum: this.state.supNum += 1
            });
        } else {
            this.setState({
                oppNum: this.state.oppNum += 1
            });
        }
    }
}