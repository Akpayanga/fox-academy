import './Navbar.css'

const NAV_LINKS = ['My Learning', 'Assignments', 'Progress', 'Resources', 'Community']

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-brand">
          <span className="navbar-logo">🦊</span>
          <span className="navbar-brand-text">Fox Academy</span>
        </a>

        <nav className="flex justify-center navbar-nav" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <a key={link} href="#" className="navbar-link">{link}</a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button className="navbar-icon-btn" aria-label="Notifications">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </button>
          <button className="navbar-avatar" aria-label="Profile">
            <img src="https://i.pravatar.cc/36?img=47" alt="Amara Obi" />
          </button>
        </div>
      </div>
    </header>
  )
}