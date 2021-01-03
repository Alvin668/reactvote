import * as TYPES from '../../actionTypes'
let initialState = {
    title: 'caoshenhuinanyehenshuang'
}
export default function userRedux(state = initialState, action) {
    state = JSON.parse(JSON.stringify(state));
    return state;
}