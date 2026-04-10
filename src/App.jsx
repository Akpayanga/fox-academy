import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import ProfileSettings from './components/ProfileSettings/ProfileSettings'
import AccountSecurity from './components/AccountSecurity/AccountSecurity'
import Notifications from './components/Notifications/Notifications'
import Privacy from './components/Privacy/Privacy'
import Appearance from './components/Appearance/Appearance'
import ConnectedApps from './components/ConnectedApps/ConnectedApps'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="page-layout">
        <div className="page-content">
          <div className="settings-header">
            <h1 className="settings-title">Settings</h1>
            <p className="settings-subtitle">Manage your account, preferences, and privacy.</p>
          </div>

          <div className="settings-grid">
            <div className="settings-main">
              <ProfileSettings />
              <AccountSecurity />
              <Notifications />
              <Privacy />
              <Appearance />
              <ConnectedApps />
            </div>
            <aside className="settings-aside">
              <Sidebar />
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}