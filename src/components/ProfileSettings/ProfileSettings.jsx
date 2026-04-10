import { useState } from 'react'
import './ProfileSettings.css'

export default function ProfileSettings() {
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({
    fullName: 'Amara Obi',
    bio: 'UX Design enthusiast with a passion for academic interfaces...',
    linkedin: 'linkedin.com/in/amaraobi',
  })

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  return (
    <section className="card">
      <div className="card-header">
        <h2 className="card-title">Profile Settings</h2>
        <button className="card-action" onClick={() => setEditing(e => !e)}>
          {editing ? 'Cancel' : 'Edit'} <span>→</span>
        </button>
      </div>

      {/* Profile Banner */}
      <div className="profile-banner">
        <div className="profile-banner-avatar">
          <img src="https://i.pravatar.cc/56?img=47" alt="Amara Obi" />
        </div>
        <div className="profile-banner-info">
          <span className="profile-banner-label">NAME</span>
          <span className="profile-banner-value">{form.fullName}</span>
        </div>
        <div className="profile-banner-info">
          <span className="profile-banner-label">DISCIPLINE</span>
          <span className="profile-banner-value">
            UX Design <span className="profile-banner-icon">🔒</span>
          </span>
        </div>
        <div className="profile-banner-info">
          <span className="profile-banner-label">COHORT</span>
          <span className="profile-banner-value">
            Cohort 3 <span className="profile-banner-icon">🔒</span>
          </span>
        </div>
      </div>

      {/* Form Fields */}
      <div className="profile-form">
        <div className="field-group">
          <label className="field-label" htmlFor="fullName">Full Name</label>
          {editing ? (
            <input
              id="fullName"
              name="fullName"
              className="form-input"
              value={form.fullName}
              onChange={handleChange}
            />
          ) : (
            <div className="form-input form-input--readonly">{form.fullName}</div>
          )}
        </div>

        <div className="field-group">
          <label className="field-label" htmlFor="bio">Bio</label>
          {editing ? (
            <textarea
              id="bio"
              name="bio"
              className="form-input form-textarea"
              value={form.bio}
              onChange={handleChange}
              rows={3}
            />
          ) : (
            <div className="form-input form-input--readonly">{form.bio}</div>
          )}
        </div>

        <div className="field-group" style={{ marginBottom: 0 }}>
          <label className="field-label" htmlFor="linkedin">LinkedIn</label>
          {editing ? (
            <input
              id="linkedin"
              name="linkedin"
              className="form-input"
              value={form.linkedin}
              onChange={handleChange}
            />
          ) : (
            <div className="form-input form-input--readonly">{form.linkedin}</div>
          )}
        </div>
      </div>

      <button
        className="btn-primary"
        onClick={() => setEditing(false)}
        style={{ marginTop: '20px' }}
      >
        Edit Profile
      </button>
    </section>
  )
}