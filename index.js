// genrate the seats
console.log("hi javascript");
const row = 8;
const seatGrid=document.querySelector('.seatGrid');
console.log(seatGrid);
for(let i = 0; i<row;i++){
    // 2rows
    for(let j=0; j<2;j++){
        const seat=document.createElement('div')
        seat.classList.add("seat")
        seatGrid.appendChild(seat);




    }
    
        const asile=document.createElement('div');
        seatGrid.appendChild(asile);
    
    // 4seats
    for(let j=0; j<4;j++){
        const seat=document.createElement('div')
        seat.classList.add("seat")
        seatGrid.appendChild(seat);


    }
    // 1 asile
    
        const asile2=document.createElement('div');
        seatGrid.appendChild(asile2);
    
    // 2 seats
    for(j=0; j<2;j++){
        const seat=document.createElement('div')
        seat.classList.add("seat")
        seatGrid.appendChild(seat);




    }

}
