let prev_btn=document.querySelector(".control-prev");
let next_btn=document.querySelector(".control-next");
let imgs=document.querySelectorAll(".header-slider ul img");
let n=0
function onChange()
{
    for(let i=0;i<imgs.length;i++)
    {
        imgs[i].style.display="none";
    }
    imgs[n].style.display="block";
}
onChange();
prev_btn.addEventListener("click",(e)=>
{
    if(n>0)
    {
        n--;
    }
    else
    {
        n=imgs.length-1;
    }
    onChange();
})
next_btn.addEventListener("click",(e)=>
{
    if(n<imgs.length-1)
    {
        n++;
    }
    else{
        n=0;
    }
    onChange();
})

const scrollbar=documetn.querySelectorAll(".products");
for (const item of scrollbar)
{
    item.addEventListener("wheel",(evt)=>
    {
        evt.preventDefault();
        item.scrollLeft+=evt.deltaY;
    })
}