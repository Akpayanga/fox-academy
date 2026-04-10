import { useState } from 'react'
import './Appearance.css'

export default function Appearance() {
  const [theme, setTheme] = useState('light')
  const [fontSize, setFontSize] = useState('medium')

  return (
    <section className="card">
      <h2 className="card-title" style={{ marginBottom: '20px' }}>Appearance</h2>

      <div className="appearance-group">
        <span className="field-label">Theme Selection</span>
        <div className="pill-group">
          {['light', 'dark'].map(t => (
            <button
              key={t}
              className={`pill-btn${theme === t ? ' pill-btn--active' : ''}`}
              onClick={() => setTheme(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="appearance-group" style={{ marginBottom: 0 }}>
        <span className="field-label">Font Size</span>
        <div className="pill-group">
          {['small', 'medium', 'large'].map(s => (
            <button
              key={s}
              className={`pill-btn${fontSize === s ? ' pill-btn--active' : ''}`}
              onClick={() => setFontSize(s)}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}