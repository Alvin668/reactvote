import * as TYPES from '../../actionTypes'
let initialState = {
    title: 'caolouyaqianzhendehenshuang',
    supNum: 0,
    oppNum: 0
}
export default function voteRedux(state = initialState, action) {
    state = JSON.parse(JSON.stringify(state));
    console.log(action);
    switch (action.type) {
        case TYPES.VOTE_SUPPORT:
            state.supNum += action.payload;
            break;
        case TYPES.VOTE_OPPOSE:
            state.oppNum += action.payload;
            break;
    }
    return state;
}