console.log("your index.js file is loaded correctly");



$("#mydownloadButton").click(function () {
    console.log("my download button was clicked");
    alert("Resume Downloaded");
});

$("#viewProjectButton").hover(
    function () {
        $(this).css("background-color", "#1E90FF");
    },
    function () {
        $(this).css("background-color", "#ff8fb6");
    }
);

$("#viewProjectButton2").hover(
    function () {
        $(this).css("background-color", "#1E90FF");
    },
    function () {
        $(this).css("background-color", "#ff8fb6");
    }
);