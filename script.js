// document.getElementById('plus-btn-2').addEventListener('click', function () {
//     handleProductsChanged(true);
// })

// document.getElementById('minus-btn-2').addEventListener('click', function () {
//     handleProductsChanged(false);

// });
// function handleProductsChanged(isIncrase){
//     const caseinput = document.getElementById('case-count');
//     const caseCount = parseInt(caseinput.value);
//     //const caseNewCount = caseCount - 1;
//     let caseNewCount = caseCount;
//     if(isIncrase == true){
//         caseNewCount = caseCount + 1;
//     }
//     if(isIncrase == false && caseCount > 0){
//         caseNewCount = caseCount - 1;
//     }
//     caseinput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('cover-price').innerText = caseTotal;
// }



// document.getElementById('plus-btn-2').addEventListener('click', function(){
//    const caseinput = document.getElementById('case-count');
//    const caseCount = parseInt(caseinput.value);
//    const caseNewCount = caseCount + 1;
//    caseinput.value = caseNewCount;
//    const caseTotal = caseNewCount *59;
//     document.getElementById('cover-price').innerText = caseTotal;
// })

// document.getElementById('minus-btn-2').addEventListener('click', function(){
//     const caseoutput = document.getElementById('case-count');
//     const caseOutPutCount = parseInt(caseoutput.value);
//     const cseOutputNewCount = caseOutPutCount - 1;
//     caseoutput.value = cseOutputNewCount;
//     const caseOutputTotal = cseOutputNewCount *59;
//     document.getElementById('cover-price').innerText = caseOutputTotal;

// })


//------------------------------------This is id Function

/*------------------document.getElementById('plus-btn-2').addEventListener('click', function(){
    TotalProductsItem(true)
})
document.getElementById('minus-btn-2').addEventListener('click', function () {
    TotalProductsItem(false)
})

function TotalProductsItem(isIncrase) {
    const quntity = document.getElementById('case-count');
    const caseCount = parseInt(quntity.value);
    let caseNewCount = caseCount;
    if(isIncrase == true){
        caseNewCount = caseCount + 1;
    }
    if (isIncrase == false && caseCount > 0){
        caseNewCount = caseCount -1;
    }
    quntity.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('cover-price').innerText = caseTotal;
}
// --------------------------------*/






function allProductsList(product, incrase) {
    const productInput = document.getElementById(product + '-count');
    
    const productCount = getInputValue(product);
    let productNewCount = productCount;

    if (incrase == true) {
        productNewCount = productCount + 1;
    }
    if (incrase == false && productCount> 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    //const caseTotal = caseNewCount * 1219;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = productTotal;
   
    calcolateTotal()
} 

function calcolateTotal(){
   const phoneInput = document.getElementById('phone-count');
   const phoneCount = parseInt(phoneInput.value);

    const caseCount = getInputValue('case');

    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('totalPrice').innerText ='$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax').innerText = tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;

    
}

function getInputValue(product){
    const productInput = document.getElementById(product +'-count');
    const productCount = parseInt(productInput.value);

    return productCount;
}







// document.getElementById('plus-btn-2').addEventListener('click', function(){
// TotalProductsItem(true)
// })
// document.getElementById('minus-btn-2').addEventListener('click', function () {
// TotalProductsItem(false)
// })

// function TotalProductsItem(isIncrase) {
// const quntity = document.getElementById('case-count');
// const caseCount = parseInt(quntity.value);
// let caseNewCount = caseCount;
// if(isIncrase == true){
//     caseNewCount = caseCount + 1;
// }
// if (isIncrase == false && caseCount > 0){
//     caseNewCount = caseCount -1;
// }
// quntity.value = caseNewCount;
// const caseTotal = caseNewCount * 59;
// document.getElementById('case-total').innerText = caseTotal;
// }

//-------------------------------------------This is A Onclick Function

// function allProductsList(incrase){
//     const quntity = document.getElementById('phone-count');
//     const caseCount = parseInt(quntity.value);
//     let caseNewCount = caseCount;

//     if (incrase == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (incrase == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     quntity.value = caseNewCount;
//     const caseTotal = caseNewCount * 1219;
//     document.getElementById('phone-total').innerText = caseTotal;
// }

//-------------------------------This is Ful Card Section

// function priceCalculator(btnId, productQuantityId, productPrice, productRate) {
//     const button = document.getElementById(btnId);
//     button.addEventListener('click', function () {
        
//         const quantity = parseFloat(document.getElementById(productQuantityId).value);
//         if (btnId == 'plus-btn-1' || btnId == 'plus-btn-2') {
//             let finalQuantity = document.getElementById(productQuantityId).value = quantity + 1;
//             document.getElementById(productPrice).innerText = productRate * finalQuantity;

//         } else if (btnId == 'minus-btn-1' || btnId == 'minus-btn-2') {
//             if (quantity > 0) { // to avoid negative quantity
//                 document.getElementById(productQuantityId).value = quantity - 1;
//             }
//             finalQuantity = document.getElementById(productQuantityId).value;
//             document.getElementById(productPrice).innerText = productRate * finalQuantity;
//         } //click area end

      
        
//         // Final calculation area start
//         let totalMobilePrice = parseFloat(document.getElementById("mobile-phone-price").innerText);
//         let totalCoverPrice = parseFloat(document.getElementById("cover-price").innerText);
//         let totalPrice = totalMobilePrice + totalCoverPrice;
//         document.getElementById("total-price").innerText = totalPrice;
//         let taxRate = 5; // If tax rate = 5% (can vary)
//         document.getElementById("tax").innerText = Math.round(totalPrice * taxRate / 100);
//         document.getElementById("grand-total").innerText = totalPrice + Math.round(totalPrice * taxRate /
//             100);
//     });
// }
// priceCalculator('plus-btn-1', 'phone-quantity', "mobile-phone-price", 1219);
// priceCalculator('minus-btn-1', 'phone-quantity', "mobile-phone-price", 1219);
// priceCalculator('plus-btn-2', 'cover-quantity', "cover-price", 59);
// priceCalculator('minus-btn-2', 'cover-quantity', "cover-price", 59);



// var RemoveBtn = document.getElementById('remove-item');
// RemoveBtn.addEventListener('click', function (event) {
//   const ebentBtn = event.target;
//   ebentBtn.parentElement.parentElement.remove()
// })