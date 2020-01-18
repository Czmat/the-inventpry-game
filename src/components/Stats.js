import React from 'react';

const Stats = ({ items }) => {
  return (
    <div>
      There are {items.filter(item => item.numberInStock < 4).length} product(s)
      with low inventory.
    </div>
  );
};

export default Stats;
