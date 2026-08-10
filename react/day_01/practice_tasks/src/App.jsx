import WelcomeMessage from "./components/welcomeMessage"
import Counter from "./components/Counter"
import ToggleButton from "./components/toggleButton"
import UserCard from "./components/userCard"
import SearchInput from "./components/seacrhInput"

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
    <ToggleButton />
    <UserCard user = {user}/>
    <SearchInput />
    </div>
  )
}

export default App