import { useState } from 'react'
import './Privacy.css'

const INITIAL = [
  {
    id: 'profile',
    label: 'Profile Visibility',
    desc: 'Allow others in your cohort to find you',
    on: true,
  },
  {
    id: 'progress',
    label: 'Progress Visibility',
    desc: 'Share your assignment scores with the community',
    on: false,
  },
]

export default function Privacy() {
  const [items, setItems] = useState(INITIAL)
  const toggle = (id) => setItems(p => p.map(i => i.id === id ? { ...i, on: !i.on } : i))

  return (
    <section className="card">
      <div className="card-header">
        <h2 className="card-title">Privacy</h2>
        <a href="#" className="card-action">Manage <span>→</span></a>
      </div>

      <div className="privacy-list">
        {items.map(item => (
          <div key={item.id} className="privacy-row">
            <div className="privacy-text">
              <span className="privacy-label">{item.label}</span>
              <span className="privacy-desc">{item.desc}</span>
            </div>
            <label className="toggle" aria-label={item.label}>
              <input type="checkbox" checked={item.on} onChange={() => toggle(item.id)} />
              <span className="toggle-track" />
            </label>
          </div>
        ))}
      </div>
    </section>
  )
}