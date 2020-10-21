import { handleActions, combineActions } from 'redux-actions'
import reduceReducers from 'reduce-reducers'

import { updateStaking, switchAccount, ACCOUNT_DEFAULTS } from '../../actions/staking'

// sample validator entry
const validator = {
    accountId: '',
    contract: 'validatorContractInstance',
    // in the UI
    staked: '0', // amount you have staked RN
    unclaimed: '0', // rewards earned for the stake you originally deposited
    unstaked: '0',
    available: '0', // for withdrawal
    pending: '0', // pending unstake (4 epochs 48hr then available)
}

const initialState = {
    accountId: '__default',
    allValidators: [],
    isLockup: false,
    __default: { ...ACCOUNT_DEFAULTS }
}

const stakingHandlers = handleActions({
    [updateStaking]: (state, { error, payload }) => {
        if (payload.replaceState) {
            return {
                ...payload,
            }
        }
        return {
            ...state,
            ...payload,
        }
    },
    [switchAccount]: (state, { error, payload }) => {
        return {
            ...state,
            ...payload,
        }
    },
}, initialState)

export default reduceReducers(
    initialState,
    stakingHandlers,
)
