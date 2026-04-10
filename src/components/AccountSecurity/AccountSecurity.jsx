import './AccountSecurity.css'

export default function AccountSecurity() {
  return (
    <section className="card">
      <div className="card-header">
        <h2 className="card-title">Account &amp; Security</h2>
        <a href="#" className="card-action">Manage <span>→</span></a>
      </div>

      <div className="field-group">
        <span className="field-label">Email</span>
        <span className="field-value">amaraobi@gmail.com</span>
      </div>

      <div className="field-group">
        <span className="field-label">Password</span>
        <span className="field-value password-dots">••••••••••••</span>
      </div>

      <div className="field-group" style={{ marginBottom: 0 }}>
        <span className="field-label">Active Sessions</span>
        <span className="field-value">2 Devices (Lagos, Nigeria)</span>
      </div>

      <div className="divider" style={{ marginTop: '20px' }} />
      <button className="btn-danger">Delete Account</button>
    </section>
  )
}