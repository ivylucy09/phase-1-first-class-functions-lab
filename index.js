// Code your solution in this file!
// returnFirstTwoDrivers() function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  }
  
  // returnLastTwoDrivers() function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  
  // selectingDrivers array containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier() function
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    }
  }
  
  // fareDoubler() function using createFareMultiplier()
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler() function using createFareMultiplier()
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers() function
  const selectDifferentDrivers = function(drivers, fn) {
    return fn(drivers);
  }
  