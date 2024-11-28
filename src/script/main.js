const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));
  updateMinToMaxUI(inputValues);
  updateMaxToMinUI(inputValues);
};

const updateMinToMaxUI = (array = []) => {
    array.forEach((num, i) => {
      const outputValueNode = document.getElementById(`output-min-value-${i}`);
      outputValueNode.innerText = num;
    });
}

const updateMaxToMinUI = (array = []) => {
    array.forEach((num, i) => {
      const outputValueNode = document.getElementById(`output-max-value-${i}`);
      outputValueNode.innerText = num;
    });
}

sortButton.addEventListener("click", sortInputArray);
