// Refactor following solution
// Delete listed keys from dictionary

// Step 1. Add 'use strict'
// Step 2. Better naming
// Step 3. Use pretier
// Step 4. Change meaningful parameter names
// Step 5. Removed unnecessary assignments
// Step 6. Simplified logic

'use strict';

const Drop = (dictionary, ...keysToDelete) => {
  keysToDelete.forEach((key) => {
    if (dictionary.hasOwnProperty(key)) {
      delete dictionary[key];
    }
  });
  return dictionary;
};

module.exports = Drop;
