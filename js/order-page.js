var orders;
window.addEventListener('load', showOrders);

function showOrders(){

  orders = JSON.parse(localStorage.getItem('my-orders'));
    if(orders == null){
        noOrders = document.getElementById("no-orders-message");
        noOrders.innerHTML = "<h4 class='text-center'> Нисте ништа до сад поручивали</h4>";
    }else{         
        el = document.getElementById("order-list");             
        for( i = 0 ; i < orders.length ; i++)
        {
          pageContent ="<tr class='header' > <td colspan='10'> Поруџбина број  " + (i+1) + " </td> </tr>";
          pageContent +="<tr > <th> Назив производа</th> "+
                          "<th> Количина [кг] </th>"+
                          "<th> Цена [дин] </th>"+
                          "<th> Укупно [дин] </th>"+
                          "</tr>";
          

          for(j = 0; j < orders[i].kart.items.length; j++){
            item = orders[i].kart.items[j];
                pageContent += 
                    "<tr><td class='item-blue'>" + item.name +
                    "</td> <td>" + parseFloat(item.amount).toFixed(2) +
                    "</td> <td>" + parseFloat(item.price).toFixed(2) +             
                    "</td> <td> " +  orders[i].kart.total.toFixed(2) + " " +                
                    "</td></tr>";
                  
                  }
                  pageContent += "<tr><td colspan='3'> Dostava  </td><th > 220.00 </th></tr>";
                  bill = orders[i].kart.total+ 220.00
                  pageContent += "<tr><td  colspan='3'>Плаћено: " + orders[i].orderer.paymentmethod + " </td><td colspan='2'> "+ bill.toFixed(2)+" </td></tr>";
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