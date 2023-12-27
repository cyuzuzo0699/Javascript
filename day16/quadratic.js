function solveQuadratic(a, b, c) {
    
    var discriminant = b * b - 4 * a * c;

    
    if (discriminant >= 0) {
       
        var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        return [root1, root2];
    } else {
       
        var realPart = -b / (2 * a);
        var imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);

        var root1 = realPart + ' + ' + imaginaryPart + 'i';
        var root2 = realPart + ' - ' + imaginaryPart + 'i';

        return [root1, root2];
    }
}

var a = parseFloat(prompt("Enter the coefficient a:"));
var b = parseFloat(prompt("Enter the coefficient b:"));
var c = parseFloat(prompt("Enter the coefficient c:"));

var roots = solveQuadratic(a, b, c);

console.log("Roots:", roots);
// const btnEl= document.querySelector(".btn")
// const newUser= {
//     name: 'Maria',
//     job: 'Teacher'
// };


// const clickHandler =async() =>{
//     try{
//         const res= await fetch('https://reqres.in/api/users',{
//         method: 'POST',
//     headers:{
//              'Content-Type': 'application/json'
//  },body: JSON.stringify(newUser)
// });
//         const data = await res.json();
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// };
// btnEl.addEventListener("click",clickHandler);