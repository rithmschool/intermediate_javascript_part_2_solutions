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
        var $newCol = $("<div>", { class: "col-md-4 col-12 mb-4"});
        var $newGif = $("<img>", {
          src: res.data[randomIdx].images.original.url,
          class: "w-100"
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
      }
    });
  });

  $("#remove").on("click", function() {
    $gifArea.empty();
  });

});
