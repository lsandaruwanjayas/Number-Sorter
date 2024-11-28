const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));

  updateMinToMaxUI(inputValues.sort((a,b) => {return a-b}));
  updateMaxToMinUI(inputValues.sort((a,b) => {return b-a}));
};

const updateMinToMaxUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-min-value-${i}`);
    outputValueNode.innerText = num;
  });
};

const bubbleSortMinToMax = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

const selectionSortMinToMax = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
};

const insertionSortMinToMax = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i];
    let j = i-1;
    
    while (j >= 0 && array[j]>currValue) {
        array[j+1] = array[j];
        j--;
    }
    array[j+1] = currValue;
  }
  return array
};

const updateMaxToMinUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-max-value-${i}`);
    outputValueNode.innerText = num;
  });
};

const bubbleSortMaxToMin = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] < array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

const selectionSortMaxToMin = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[minIndex]) {
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
};

const insertionSortMaxToMin = (array) => {
    for (let i = 1; i < array.length; i++) {
      const currValue = array[i];
      let j = i-1;
      
      while (array[j]<currValue) {
          array[j+1] = array[j];
          j--;
      }
      array[j+1] = currValue;
    }
    return array
  };

sortButton.addEventListener("click", sortInputArray);
