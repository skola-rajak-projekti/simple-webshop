
function orderItem(that) {

    $('#orderAmountModal').modal('hide');    

    amount = document.getElementById("item-amount").value;
    itemId = document.getElementById("item-id").value;
    kart = JSON.parse(window.localStorage.getItem('my-kart'));
    
    if (findItemById(itemId) != null) {
        el = findItemById(itemId)
        el.amount = amount;
        if(kart.count == 0 || kart.count == null)        
        {   kart.total = el.price*amount;
            kart.items = [];
            kart.count = 0;
        }else{
            kart.total += el.price*amount;        
        }
        kart.items.push(el);
        kart.count++;
    }

    window.localStorage.setItem('my-kart', JSON.stringify(kart));
 return false;   
}
