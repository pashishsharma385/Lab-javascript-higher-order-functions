//#1 Array Slice

onst foods = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];

function slice_food(foods,x,y);
{

var mod_food   = foods.slice(x,y);
console.log(mod_food);

}
console.log(slice_food(food,1,3));


//#2: Array Splice
const city= ["delhi", "chennai", "haryana", "Bangalore"];
city.splice(2,0,"mumbai", "kolkata");
console.log(city);

//#3: Filter
const numberArray= [12,324,213,4,2,3,45,4234];
 const isEven = () => {
 	return numberArray.filter(number =>{
 		return number % 2 == 0;
 	}); 
 }
 console.log(isEven());
 
//#5: Map
 const arr = [11, 34, 20, 5, 53, 16];
 function fndsqr(arr){
  var newarray = arr.map(myFunction);
  }
function myFunction(num) {
  return num * num;
}
  
 //#6: Reduce
 var arr = [2, 3, 5, 10]
 function multiply(arr){
  var narr = arr.reduce(main);
  }
 function main(total, num){
  return total * num;
 }
