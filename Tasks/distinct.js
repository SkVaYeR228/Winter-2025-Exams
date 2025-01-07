// Refactor following solution
// Return an array without duplicates

// Step 1. Add 'use strict'
// Step 2. Better naming
// Step 3. Use pretier
// Step 4. Logic simplification

'use strict';

const distinct = (data) => {
  const uniqueValues = new Set();
  return data.filter((item) => {
    if (!uniqueValues.has(item)) {
      uniqueValues.add(item);
      return true;
    }
    return false;
  });
};

module.exports = distinct;
