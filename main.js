var app = new Vue
(   {
    el:'#app',
    data:{
        product:'socks',
        //image:'C:\Users\user\Pictures\Saved Pictures',
        inventory:0,
        details : ["80% cotton","20% polyester","gender-netural"]
                //inStocks:false
        
    
        variant : [
                    {
                        variantId : 223,
                        variantColor: "green"
                    },
                    {
                        variantId : 223,
                        varintColor: "bule"
                    }
                ],
    Cart:0,
    },
    methods: 
    {
        addToCart: function(){
            this.cart +=1
        },
        updateProduct(variantImage)
        {
            this.image=variantImage
        }
    },

    
)}






/*var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })*/