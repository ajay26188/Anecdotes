import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="nav-title">Anecdotes</h1>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/all">All Anecdotes</Link>

        <Link to="/anecdotes">Today's anecdote</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        
      </div>
    </nav>
  )
}

export default Navbar
