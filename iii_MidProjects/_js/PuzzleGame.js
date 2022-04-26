var moveCount = 0;

//for testing github fork
console.log(moveCount);

function to(){
    var getVal = moveCount;             //傳移動次數給下個頁面排名
    document.location.href="signForRank.html?moves="+getVal;
}

function toInfo(){  //跳轉到名畫介紹頁面
    document.location.href="info.html";
}


function start(){                   //random所有圖片
    var boxPosition = new Array();
    while(boxPosition.length<9){
        var boxRandom = Math.round(Math.random() *100);     //隨機產生0-99
        if((boxRandom == 11) || (boxRandom == 12) || (boxRandom == 13) || (boxRandom == 21) || (boxRandom == 22) || (boxRandom == 23) || (boxRandom == 31) || (boxRandom == 32) || (boxRandom == 33)){
            if(!boxPosition.includes(boxRandom)){               //符合條件的進來，沒存過的數才存
                boxPosition[boxPosition.length] = boxRandom;    //將11-33存入陣列 
            }
        }
    }
    document.getElementById('n11').textContent = boxPosition[0];
    document.getElementById('n11').style.background = 'url(image/'+boxPosition[0]+'.png)';

    document.getElementById('n12').textContent = boxPosition[1];
    document.getElementById('n12').style.background = 'url(image/'+boxPosition[1]+'.png)';

    document.getElementById('n13').textContent = boxPosition[2];
    document.getElementById('n13').style.background = 'url(image/'+boxPosition[2]+'.png)';

    document.getElementById('n21').textContent = boxPosition[3];
    document.getElementById('n21').style.background = 'url(image/'+boxPosition[3]+'.png)';

    document.getElementById('n22').textContent = boxPosition[4];
    document.getElementById('n22').style.background = 'url(image/'+boxPosition[4]+'.png)';

    document.getElementById('n23').textContent = boxPosition[5];
    document.getElementById('n23').style.background = 'url(image/'+boxPosition[5]+'.png)';

    document.getElementById('n31').textContent = boxPosition[6];
    document.getElementById('n31').style.background = 'url(image/'+boxPosition[6]+'.png)';

    document.getElementById('n32').textContent = boxPosition[7];
    document.getElementById('n32').style.background = 'url(image/'+boxPosition[7]+'.png)';

    document.getElementById('n33').textContent = boxPosition[8];
    document.getElementById('n33').style.background = 'url(image/'+boxPosition[8]+'.png)';


    document.getElementById('moves').textContent = "移動次數： 0";
    moveCount = 0;
}



function move(box){
    if(document.getElementById(box).textContent != '11'){
        // console.log(`${boxContent}`);
        switch(box){
            case 'n11':
                if(document.getElementById('n12').textContent == '11'){
                    let tempContent =  document.getElementById('n12').textContent;        //把原本位置的值暫存
                    document.getElementById('n12').textContent = document.getElementById('n11').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n11').textContent = tempContent;             //再給空白格子新的位置的值
                    
                    document.getElementById('n11').style.background = 'url(image/'+document.getElementById('n11').textContent+'.png)';
                    document.getElementById('n12').style.background = 'url(image/'+document.getElementById('n12').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
                if(document.getElementById('n21').textContent == '11'){
                    let tempContent =  document.getElementById('n21').textContent;        //把原本位置的值暫存
                    document.getElementById('n21').textContent = document.getElementById('n11').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n11').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n11').style.background = 'url(image/'+document.getElementById('n11').textContent+'.png)';
                    document.getElementById('n21').style.background = 'url(image/'+document.getElementById('n21').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
                if(finish()){
                    
                    document.getElementById('score').style.visibility = "visible";
                    document.getElementById('info').style.visibility = "visible";
                    document.getElementById('fin').style.color = "rgb(207, 87, 57)"
                    document.getElementById('fin').innerHTML = "Congrats! You Finished!!<br>恭喜你！過關啦！！";
                }
            break;
            case 'n12':
                if(document.getElementById('n11').textContent == '11'){
                    let tempContent =  document.getElementById('n11').textContent;        //把原本位置的值暫存
                    document.getElementById('n11').textContent = document.getElementById('n12').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n12').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n12').style.background = 'url(image/'+document.getElementById('n12').textContent+'.png)';
                    document.getElementById('n11').style.background = 'url(image/'+document.getElementById('n11').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
                if(document.getElementById('n22').textContent == '11'){
                    let tempContent =  document.getElementById('n22').textContent;        //把原本位置的值暫存
                    document.getElementById('n22').textContent = document.getElementById('n12').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n12').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n12').style.background = 'url(image/'+document.getElementById('n12').textContent+'.png)';
                    document.getElementById('n22').style.background = 'url(image/'+document.getElementById('n22').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
                if(document.getElementById('n13').textContent == '11'){
                    let tempContent =  document.getElementById('n13').textContent;        //把原本位置的值暫存
                    document.getElementById('n13').textContent = document.getElementById('n12').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n12').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n12').style.background = 'url(image/'+document.getElementById('n12').textContent+'.png)';
                    document.getElementById('n13').style.background = 'url(image/'+document.getElementById('n13').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
            break;
            case 'n13':
                if(document.getElementById('n12').textContent == '11'){
                    let tempContent =  document.getElementById('n12').textContent;        //把原本位置的值暫存
                    document.getElementById('n12').textContent = document.getElementById('n13').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n13').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n13').style.background = 'url(image/'+document.getElementById('n13').textContent+'.png)';
                    document.getElementById('n12').style.background = 'url(image/'+document.getElementById('n12').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
                if(document.getElementById('n23').textContent == '11'){
                    let tempContent =  document.getElementById('n23').textContent;        //把原本位置的值暫存
                    document.getElementById('n23').textContent = document.getElementById('n13').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n13').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n13').style.background = 'url(image/'+document.getElementById('n13').textContent+'.png)';
                    document.getElementById('n23').style.background = 'url(image/'+document.getElementById('n23').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
            break;
            case 'n21':
                if(document.getElementById('n11').textContent == '11'){
                    let tempContent =  document.getElementById('n11').textContent;        //把原本位置的值暫存
                    document.getElementById('n11').textContent = document.getElementById('n21').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n21').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n11').style.background = 'url(image/'+document.getElementById('n11').textContent+'.png)';
                    document.getElementById('n21').style.background = 'url(image/'+document.getElementById('n21').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
                if(document.getElementById('n22').textContent == '11'){
                    let tempContent =  document.getElementById('n22').textContent;        //把原本位置的值暫存
                    document.getElementById('n22').textContent = document.getElementById('n21').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n21').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n22').style.background = 'url(image/'+document.getElementById('n22').textContent+'.png)';
                    document.getElementById('n21').style.background = 'url(image/'+document.getElementById('n21').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
                if(document.getElementById('n31').textContent == '11'){
                    let tempContent =  document.getElementById('n31').textContent;        //把原本位置的值暫存
                    document.getElementById('n31').textContent = document.getElementById('n21').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n21').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n31').style.background = 'url(image/'+document.getElementById('n31').textContent+'.png)';
                    document.getElementById('n21').style.background = 'url(image/'+document.getElementById('n21').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
            break;
            case 'n22':
                if(document.getElementById('n12').textContent == '11'){
                    let tempContent =  document.getElementById('n12').textContent;        //把原本位置的值暫存
                    document.getElementById('n12').textContent = document.getElementById('n22').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n22').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n12').style.background = 'url(image/'+document.getElementById('n12').textContent+'.png)';
                    document.getElementById('n22').style.background = 'url(image/'+document.getElementById('n22').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
                if(document.getElementById('n21').textContent == '11'){
                    let tempContent =  document.getElementById('n21').textContent;        //把原本位置的值暫存
                    document.getElementById('n21').textContent = document.getElementById('n22').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n22').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n21').style.background = 'url(image/'+document.getElementById('n21').textContent+'.png)';
                    document.getElementById('n22').style.background = 'url(image/'+document.getElementById('n22').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
                if(document.getElementById('n23').textContent == '11'){
                    let tempContent =  document.getElementById('n23').textContent;        //把原本位置的值暫存
                    document.getElementById('n23').textContent = document.getElementById('n22').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n22').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n23').style.background = 'url(image/'+document.getElementById('n23').textContent+'.png)';
                    document.getElementById('n22').style.background = 'url(image/'+document.getElementById('n22').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
                if(document.getElementById('n32').textContent == '11'){
                    let tempContent =  document.getElementById('n32').textContent;        //把原本位置的值暫存
                    document.getElementById('n32').textContent = document.getElementById('n22').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n22').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n32').style.background = 'url(image/'+document.getElementById('n32').textContent+'.png)';
                    document.getElementById('n22').style.background = 'url(image/'+document.getElementById('n22').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
            break;
            case 'n23':
                if(document.getElementById('n13').textContent == '11'){
                    let tempContent =  document.getElementById('n13').textContent;        //把原本位置的值暫存
                    document.getElementById('n13').textContent = document.getElementById('n23').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n23').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n13').style.background = 'url(image/'+document.getElementById('n13').textContent+'.png)';
                    document.getElementById('n23').style.background = 'url(image/'+document.getElementById('n23').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
                if(document.getElementById('n22').textContent == '11'){
                    let tempContent =  document.getElementById('n22').textContent;        //把原本位置的值暫存
                    document.getElementById('n22').textContent = document.getElementById('n23').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n23').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n22').style.background = 'url(image/'+document.getElementById('n22').textContent+'.png)';
                    document.getElementById('n23').style.background = 'url(image/'+document.getElementById('n23').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
                if(document.getElementById('n33').textContent == '11'){
                    let tempContent =  document.getElementById('n33').textContent;        //把原本位置的值暫存
                    document.getElementById('n33').textContent = document.getElementById('n23').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n23').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n33').style.background = 'url(image/'+document.getElementById('n33').textContent+'.png)';
                    document.getElementById('n23').style.background = 'url(image/'+document.getElementById('n23').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
            break;
            case 'n31':
                if(document.getElementById('n21').textContent == '11'){
                    let tempContent =  document.getElementById('n21').textContent;        //把原本位置的值暫存
                    document.getElementById('n21').textContent = document.getElementById('n31').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n31').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n21').style.background = 'url(image/'+document.getElementById('n21').textContent+'.png)';
                    document.getElementById('n31').style.background = 'url(image/'+document.getElementById('n31').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
                if(document.getElementById('n32').textContent == '11'){
                    let tempContent =  document.getElementById('n32').textContent;        //把原本位置的值暫存
                    document.getElementById('n32').textContent = document.getElementById('n31').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n31').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n32').style.background = 'url(image/'+document.getElementById('n32').textContent+'.png)';
                    document.getElementById('n31').style.background = 'url(image/'+document.getElementById('n31').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
            break;
            case 'n32':
                if(document.getElementById('n22').textContent == '11'){
                    let tempContent =  document.getElementById('n22').textContent;        //把原本位置的值暫存
                    document.getElementById('n22').textContent = document.getElementById('n32').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n32').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n22').style.background = 'url(image/'+document.getElementById('n22').textContent+'.png)';
                    document.getElementById('n32').style.background = 'url(image/'+document.getElementById('n32').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
                if(document.getElementById('n31').textContent == '11'){
                    let tempContent =  document.getElementById('n31').textContent;        //把原本位置的值暫存
                    document.getElementById('n31').textContent = document.getElementById('n32').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n32').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n31').style.background = 'url(image/'+document.getElementById('n31').textContent+'.png)';
                    document.getElementById('n32').style.background = 'url(image/'+document.getElementById('n32').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
                if(document.getElementById('n33').textContent == '11'){
                    let tempContent =  document.getElementById('n33').textContent;        //把原本位置的值暫存
                    document.getElementById('n33').textContent = document.getElementById('n32').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n32').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n33').style.background = 'url(image/'+document.getElementById('n33').textContent+'.png)';
                    document.getElementById('n32').style.background = 'url(image/'+document.getElementById('n32').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
            break;
            case 'n33':
                if(document.getElementById('n23').textContent == '11'){
                    let tempContent =  document.getElementById('n23').textContent;        //把原本位置的值暫存
                    document.getElementById('n23').textContent = document.getElementById('n33').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n33').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n23').style.background = 'url(image/'+document.getElementById('n23').textContent+'.png)';
                    document.getElementById('n33').style.background = 'url(image/'+document.getElementById('n33').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
                if(document.getElementById('n32').textContent == '11'){
                    let tempContent =  document.getElementById('n32').textContent;        //把原本位置的值暫存
                    document.getElementById('n32').textContent = document.getElementById('n33').textContent;  //把原本空白位置的值存給要移過來的格子
                    document.getElementById('n33').textContent = tempContent;             //再給空白格子新的位置的值

                    document.getElementById('n32').style.background = 'url(image/'+document.getElementById('n32').textContent+'.png)';
                    document.getElementById('n33').style.background = 'url(image/'+document.getElementById('n33').textContent+'.png)';
                    moveCount++;
                    document.getElementById('moves').textContent = "移動次數： "+moveCount;
                }
            break;
        }
    }
}

function finish(){
    var box1 = document.getElementById('n11').textContent;
    var box2 = document.getElementById('n12').textContent;
    var box3 = document.getElementById('n13').textContent;
    var box4 = document.getElementById('n21').textContent;
    var box5 = document.getElementById('n22').textContent;
    var box6 = document.getElementById('n23').textContent;
    var box7 = document.getElementById('n31').textContent;
    var box8 = document.getElementById('n32').textContent;
    var box9 = document.getElementById('n33').textContent;

    if(box1=='11' && box2=='12' && box3=='13' && box4=='21' && box5=='22' && box6=='23' && box7=='31' && box8=='32' && box9=='33'){
        return true;
    }else{
        return false;
    }
}