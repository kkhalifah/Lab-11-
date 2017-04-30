$(document).ready(function(){

    function vintagemotorcycles() {

      $.get('http://www.reddit.com/r/vintagemotorcycles.json').done(function(response) {

      console.log(response.data.children[0].data);

      for (var i = 0; i < response.data.children.length; i++) {
          var title = response.data.children[i].data.title;
          var author = response.data.children[i].data.author;
          var thumbnail = response.data.children[i].data.thumbnail;

            $('body').append('<div class=container><p id= myAuthor>' + author + '</p><p id=myTitle>' + title + '</p><img src=' + thumbnail + '></div>');
            $("div").append("<p id=myMain>") + title + ("</p>");
            //so I think the only issue is that you were appending your divs for each motorcycle to the body
            //if you make a div in your html page and give it an ID, something like (id="main"),
            //then use those sortable function calls like Adam had in his example on the "#main" div,
            //and then append your motorcycle divs to the "#main" div

      }

    });

  }
      vintagemotorcycles();
      //function here? separate file? inside above function?
      //call it with?
  //     $( function() {
  //   $( "#sortable" ).sortable();
  //   $( "#sortable" ).disableSelection();
  // } );
//end of doc ready function
});
