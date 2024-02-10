const hotel = [{price: 200}, {price: 100}, {price: 430}];

// n^2 - compare all munbers 

// O(2n) find min, max munbers 
// O(2) - sorted list, find first and last 

// Linear Complexity O(2n) Find Min, Max Numbers

function findMinMaxLinear(hotel) {
  let maxPrice = hotel[0].price;
  let minPrice = hotel[0].price;

  // First pass for max
  for (let i = 0; i < hotel.length; i++) {
    if (hotel[i].price > maxPrice) maxPrice = hotel[i].price;
  }

  // Second pass for min
  for (let i = 0; i < hotel.length; i++) {
    if (hotel[i].price < minPrice) minPrice = hotel[i].price;
  }

  return { minPrice, maxPrice }
}


// Constant Complexity O(2)
const getMaxMin = (list) => {
  const sorted = list.sort((a, b) => a.price - b.price);
  
  const minPrice = sorted[0].price;
  const maxPrice = sorted[sorted.length - 1].price;

  return { minPrice, maxPrice }
};

getMaxMin(hotel);
