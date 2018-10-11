var nowTime;
var nowDate;
var nowEmotions=[];
var emotionArray=[];
var eventArray=[];
var dayArray=[];
var env;

$(document).ready(function(){
  $( "#insInformation" ).hide();

  $( "#insYes" ).change(function() {
    alert( "Handler for .change() called." );
  });
  $("#insYes").click(function() {
        $( "#insInformation" ).show();
        console.log("Something happened")
      })

    $("#register").click(function() {
      var fname=$("#firstname").val();
      var lname = $("#lastname").val();
      var address = $("#inputAddress").val();
      var city= $("#inputCity").val();
      var state=$("#inputState").val();
      var zip = $("#inputZip").val();
      var gender= $("#gender input[type='radio']:checked").val();
      var insurance = $("#insurance input[type='radio']:checked").val();



    });




})
