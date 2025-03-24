import { use, useEffect, useState } from 'react'
import Signup from './components/Signup'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Management from './components/Management'


function App() {
  const navigate = useNavigate();


  const [signed, setSigned] = useState(() => localStorage.getItem("Signed") || false);

  const [logged, setLogged] = useState(() => JSON.parse(localStorage.getItem("logged")) || false);


  useEffect(() => {
    localStorage.setItem("logged", JSON.stringify(logged));
  }, [logged]);


  useEffect(() => {
    if (!logged) {
      navigate("/login");
    } else if (signed && logged) {
      navigate("/");
    } else {
      navigate("/signup");
    }
  }, [logged]); 

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Management reg={[signed, setSigned]} log={[logged, setLogged]} />} />
    </Routes>
  );
}

export default App;