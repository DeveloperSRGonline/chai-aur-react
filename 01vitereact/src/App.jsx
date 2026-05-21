import Chai from "./Chai.jsx"
function App() {
  const username = "shivam"

  return (
    <>
      <Chai />
      {/* whatever in curlybraces will be treated as variable */}
      {/* it is called as expression (evaluated expression) js ka final outcome jo evaluauted ho gaya hai vo likhe hai*/}
      {/* kyo mai ismein if syntax or loop or like that nahi likh sakte */}
      <h1>Hello {username}</h1>
      <p>Gaining confidence in react because of hitesh sir</p>
    </>
  )
}

export default App
