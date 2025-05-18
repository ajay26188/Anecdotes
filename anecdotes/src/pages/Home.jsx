import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => (
  <div className="home-container">
    <div className="home-content">
      <h1>Crafted for Coders, by a Coder</h1>
      <p>
        Welcome to the <strong>Anecdote Voting App</strong> — a space where software engineers unite to vote, laugh, and reflect on the bitter truths and hilarious wisdom of programming life.
      </p>
      <p>
        This site was built using <strong>React</strong>, powered by <strong>localStorage</strong>, animated with <strong>Framer Motion</strong>, and styled for developers who appreciate clean code and clean design.
      </p>
      <p>
        Whether you're knee-deep in debugging hell or sipping coffee during your 8th refactor, you belong here. Vote on your favorite anecdotes, and help elevate the truths that bind us as builders of the digital world.
      </p>
      <p>
        These anecdotes aren’t just funny — they’re battle scars turned into stories, shortcuts turned into memes, and truths turned into laughter. Every vote you cast honors the absurd beauty of programming.
      </p>
      <p className="quote">
        “Programs must be written for people to read, and only incidentally for machines to execute.” – Harold Abelson
      </p>

      <Link to="/anecdotes" className="anecdote-btn">View Today’s Anecdote</Link>
    </div>
  </div>
)

export default Home
