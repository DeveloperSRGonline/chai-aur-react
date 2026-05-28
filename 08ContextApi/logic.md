# 🧠 React Context API & `useContext` Core Logic

This document explains the core logic and data flow of the Context API implementation in this project (`08ContextApi`). 

## 🔄 The Core Flow (Visualized)

```text
[ Global State Holder ] 
 └─ UserContext.Provider (value={{ user, setUser }})
       │
       ├─► [ Consumer: Write ]
       │    └─ <Login /> ─── (Uses `setUser` to update state)
       │
       └─► [ Consumer: Read ]
            └─ <Profile /> ─ (Uses `user` to display data)
```

## 🏗️ Step-by-Step Architecture

### 1. The Blueprint (`context/UserContext.js`)
First, we create a context. Think of this as creating an empty global "store" or a blueprint.
```javascript
export const UserContext = React.createContext();
```
*This just creates the context variable so that other components can reference it.*

### 2. The Provider (`context/UserContextProvider.jsx`)
The Provider is a wrapper component that holds the actual state (`user`, `setUser`) and **provides** it to all of its children.
```javascript
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null); // The actual state
    
    return(
        // Passes the state through the `value` prop
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
```

### 3. The Wrapper (`App.jsx`)
We wrap the application (or specific components) with the Provider we just created. Any component inside `<UserContextProvider>` can access the `value` data.
```javascript
<UserContextProvider>
  <Login/>   {/* Has access to user & setUser */}
  <Profile/> {/* Has access to user & setUser */}
</UserContextProvider>
```

### 4. Writing Data (`components/Login.jsx`)
The `Login` component acts as the "writer". It uses the `useContext` hook to grab `setUser` from the Context, and calls it to update the global state when the user submits the form.
```javascript
import { useContext } from "react";
import UserContext from "../context/UserContext";

// 1. Grab `setUser` from Context
const { setUser } = useContext(UserContext);

// 2. Call it to update the global user state
const handleSubmit = () => {
    setUser({ username, password });
};
```

### 5. Reading Data (`components/Profile.jsx`)
The `Profile` component acts as the "reader". It uses the `useContext` hook to grab the current `user` object and displays the details.
```javascript
import { useContext } from "react";
import UserContext from "../context/UserContext";

// 1. Grab `user` from Context
const { user } = useContext(UserContext);

// 2. Display the data (or ask to login if null)
return user ? <div>Profile - {user.username}</div> : <div>Please login</div>;
```

---

## 💡 Key Takeaway: Why use Context API?
The Context API eliminates **Prop Drilling**. You don't need to pass `user` and `setUser` as props from `<App />` down through layers of components. Instead, any component wrapped inside the Provider can tap directly into the global data using the `useContext` hook!