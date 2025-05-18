import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Anecdotes from './pages/Anecdotes'
//import About from './pages/About'
import Leaderboard from './pages/Leaderboard'
import {useState,useEffect} from 'react'
import AllAnecdotes from './pages/AllAnecdotes'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place.',
  'Programming without an extremely heavy use of console.log is same as a doctor refusing tests.',
  'The only way to go fast, is to go well.',
  'Weeks of coding can save you hours of planning.',
  'Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work.”'
]


function App() {
  const [votes, setVotes] = useState(() => {
    const saved = localStorage.getItem('votes')
    const initialVotes = saved ? JSON.parse(saved) : []
    return [...initialVotes, ...new Array(anecdotes.length - initialVotes.length).fill(0)]
  })
  

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes))
  }, [votes])

  return (
    <Router>
      <Navbar />
      <div className="container" style={{ minHeight: 'calc(100vh - 120px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/anecdotes"
            element={<Anecdotes anecdotes={anecdotes} votes={votes} setVotes={setVotes} />}
          />
          {/*<Route path="/about" element={<About />} />*/}
          <Route
            path="/leaderboard"
            element={<Leaderboard anecdotes={anecdotes} votes={votes} />}
          />
          <Route path="/all" element={<AllAnecdotes anecdotes={anecdotes} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
