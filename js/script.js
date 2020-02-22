$(document).ready(function(){
    $(".design").click(function(){
        $(".design-icon").toggle();
         $(".design-par").toggle();
    });
    $(".development").click(function(){
        $(".dev-icon").toggle();
        $(".dev-par").toggle();
    });
    $(".prod-mng").click(function(){
        $(".product-icon").toggle();
        $(".prod-par").toggle();
    });
//     $(".img1").mouseenter(function(){
//         $(".work4-par").show();
//     });
//     $(".img1").mouseleave(function(){
//         $(".work4-par").hide();
//     });
//     $(".img2").mouseenter(function(){
//         $(".work3-par").show();
//     });
//     $(".img2").mouseleave(function(){
//         $(".work3-par").hide();
//     });
//     $(".img3").mouseenter(function(){
//         $(".work2-par").show();
//     });
//     $(".img3").mouseleave(function(){
//         $(".work2-par").hide();
//     });
//     $(".img4").mouseenter(function(){
//         $(".work1-par").show();
//     });
//     $(".img4").mouseleave(function(){
//         $(".work1-par").hide();
//     });
//     $(".img5").mouseenter(function(){
//         $(".work5-par").show();
//     });
//     $(".img5").mouseleave(function(){
//         $(".work5-par").hide();
//     });
//     $(".img6").mouseenter(function(){
//         $(".work6-par").show();
//     });
//     $(".img6").mouseleave(function(){
//         $(".work6-par").hide();
//     });
//     $(".img7").mouseenter(function(){
//         $(".work7-par").show();
//     });
//     $(".img7").mouseleave(function(){
//         $(".work7-par").hide();
//     });
//     $(".img8").mouseenter(function(){
//         $(".work8-par").show();
//     });
//     $(".img8").mouseleave(function(){
//         $(".work8-par").hide();
//     });
//     $("#submit").click(function(event){
//         event.preventDefault();
//         var name=$("#name").value();
//         var email=$("#email").value();
//         var message=$("#message");
//         if(name==''||email==''||message==''){
//             alert("Please ensure you fill the form correctly!");
//         }
//         else{
//             alert("Hello" + name + "we have received your message.Thank you for reaching out to us.")
//         }
//     })
// });