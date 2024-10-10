import "./App.css";

function Header() {
  return (
    <>
      <header id="navbar">
        <div className="navbar_contents">
          {/* <img id="logo" src="https://icls.jp/logo_10A_ICLS.png" /> */}
          <img
            id="logo"
            src="https://www.icls.com.my/wp-content/uploads/2020/06/icls-logo.png"
          />
          <div className="dropdown-menu">
            <button className="nav-item">
              <div className="hover-zone">About Us</div>
            </button>
          </div>
          <div className="dropdown-menu">
            <button className="nav-item">
              <div className="hover-zone">Our School</div>
            </button>
          </div>
          <button className="nav-item">
            <div className="hover-zone">Our Courses</div>
          </button>
          <button className="nav-item language-select">
            <div className="hover-zone">
              <div className="flag-icon" />
              <span className="flag-label">EN</span>
            </div>
          </button>
          <div className="dropdown-menu">
            <button className="nav-item secondary no-bg-change">
              <div className="hover-zone">Apply now</div>
            </button>
          </div>
          <a className="nav-item primary no-bg-change" href="/">
            <div className="hover-zone">Contact Us</div>
          </a>
        </div>
      </header>
      <main>
        <section className="banner">
          <h1 className="banner__title banner__padding">
            Learn a new language today!
          </h1>
          <h3 className="banner__title banner__subtitle">
            Master Japanese, English, French & More
          </h3>
          <div className="banner__buttons">
            <button className="whatsapp-button">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" />
              KL BRANCH
            </button>
            <button className="whatsapp-button">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" />
              SUBANG BRANCH
            </button>
          </div>
        </section>
        <h3 className="our-courses__title">Our courses</h3>
        <section className="our-courses">
          <div className="course">
            <div className="course__flag jp" />
            <span>Japanese</span>
          </div>
          <div className="course">
            <div className="course__flag gb" />
            <span>English</span>
          </div>
          <div className="course">
            <div className="course__flag kr" />
            <span>Korean</span>
          </div>
          <div className="course">
            <div className="course__flag cn" />
            <span>Mandarin</span>
          </div>
          <div className="course">
            <div className="course__flag my" />
            <span>Malay</span>
          </div>
          <div className="course">
            <div className="course__flag de" />
            <span>German</span>
          </div>
          <div className="course">
            <div className="course__flag fr" />
            <span>French</span>
          </div>
          <div className="course">
            <div className="course__flag es" />
            <span>Spanish</span>
          </div>
          <div className="course">
            <div className="course__flag it" />
            <span>Italian</span>
          </div>
        </section>
      </main>
    </>
  );
}

function App() {
  return <Header />;
}

export default App;
