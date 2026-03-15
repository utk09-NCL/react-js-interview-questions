// Q9: Build useLocalStorage with safe parsing

// 1. Does it only read from localstorage or read-write?: Ans: read & write
// 2. Do we need to read from localstorage on every render or just once?: Ans: on mount
// 3. If the useLocalStorage hook crashes (because JSON.parse failed, or there's not enough space to save data in localstorage), then what should it return?: Ans: return previous/initial value
// 4. Do we need the same-tab which is setting the value know about the update & display it? Ans: Yes