$(document).ready(function () {
    var civ = sessionStorage.getItem('all');
    var kil = JSON.parse(sessionStorage.getItem('stats'));
    var ple =  civ - kil.length;
    console.log(kil.length);
    var result = sessionStorage.getItem('result');
    var allPlayers = JSON.parse(sessionStorage.getItem('allP'));
    var dieNum = JSON.parse(sessionStorage.getItem('dieNum'));
    console.log(dieNum);
    var day = Math.ceil(dieNum.length / 2);
    console.log(day);
    if(result==='平民胜利') {
        $('#civ-win').css('display', 'block')
        $('#textDDD').text("平民胜利" + "恭喜你们找出了杀手，声张正义");
    }else {
        $('#kil-win').css('display', 'block')
        $('#textDDD').text("杀手胜利"+"你知道吗，只有百分之八十的杀手可以取得胜利");
    }
    $('#all-ple').text('总人数'+civ+'人');
    $('#all-civ').text('平民'+ple+'人');
    $('#all-kil').text('杀手'+kil.length+'人');
    for (var i=0 ; i < day; i++ ) {
        var temp = "<div class=\"game-record\">\n"+
    "                   <div class=\"container-fluid\">\n" +
    "                       <div class=\"row \">\n"+
    "                           <div class=\"col-xs-7 text-box3\">"+ "第"+day+"天"+"</div>\n"+
    "                           <div class=\"col-xs-5 text-box4\">"+"0小时07分"+"</div>\n"+
    "                       </div>\n"+
    "                       <div class=\"row \">\n"+
    "                           <div class=\"col-xs-12 text-box5 txtout\">"+"</div>\n"+
    "                       </div>\n"+
    "                       <div class=\"row\">\n"+
    "                           <div class=\"col-xs-12 text-box5 txtout\">"+"</div>\n"+
    "                       </div>\n"+
    "                   </div>\n"+
    "               </div>\n";
        $('main:first').append(temp);
    }
    var txtOut= document.getElementsByClassName('txtout');
    for (var u=0;u<dieNum.length;u++){
        if(u % 2 !== 1){
            txtOut[u].innerHTML="晚上："+ allPlayers[dieNum[u]].number+"号被杀手杀死，"+allPlayers[dieNum[u]].number+"号是"+allPlayers[dieNum[u]].status
        }else {
            txtOut[u].innerHTML="白天："+ allPlayers[dieNum[u]].number+"号被投票杀死，"+allPlayers[dieNum[u]].number+"号是"+allPlayers[dieNum[u]].status
        }
    }
   $('.home').click(function () {
       var close = confirm("确定离开");
       if(close === true){
           location.href='./index.html';
           sessionStorage.clear();
       }
   })
});