
function orderItem(that) {

    $('#orderAmountModal').modal('hide');
    console.log(" LOKACIJA: " + window.location.href);

    amount = document.getElementById("item-amount").value;
    itemId = document.getElementById("item-id").value;
    kart = JSON.parse(window.localStorage.getItem('my-kart'));


    if (findItemById(itemId) != null) {
        el = findItemById(itemId)
        el.amount = amount;
        kart.push(el);
    }
    window.localStorage.setItem('my-kart', JSON.stringify(kart));
 return false;   
}
