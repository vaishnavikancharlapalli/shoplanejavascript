$(function()
{

    var x = localStorage.getItem("no.of.times") === null ? 0 : JSON.parse(localStorage.getItem("no.of.times"))
    $(".count").text(x)
    $(".orderstotal").text(x)
    $(".shopcart").css("cursor","pointer")
   /*
   <!---- <div class="orderedcard">
                <div class="orderimg">
                    <img class="orderimage" src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"/>
               </div>
               <div class="orderdetails">
                   <h3 class="ordername"> Men Navy T -Shirt</h3>
                    <p>X<span class="ordernumber">1</span></p>
                    <p class="ordercost"> Amount Rs : <span class="orderprice">2559</span></p>
                 </div>
            </div> -->
   */ 

   var listfromlocalstorage = localStorage.getItem("listdetails") === null ? [] : JSON.parse(localStorage.getItem("listdetails"))

   

  if(listfromlocalstorage.length !== 0)
   {
       for(var i=0;i< listfromlocalstorage.length;i++)
       {
           rendercard(listfromlocalstorage[i].preview,listfromlocalstorage[i].name,listfromlocalstorage[i].count,listfromlocalstorage[i].cost)
       }
   }
   else{
       $(".costcard").css("margin-left","110%")
   }
   console.log(listfromlocalstorage)

   var totalcost = 0
   for(var c= 0; c  < listfromlocalstorage.length;c++)
   {
       totalcost = totalcost  + listfromlocalstorage[c].count * listfromlocalstorage[c].cost
   }
   console.log(totalcost)
   $(".cardprice").text(totalcost)
   
   $(".cardplace").css("cursor","pointer")
   $(".cardplace").click(function()
   {
       location.assign("./orderconfirm.html")
   })


})
function rendercard(preview,name,count,price)
{

       var orderedcard = $("<div>").addClass("orderedcard")

       var orderimg = $("<div>").addClass("orderimg")
       orderedcard.append(orderimg)

       var orderimage  = $("<img>").attr({
           "src" : preview,
           "class" : "orderimage"
       })
       orderimg.append(orderimage)

       var orderdetails = $("<div>").addClass("orderdetails")
       var ordername = $("<h3>").addClass("ordername").text(name)
       orderdetails.append(ordername)
       var xnumber = $("<p>").text("X")
       var ordernumber = $("<span>").addClass("ordernumber").text(count) 
       xnumber.append(ordernumber)
       
       orderdetails.append(xnumber)

       var ordercost = $("<p>").addClass("ordercost").text("Amount Rs : ")
       var orderprice = $("<span>").addClass("orderprice").text(price*count)
       ordercost.append(orderprice)
        orderdetails.append(ordercost)
     
       orderedcard.append(orderdetails)
       var getlist = $(".ordered-items")
       getlist.append(orderedcard)
}
