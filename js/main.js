let name;
let doctor;
let day;
let tool;
let time;
let place;

//Calculate Year


//Collect Answers to Quiz Questions.
$("#page1").on("click", function(){
  //Values
  name = $("[name=user-name]").val();
  console.log (name);
  doctor = $("[name=month]").val();
  console.log(doctor);
  day = $("[name=day]").val();
  place = $("[name=color]").val();
  time = $("[name=time]:checked").val();
  tool = $("[name=tool]").val();

  //Hide and Show
  $(".questions-page1").hide();
  $(".submit-page-1").hide();
  $(".questions-page2").hide();

  $(".introduction").text(name + ", you have finally met the doctor. Actually, the " + doctor + "! You are over the moon excited and ask the Doctor to take you some place fun like Space Florida, but, as the Doctor often does, he grabs your hand, and says, 'RUN'!");

  $(".context").text("You have no time to ask questions. Before you realize it, you step out of hte TARDIS on " + place + " in the year ")

});


