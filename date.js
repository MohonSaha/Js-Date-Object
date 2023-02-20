// Wrong Approach

/*
const date1 = new Date('1971-03-26');
const date2 = new Date('1971-12-16');

if(date1 > date2){
    console.log("It's true");
}
else{
    console.log("it's false");
}
*/

// Right Approach: 

/* 
const date1 = new Date('1971-03-26');
const date2 = new Date('1971-12-16');

if(date1.getTime() < date2.getTime()){
    console.log("It's true");
}
else{
    console.log("it's false");
}
*/


// Library for js Date Object: Moment Js