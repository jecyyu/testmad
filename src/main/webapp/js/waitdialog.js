
function initial() {

showWaitDialog();
setInterval("closeWaitDialog()",3000);


}

function showWaitDialog() {
    var h = $(document).height();
    $(".overlay").css({ "height": h });
    $(".showbox").css({ 'display': 'block' });
    $(".overlay").css({ 'display': 'block', 'opacity': '0.8' });
    // $(".showbox").stop(true).animate({ 'margin-top': '300px', 'opacity': '1' }, 200);
    $(".showbox").css({ 'margin-top': '300px', 'opacity': '1' });





}
function closeWaitDialog() {

    //  $(".showbox").stop(true).animate({ 'margin-top': '300px', 'opacity': '0' }, 400);
    $(".showbox").css({ 'margin-top': '300px', 'opacity': '0' });
    $(".overlay").css({ 'display': 'none', 'opacity': '0' });
    $(".showbox").css({ 'display': 'none' });
}