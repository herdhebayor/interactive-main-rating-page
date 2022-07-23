// const submit = $("#submit")
// let rating = $(".button")
// console.log(rating.val())
// const hide = $("#rating")
// let input = $(".input span")
// console.log(input.value)
// let thanks = $("#thanks")

// rating.on("click", function change(e){
// $(this).css("background-color", "hsl(25, 97%, 53%)")
// input = $(this).text()
// console.log(input)
// e.preventDefault()

// })
// submit.on("click", function show(){
//     if(input === "0"){
//         alert("please select a rating")
//     }
//     else{
//         thanks.show()
//         hide.hide()
//     }
// })

// WITHOUT JQUERY
const rating = document.getElementById('rating')
const thanks = document.getElementById('thanks')
let text = document.getElementById('data')
const button =  document.getElementById('button')
 const submit = document.getElementById('submit');
 
   
//  for(let i = 0; i<button.length; i++){
//     button[i].addEventListener('click', function click(){
//       this.style.background = 'hsl(25, 97%, 53%)'
//       text.innerHTML = button[i].value
//     });
//     if(button[1] = click){
//       click= false
//     }
//  }
 button.addEventListener('click', e=>{
   const btn = e.target.innerHTML
   text.innerHTML = btn
 })


 function showThanks(){
   if(text.innerHTML ===" " ){
    return alert('please select a rating') 
      
   }
   else{
      
      rating.style.display= 'none'
      thanks.style.display = 'block'
   }
 }
 submit.addEventListener('click', showThanks)
