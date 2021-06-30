
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: Number
//O: N/A
function triangles(num) {
  let end = '';
  for(let i = 0; i < num; i++){
    //assigning '#' at each iteration until it hits the end
    end += '#';
    console.log(end);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: 2 Number
//O: N/A
function fizzBuzz(num1, num2) {
  for(let i = num1; i <= num2; i++){
    if(i % 15 === 0){
      console.log('fizzbuzz');
    }
    else if(i % 5 === 0) {
      console.log('buzz');
    }
    else if(i % 3 === 0) {
      console.log('fizz');
    }
    else{
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
