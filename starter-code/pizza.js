//******* ITERATION 1
//add and remove pepperonni, mushrooms and green peppers from the pizza.
//Create the code to display those elements when the buttons are clicked


$(document).ready(function() {

  $('.btn-pepperonni').click(function(){
    console.log("hello");
    $(this).toggleClass('active');
    $('.pep').toggle();
    //all sections with the class .pep are removed or added based on toggle
    $('aside li').filter(":contains('$1 pepperonni')").toggle();
    printedPrice();
    //must be at the bottom after everything else has run, or else you'll
    //calculate wrong
  });

  $('.btn-mushrooms').click(function(){
    $(this).toggleClass('active');
    $('.mushroom').toggle();
    $('aside li').filter(":contains('$1 mushrooms')").toggle();
    printedPrice();
    //filters for li in <aside> that contain $1 mushrooms and
    //applies a toggle to them
  });

  $('.btn-green-peppers').click(function(){
    $(this).toggleClass('active');
    $('.green-pepper').toggle();
    $('aside li').filter(":contains('$1 green peppers')").toggle();
    printedPrice();
  });

  $('.btn-sauce').click(function(){
    $(this).toggleClass('active');
    $('.sauce').toggleClass('sauce-white');
    $('aside li').filter(":contains('$3 white sauce')").toggle();
    printedPrice();
  });

  $('.btn-crust').click(function(){
    $(this).toggleClass('active');
    $('.crust').toggleClass('crust-gluten-free');
    $('aside li').filter(":contains('$5 gluten-free crust')").toggle();
    printedPrice();
  });

  //********** ITERATION 2***************************
  //The last two buttons on the left are supposed to handle special options for
  //the sauce and crust of your pizza. Make it so regular sauce and crust are
  //selected by default. Also write the JavaScript code that will let users
  //select white sauce and gluten free crust if they want to choose them

  $('.crust').removeClass('crust-gluten-free');
  $('aside li').filter(":contains('$5 gluten-free crust')").hide();

  $('.sauce').removeClass('sauce-white');
  $('aside li').filter(":contains('$3 white sauce')").hide();

  // this hides both from the html view, however they are not completely removed
  //as would have happened if we used toggle



// ************************ ITERATION 3
//Write some JavaScript that will remove and add the buttons' active class appropriately.
//This is, if the ingredient is turned on, its button should have active. If the ingredient is off, remove the active class from the button.

  $('.btn-sauce').removeClass('active');  //makes the element "inactive"

  $('.btn-crust').removeClass('active');


//******** ITERATION 4 WAS ALREADY DONE IN ITERATION 2


//******************** ITERATION 5**********

function calculateTotalPrice(){
  var totalPrice = 10;
  $('aside li:visible').each(function(index, li){
    //.each(function(index, element) must fill in "index" for .each
    // all active elements have a display: visible

    totalPrice += parseFloat($(li).text()[1]);
    //takes totalPrice and are adding the value of all elements with the class "active", i.e. have a display of hidden
  });
  return totalPrice;
} //end calculateTotalPrice

function printedPrice(){
  // find the total price element and update its value
  return $('aside strong').html('$' + calculateTotalPrice());

}
printedPrice();

});
