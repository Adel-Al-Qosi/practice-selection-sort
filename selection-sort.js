

function selectionSort(arr) {

  // Copy the original array

  // Create an array to store the sorted values

  // While the array is not empty...

    // Do not move this console.log

    // Find the index of the minimum value in the unsorted half

    // Save and remove the value at the min index

    // Add the min value to the end of the sorted array

    const array = [...arr]
    const sorted = []

    while (array.length !== 0) {
      console.log(sorted.join(","))
      let smallest = array[0]
      let indexOfSmallest = 0
      for (let i = 1; i < array.length; i++) {
        if (smallest > array[i]) {
          smallest = array[i]
          indexOfSmallest = i
        }
      }

      const spliced = array.splice(indexOfSmallest, 1)[0]

      sorted.push(spliced)
    }

    return sorted
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:

    // Do not move this console.log

    // Find the index of the minimum value in the unsorted half

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat

    let pointer = 0
    while (arr[pointer]) {
      console.log(arr.join(","));
      let smallest = arr[pointer]
      let indexOfSmallest = pointer
      for (let i = pointer; i < arr.length; i++) {
        if (smallest > arr[i]) {
          smallest = arr[i]
          indexOfSmallest = i
        }
      }

      const spliced = arr.splice(indexOfSmallest, 1)[0]

      arr.splice(pointer, 0, spliced)
      pointer++
    }

    return arr
}


module.exports = [selectionSort, selectionSortInPlace];
