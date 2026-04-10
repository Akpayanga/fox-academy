import { useState } from 'react'
import './Notifications.css'

const INITIAL = [
  { id: 'assignment', label: 'Assignment Updates', on: true },
  { id: 'mentor',     label: 'Mentor Feedback',    on: true },
  { id: 'community',  label: 'Community Replies',  on: false },
  { id: 'team',       label: 'Team Activity',      on: true },
  { id: 'session',    label: 'Session Reminders',  on: true },
]

export default function Notifications() {
  const [items, setItems] = useState(INITIAL)

  const toggle = (id) =>
    setItems(prev => prev.map(i => i.id === id ? { ...i, on: !i.on } : i))

  return (
    <section className="card">
      <div className="card-header">
        <h2 className="card-title">Notifications</h2>
        <a href="#" className="card-action">Manage <span>→</span></a>
      </div>

      <div className="notif-list">
        {items.map(item => (
          <div key={item.id} className="notif-row">
            <span className="notif-label">{item.label}</span>
            <label className="toggle" aria-label={item.label}>
              <input
                type="checkbox"
                checked={item.on}
                onChange={() => toggle(item.id)}
              />
              <span className="toggle-track" />
            </label>
          </div>
        ))}
      </div>
    </section>
  )
}