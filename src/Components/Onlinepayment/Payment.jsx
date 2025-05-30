import React from 'react';
import paymentImage from '../../assets/wha9.jpeg'; // Adjust path as needed

const Payment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
        <p className="text-lg font-semibold text-orange-500 text-center border rounded mb-4">
          You can scan the QR Code and pay also
        </p>
        <div className="flex justify-center bg-black">
          <a href={paymentImage} target="_blank" rel="noopener noreferrer">
            <img src={paymentImage} alt="Payment Banner" className="h-70 object-contain cursor-pointer" />
          </a>
        </div>
        <p className='text-center text-lg text-orange-500'>pay now</p>
      </div>
    </div>
  );
};

export default Payment;
