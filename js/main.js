let name;
let doctor;
let monster;
let tool;
let time;
let place;
let year;
let ending;
let image;
let verb;

let baseUrl = "https://doctor-who-adventure.firebaseio.com";
let url = baseUrl + "/who.json";
let currentID;


//Calculate Year
function calculateYear(time){
  let present = Math.floor(Math.random() * 20) + 1;
  let notPresent = Math.floor(Math.random() * 200) + 1;
  if (time === "present"){
    year = 2000 + present;
  } else if (time === "past"){
    year = 2000 - notPresent;
  } else {
    year = 2018 + notPresent;
  }
  console.log(year);
  return (year)
};

//Create Ending
function createEnding(monster){
  if (monster === "The Daleks"){
    ending = "The Doctor summons Missy and the three of you send The Daleks into the Time Vortex to think about their actions. The day is saved. But Missy sends you home. She doesn't like to share The Doctor. You are just happy she doesn't stuff you inside a Dalek body like she did to Clara."
  } else if (monster === "The Cybermen") {
    ending = "They want to upgrade everyone! So, The Doctor quickly uploads a worm into their mainframe, and they become confused long enough for The Doctor to send them into the Time Vortex! The day is saved."
  } else if (monster === "The Silurians") {
    ending = "Somehow a group of Silurian rebels have escaped their hibernation and want to create a new civilization for themselves. But The Doctor won't stand for fighting. Together you create a gentle sleep potion to subdue the Siluarians and take them back home. Somehow, you get infected with Silurian venom, and you don't make it. You are erased from history."
  } else if (monster === "The Master"){
    ending = "You are shocked. How can this be? The Master! It's true, and he's back. This time though, he has infiltrated Torchwood trying to steal their most dangerous weapons. But Captain Jack is too smart for him. He arrives just in time (through his vortex manipulator) and grabs The Master before he can use any of the weapons. Both Jack and The Master disapear."
  } else if (monster === "The Sontarans"){
    ending ="As you look closer, you realize The Sontarans are in the middle of absorbing much needed energy through their probe vents. You know that if you sever the connection abrubtly, The Sontarans will be helpless. And that's just what you do. But The Doctor thinks you are too violent, and sends you home."
  } else if (monster === "Davros"){
    ending = "It looks like Davros is alone, with no Daleks to help him. The Doctor believes this time he may have an advantage and attempts to reason with Davros. But you act first. You know his artifical eye is connected to his nervous system and a pointy stick to stab him. The Doctor says you are too much like Missy and sends you home."
  } else if (monster === "The Zygons"){
    ending = "Not the Zygons! They smell. They are slimy. Your first time in the TARDIS and you meet the Zygons. You are too busy complaing about your luck and don't realize that the closest Zygon has infected you with it's toxic venom. The Doctor has to take you to Sisters of the Infinite Schism to recover."
  } else if (monster === "The Weeping Angels"){
    ending = "You panic. The Doctor screams, 'Don't Blink'! You try to stay as still as possible with your eyes wide. The Doctor takes your hand and tries to move you away from their grasp, but it's too late. The Angels have touched you. Both you and The Doctor end up 200 into the past!"
  } else if (monster === "The Vashta Nerada") {
    ending = "The Vashta Nerada are the shadows that melt the flesh. You must both be careful to count the shadows. The Doctor cautions that you need leave this swarm alone - they are a small lost group, and he digs into his coat pockets and produces a chicken leg that he gives to the swarm. Then the two of you head for the planet New Vegas."
  } else if (monster === "The Silence") {
    ending = "Here's the problem: You can't remember seeing The Silence. And you can't describe The Silence. The TARDIS is drained of engery and your Vortex Manipulator isn't working. You keep forgetting what you are doing here and your Psychic Paper goes wonky. You spend 10 years trying find a way home, but you never realize that The Silence have been manipulating you the whole time."
  } else if (monster === "Clara"){
    ending ="You almost can't believe your eyes. Clara & Me are standing in front of you, smiling. Their travels in the 'other' TARDIS have sometimes put them dangerously close to aligning with The Doctor's travels. You are worried there will be a confrontation, but instead, all of you take the TARDIS to visit The Paternoster Gang sometime in the 1800s on Earth."
  } else if (monster === "The Judoon") {
    ending = "Something isn't right. Why are the Judoon here? It turns out that a prisoner from The Stormcage Containment Facility has escaped, and The Judoon are helping to reaquire this prisoner. Worrying that the prisoner is River Song, you send The Judoon on a wild good chase to Raxacoricofallapatorius!"
  } else if (monster ==="The Headless Monks"){
    ending = "At first, you don't see them, but you recognize their attack chanting. The Monks have joined The Shadow Proclamation to uphold galactic law. The Monks don't seem to be concerned with your presence. They are fighting with the Judoon for ultimate power of the law. You send a message with Psycic Paper to the Shadow Architect to find a peaceful solution."
  }
};

//Determine Image
function getImage(doctor){
  image = "";
  if (doctor === "Twelfth Doctor") {
    image = "Doctor12";
  } else if (doctor === "Eleventh Doctor"){
    image = "Doctor11";
  } else if (doctor === "Tenth Doctor"){
    image = "Doctor10";
  } else if (doctor === "Ninth Doctor") {
    image = "Doctor9";
  } else if (doctor === "Eighth Doctor"){
    image = "Doctor8";
  } else if (doctor === "Seventh Doctor") {
    image = "Doctor7";
  } else if (doctor === "Sixth Doctor") {
    image = "Doctor6";
  } else if (doctor === "Fifth Doctor") {
    image = "Doctor5";
  } else if (doctor === "Fourth Doctor") {
    image = "Doctor4";
  } else if (doctor === "Third Doctor") {
    image = "Doctor3";
  } else if (doctor === "Second Doctor") {
    image = "Doctor2";
  } else if (doctor === "First Doctor") {
    image = "Doctor1";
  }
  image = image + '.png';
  return (image);
};

//Display Adventure List
function displayAdventureList(){
  verb: "GET";

  var params = {
    url: url,
    verb: verb,
    success: function getData(adventures) {
      console.log(adventures);
      $(".table-body").html("");
      for (let id in adventures) {
        let adventure = adventures[id];
        let newTableRow = $("<tr id='" + id + "'></tr>");
        $(".table-body").append(newTableRow);
        newTableRow.append("<td class='adventure-name'>" + adventure.name + "</td>").append("<td class='adventure-doctor'>" + adventure.doctor + "</td>").append("<td class='adventure-year'>" + adventure.year + "</td>").append("<td class='adventure-planet'>" + adventure.planet + "</td>").append("<td class='adventure-tool'>" + adventure.tool + "</td>").append("<td class='adventure-with'>" + adventure.with + "</td>").append("<td class='delete'>" + adventure.delete + "</td>");
      }
    }
    };
    $.ajax(params);
}

$(".page").hide();
$(".questions-page1").show();
$(".questions-page2").show();
$(".submit-page-1").show();



//Collect Answers to Quiz Questions.
$(".page1").on("click", function(){
  //Values
  name = $("[name=user-name]").val();
  doctor = $("[name=month]").val();
  monster = $("[name=day]").val();
  place = $("[name=color]").val();
  time = $("[name=time]:checked").val();
  tool = $("[name=tool]").val();

  //Hide and Show
  $(".page").hide();
  $(".story").show();
  $("#list").show();


  $(".introduction").text(name + ", you have finally met the doctor. Actually, the " + doctor + "! You are over the moon excited and ask the Doctor to take you some place fun like Space Florida, but, as the Doctor often does, he grabs your hand, and says, 'RUN'!");

  calculateYear(time);

  $(".context").text("You have no time to ask questions. Before you realize it, you step out of the TARDIS on " + place + " in approximately the year " + year + ". Unfortunately, someone got here before you: " + monster + "! And it's just you, the " + doctor + " and your " + tool + ".");

  createEnding(monster);

  $(".ending").text(ending);

  getImage(doctor);

  $(".story-image").addClass("align-itmes-center img-fluid text-center doctor-image").prepend('<img src="' + image + '" /><br>');

  $(".doctor-caption").addClass("text-center").text(doctor);



});

$("#list").on("click", function(){
  $(".page").hide();
  $(".database-table").show();

  //Create Entry in DataBase
  let entry = {
    name: name,
    doctor: doctor,
    year: year,
    planet: place,
    tool: tool,
    with: monster,
    delete: "X",
  }

  verb = "POST";

  let entryAsJson = JSON.stringify(entry);
  console.log(entry);

  var params = {
    url: url,
    method: verb,
    data: entryAsJson,
    success: function() {
      displayAdventureList();
    }
  };
  $.ajax(params);
});

$("table").on("click", ".delete", function(){
  $(this).closest("tr").remove();
  //currentID = $(this).closest("tr").attr("id");
  //newUrl = baseUrl + "/who/" + currentID + ".json";
  //verb: "DELETE";

  //var params = {
    //url: newUrl,
    //method: verb
  //}
  //$.ajax(params);

})


