import { useState } from 'react'
import './Sidebar.css'

const QUICK_LINKS = [
  {
    id: 'help',
    label: 'Help Center',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    id: 'support',
    label: 'Contact Support',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    id: 'privacy',
    label: 'Privacy Policy',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    id: 'terms',
    label: 'Terms of Service',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
]

export default function Sidebar() {
  const [adminDismissed, setAdminDismissed] = useState(false)

  return (
    <>
      {/* Account Card */}
      <div className="card sidebar-account">
        <p className="sidebar-section-label">Your Account</p>

        <div className="sidebar-profile">
          <div className="sidebar-avatar">
            <img src="https://i.pravatar.cc/72?img=47" alt="Amara Obi" />
          </div>
          <h3 className="sidebar-name">Amara Obi</h3>
          <p className="sidebar-role">UX Design Intern</p>
        </div>

        <div className="sidebar-divider" />

        <dl className="sidebar-meta">
          <div className="sidebar-meta-row">
            <dt className="sidebar-meta-key">Cohort</dt>
            <dd className="sidebar-meta-val">Cohort 3</dd>
          </div>
          <div className="sidebar-meta-row">
            <dt className="sidebar-meta-key">Enrolled</dt>
            <dd className="sidebar-meta-val">February 2026</dd>
          </div>
          <div className="sidebar-meta-row">
            <dt className="sidebar-meta-key">Status</dt>
            <dd className="sidebar-meta-val sidebar-meta-val--status">
              <span className="status-dot" /> Active
            </dd>
          </div>
        </dl>
      </div>

      {/* Quick Links */}
      <div className="card sidebar-links">
        <p className="sidebar-section-label">Quick Links</p>
        <nav className="quick-links-nav">
          {QUICK_LINKS.map(link => (
            <a key={link.id} href="#" className="quick-link">
              <span className="quick-link-icon">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Admin Note */}
      {!adminDismissed && (
        <div className="admin-note">
          <div className="admin-note-header">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span>Admin Note</span>
          </div>
          <p className="admin-note-text">
            Cohort 3 profiles will be automatically archived on June 15th. Please ensure all your documentation is downloaded before the cohort ends.
          </p>
          <button
            className="admin-note-dismiss"
            onClick={() => setAdminDismissed(true)}
          >
            Dismiss
          </button>
        </div>
      )}
    </>
  )
}