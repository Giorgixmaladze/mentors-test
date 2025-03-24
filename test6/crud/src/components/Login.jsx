import { useNavigate } from "react-router-dom"
import login from "../utils/login"
import { Link } from "react-router-dom"
const Login = () => {
    const navigate = useNavigate()

    return (
        <div className="container">

            <div className="parent">
                <h1>Log in page</h1>
                <form onSubmit={(e) => login(e, navigate)}>
                    <input type="email" name="email" placeholder="Enter your email" />
                    <input type="password" name="password" placeholder="Enter your password" />
                    <button>Submit</button>
                    <Link to="/signup">Don't have an account? Sign up</Link>
                </form>
            </div>

        </div>
    )
}

export default Login