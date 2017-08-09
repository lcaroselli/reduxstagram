//reducer takes in 2 things
  //1 - the action (info about what happened)
  //2 - copy of current state

  //will take what happened (action) and the store (current state)
  //let me see this and return an update copy of our store

export function posts(state = [], action) {
  console.log(state, action)
  return state;
}
