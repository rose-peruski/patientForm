var nowTime;
var nowDate;
var nowEmotions=[];
var emotionArray=[];
var eventArray=[];
var dayArray=[];
var env;

$(document).ready(function(){
  $( "#insInformation" ).hide();

  $("input[name='ins']:radio")
    .change(function() {
      $("#insInformation").toggle($(this).val() == "yes");
       });

    $("#register").click(function() {
      var fname=$("#firstname").val();
      var lname = $("#lastname").val();
      var address = $("#inputAddress").val();
      var city= $("#inputCity").val();
      var state=$("#inputState").val();
      var zip = $("#inputZip").val();
      var gender= $("#gender input[type='radio']:checked").val();
      var insurance = $("#insurance input[type='radio']:checked").val();
      var insName = $("#insName").val();
      var groupNo= $("#groupNo").val();
      var policyNo= $("#policyNo").val();
      var subName= $("#subName").val();
      var subDOB= $("#subDOB").val();

      console.log(insName);

    });




})
