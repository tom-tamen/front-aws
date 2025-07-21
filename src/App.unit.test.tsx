import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App (test unitaire)', () => {
  it('affiche le compteur à 0 au démarrage', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is/i })
    expect(button).toHaveTextContent('count is 0')
  })

  it('affiche le titre "Vite + React"', () => {
    render(<App />)
    expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument()
  })
})
