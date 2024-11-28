const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));
 
  updateMinToMaxUI(bubbleSortMinToMax(inputValues))
  updateMaxToMinUI(bubbleSortMaxToMin(inputValues))
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



sortButton.addEventListener("click", sortInputArray);
