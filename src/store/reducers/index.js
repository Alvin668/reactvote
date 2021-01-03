import voteRedux from './VoteRedux';
import userRedux from "./UserRedux"
import {
    combineReducers
} from 'redux'


const reducer = combineReducers({
    vote: voteRedux,
    user: userRedux
})

export default reducer;