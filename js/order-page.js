var orders;
window.addEventListener('load', showOrders);

function showOrders(){

  orders = JSON.parse(localStorage.getItem('my-orders'));
    if(orders == null){
        noOrders = document.getElementById("no-orders-message");
        noOrders.innerHTML = "<h4 class='text-center'> Niste jos nista do sad porucivali </h4>";
    }else{         
        el = document.getElementById("order-list");             
        for( i = 0 ; i < orders.length ; i++)
        {
          pageContent ="<tr class='header' > <td colspan='10'> Porudzbina br: " + (i+1) + " </td> </tr>";
          for(j = 0; j < orders[i].items.length; j++){
            item = orders[i].items[j];
                pageContent += 
                    "<tr><td class='item-blue'>" + item.name +
                    "</td> <td>" + item.amount +
                    "</td> <td>" + item.price +             
                    "</td> <td> <strong>" + item.price * item.amount * (1 - item.discount.value) + "din</strong>" +                
                    "</td></tr>";
                  }
              el.innerHTML += pageContent;
        }
    }

    
}

$(document).ready(function() {
  
    var ua = navigator.userAgent,
    event = (ua.match(/iPad/i)) ? "touchstart" : "click";
    if ($('.table').length > 0) {
      $('.table .header').on(event, function() {
        $(this).toggleClass("active", "").nextUntil('.header').css('display', function(i, v) {
          return this.style.display === 'table-row' ? 'none' : 'table-row';
        });
      });
    }
  })