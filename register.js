$(function(){
$("#my-form").submit(function(e){
    var value = $("#name").val();
     $('#p').text("Congratulations! "+ value  +" you are one step closer");
     e.preventDefault();
     
 $("#cus").show();
 });
});


   