import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home">
        <h1>AI Career Mentor</h1>

        <p>
          Learn Smarter with AI
        </p>

        <button>Get Started</button>
      </div>
    </>
  );
}

export default Home;