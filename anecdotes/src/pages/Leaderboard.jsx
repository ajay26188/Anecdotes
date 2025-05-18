import './Leaderboard.css'

const Leaderboard = ({ anecdotes, votes }) => {
  const sorted = [...anecdotes.map((a, i) => ({ text: a, vote: votes[i] }))]
    .sort((a, b) => b.vote - a.vote)

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">🏆 Top Voted Anecdotes</h2>
      <div className="leaderboard-list">
        {sorted.map((item, index) => (
          <div key={index} className="leaderboard-card">
            <h3 className="anecdote-rank">#{index + 1}</h3>
            <p className="anecdote-text">"{item.text}"</p>
            <p className="vote-count">Votes: {item.vote}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leaderboard
