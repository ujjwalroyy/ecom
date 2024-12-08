import React from 'react';

const AddressCard = ({ address }) => {
  // Check if address is undefined
  if (!address) {
    return <div>No address provided</div>;
  }

  return (
    <div>
      <div className='space-y-3'>
        <p className='font-semibold'>{address?.firstName} {address?.lastName}</p>
        <p>{address?.state}, {address?.streetAddress}, {address?.zipCode}</p>
        <div className='space-y-1'>
          <p className='font-semibold'>Phone Number</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  );
}

export default AddressCard;
