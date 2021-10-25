function Home({user}) {
    return (
      <div className="home">
        <h3>Welcome {user.username}!</h3>
      </div>
    );
  }

  export default Home