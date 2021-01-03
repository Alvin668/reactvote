import React from 'react';

export default class VoteMain extends React.Component {
    constructor(props) {
        super(props);
        let { store } = this.props,
            { supNum, oppNum } = store.getState().vote;
        this.state = {
            supNum: supNum,
            oppNum: oppNum
        }

    }
    render() {
        return <>
            <div>支持：{this.state.supNum}</div>
            <div>反对：{this.state.oppNum}</div>
            <div>支持率：{this.state.supNum / (this.state.supNum + this.state.oppNum)}</div>
        </>
    }
    componentDidMount() {
        const { store } = this.props;

        store.subscribe(() => {
            let { supNum, oppNum } = store.getState().vote;
            if (supNum !== this.state.supNum) {
                this.setState({
                    supNum: supNum
                });
            }
            if (oppNum !== this.state.oppNum) {
                this.setState({
                    oppNum: oppNum
                });
            }
        });
    }
}