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
$(document).ready(function(){
  $("form#formD").submit(function(event){
      var Name = $("input#Name").val();
      var Phone = $("input#Phone").val();
      var Location = $("input#Location").val();
      alert("Dear " + Name + " Who is located at " + Location + " we will get back to you on " + Phone + " Whenever the Pizza are delivered to you");
      event.preventDefault();

  });

});
$(document).ready(function(){
  $("form").submit(function(){
      var inputName = $("input#inputName").val();
      alert(inputName + " we have received your message. Thank you for reaching out to us.");

  });

});
