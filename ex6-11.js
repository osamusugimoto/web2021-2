function hyoji(){
  //表示する文字
  var str = "一文字ずつ表示します。";
  //テキストボックスの文字の数
  var cnt = document.timer.moji.value.length;
  //文字が全部表示されているかを確認
  
  if(cnt < 11){
    //現在より1文字多く切り出して表示
    document.timer.moji.value=str.substr(0,cnt+1);}
    
  else{
    //全て表示されたら、空文字に戻す。
    document.timer.moji.value="";}}

//関数hyoji()を1000ミリ間隔で呼び出す    
function start(){
  setInterval("hyoji()",1000);}

function mes(){
   alert("3秒経ちました！");}

function hyoji2() { 
//表示する文字 
var str2 = "一文字ずつ表示します。"; 
//テキストボックスの文字数 
var cnt2 = document.timer2.moji2.value.length; 
//文字が全部表示されているか確認 
if ( cnt2 < 11 ) { 
//現在より1文字多く切り出して表示 
document.timer2.moji2.value = str2.substr(0,cnt2+1); } else { 
//全て表示されたら、空文字に戻す 
document.timer2.moji2.value = ""; }
//setTimeout()を含む関数を呼び出す 
setTimeout("hyoji2()",1000); }
