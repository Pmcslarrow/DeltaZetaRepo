/* Returns the navigation bar */
function NavBar() {
    return (
        <div className="nav-bar fade-in">
        <img src="/images/SigmaChi-ExpectMore-1024x342.png" alt="Sigma Chi Logo" id="sigmaChiLogoImage" />
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/calendar">Calendar</a>
          <a href="/dashboard">Dashboard</a>
        </div>
      </div>
    );
}

export default NavBar;