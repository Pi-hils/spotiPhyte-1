$(function() {
  $("#userinput").keypress(function(e) {
      if(e.which == 13) {
        if ($(this).val() == "shop") {
          $("#commandlog").append($(this).val() + "<br/>");
          $("#commandlog").append(displayGoods() + "<br/>");
          $(this).val("");
          e.preventDefault();
        
        // else if ($(this).val() == "buy " + selection) {
        //   $("#commandlog").append($(this).val() + "<br/>");
        //   $("#commandlog").append(buy(selection) + "<br/>");
        //   $(this).val("");
        //   e.preventDefault();

        } else {
          $("#commandlog").append($(this).val() + "<br/>");
          $(this).val("");
          e.preventDefault();
        }
      }
  })
});
