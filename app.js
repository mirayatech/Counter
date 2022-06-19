let count = 0;
document.getElementById("decrease__btn").onclick = function () {
  count -= 1;
  document.getElementById("countlabel").innerHTML = count;
};

document.getElementById("increase__btn").onclick = function () {
  count += 1;
  document.getElementById("countlabel").innerHTML = count;
};

document.getElementById("reset__btn").onclick = function () {
  count = 0;
  document.getElementById("countlabel").innerHTML = count;
};
