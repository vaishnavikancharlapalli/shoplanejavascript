$(function()
{
   
      var x =  localStorage.getItem("no.of.times") == null ? 0 : JSON.parse(localStorage.getItem("no.of.times"))
       $(".count").text(x)
    $(".driveimages").slick({
        dots:true,
        arrows:false,
        autoplay:true,
        autoplayspeed:1500,
        fade:true,
        fadespeed:1000
    })



   /* <!---- <div class="imagecard">
                <img class="image" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"/>
              <h3 class="headtype">Men Navy Blue Solid Sweatshirt</h3>
                <p class="desctype">United Colors Of Bentton</p>
                <span class="pricetype"> Rs 2599</span>
            </div>
        -->
        */
    
     function rendercloths(url,text,brand,cost)
     {
         var imagecard = $("<div>").addClass("imagecard")
         var image = $("<img>").attr({
             "src" : url,
         })
         var imagewrap = image.addClass("image")
         imagewrap.css("cursor","pointer")
         imagecard.append(imagewrap)
         var headtype = $("<h3>").addClass("headtype").text(text)
        headtype.css("margin-left","10px")
         imagecard.append(headtype)
        
         var desctype = $("<p>").addClass("desctype").text(brand)
         desctype.css("margin-left","10px")
         imagecard.append(desctype)
         var pricetype = $("<span>").addClass("pricetype").text(cost)
         pricetype.css("margin-left","10px")
         imagecard.append(pricetype)
         $(".maincards").append(imagecard)
        


        imagewrap.click(function(e)
         {
             var img = JSON.stringify(e.target.src)
            
            
            localStorage.setItem("clickedimage",img)

         
             location.assign("./productdetails.html")
         })


     }
     function renderclothsparttwo(url,text,brand,cost)
     {
        var imagecard = $("<div>").addClass("imagecard")
        var image = $("<img>").attr({
            "src" : url,
        })
        var imagewrap = image.addClass("image")
        imagewrap.css("margin-left","10px")
        imagewrap.css('cursor',"pointer")
        imagecard.append(imagewrap)
        var headtype = $("<h3>").addClass("headtype").text(text)
        headtype.css("margin-left","10px")
        imagecard.append(headtype)
        var desctype = $("<p>").addClass("desctype").text(brand)
        desctype.css("margin-left","10px")
        imagecard.append(desctype)
        var pricetype = $("<span>").addClass("pricetype").text(cost)
        pricetype.css("margin-left","10px")
        imagecard.append(pricetype)
        $(".maincardstwo").append(imagecard)


        imagewrap.click(function(e)
         {
             var img = JSON.stringify(e.target.src)
                  
             localStorage.setItem("clickedimage", img)
             location.assign("./productdetails.html")

        
         })
     }

    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(response)
    {
        var imagedata = response;
        for(var i=0;i< 5;i++)
        {
        rendercloths(imagedata[i].preview,imagedata[i].name,imagedata[i].brand,imagedata[i].price)
        }
        for(var i=5;i< 10;i++)
        {
        renderclothsparttwo(imagedata[i].preview,imagedata[i].name,imagedata[i].brand,imagedata[i].price)
        }
        
        
        

    })
    $(".shopcart").css("cursor","pointer")
    $(".shopcart").click(function()
    {
        location.assign("orderslist.html")
    })


})