// genrate the seats
console.log("hi javascript");
const row = 8;
const seatGrid = document.querySelector(".seatGrid");
const occupiedSeats = [2, 5, 10, 15];
let seatIndex = 0;
console.log(seatGrid);
for (let i = 0; i < row; i++) {
  // 2rows
  for (let j = 0; j < 2; j++) {
    const seat = document.createElement("div");
    // assign seat number

    seat.dataset.index = Number(seatIndex + 1);

    seat.classList.add("seat");

    if (occupiedSeats.includes(seatIndex + 1)) {
      seat.classList.add("occupied");
    }
    seatGrid.appendChild(seat);
    seatIndex += 1;
  }

  const asile = document.createElement("div");
  seatGrid.appendChild(asile);

  // 4seats
  for (let j = 0; j < 4; j++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");
    seat.dataset.index = Number(seatIndex + 1);

    if (occupiedSeats.includes(seatIndex + 1)) {
      seat.classList.add("occupied");
    }
    seatGrid.appendChild(seat);
    seatIndex += 1;
  }
  // 1 asile

  const asile2 = document.createElement("div");
  seatGrid.appendChild(asile2);

  // 2 seats
  for (let j = 0; j < 2; j++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");
    seat.dataset.index = Number(seatIndex + 1);

    if (occupiedSeats.includes(seatIndex + 1)) {
      seat.classList.add("occupied");
    }
    seatGrid.appendChild(seat);
    seatIndex += 1;
  }
}
// toggle seat selects on click

seatGrid.addEventListener("click", (e) => {
  const seat = e.target;

  if (!seat.classList.contains("seat")) {
    return;
  }
  if (seat.classList.contains("occupied")) {
    return;
  }
  seat.classList.toggle("selected");
  const selectedSeatCounter =
    seatGrid.querySelectorAll(".seat.selected").length;
  const summarySeatsEl = document.querySelector("#count");
  summarySeatsEl.textContent = selectedSeatCounter;
  // total summary price
  updateTotal();
  selectedSeatSummary();

  console.log(selectedSeatCounter);
});

const movies = [
  { movieName: "Flash", moviePrice: 150 },
  { movieName: "Superman", moviePrice: 250 },
  { movieName: "Batman", moviePrice: 200 },
  { movieName: "Spiderman", moviePrice: 180 },
  { movieName: "Iron Man", moviePrice: 220 },
  { movieName: "Thor", moviePrice: 210 },
  { movieName: "Hulk", moviePrice: 170 },
  { movieName: "Captain America", moviePrice: 230 },
  { movieName: "Doctor Strange", moviePrice: 240 },
  { movieName: "Black Panther", moviePrice: 260 },
];
const selectMovieCon = document.querySelector(".movieSelect");
const selectMovie = document.createElement("select");
selectMovieCon.appendChild(selectMovie);
// create options
movies.forEach((movie) => {
  const option = document.createElement("option");

  option.value = movie.movieName;
  option.textContent = `${movie.movieName} - ₹${movie.moviePrice}`;
  option.dataset.price = movie.moviePrice;

  selectMovie.appendChild(option);
});
selectMovie.addEventListener("change", (e) => {
  const select = e.target;
  const option = select.options[select.selectedIndex];

  document.querySelector("#movieName").textContent = option.value;
  document.querySelector("#moviePrice").textContent =
    `₹ ${option.dataset.price}`;
  updateTotal();
  selectedSeatSummary();
});
// update Total

const updateTotal = function () {
  const select = document.querySelector("select");
  const option = select.options[select.selectedIndex];
  const moviePrice = Number(option.dataset.price);

  const selectedSeatCounter =
    document.querySelectorAll(".seat.selected").length;

  const summaryTotalPriceEl = document.querySelector("#total");
  summaryTotalPriceEl.textContent = `₹ ${moviePrice * selectedSeatCounter}`;
};
// selected Seats
const selectedSeatSummary = function () {
  const seatSummary = document.querySelector(".seatSummary");

  // 1. clear previous
  seatSummary.innerHTML = "";

  // 2. get selected seats
  const selectedSeats = seatGrid.querySelectorAll(".seat.selected");
  if (selectedSeats.length === 0) {
    seatSummary.innerHTML = "<hr> <small>No seats selected</small><hr>";
    return;
  }

  // 3. rebuild UI
  selectedSeats.forEach((seat, index) => {
    const span = document.createElement("span");
    span.textContent = `Seat: ${seat.dataset.index}`;
    seatSummary.appendChild(span);
  });
};
// cancel button
const cancelButton = document.querySelector("#cancel");

cancelButton.addEventListener("click", () => {
  const selectedSeats = seatGrid.querySelectorAll(".seat.selected");

  // remove class from each seat
  selectedSeats.forEach((seat) => {
    seat.classList.remove("selected");
  });

  // update UI properly
  updateTotal();
  selectedSeatSummary();
});
// continue button
const continueButton=document.querySelector('#continue');
continueButton.addEventListener('click',()=>{
  alert("Yay, your seats have been booked")
})