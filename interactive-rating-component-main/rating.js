
const rating = document.getElementById('rating')
const thanks = document.getElementById('thanks')
let text = document.getElementById('data')
const button =  document.getElementById('button')
 const submit = document.getElementById('submit');
 
   

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
