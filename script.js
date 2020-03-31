function getDistance(pointOne,pointTwo)/*these function with two parameters ( two objects)*/

{
	var tirSide1 = pointTwo.x-pointOne.x; /*to calculator the triangle side1*/
	var tirSide2 = pointTwo.y-pointOne.y;/*to calculator the triangle side1*/
    /*now getting the distance by algbra */
    /* i used the function Math.sqrt after search online about the function can do square root in javascript*/
	var theDistanceBetweenTwoPoint =Math.sqrt( ((tirSide1*tirSide1) + (tirSide2*tirSide1)));
    return  theDistanceBetweenTwoPoint;
    
}
 /*now time to test the function*/
console.log(getDistance({x: -2, y: 1}, {x: 4, y: 3}));