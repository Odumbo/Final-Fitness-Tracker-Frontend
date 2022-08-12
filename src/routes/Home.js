import AuthForm from "../components/AuthForm";
const Home = ({setToken}) => {
    return (
    <main>
    <h2>Login</h2>
    <AuthForm setToken={setToken} registerOrLogin ="home"/>
    </main>
    )
}

export default Home;