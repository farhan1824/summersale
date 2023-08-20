function product(id){
    const product_value=document.getElementById(id)
    const text=product_value.innerText;
    const value=parseInt(text)
    return value;
}
// function onclick(id,product_id){
//     const get_id= document.getElementById(id).addEventListener("click",function(){
//         const call=product(product_id)
//         return call,get_id;
//     })
    
// }
function putValue(id,value){
    const call=document.getElementById(id)
    call.innerText=value
}
let total=0
function TotalValue(element){
    const value = element
 total = value+total;

   return total
}
function discount(number){
    const result = 0.2 * number;

    return result.toFixed(2);
}
