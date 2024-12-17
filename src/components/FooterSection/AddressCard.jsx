import React from 'react';

const AddressCard = () => {
  return (
    <div className=" text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">The address</h2>
      <div className="text-sm space-y-2">
        <p>9 Link Road,</p>
        <p>New Delhi 110014</p>
        <a
          href="#"
          className="text-blue-400 hover:underline inline-block mt-2"
        >
          View on a map
        </a>
        <p className="mt-4">
          <a
            href="mailto:rejoice@biluxury.in"
            className="text-blue-400 hover:underline"
          >
            rejoice@biluxury.in
          </a>
        </p>
        <p>+91 9833810282</p>
        <p className="text-gray-400 mt-4 text-xs">
          RERA No: DLRERA2020P0005
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
