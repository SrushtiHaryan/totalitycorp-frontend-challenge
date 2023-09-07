import { React, useState } from 'react';
import { useCart } from '../../context/Context';

const CheckoutPage = ({ totalAmount }) => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server for payment processing
    // You can access form data from the `formData` state.
  };

  const { cartTotal, calculateTotal } = useCart();

  return (

    <div className="mt-20 w-full flex justify-center">
      <div className="p-8 mt-0 flex flex-col items-center">
        <h2 className="text-2xl font-semibold p-2 mb-2 white text-black border-black border-2 shadow-md bg-white">Checkout</h2>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          {/* Contact Information */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="p-2 border-2 rounded "

              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-2  border-2 rounded "
              />
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Shipping Address</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="p-2  border-2 rounded "
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="p-2  border-2 rounded "
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="p-2  border-2 rounded "
              />
              <input
                type="text"
                name="apartment"
                placeholder="Apartment"
                value={formData.apartment}
                onChange={handleChange}
                className="p-2  border-2 rounded "
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
                className="p-2  border-2 rounded "
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
                className="p-2  border-2 rounded "
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                className="p-2  border-2 rounded "
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="p-2  border-2 rounded "
              />
            </div>

            {/* Payment Details */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Payment Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  className="p-2 border-2 rounded"
                />
                <input
                  type="text"
                  name="expirationDate"
                  placeholder="Expiration Date (MM/YY)"
                  value={formData.expirationDate}
                  onChange={handleChange}
                  required
                  className="p-2 border-2 rounded"
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                  className="p-2 border-2 rounded"
                />
              </div>
            </div>

          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-slate-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
            >
              Proceed for Payment
            </button>
          </div>
        </form>

        <div className="mt-4 text-2xl font-semibold p-2 mb-2 white text-black border-black border-2 shadow-md bg-white">
          <p>Total Amount: ₹ {calculateTotal().toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

