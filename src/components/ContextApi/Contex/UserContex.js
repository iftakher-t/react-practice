// 3 stape 
import React from 'react';

// 1. createContext
const UserContext = React.createContext()
// 2 provide context
const UserProvider = UserContext.Provider
// 3 Consume context
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}