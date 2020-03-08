var chatMessages = [
    {name: "ms1", msg: "Hey!! Remember I told you I am applying for graduate school this year? I got into my top two choices!!", delay: 2000, align: "left", showTime: true, time: "19:58"}, 
    {name: "ms2", msg: "But now I can't decide which program I shold attend", delay: 1000, align: "left", showTime: true, time: "19:58"}, 
    {name: "ms3", msg: "The first program offered me a higher stiend and has better funding packages, but the second program prepares me better and has more overlaps with my rsearch interest", delay: 2500, align: "left", showTime: true, time: "19:59"}, 
    {name: "ms4", msg: "I can't decide!! I really could use some advice. What do you think??", delay: 1200, align: "left", showTime: true, time: "19:59"}];
var chatDelay = 0;
  
function onRowAdded() {
    $('.chat-container').animate({
        scrollTop: $('.chat-container').prop('scrollHeight')
    });
};

$.each(chatMessages, function(index, obj) {
    chatDelay = chatDelay+2000;
    chatDelay2 = chatDelay+obj.delay;
    chatDelay3 = chatDelay2+10;
    scrollDelay = chatDelay;
    
    chatTimeString = " ";
    msgname = "."+obj.name;
    msginner = ".messageinner-"+obj.name;
    spinner = ".sp-"+obj.name;
    
    if (obj.showTime == true) {
        chatTimeString = "<span class='message-time'>"+obj.time+"</span>";
    }

    $(".chat-message-list").append("<li class='message-"+obj.align+" "+obj.name+"' hidden><div class='sp-"+obj.name+"'><span class='spinme-"+obj.align+"'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-"+obj.name+"' hidden><span class='message-text'>"+obj.msg+"</span>"+chatTimeString+"</div></li>");
    
    $(msgname).delay(chatDelay).fadeIn();
    $(spinner).delay(chatDelay2).hide(1);
    $(msginner).delay(chatDelay3).fadeIn();
    
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);

    chatDelay = chatDelay3;
});

function sendMsg() {

    if (document.getElementById("textfield").value == "") {
        return ;
    }
    
    var align = "right";
    var name = "ms_reply";
    var msg = document.getElementById("textfield").value;
    var chatTimeString = "<span class='message-time'>"+"20:10"+"</span>";

    document.getElementsByClassName("chat-message-list")[0].innerHTML = document.getElementsByClassName("chat-message-list")[0].innerHTML+"<li class='message-"+align+" "+name+"'><div class='messageinner-"+name+"'><span class='message-text'>"+msg+"</span>"+chatTimeString+"</div></li>";
    document.getElementById("textfield").value = "";

    document.getElementsByClassName("chat-container")[0].scrollTop = document.getElementsByClassName("chat-container")[0].scrollHeight;
}

document.getElementById("textfield").addEventListener("keyup", function(event) {
    event.preventDefault();

    if(event.keyCode == 13) { // enter
        sendMsg();
    }
})

function pressBtn() {
    sendMsg();
}
