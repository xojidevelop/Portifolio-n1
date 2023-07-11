let elBody = document.querySelector('box-title')
let elName = document.querySelector('.name')
let elSurname = document.querySelector('.surname')
let elEmail = document.querySelector('.email')
let elPass = document.querySelector('.password')
let elNumver = document.querySelector('.number')
let elBtn = document.querySelector('.my-btn')
let elInfo = document.querySelector('.info')

elBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    // console.log(elName.value);
    // console.log(elSurname.value);
    // console.log(elEmail.value);
    // console.log(elPass.value);
    // console.log(elNumver.value);
    elInfo.innerHTML =`
        <h5 class="card-title">Name:${elName.value}</h5><br>
          <h5 class="card-title">Surname:${elSurname.value}</h5><br>
          <h5 class="card-title">Email:${elEmail.value}</h5><br>
          <h5 class="card-title">Password:${elPass.value}</h5><br>
          <h5 class="card-title">Number:${elNumver.value}</h5><br>
          `
          elBody.appendChild(elInfo)
})

