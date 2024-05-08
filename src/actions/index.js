import * as types from '../constats/ActionTypes'

let nextMessageId = 0
const nextUserId = 0

export const AddMessage = (message, author) = ({
    type: types.ADD_MESSAGE,
})