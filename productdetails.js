/*
<!---- <div class="leftpreview">

                <img class="leftimage" src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"/>
            </div>
            <div class="rightpreview">
                <h1 class="productname">Men Navy Blue Solid Sweatshirt</h1>
                <p class="productbrand">United Colors of Benetton</p>
                <p class="productprice"> Price: Rs <span class="price">2599</span></p>
                <p class="pdescription">Description</p>
                <p class="productcontent">Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem</p>
                <p class="preview">Product Preview</p>
                <div class="shortsamples">
                    <img class="simage active"src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"/>
                    <img class="simage" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg"/>
                    <img class="simage"src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg"/>
                    <img class="simage" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg"/>
 
                </div>
                  <button class="addbtn">add to cart</button>
                </div>
*/
function renderproductdetails(urlimage,ptext,pbrand,pprice,productcontent,photos,getproductdetails)
{
  var leftpreview = $("<div>").addClass("leftpreview")
  var leftimage = $("<img>").attr({
      "src" :urlimage
  })
  var leftpreviewimage = leftimage.addClass("leftimage")
  leftpreview.append(leftpreviewimage)
  var rightpreview = $("<div>").addClass("rightpreview")
  var productname = $("<h1>").addClass("productname").text(ptext)
  rightpreview.append(productname)
  var productbrand = $("<p>").addClass("productbrand").text(pbrand)
  rightpreview.append(productbrand)
 var productprice = $("<p>").addClass("productprice").text("Price Rs:")
 var price = $("<span>").addClass("price").text(pprice)
 productprice.append(price)
 rightpreview.append(productprice)
var pdesc = $("<p>").addClass("pdescription").text("Description")
rightpreview.append(pdesc)
var pcontent = $("<p>").addClass("productcontent").text(productcontent)
rightpreview.append(pcontent)
var preview = $("<p>").addClass("preview").text("Product Preview")
rightpreview.append(preview)
var shortsamples = $("<div>").addClass("shortsamples")
/*var photos = [
    
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"
]
*/
for(var i=0;i<photos.length;i++)
    {
     var simage = $("<img>").attr(
         {
            "src" : photos[i],
            
         })
    simage.addClass("simage")
    simage.css("cursor","pointer")
    shortsamples.append(simage)
    if(i==0)
    {
        simage.addClass("active")
    }
   
    simage.click(function(event)
    {
        
        $("img").removeClass("active")
        var s = event.target.src
        $(this).toggleClass("active")
        leftimage.attr("src",s).css("width","30%")
        
       
    })
   
}




rightpreview.append(shortsamples)
var btn = $("<button>").addClass("addbtn").text("add to cart")

btn.css("cursor","pointer")
rightpreview.append(btn)
$(".maincontainer").append(leftpreview,rightpreview)

}

$(function()

{ 
    
    var getproductdetails = null
    var x =  localStorage.getItem("no.of.times") === null ? 0 : JSON.parse(localStorage.getItem("no.of.times"))
    $(".count").text(x)
    
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(response)
    {
         getproductdetails = response;
        
        var getimagefromlocalstorage =  JSON.parse(localStorage.getItem('clickedimage'))
        var pos= -1
         console.log( JSON.parse(localStorage.getItem('clickedimage')))
       for(var k=0;k< getproductdetails.length;k++)
        {
           if(getimagefromlocalstorage ===   getproductdetails[k].preview)
           {
             pos = k;
             renderproductdetails(getproductdetails[k].preview,getproductdetails[k].name,getproductdetails[k].brand,getproductdetails[k].price,getproductdetails[k].description,getproductdetails[k].photos,getproductdetails[k])
            
             }
         }


         
         $("button").click(function()
      {
        

       var count = $(".count")
       countvalue = parseInt(count.text())+1
        var xvalue = countvalue
        localStorage.setItem("no.of.times",JSON.stringify(countvalue))
        count.text(countvalue)
        
        var obj =
            {
                     "id"   : getproductdetails[pos].id,
                    "preview" : getproductdetails[pos].preview,
                    "count": 1,
                    "name" :getproductdetails[pos].name,
                    "cost" : getproductdetails[pos].price
            }
    
     var list = localStorage.getItem("listdetails") === null ||  localStorage.getItem("listdetails") === "" || localStorage.getItem("listdetails").length <= 0 ? [] : JSON.parse(localStorage.getItem("listdetails"))
     
     var position = -1
     
     for(var  i =0 ; i < list.length;i++)
     {
         if(parseInt(list[i].id) == parseInt(getproductdetails[pos].id))
         {
             position = i
            
         }
    
    
     }
  
   
     if(position > -1) 
     {
      
        list[position].count = list[position].count + 1
        
    localStorage.setItem("listdetails",JSON.stringify(list))
     
     }
     else{
        list.push(obj)
        localStorage.setItem("listdetails",JSON.stringify(list))


     }
       


/*
        if(xvalue > 1 && list[0].preview === getimagefromlocalstorage)
        {
         
           var list = localStorage.getItem("listdetails") === null ? [] : JSON.parse(localStorage.getItem("listdetails"))
               list[0].count = list[0].count + 1
           localStorage.setItem("listdetails",JSON.stringify(list))
            
        }
        else{
     
         var obj =
            {
                   "id"   : getproductdetails[pos].id,
                    "preview" : getproductdetails[pos].preview,
                    "count": 1,
                    "name" :getproductdetails[pos].name
            }
               
               var list = localStorage.getItem("listdetails") === null ? [] : JSON.parse(localStorage.getItem("listdetails"))
                list.push(obj)
                localStorage.setItem("listdetails",JSON.stringify(list))
        }
     
*/
    })  



    
    $(".shopcart").css("cursor","pointer")
    $(".shopcart").click(function()
    {
        location.assign("orderslist.html")
    })

      

        
    
    
       
    
            




       
       
        
    })
    
})
















    



            







