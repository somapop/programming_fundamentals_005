// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {
  // set a variable as a counter //
  let count = 0;
  //loop through each key-value pair in the object//
  for (let key in object) {
    //in each loop iteration, increase the counter by 1//
    count++;
  }
  //when loop complete, return the counter//

  return count;
}

//

/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/

// Set a variable (currentMin) to store the smallest number//
function min(object) {
  const values = Object.values(object);
  //Loop through to get each value in the object
  let currentMin = values[0];
  values.forEach(function (n) {
    //If the value is smaller than currentMin
    if (n < currentMin) {
      //Update currentMin to be this value
      currentMin = n;
    }
  });
  //When the loop is completed return the counter.
  return currentMin;
}


//

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
// Set a variable (currentMax) to store the smallest number//
function max(object) {
  const values = Object.values(object);
    //Loop through to get each value in the object
    let currentMax = [0];
    values.forEach(function (n) {
      //If the value is larger than currentMax
      if (n > currentMax) {
        //Update currentMin to be this value
        currentMax = n;
      }
    
  });
//When the loop is completed return the counter.
return currentMax; // thinking maybe Math.max may have been more elegant!
}


                                                                      //


/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(obj) {
  // Set a variable () to clone an oject - object assign 
  let cloneObj = Object.assign({}, obj);
  //return the cloned object
  return cloneObj;
// overthought this one too and ended up in a quandary over deep and shallow cloning!!
}




                                                                      //


/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) { 
//Set a variable () to recieve back a value from a given key
  return object[key];
}
//return 






                                                                      //




/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) { }



                                                                      //



/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) { }


                                                                      //


/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) { }



                                                                      //


/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) { }




                                                                      //


// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) { }

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) { }

/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) { }

function setUpGlobalObject() {
        Object.size = size;
        Object.min = min;
        Object.max = max;
        Object.clone = clone;
        Object.get = get;
        Object.has = has;
        Object.sum = sum;
        Object.invert = invert;
        Object.addAll = addAll;
        Object.find = find;
        Object.every = every;
        Object.some = some;
      }

module.exports = setUpGlobalObject;