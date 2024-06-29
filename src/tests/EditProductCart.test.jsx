import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import EditProductCart from '../components/editProductCart/EditProductCart';
import { ShoppingCartProvider } from '../context/shoppingCart/ShoppingCartProvider';

describe('Edit Cart', () => {
  test('adds item to cart', async () => {
    const product = { id: 1 };
    render(
      <MemoryRouter initialEntries={['/']}>
        <ShoppingCartProvider>
          <EditProductCart product={product} />
        </ShoppingCartProvider>
      </MemoryRouter>
    );

    expect(screen.getByLabelText('quantity').value).toBe('0');

    await userEvent.click(screen.getByRole('button', { name: 'Add to Cart' }));

    expect(screen.getByLabelText('quantity').value).toBe('1');
  });

  test('removes item from cart', async () => {
    const product = { id: 1 };
    render(
      <MemoryRouter initialEntries={['/']}>
        <ShoppingCartProvider>
          <EditProductCart product={product} />
        </ShoppingCartProvider>
      </MemoryRouter>
    );

    expect(screen.getByLabelText('quantity').value).toBe('0');

    await userEvent.click(screen.getByRole('button', { name: 'increase' }));
    await userEvent.click(screen.getByRole('button', { name: 'increase' }));

    await userEvent.click(screen.getByRole('button', { name: 'Add to Cart' }));

    expect(screen.getByLabelText('quantity').value).toBe('2');

    await userEvent.click(screen.getByRole('button', { name: 'decrease' }));

    expect(screen.getByLabelText('quantity').value).toBe('1');
  });
});
