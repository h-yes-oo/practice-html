$(document).ready(function(){
    var removeOriginalPrice = function(){
        var list = $(".prdList li:has(li[rel=\"할인판매가\"])");
        list.each(function(index,item){
            $(item).find("li[rel=\"판매가\"]").css("display","none");
        })
        console.log("finished!");
    }
    removeOriginalPrice();
    var removeErrorText = function(){
        $('.spec li:contains("할인판매가">")').each(function(index,item){
            console.log($(item).html().replace('할인판매가"&gt;',''));
            $(item).html($(item).html().replace('할인판매가"&gt;',''));
            $(item).attr("rel",'할인판매가');
        });
        $('.spec li:contains("판매가">")').each(function(index,item){
            console.log($(item).html().replace('판매가"&gt;',''));
            $(item).html($(item).html().replace('판매가"&gt;',''));
            $(item).attr("rel",'판매가');
        });
    }
    
    $(".moreBtn").click(function(){
        setTimeout(function(){
            console.log("start!");
            removeErrorText();
            removeOriginalPrice();
        },200);
    })
});