const radixSort = (array, radixBase = 10) => {
  if (array.length < 2) {
    return array;
  }

  let minValue = 0;
  let maxValue = 0;

  for (let i = 0; i < array.length; i++) {
    if (minValue > array[i]) {
      minValue = array[i];
    }
    if (maxValue < array[i]) {
      maxValue = array[i];
    }
  }

  let significantDigit = 1;
  while ((maxValue - minValue) / significantDigit >= 1) {
    array = countingSortForRadix(array, radixBase, significantDigit, minValue);
    significantDigit *= radixBase;
  }

  return array;
}

const countingSortForRadix = (array, radixBase, significantDigit, minValue) => {
  let bucketsIndex;
  const buckets = [];
  const aux = [];
  for (let i = 0; i < radixBase; i++) {
    buckets[i] = 0;
  }

  for (let i = 0; i < array.length; i++) {
    bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
    buckets[bucketsIndex]++;
  }
  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1];
  }
  for (let i = array.length -1; i >= 0; i--) {
    bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
    aux[--buckets[bucketsIndex]] = array[i];
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = aux[i];
  }
  return array;
}

let array = [667, 300, 0, 56, 4, 78, 349, 5, 455, 23, 999];
console.log(radixSort(array));