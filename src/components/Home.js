function Home({user}) {
    return (
      <div className="home">
        <h3>Welcome back {user.username}!</h3>
      </div>
    );
  }

  export default Home