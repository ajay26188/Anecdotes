import './AllAnecdotes.css'

const AllAnecdotes = ({ anecdotes }) => {
  return (
    <div className="all-anecdotes-container">
      <h2>All Programming Anecdotes</h2>
      <ul className="anecdote-list">
        {anecdotes.map((text, index) => (
          <li key={index} className="anecdote-item">
            <span className="index">{index + 1}.</span> {text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AllAnecdotes
