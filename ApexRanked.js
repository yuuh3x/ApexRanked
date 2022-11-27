window.onload =
    function () { document.getElementById("button2").addEventListener("click", onclick) }



function onclick(

) {
    const myRanked_pts =
        document.getElementById("MyRankPoint").value;

    const ranked_num =
        document.getElementById("rankedleader").value;

    // console.log(ranked_num)
    const displayArea = document.getElementById("display-area");
    

    let result = ranked_num - myRanked_pts;
    const Pred1Name = document.getElementById("RankedLeaderName").value;
    const Pred_Master_border = document.getElementById("PredMasterBorder").value;

    if (result === 0) { displayArea.textContent = `あ、あなたはもしや`+ Pred1Name + 'さん？！' }
    else if (result < 0) {displayArea.textContent = '世界ナンバーワンのAPEXプレデターですっ！！！おめでとうございます！！' }
    else if (0 <= myRanked_pts && myRanked_pts < 1000) { displayArea.textContent = 'ルーキーランクです！APEXプレデターへの長い旅の始まりですね！'}
    else if (myRanked_pts < 3000) {displayArea.textContent = 'ブロンズランクですね！そろそろ操作などには慣れてきた頃でしょうか？' }
    else if (myRanked_pts < 5400) { displayArea.textContent = 'シルバーランクです！上を目指すのみ！！'}
    else if (myRanked_pts < 8200) { displayArea.textContent = 'ゴールドまで来ましたね！！そろそろ2000ダメージくらい出せるようになってきたのでは？！'}
    else if (myRanked_pts < 11400) { displayArea.textContent = 'プラチナ沼へようこそ・・・（笑）'}
    else if (myRanked_pts < 15000) { displayArea.textContent = 'ダイヤモンド昇格おめでとうございます！軌道ゲットですね！ここからが上級者への道のりだ～！'}
    else if (myRanked_pts < Pred_Master_border) {displayArea.textContent = 'なんと！マスター到達おめでとうございます！' }
    else if (myRanked_pts < ranked_num) {displayArea.textContent = 'むむ！プレデター様でいらっしゃいますね。よろしければサインを頂けないでしょうか・・！' }




}

//if文の最後の条件式だけ満たす数字を入れても、コンソールログしか表示されない。

// let result = ranked_num - MyRankPoint


// function OnButtonClick() {
//     target = document.getElementById("display-area");
//     target.write(result)
// }





// if (result === 0 )
// {}
// else if (result < 0)
// {}
// else if (0 <= MyRankPoint < 1000 )
// {}
// else if (1000 <= MyRankPoint < 3000)
// {}
// else if (3000 <= MyRankPoint < 5400)
// {}
// else if (5400 <= MyRankPoint < 8200)
// {}
// else if (8200 <= MyRankPoint < 11400)
// {}
// else if (11400 <= MyRankPoint < 15000)
// {}
// else if (15000 <= MyRankPoint < getElementById("PredMasterBorder").value)
// {}
// else if (getElementById("PredMasterBorder").value <= MyRankPoint < ranked_num)
// {}


// `あなたのランクはルーキーですね。まだまだAPEXプレデターへの旅は始まったばかり。初志貫徹で頑張りましょう。`
// `あなたのランクはブロンズですね。`
// `あなたのランクはシルバーですね。`
// `あなたのランクはゴールドですね。`
// `あなたのランクはプラチナですね。`
// `あなたのランクはダイヤモンドですね。`
// `あなたのランクはマスターですね！！`
// `むむ？！あなたプレデターなんですね？！もし良ければ私めにサインを頂けないでしょうか・・・`



