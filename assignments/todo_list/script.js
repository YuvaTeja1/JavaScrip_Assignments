let getList = document.getElementById('Main')
getList.addEventListener('click',addCompleteList)


let par1 = document.getElementById('completed')
let par2 = document.getElementById('pending')

let btnComplete = document.getElementById('btn1')
let btnPending = document.getElementById('btn2')

btnComplete.addEventListener('click',ShowTrue)
btnPending.addEventListener('click',ShowFalse)
getList.addEventListener('click',showAll)

function addCompleteList()
{
    let getInfo = new XMLHttpRequest();

    getInfo.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    getInfo.send();

    getInfo.onload = function() { 
        let list = this.responseText
        list = JSON.parse(list)
        for(ele of list){
            let divElem = document.createElement('div')
            divElem.innerHTML = `<p><b>${ele.title}</b><p><p>userId:${ele.userId}</p><p>id:${ele.id}</p>
            `
            divElem.setAttribute('style',"width: 45%; margin:5px;border: 1px solid white; padding:5px; display:inline-block;")

            if (ele.completed===true){
                divElem.setAttribute('class','complete')
                
                divElem.innerHTML += `<p>status:${ele.completed}`
                par1.appendChild(divElem)
            }
            else if (ele.completed===false){
                divElem.setAttribute('class','pend')
                
                divElem.innerHTML += `<p>status:${ele.completed}`
                par2.appendChild(divElem)
            }
        }

    }
    
}

function ShowTrue(){
par2.setAttribute('style','display:None')
par1.setAttribute('style','display:inline-block')
}

function ShowFalse(){
par1.setAttribute('style','display:None')
par2.setAttribute('style','display:inline-block')
}

function showAll(){
par1.setAttribute('style','display:inline-block')
par2.setAttribute('style','display:inline-block')
}