canvas -
document.getElementById("myCanvas")
ctx= canvas.getContext(2d);

function my_touchmove(e)
{
    current_position_of_touch_x = e.touches[0].clientX = canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientX = canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_postion_of_touch_x, last_postion_of_touch_y);
    ctx.lineTo(current_postion_of_touch_x, last_postion_of_touch_y);
    ctx.stroke();

    last_postion_of_touch_x = current_position_of_touch_x;
    last_postion_of_touch_y = current_position_of_touch_y;
}

canvas.addEventListener("mousemove", my_mousemove
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvasoffsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (MouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_postion_of_x, last_postion_of_y)
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y)
        ctx stroke();
    }
}

last_postion_of_x = current_position_of_mouse_x
last_postion_of_y = current_position_of_mouse_y;