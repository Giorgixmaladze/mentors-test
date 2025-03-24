import useForm from "../hooks/useForm"
import { Link } from "react-router-dom"
import "../styles/registration.css"
const Signup = () => {
    const [info, setInfo] = useForm()

    return (

        <div className="container">

            <div className="parent">
                <h1>Registration Page</h1>
                <form onSubmit={setInfo}>
                    <input type="email" name="email" placeholder="Enter your email" required />
                    <input type="password" name="password" placeholder="Enter your password" />
                    <button>Submit</button>
                    <Link to="/login" >Already have an account? Log in</Link>
                </form>
            </div>

        </div>

    )

}

export default Signup