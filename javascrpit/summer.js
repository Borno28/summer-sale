let total = 0; 


function handleclick(target){
    const selectedItemContainer = document.getElementById("selected-items")
   const itemName =  target.parentNode.childNodes[3].innerText;
   const li =document.createElement("li");
   li.innerText = itemName;
   selectedItemContainer.appendChild(li);


//    console.log(target.parentNode.childNodes[5].innerText.split(" ")[0]);
const price = target.parentNode.childNodes[5].innerText.split(" ")[0];
   total = parseFloat(total) + parseFloat(price);
//    console.log(total)

const firstTotal=document.getElementById("total").innerText=total;

// discount rate




}
function applyDiscount(target){
    var couponCode = document.getElementById("couponCode").value;
    var totalAmount = total; // Initial total amount before discount
    var discountedAmount = totalAmount; // Initialize discounted amount with total amount
    var afterDiscountAmountElement = document.getElementById("afterDiscountAmount");
    if (couponCode === "SELL200" && total>200 ) {
      // Apply a 20% discount if the coupon code is correct
      discountedAmount = totalAmount * 0.2; // 20% discount
    }
    else{
        discountedAmount=0;
        
    }
  
    var discountedAmountElement = document.getElementById("discountedAmount");
    discountedAmountElement.textContent = discountedAmount.toFixed(2);

    const lastTotal=document.getElementById("totalprice").innerText=totalprice;
    totalprice = total-discountedAmount;
    const finalprice=document.getElementById("totalprice").innerText=totalprice;
    console.log(totalprice);
  
}

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }


//  id "refreshButton" and an amount variable
const refreshButton = document.getElementById("refreshButton");
const amount = 0; // Replace this with your actual amount value

//  click event listener to the button
refreshButton.addEventListener("click", function() {
  
        location.reload();
  
});
