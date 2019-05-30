
$('img').hover(function(){
    console.log('data-alt-src value is', $(this).attr('src2'));
    var temp1 = $(this).attr('src2');
    var temp2 = $(this).attr('src');
    $(this).attr("src", temp1);
    $(this).attr("src2", temp2);
});