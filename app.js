// Selectors
let count = 0;

// Decrease Button
document.getElementById("decrease__btn").onclick = function () {
  count -= 1;

  document.getElementById("countlabel").innerHTML = count;
};

// Increase Button
document.getElementById("increase__btn").onclick = function () {
  count += 1;

  document.getElementById("countlabel").innerHTML = count;
};

// Reset Button
document.getElementById("reset__btn").onclick = function () {
  count = 0;

  document.getElementById("countlabel").innerHTML = count;
};
