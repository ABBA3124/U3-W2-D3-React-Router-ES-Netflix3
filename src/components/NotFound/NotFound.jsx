import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className='text-white text-center' style={{ marginTop: '200px', marginBottom: '200px' }}>
      <h1>404 - Pagina non trovata</h1>
      <p>Oops! La pagina che stai cercando non esiste.</p>
      <Link to="/" className="btn btn-primary">Torna alla Home</Link>
    </div>
  )
}

export default NotFoundPage