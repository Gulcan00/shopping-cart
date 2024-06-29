import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Cart from '../components/cart/Cart';
import { ShoppingCartProvider } from '../context/shoppingCart/ShoppingCartProvider';
import EditProductCart from '../components/editProductCart/EditProductCart';

describe('Cart page', () => {
  test('shows message if cart is empty', () => {
    render(
      <MemoryRouter initialEntries={['/cart']}>
        <ShoppingCartProvider>
          <Cart />
        </ShoppingCartProvider>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading')).toHaveTextContent(
      'Your Amazon Cart is empty.'
    );
  });

  test('calculates total', async () => {
    const product = { id: 1, price: 15.99 };
    render(
      <MemoryRouter initialEntries={['/']}>
        <ShoppingCartProvider>
          <EditProductCart product={product} />
          <Cart />
        </ShoppingCartProvider>
      </MemoryRouter>
    );

    await userEvent.click(screen.getByRole('button', { name: 'increase' }));
    await userEvent.click(screen.getByRole('button', { name: 'increase' }));

    await userEvent.click(screen.getByRole('button', { name: 'Add to Cart' }));

    const el = screen.getByText('Subtotal', { exact: false });
    expect(el).toHaveTextContent('Subtotal (2 items): $31.98');
  });
});
