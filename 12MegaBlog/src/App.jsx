import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth.service"
import { login, logout } from "./store/authSlice"
import { Header, Footer } from "./components/index"
import "./App.css"

const App = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      {loading ? <h1>Loading...</h1> :
        <div className="">
          <div>
            <Header />
            <main>
            </main>
            <Footer />
          </div>
        </div>}
    </div>
  )
}

export default App