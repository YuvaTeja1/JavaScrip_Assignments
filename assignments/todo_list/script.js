let count=0;

document.getElementsByTagName("button")[0].addEventListener('click',function(){
    let data=document.getElementsByTagName("input")[0].value;
    if(data=="")
{
    alert("Empty")
}
else{
    let div_data=document.getElementsByClassName("todos")[0];
    
    let p=document.createElement("p");
    p.setAttribute('key',count);
    //let key=0;
    count+=1;
    p.textContent=document.getElementsByTagName("input")[0].value;
    div_data.appendChild(p);
    document.getElementsByTagName("input")[0].value="";

    p.addEventListener('click',function(){
        div_data.removeChild(p);
    
    })
    
    
}


}) 