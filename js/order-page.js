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
          pageContent ="<tr class='header' > <td colspan='10'> Porudzbina # " + (i+1) + " </td> </tr>";
          pageContent +="<tr > <th> Naziv proizvoda </th> "+
                          "<th> Kolicina [kg] </th>"+
                          "<th> Cena [din] </th>"+
                          "<th> Ukupno [din] </th>"+
                          "</tr>";
          

          for(j = 0; j < orders[i].items.length; j++){
            item = orders[i].items[j];
                pageContent += 
                    "<tr><td class='item-blue'>" + item.name +
                    "</td> <td>" + parseFloat(item.amount).toFixed(2) +
                    "</td> <td>" + parseFloat(item.price).toFixed(2) +             
                    "</td> <td> " + parseFloat(item.price * item.amount * (1 - item.discount.value)).toFixed(2) + " " +                
                    "</td></tr>";
                  
                  }
                  pageContent += "<tr><td colspan='3'> Dostava  </td><th > 220.00 </th></tr>";
                  pageContent += "<tr><td  colspan='3'>Placeno: " + orders[i].orderer.paymentmethod + " </td><td colspan='2'> "+ parseFloat(orders[i].total).toFixed(2)+" </td></tr>";
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