//variables
let num=0;


const container=document.querySelector(".container");




const btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    num=Number(prompt("Please enter grid size!"));
    grid_create(num);
})


function grid_create(num){
    container.innerHTML="";
    for(let i=0;i<num*num;i++){
        const box=document.createElement('div');
        box.classList.add("box");
        box.style.height=`${100/num}%`;
        box.style.width=`${100/num}%`;
        box.addEventListener('mouseenter',()=>{
            box.style.backgroundColor='blue';
        })
        container.appendChild(box);
    }
}
