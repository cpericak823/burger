$(function() {
    $("#submit").on("click", function() {

        //set userInput equal to a variable to be used as a query
        var userInput = $("#burger_name").val().trim();

        //call the create new burger function
        createNewBurger(userInput);
    });
    //define the createNewBurger function that adds the burger to the database, and posts the new data to the friends array 
    function createNewBurger(userInput) {

        //use this instead of the port since the url will change after pushing to heroku
        var currentURL = window.location.origin;
        console.log(userInput);

        //post the newly added data
        $.post(currentURL + "/", { burger_name: userInput }, function() {

            //jquery to update the when clicking submit on the the survey page and display name and image of closest match
            $(".burger_list").append("<li>" + userInput + "</li>" + "<button>" + "Devour It" + "</button>");
        });
    }
});
