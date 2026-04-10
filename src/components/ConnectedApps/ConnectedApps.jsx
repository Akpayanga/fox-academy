import { useState } from 'react'
import './ConnectedApps.css'

const INITIAL_APPS = [
  {
    id: 'figma',
    name: 'Figma',
    connected: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE"/>
        <path d="M9.5 57A9.5 9.5 0 0 1 9.5 38H19v9.5A9.5 9.5 0 0 1 9.5 57z" fill="#0ACF83"/>
        <path d="M19 0H9.5a9.5 9.5 0 0 0 0 19H19V0z" fill="#FF7262"/>
        <path d="M28.5 0H19v19h9.5a9.5 9.5 0 0 0 0-19z" fill="#F24E1E"/>
        <path d="M38 19a9.5 9.5 0 0 1-19 0 9.5 9.5 0 0 1 19 0z" fill="#A259FF"/>
      </svg>
    ),
  },
  {
    id: 'notion',
    name: 'Notion',
    connected: false,
    icon: (
      <svg width="18" height="18" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="18" fill="#fff"/>
        <path d="M12 14.5c0-2.5 2-4.5 4.5-4.5h55c7.5 0 16 6 16 16v54c0 2.5-2 4.5-4.5 4.5H21c-5 0-9-4-9-9V14.5z" fill="#fff"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M61 19H28c-3.3 0-6 2.7-6 6v50c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6V30L61 19zm-1 4l11 11H60V23zM28 75V25h28v13h13v37H28z" fill="#000"/>
        <rect x="34" y="38" width="32" height="4" rx="2" fill="#000"/>
        <rect x="34" y="50" width="32" height="4" rx="2" fill="#000"/>
        <rect x="34" y="62" width="20" height="4" rx="2" fill="#000"/>
      </svg>
    ),
  },
  {
    id: 'gdrive',
    name: 'Google Drive',
    connected: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0a15.92 15.92 0 0 0 2.1 8z" fill="#0066da"/>
        <path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.5 48.8A16 16 0 0 0 0 53h27.5z" fill="#00ac47"/>
        <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25A16 16 0 0 0 87.3 53H59.8l5.85 11.2z" fill="#ea4335"/>
        <path d="M43.65 25L57.4 1.2C56.05.45 54.5 0 52.85 0H34.45c-1.65 0-3.2.45-4.55 1.2z" fill="#00832d"/>
        <path d="M59.8 53H27.5L13.75 76.8c1.35.75 2.9 1.2 4.55 1.2h50.7c1.65 0 3.2-.45 4.55-1.2z" fill="#2684fc"/>
        <path d="M73.4 26.5l-12.55-21.75c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45a16 16 0 0 0-2.1-8z" fill="#ffba00"/>
      </svg>
    ),
  },
]

export default function ConnectedApps() {
  const [apps, setApps] = useState(INITIAL_APPS)

  const toggleApp = (id) => {
    setApps(prev =>
      prev.map(a => a.id === id ? { ...a, connected: !a.connected } : a)
    )
  }

  return (
    <section className="card">
      <div className="card-header">
        <h2 className="card-title">Connected Apps</h2>
      </div>

      <div className="apps-list">
        {apps.map(app => (
          <div key={app.id} className="app-row">
            <div className="app-info">
              <span className="app-icon">{app.icon}</span>
              <span className="app-name">{app.name}</span>
            </div>
            {app.connected ? (
              <div className="app-connected-group">
                <span className="app-status app-status--connected">Connected</span>
                <button
                  className="app-disconnect"
                  onClick={() => toggleApp(app.id)}
                  title="Disconnect"
                >
                  ×
                </button>
              </div>
            ) : (
              <button
                className="app-connect-btn"
                onClick={() => toggleApp(app.id)}
              >
                Connect
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}