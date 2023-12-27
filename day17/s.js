// function submitForm() {
//     const myForm = document.getElementById('form');

//     const formData = new FormData(myForm);

//     const name = formData.get('name');
//     const age = formData.get('age');
//     const address = formData.get('address');

//     console.log('Name:', name);
//     console.log('Age:', age);
//     console.log('address:', address);
// }
const formE = document.querySelector(formE);
formE.addEventListener('submit', event=>{
    event.preventDefault();

const formData= new formData(formE);
const data= new URLSearchParams(FormData);
})
fetch('https://reqres.in/api/users',{
method: 'POST',
Headers:{
    'content-Type':'application/x-www-form-urlencoded'
},
body: data
})
.then(res=>res.json())
.then(data =>console.log(data))
.catch(error=> console.log(error));
