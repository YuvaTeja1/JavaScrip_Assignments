let count = 0;

document.getElementsByTagName('button').addEventListener('click',function(){
    let data = document.getElementsByName('input').value;
    if (data == "")
{
    alert("Empty")
}
else{
    let divData = document.getElementsByClassName('todos');
    let p = document.createElement("p");
    p.setAttribute('key', count);
    count += 1
    p.textContent=document.getElementsByName('input').value;
    divData.appendChild(p)
    document.getElementsByName('input').value="";

    p.addEventListener('click',function(){
        divData.removeChild(p);
    })
}
}) 