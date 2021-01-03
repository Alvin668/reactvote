import * as TYPES from '../../actionTypes'

function support(payload) {
    return {
        type: TYPES.VOTE_SUPPORT,
        payload
    }
}

function oppose(payload) {
    return {
        type: TYPES.VOTE_OPPOSE,
        payload
    }
}

const voteAction = {
    support,
    oppose
}
export default voteAction;