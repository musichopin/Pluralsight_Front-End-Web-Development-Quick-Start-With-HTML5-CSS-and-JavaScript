/* 
  index.js
*/
$(document).ready(function() {
  // *we use document.ready so that none of the js/jquery 
  // codes execute until document and elements are loaded correctly
  // 2nd benefit is we put all these codes inside local scope so that 
  // we can use same var/func names outside of scope*

  "use strict";

  // var msg = "hello JavaScript";
  // console.log(msg);

  // var resultsDiv = document.getElementById("results");
  // resultsDiv.innerHTML = "<p>This is from JavaScript</p>";
  // alt: resultsDiv.textContent("This is from JavaScript");


  // #1 printing
  var resultList = $("#resultList");
  resultList.text("This is from jQuery");
  // vers: resultList.html("<p>This is from jQuery</p>")


  // #2 events
  var toggleButton = $("#toggleButton");
  toggleButton.on("click", function() {
    resultList.toggle(500); //hides and shows
    // we want callback function to be executed when event is ready to be handled

    // toggleButton.text() returns the text
    if ($(this).text() == "Hide") $(this).text("Show");
    else $(this).text("Hide");
  });


  // #3 querying the document/dom
  var listItems = $("header nav li");
  listItems.css("font-weight", "bold");
  listItems.filter(":first").css("font-size", "18px");
  // memory inefficient:
  // $("header nav li:first").css("font-size", "18px");



  // var result = {
  //   name: "jQuery",
  //   language: "JavaScript",
  //   score: 4.5,
  //   showLog: function () {

  //   },
  //   owner: {
  //     login: "shawnwildermuth",
  //     id: 123456
  //   }
  // };

  // result.phoneNumber = "123-456-7890";

  // console.log(result.phoneNumber);




  // #4a manipulating the document/dom (1st stage)
  // // imitates the object coming from get req:
  // var results = [{
  //   name: "jQuery",
  //   language: "JavaScript",
  //   score: 4.5,
  //   showLog: function() {

  //   },
  //   owner: {
  //     login: "shawnwildermuth",
  //     id: 123456
  //   }
  // }, {
  //   name: "jQuery UI",
  //   language: "JavaScript",
  //   score: 3.5,
  //   showLog: function() {

  //   },
  //   owner: {
  //     login: "shawnwildermuth",
  //     id: 123456
  //   }
  // }];


  // resultList.empty();


  // // each() is similar to for each loop
  // $.each(results, function(i, item) {

  //   // we add styling to result and title classes in css file
  //   var newResult = $("<div class='result'>" +
  //     "<div class='title'>" + item.name + "</div>" +
  //     "<div>Language: " + item.language + "</div>" +
  //     "<div>Owner: " + item.owner.login + "</div>" +
  //     "</div>");

  //   // since hover() is jquery func we need newResult var 2 be jquery object.
  //   // that's why we wrapped newResult around "$(...)" above.
  //   // if we didn't use hover(), newResult wudnt need 2 be a jquery obj
  //   newResult.hover(function() {
  //     $(this).css("background-color", "lightgray");
  //     // this kw is dom element that we hover over
  //   }, function() {
  //     $(this).css("background-color", "transparent");
  //   });

  //   resultList.append(newResult);

  // });



  // #4b networking (async request) (2nd stage)
//   var gitHubSearch = "https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars" 
// //jQuery.get() makes a get req 2 github and gets the result back passing it 2 callback.
// //result is an object (r below) that contains the result of the query.
//   $.get(gitHubSearch, function(r, status) {
//     console.log(r.items); //r.items is array of objects
//     console.log(status);
//     if (status == "success") {
//       displayResults(r.items);
//     }
//   });

  // //alt: using promises we can chain methods which are self-describing
  // //we use done and fail methods with the object returned from get method
  // $.get(gitHubSearch)
  //  .done(function(r) {
  //    displayResults(r.items);
  //  })
  //  .fail(function(err) {
  //    console.log("Failed to query Github");
  //  })
  //  .done(function() {
  //    // called in either case, fail or success
  //  });



  // #4c working with form (ultimate stage)
  // when user submits the form we handle it
  $("#gitHubSearchForm").on("submit", function() {
// alt: $("#inputId").on("click", function() {    

    var searchPhrase = $("#searchPhrase").val();

    if (searchPhrase) { // searchPhrase must have been entered

      // takes the results from 2 form elements
      var langChoice = $("#langChoice").val();

      resultList.text("Performing search...");//we notify user search is happening

// query string için örnek:
// var gitHubSearch = "https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars"
      var gitHubSearch = "https://api.github.com/search/repositories?q=" + encodeURIComponent(searchPhrase);
//encodeURIComponent() used against special chars like # and + in search box

      if (langChoice != "All") { // github api doesnt bother with "all" in query string
        gitHubSearch += "+language:" + encodeURIComponent(langChoice);
      }

      if ($("#useStars").prop('checked') == true) {
// alt1: if($("#useStars").is(":checked"))
// alt2: if(document.getElementById('useStars').checked)
// not alt: if($("#useStars").val())
        gitHubSearch += "&sort=stars";
      }
      
      $.get(gitHubSearch)
        .success(function(r) { // r is an object
          // console.log(r.items);
          displayResults(r.items); // items is array of objects
        })
        .fail(function(err) {
          console.log("Failed to query GitHub");
        })
        .done(function() {
          // called in either case
        });
    } else {

      resultList.text("Please enter the Search Phrase"); 
    }

    return false;
// we use false 2 prevent the default action in form element on html
  });


  function displayResults(results) { //results is array of objects

    resultList.empty();

    $.each(results, function(i, item) {
      //loops through results array which might have several objects inside

// we add styling to result and title classes in css file
      var newResult = $("<div class='result'>" +
        "<div class='title'>" + item.name + "</div>" +
        "<div>Language: " + item.language + "</div>" +
        "<div>Owner: " + item.owner.login + "</div>" +
        "</div>");

// since hover() is jquery func we need newResult var 2 be jquery object.
// that's why we wrapped newResult around "$(...)" above.
// if we didn't use hover(), newResult wudnt need 2 be a jquery obj
      newResult.hover(function() {
        // make it darker
        $(this).css("background-color", "lightgray");
      }, function() {
        // reverse
        $(this).css("background-color", "transparent");
      });

      resultList.append(newResult);

    });
    
  }

});