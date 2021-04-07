import React from 'react'

//default context value can be provided as a parameter in the createContext Function
// This is applied when there is no matching provider above it in the component tree
const UserContext = React.createContext('CodeVolution')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext 