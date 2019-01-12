const insertionSort = require('./insertion_sort');

const bucketSort = (array, bucketSize) => {
  if(array.length < 2) {
    return array;
  }

  const buckets = createBuckets(array, bucketSize);
  return sortBuckets(buckets);
}

const createBuckets = (array, bucketSize) => {
  let minValue = array[0];
  let maxValue = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    }
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  console.log(minValue, maxValue);

  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = [];

  for (let i = 0; i < bucketCount; i++) { //initialize each bucket
    buckets[i] = [];
  }

  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
    console.log(bucketIndex);
    buckets[bucketIndex].push(array[i]);
  }
  return buckets;
}

const sortBuckets = (buckets) => {
  const sortedArray = [];
  for (let i= 0; i< buckets.length; i++) {
    if (buckets[i] != null) {
      insertionSort(buckets[i]);
      sortedArray.push(...buckets[i]);
    }
  }

  return sortedArray;
}

let array1 = [6, 3, 0, 2, 7, 5];
console.log(bucketSort(array1, 2));