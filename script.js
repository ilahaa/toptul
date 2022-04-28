// const btnMode = document.querySelector(".mode");
// const section= document.querySelector(".first-section");
// const texts = document.querySelectorAll('a');
// const mode=()=>{
//     if (btnMode.innerHTML == "dark") {
//         const modeName = "dark"; 
//         section.className = modeName;
//         texts.className = modeName;
//         localStorage.setItem('mode', modeName);
//         btnMode.innerHTML = 'light';

//     }else{
//         const modeName = "light"; 
//         section.className = modeName;
//         texts.className = modeName;
//         localStorage.setItem('mode', modeName);
//         btnMode.innerHTML = 'dark';
//     }
// }

// section.className = localStorage.getItem("mode");
// texts.className = localStorage.getItem("mode");
// btnMode.addEventListener('click',mode);


const modebutton = document.querySelector(".mode");
const changemode=()=>{
    document.body.classList.toggle("light");
}
modebutton.addEventListener("click", changemode); 