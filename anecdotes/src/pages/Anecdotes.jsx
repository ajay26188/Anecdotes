import { useState } from 'react'
import { motion } from 'framer-motion'
import './Anecdotes.css' 

const Anecdotes = ({ anecdotes, votes, setVotes }) => {
  const [selected, setSelected] = useState(0)

  const generateRandomNum = () => {
    const randomNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNum)
  }

  const voteCount = () => {
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
  }

  const resetVotes = () => {
    if (window.confirm(`Reset votes for: "${anecdotes[selected]}"?`)) {
      const updatedVotes = [...votes]
      updatedVotes[selected] = 0
      setVotes(updatedVotes)
    }
  }

  const highestVote = Math.max(...votes)
  const highestVoteIndex = votes.indexOf(highestVote)

  return (
    <div className="anecdote-wrapper">
      <div className="anecdote-container">
        <h2>Anecdote of the Day</h2>
        <motion.div
          key={selected}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="anecdote-card"
        >
          <p className="anecdote-text">"{anecdotes[selected]}"</p>
          <p className="vote-count">
            Has {votes[selected] === 0 ? '0' : votes[selected]} votes
          </p>
        </motion.div>

        <div className="button-group">
          <button className="btn vote-btn" onClick={voteCount}>Vote</button>
          <button className="btn next-btn" onClick={generateRandomNum}>Next Anecdote</button>
          <button className="btn reset-btn" onClick={resetVotes}>Reset Votes</button>
        </div>

        <h2>Top Voted Anecdote</h2>
        <div className="top-anecdote">
          <p className="anecdote-text">"{anecdotes[highestVoteIndex]}"</p>
          <p className="vote-count">
            Has {highestVote === 0 ? '0' : highestVote} votes
          </p>
        </div>
      </div>
    </div>
  )
}

export default Anecdotes
