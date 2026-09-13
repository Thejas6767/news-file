import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section className="hero-placeholder">
          <p>NEWS FILE</p>
          <h1>The future of news starts here.</h1>
        </section>
      </main>
    </div>
  );
}

export default Home;