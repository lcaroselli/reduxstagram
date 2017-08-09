//increment action to increment a like
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES', //type is INCREMENT_LIKES
    index 
  }
}

//add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
  //payload is postId, author, and comment
}

//remove comment
export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
}
