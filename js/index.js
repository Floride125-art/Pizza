$(document).ready(function() {
  $("#formFull").submit(function(event){
      
    function sizePizza() {
      var p_Size = document.getElementById("sizes").value;
      return parseInt(p_Size);
    }
    function crustPizza() {
      var p_Crust = document.getElementById("crusts").value;
      return parseInt(p_Crust);
    }
    function toppingPizza() {
      var p_Topping = document.getElementById("toppings").value;
      return parseInt(p_Topping);
    }
    function numberPizza() {
      var p_Number = document.getElementById("inputNumber").value;
      return parseInt(p_Number);
    }
    function getPizza(sizePizza, crustPizza, toppingPizza, quantity) {
      this.mySize = sizePizza;
      this.myCrust = crustPizza;
      this.myToppings = toppingPizza;
      this.myNumber = quantity;
    }
    var selectOption = new getPizza(sizePizza(), crustPizza(), toppingPizza(), numberPizza());
    var totalCost =
      (selectOption.mySize +
        selectOption.myCrust+
        selectOption.myToppings) *
        selectOption.myNumber;
        
        $(".results").show();
        document.getElementById("paraSize").innerHTML=selectOption.mySize + (" Rwf");
        document.getElementById("paraCrust").innerHTML= selectOption.myCrust + (" Rwf");
        document.getElementById("paraToppings").innerHTML=selectOption.myToppings + (" Rwf");
        document.getElementById("answer").innerHTML=totalCost+(" Rwf");
   
    event.preventDefault();
  });
});
$(document).ready(function(){
  $(".DeliverNotes").click(function(){
    $("#formD").show();
  });
});
