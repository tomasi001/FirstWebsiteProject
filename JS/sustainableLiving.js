// call when document has loaded
$(function () {

// declare object to store saved links
  var userInfoList = {};
// declare variable to store values of userInfoList object
  let values;

  // create function to store userInfoList in local storage
  // and to alert how many stored items there are
  function storeAndAlert() {
    localStorage.setItem("userStoreList", JSON.stringify(userInfoList));
    values = Object.values(userInfoList);
    alert("You have " + values.length + " saved links.");
  }

//   reference button class and create on click function 
//   to store the link of the specified url
//   and call the storeAndAlert function
  $("#saveButton1").on("click", function () {
    var href = $(".url1").prop("href");
    userInfoList.smallWindowGarden = href;
    storeAndAlert();
  });

//   reference button class and create on click function 
//   to store the link of the specified url
//   and call the storeAndAlert function
  $("#saveButton2").on("click", function () {
    var href = $(".url2").prop("href");
    userInfoList.smallBalustradeGarden = href;
    storeAndAlert();
  });

//   reference button class and create on click function 
//   to store the link of the specified url
//   and call the storeAndAlert function
  $("#saveButton3").on("click", function () {
    var href = $(".url3").prop("href");
    userInfoList.smallWallGarden = href;
    storeAndAlert();
  });

//   reference button class and create on click function 
//   to store the link of the specified url
//   and call the storeAndAlert function
  $("#saveButton4").on("click", function () {
    var href = $(".url4").prop("href");
    userInfoList.smallLEDGarden = href;
    storeAndAlert();
  });

//   reference button class and create on click function 
//   to store the link of the specified url
//   and call the storeAndAlert function
  $("#saveButton5").on("click", function () {
    var href = $(".url5").prop("href");
    userInfoList.smallHydroponicGarden = href;
    storeAndAlert();
  });

//   reference button class and create on click function 
//   to store the link of the specified url
//   and call the storeAndAlert function
  $("#saveButton6").on("click", function () {
    var href = $(".url6").prop("href");
    userInfoList.mediumFoodForrest = href;
    storeAndAlert();
  });

//   reference button class and create on click function 
//   to store the link of the specified url
//   and call the storeAndAlert function
  $("#saveButton7").on("click", function () {
    var href = $(".url7").prop("href");
    userInfoList.mediumGardenBeds = href;
    storeAndAlert();
  });

//   reference button class and create on click function 
//   to store the link of the specified url
//   and call the storeAndAlert function
  $("#saveButton8").on("click", function () {
    var href = $(".url8").prop("href");
    userInfoList.mediumWallGarden = href;
    storeAndAlert();
  });

//   reference button class and create on click function 
//   to store the link of the specified url
//   and call the storeAndAlert function
  $("#saveButton9").on("click", function () {
    var href = $(".url9").prop("href");
    userInfoList.mediumLEDGarden = href;
    storeAndAlert();
  });

//   reference button class and create on click function 
//   to store the link of the specified url
//   and call the storeAndAlert function
  $("#saveButton10").on("click", function () {
    var href = $(".url10").prop("href");
    userInfoList.mediumHydroponicGarden = href;
    storeAndAlert();
  });

//   reference button class and create on click function 
//   to store the link of the specified url
//   and call the storeAndAlert function
  $("#saveButton11").on("click", function () {
    var href = $(".url11").prop("href");
    userInfoList.largeFoodForrest = href;
    storeAndAlert();
  });

//   reference button class and create on click function 
//   to store the link of the specified url
//   and call the storeAndAlert function
  $("#saveButton12").on("click", function () {
    var href = $(".url12").prop("href");
    userInfoList.largeGardenBeds = href;
    storeAndAlert();
  });

//   reference button class and create on click function 
//   to store the link of the specified url
//   and call the storeAndAlert function
  $("#saveButton13").on("click", function () {
    var href = $(".url13").prop("href");
    userInfoList.largeWallGarden = href;
    storeAndAlert();
  });

//   reference button class and create on click function 
//   to store the link of the specified url
//   and call the storeAndAlert function
  $("#saveButton14").on("click", function () {
    var href = $(".url14").prop("href");
    userInfoList.largeLEDGarden = href;
    storeAndAlert();
  });

//   reference button class and create on click function 
//   to store the link of the specified url
//   and call the storeAndAlert function
  $("#saveButton15").on("click", function () {
    var href = $(".url15").prop("href");
    userInfoList.largeHydroponicGarden = href;
    storeAndAlert();
  });

//   reference #viewList and create on click function to fetch the stored links
//   and to create a list element with a clickable link for each link stored
  $("#viewList").on("click", function () {
    userInfoList = JSON.parse(localStorage.getItem("userStoreList"));
    values = Object.values(userInfoList);
    const keys = Object.keys(userInfoList);
    for (let i = 0; i < values.length; i++) {
      $("#savedList").prepend(
        "<li>" + '<a href="' + values[i] + '">' + keys[i] + "</a>" + "</li>"
      );
    }
  });

// reference .removeButton and create on click function to set the object to an empty object
// and reload the page
  $(".removeButton").on("click", function () {
    userInfoList = {};
    localStorage.setItem("userStoreList", JSON.stringify(userInfoList));
    location.reload();
  });

// reference .commentToggle and create on click function to show and hide the comment section
  $("#commentToggle").on("click", function () {
    $("#commentForm").toggle(300);
  });

// reference #drop and create on mouse enter function to show the accordian drop down menu
  $("#drop").on("mouseenter", function () {
    let index = $(this).index();
    let $currBody = $(`.card:eq(${index}) .card-body`);
    $currBody.slideDown();
  });

  // when mouse leaves element with class of card
  // slide card up
  $(".card-body").on("mouseleave", function () {
    let index = $(this).index();
    let currBody = $(`.card:eq(${index}) .card-body`);
    currBody.slideUp();
  });

//   create variable to store timeOut
  var timeOut;

// reference .partyStart and create on click function to change the background 
// of the particle-js section
// also trigger chained effects which fade in and out and slide up and down
  $(".partyStart").on("click", function () {
    clearTimeout(timeOut);
    $("#particles-js").addClass("color");
    timeOut = setTimeout(function () {
      $("#particles-js").removeClass("color");
    }, 5000);
    $("#particles-js").fadeOut(1000).fadeIn(1000).slideUp(2000).slideDown(2000);
  });
});
