function clickCounter() {
  var count = (localStorage.clickcount = Number(localStorage.clickcount) + 1);

  if (isNaN(count) === true) {
    count = localStorage.clickcount = 1;
    document.getElementById("result").innerHTML = count;
  } else {
    document.getElementById("result").innerHTML = count;
  }
}
