$(function() {

  var $gifArea = $("#gif-area");
  var $searchInput = $("#search");

  $("form").on("submit", function(e) {
    e.preventDefault();
    var searchTerm = $searchInput.val();
    $searchInput.val("");
    $.get(
      "http://api.giphy.com/v1/gifs/search",
      {
        q: searchTerm,
        api_key: "dc6zaTOxFJmzC"
      }
    ).then(function(res) {
      var numResults = res.data.length;
      if (numResults) {
        var randomIdx = Math.floor(Math.random() * numResults);
        var $newGif = $("<img>", { src: res.data[randomIdx].images.original.url})
        $gifArea.append($newGif);
      }
      debugger
    })
  });

  $("#remove").on("click", function() {
    $gifArea.empty();
  });

});
