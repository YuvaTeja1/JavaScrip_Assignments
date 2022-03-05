function CreateObject(arr) {
    // Write your code here
    let object = {};
    let value = [];
    let key = [];
    for (let i=0;i<arr.length;i++){
        if (i%2 === 0){
            key.push(arr[i]);
        }else{
            value.push(arr[i]);
        }
    }
    key.forEach((key,i)=>object[key]=value[i])
    return object
}
module.exports = CreateObject;
