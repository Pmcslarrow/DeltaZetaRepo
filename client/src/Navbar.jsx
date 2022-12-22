/* Returns the navigation bar */
function NavBar(props) {
    const title = props.title;

    return (
        <div className="nav-bar fade-in">
          <img src="/images/SigmaChi-ExpectMore-1024x342.png" alt="Sigma Chi Logo" id="sigmaChiLogoImage" />
          <u><div id="pageHeader">{title}</div></u>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/calendar">Calendar</a>
            <a href="/login">Dashboard</a>
          </div>
      </div>
    );
}

export default NavBar;