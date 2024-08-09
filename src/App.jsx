import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

function App() {
  const [query] = useSearchParams();

  const token = query.get("token");

  const handleAccept = async (seq_num) => {
    try {
      const url = `https://sew-aws-back-jul24-a73826d13134.herokuapp.com/api/users/scan-success`;
      const { data } = await axios.post(url, { token, seq_num });
      alert("Successfully completed the goal")
      if (seq_num === 3) {
        window.location.replace(data.url)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>SEW TEST URL</h1>
      <div className="card">
        <button onClick={() => handleAccept(1)}>
          Handle Login
        </button>
        <button onClick={() => handleAccept(2)}>
          Handle SignUp
        </button>
        <button onClick={() => handleAccept(3)}>
          Handle Give like and Redirect to SEW
        </button>
      </div>
    </>
  )
}

export default App
