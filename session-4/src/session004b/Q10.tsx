// Q10: Build useFetch with race condition safety

// 1: Is this API requests? Ans: Yes, User types fast, and new API requests are sent, but the response is old data because previous data is returned late. We need a hook which avoids this.
// 2: Do we need to save the data anywhere? Ans: No, just display on the UI
// 3: Is there a user action to cancel the request? Ans: Yes, user is switching tabs