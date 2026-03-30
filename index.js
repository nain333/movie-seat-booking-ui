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
const movies = [
  { movieName: 'Flash', moviePrice: 150 },
  { movieName: 'Superman', moviePrice: 250 },
  { movieName: 'Batman', moviePrice: 200 },
  { movieName: 'Spiderman', moviePrice: 180 },
  { movieName: 'Iron Man', moviePrice: 220 },
  { movieName: 'Thor', moviePrice: 210 },
  { movieName: 'Hulk', moviePrice: 170 },
  { movieName: 'Captain America', moviePrice: 230 },
  { movieName: 'Doctor Strange', moviePrice: 240 },
  { movieName: 'Black Panther', moviePrice: 260 }
];
const selectMovieCon=document.querySelector('.movieSelect')
const selectMovie=document.createElement('select');
selectMovieCon.appendChild(selectMovie);
// create options
movies.forEach(movie => {
  const option = document.createElement('option');

  option.value = movie.movieName;
  option.textContent = `${movie.movieName} - ₹${movie.moviePrice}`;
  option.dataset.price = movie.moviePrice;

  selectMovie.appendChild(option);
});
selectMovie.addEventListener('change', (e) => {
  const select = e.target;
  const option = select.options[select.selectedIndex];

  document.querySelector('#movieName').textContent = option.value;
  document.querySelector('#moviePrice').textContent = `₹ ${option.dataset.price}`;
});









