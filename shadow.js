$(document).ready(function() {
  $("carImg").draggable({
    drag: function() { make_shade() }
  });
  make_shade();
});

function make_shade() {
  var light = $("div#light_source");
  var light_pos = light.position();
  var light_x = light_pos.left + (light.width() / 2);
  var light_y = light_pos.top + (light.height() / 2);

  $(".needs_shadow").each(function() {
    var div1 = $(this);
    var div1_pos = div1.position();

    var div_x = div1_pos.left + (div1.width() / 2);
    var div_y = div1_pos.top + (div1.height() / 2);

    var left_diff = light_x - div_x;
    var top_diff = light_y - div_y;

    var left = (left_diff / 10) * -1;
    var top = (top_diff / 10) * -1;

    var distance = Math.sqrt(Math.pow(left_diff, 2) + Math.pow(top_diff, 2));
    distance = distance / 10;

    shadow_style = left + "px " + top + "px " + distance + "px #3f3f3f";
    div1.css("-moz-box-shadow", shadow_style);
    div1.css("-webkit-box-shadow", shadow_style);
    div1.css("box-shadow", shadow_style);
  });
}
