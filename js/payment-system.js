var cardDiv = document.getElementById('paymentOption');
function showCard(){
    
    cardDiv.style.display = "block";
    document.getElementById("card").value = "card";
    document.getElementById("direct").value = "none";

    
       
}

function hideCard(){
    cardDiv.style.display = "none";
    
    document.getElementById("direct").value = "direct";
    document.getElementById("card").value = "none";
    
}
    

