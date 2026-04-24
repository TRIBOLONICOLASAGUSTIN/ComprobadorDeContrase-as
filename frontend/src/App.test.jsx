import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra el titulo del comprobador', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /comprobador de contraseñas/i })).toBeInTheDocument();
});
