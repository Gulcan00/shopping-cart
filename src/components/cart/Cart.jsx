import { Link } from 'react-router-dom';
import { useShoppingCartContext } from '../../context/shoppingCart/useShoppingCartContext';
import { Fragment } from 'react';
import EditProductCart from '../editProductCart/EditProductCart';

export default function Cart() {
  const { getItemCount, shoppingCart } = useShoppingCartContext();

  const totalPrice = shoppingCart
    .values()
    .reduce((sum, item) => (sum += item.product.price * item.quantity), 0);

  return (
    <div className="p-8">
      <div className="bg-white max-w-screen-md mx-auto px-4 py-8 shadow">
        {getItemCount() > 0 ? (
          <>
            <h1 className="text-2xl mb-1">Shopping Cart</h1>
            <p className="text-end text-sm text-gray-700">Price</p>
            <hr />
            <div className="grid grid-cols-1 mt-3 gap-4">
              {[...shoppingCart.values()].map((value) => (
                <Fragment key={value.product.id}>
                  <div className="grid grid-cols-[1fr,2fr,1fr] gap-4 mt-3">
                    <img
                      src={value.product?.image}
                      alt={value.product?.title}
                    />
                    <div>
                      <h2 className="text-xl">{value.product.title} </h2>
                      <p>Quantity:</p>
                      <EditProductCart
                        product={value.product}
                        initialQuantity={value.quantity}
                      />
                    </div>
                    <p className="font-semibold justify-self-end">
                      ${value.product.price}
                    </p>
                  </div>
                  <hr />
                </Fragment>
              ))}
              <p className="text-end font-medium">
                Subtotal ({getItemCount()} items):{' '}
                <span className="font-semibold">${totalPrice}</span>
              </p>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl mb-1">Your Amazon Cart is empty.</h1>
            <p>
              Continue shopping on the{' '}
              <Link to={'/'} className="text-blue-600 hover:underline">
                Amazon homepage
              </Link>
              .
            </p>
          </>
        )}
      </div>
    </div>
  );
}
