$(function() {
  $("#userinput").keypress(function(e) {
    if(e.which == 13) {
      if ($(this).val() == "shop") {
        $("#commandlog").append($(this).val() + "<br/>");
        $("#commandlog").append(displayGoods() + "<br/>");
        $(this).val("");
        e.preventDefault();
      } else if ($(this).val() == "buy petals") {
        $("#commandlog").append($(this).val() + "<br/>");
        $("#commandlog").append("> " + buy("petals") + "<br/>");
        $(this).val("");
        e.preventDefault();
      } else if ($(this).val() == "buy plant pot") {
        $("#commandlog").append($(this).val() + "<br/>");
        $("#commandlog").append("> " + buy("plant pot") + "<br/>");
        $(this).val("");
        e.preventDefault();
      } else if ($(this).val() == "buy fertilizer") {
        $("#commandlog").append($(this).val() + "<br/>");
        $("#commandlog").append("> " + buy("fertilizer") + "<br/>");
        $(this).val("");
        e.preventDefault();
      } else if ($(this).val() == "harvest") {
        harvest()
        $("#commandlog").append($(this).val() + "<br/>");
        $("#commandlog").append("> " + "your plant has been harvested" + "<br/>");
        $(this).val("");
        e.preventDefault();
      } else if ($(this).val() == "help") {
        $("#commandlog").append($(this).val() + "<br/>");
        $("#commandlog").append("> " + "Command List:" + "<br/>" +
        "> harvest: collect gems from plant" + "<br/>" +
        "> shop: displays items for purchase" + "<br/>" +
        "> buy [item_name]: buy item for gems" + "<br/>");
        $(this).val("");
        e.preventDefault();
      } else {
        $("#commandlog").append($(this).val() + "<br/>");
        $("#commandlog").append("> " + "command not recognised" + "<br/>");
        $(this).val("");
        e.preventDefault();
      }
    }
  });
});
