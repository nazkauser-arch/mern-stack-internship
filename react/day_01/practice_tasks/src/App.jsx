import WelcomeMessage from "./components/welcomeMessage"
import Counter from "./components/Counter"
import ToggleButton from "./components/toggleButton"
import UserCard from "./components/userCard"

function App() {
  const user = {
    name: "Ali Khan",
    email: "ali@example.com",
    role: "user"
  }

  return (
    <div>
    <WelcomeMessage name = "Ali" />
    <Counter />
    <br />
    <ToggleButton/>
    <UserCard user = {user}/>
    </div>
  )
}

// function App() {
//   const user = {
//     name: "Ali Khan",
//     email: "ali@example.com",
//     role: "user"
//     }
//     return <UserCard user = {user}/>
// }

export default App