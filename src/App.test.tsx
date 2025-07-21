// src/App.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('Compteur', () => {
  it('devrait incrémenter le compteur quand on clique sur le bouton', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is/i })
    expect(button).toHaveTextContent('count is 0')
    fireEvent.click(button)
    expect(button).toHaveTextContent('count is 1')
    fireEvent.click(button)
    expect(button).toHaveTextContent('count is 2')
  })
})
