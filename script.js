'use strict';

const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const btnCloseModal=document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
console.log(btnOpenModal);

//iterate with for loop
for(let i=0;i<btnOpenModal.length;i++)
{
    document.querySelectorAll(".show-modal")[i].addEventListener("click",function()
    {
            modal.classList.remove("hidden");
            overlay.classList.remove("hidden");
    });
}
document.querySelector("body").addEventListener("keydown",function(event)
{
    if(event.key==="Escape")
    {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    }
});

btnCloseModal.addEventListener("click",function()
{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});

//same for overlay
overlay.addEventListener("click",function()
{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
});