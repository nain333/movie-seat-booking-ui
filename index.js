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
  for (j = 0; j < 2; j++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");

    if (occupiedSeats.includes(seatIndex + 1)) {
      seat.classList.add("occupied");
    }
    seatGrid.appendChild(seat);
    seatIndex += 1;
  }
}
// toggle seat selects on click
seatGrid.addEventListener('click',(e)=>{
    const seat =e.target;
    if(!seat.classList.contains('seat')){
        return;
    }
    if(seat.classList.contains('occupied')){
        return;
    }
    seat.classList.toggle('selected');

})






