//未対応項目
//硬質弾と斬裂弾の補正（一律30%で計算しているがキャラごとに異なる）
//必中弾の影響（命中率に関係なく必ず命中）
//鏡面弾の影響（防御の陰陽を入れ替える）
//弾性弾と爆破弾の影響（クリティカルが出やすくなるらしいが値が不明）
//フルブレイク時の影響

//紫の陽防陰防ステータス
var yukari_inbou = 699;
var yukari_youbou = 732;

//----------キャラごとのステータス表（並び順はWikiのキャラ一覧と一緒）----------

//ラスワ弾幕属性（無0,日1,月2,火3,水4,木5,金6,土7,星8）
var lw_att_table = [
    ["博麗霊夢", 1, 0, 0, 1, 0, 1],
    ["霧雨魔理沙", 8, 0, 0, 0, 0, 8],
    ["レミリア・スカーレット", 3, 0, 0, 3, 0, 3],
    ["フランドール・スカーレット", 0, 0, 0, 0, 0, 0],
    ["十六夜咲夜", 6, 0, 0, 0, 0, 6],
    ["パチュリー・ノーレッジ", 0, 3, 4, 5, 6, 7],
    ["紅美鈴", 0, 0, 0, 0, 0, 0],
    ["小悪魔", 3, 2, 3, 2, 3, 2],
    ["八雲紫", 0, 0, 0, 0, 0, 0],
    ["西行寺幽々子", 5, 0, 0, 0, 5, 0],
    ["魂魄妖夢", 2, 2, 0, 2, 0, 0],
    ["リリーホワイト", 5, 0, 0, 0, 0, 5],
    ["八雲藍", 7, 0, 7, 7, 0, 7],
    ["橙", 0, 0, 0, 0, 0, 0],
    ["鈴仙・優曇華院・イナバ", 2, 2, 0, 0, 0, 2],
    ["綿月豊姫", 5, 0, 0, 2, 0, 5],
    ["綿月依姫", 0, 0, 2, 3, 4, 7]
];

//ラストワード弾幕種類（通常0,御札1,エネ2,肉3,斬撃4,レーザー5,質量6,光7,流体8）
var lw_type_table = [
    ["博麗霊夢", 1, 1, 1, 2, 2, 2],
    ["霧雨魔理沙", 3, 3, 3, 3, 3, 3],
    ["レミリア・スカーレット", 0, 2, 0, 2, 0, 2],
    ["フランドール・スカーレット", 2, 2, 2, 2, 2, 2],
    ["十六夜咲夜", 4, 4, 4, 4, 4, 4],
    ["パチュリー・ノーレッジ", 6, 6, 6, 6, 6, 6],
    ["紅美鈴", 2, 2, 2, 2, 2, 2],
    ["小悪魔", 4, 4, 4, 4, 4, 4],
    ["八雲紫", 7, 7, 7, 7, 7, 7],
    ["西行寺幽々子", 5, 3, 5, 3, 5, 3],
    ["魂魄妖夢", 4, 4, 4, 4, 4, 4],
    ["リリーホワイト", 3, 3, 3, 3, 3, 3],
    ["八雲藍", 6, 8, 6, 6, 8, 6],
    ["橙", 4, 4, 4, 4, 4, 4],
    ["鈴仙・優曇華院・イナバ", 5, 5, 5, 5, 5, 5],
    ["綿月豊姫", 3, 3, 3, 3, 3, 3],
    ["綿月依姫", 3, 3, 3, 3, 3, 3]
];

//ラストワード弾幕別陰陽（陰1,陽2）
var lw_inyou_table = [
    ["博麗霊夢", 2, 2, 2, 1, 1, 2],
    ["霧雨魔理沙", 1, 2, 1, 2, 1, 2],
    ["レミリア・スカーレット", 1, 1, 1, 1, 1, 1],
    ["フランドール・スカーレット", 1, 2, 1, 2, 1, 1],
    ["十六夜咲夜", 1, 2, 2, 1, 1, 1],
    ["パチュリー・ノーレッジ", 2, 1, 1, 1, 1, 1],
    ["紅美鈴", 2, 1, 1, 2, 1, 2],
    ["小悪魔", 1, 1, 1, 1, 1, 1],
    ["八雲紫", 2, 2, 2, 2, 2, 2],
    ["西行寺幽々子", 2, 2, 2, 2, 2, 2],
    ["魂魄妖夢", 2, 1, 2, 1, 2, 1],
    ["リリーホワイト", 2, 2, 2, 2, 2, 2],
    ["八雲藍", 2, 2, 2, 2, 2, 2],
    ["橙", 2, 2, 2, 2, 2, 2],
    ["鈴仙・優曇華院・イナバ", 1, 2, 1, 2, 1, 1],
    ["綿月豊姫", 1, 1, 1, 1, 1, 1],
    ["綿月依姫", 1, 1, 1, 1, 1, 1]
];

//ラストワード弾幕別威力
var lw_power_table = [
    ["博麗霊夢", 7.62, 7.74, 7.74, 7.31, 7.31, 7.31],
    ["霧雨魔理沙", 27.43, 16.46, 13.71, 10.97, 8.23, 5.49],
    ["レミリア・スカーレット", 6.10, 14.63, 17.07, 19.50, 21.94, 24.38],
    ["フランドール・スカーレット", 12.32, 60.34, 98.06, 105.6, 39.6, 42.24],
    ["十六夜咲夜", 7.91, 20.57, 24.00, 27.43, 30.86, 34.29],
    ["パチュリー・ノーレッジ", 36.57, 43.89, 36.57, 29.26, 21.94, 14.63],
    ["紅美鈴", 14.07, 10.97, 9.14, 7.31, 7.31, 4.88],
    ["小悪魔", 10.29, 14.63, 13.41, 18.29, 16.46, 29.26],
    ["八雲紫", 5.71, 12.91, 14.22, 16.25, 18.29, 20.32],
    ["西行寺幽々子", 8.23, 8.78, 8.05, 9.14, 8.23, 9.75],
    ["魂魄妖夢", 10.29, 13.71, 18.86, 17.14, 30.86, 27.43],
    ["リリーホワイト", 14.07, 14.63, 18.29, 14.63, 21.94, 14.63],
    ["八雲藍", 11.43, 10.97, 12.19, 14.63, 10.97, 14.63],
    ["橙", 11.25, 20.57, 22.29, 36.00, 38.57, 41.14],
    ["鈴仙・優曇華院・イナバ", 19.59, 21.94, 27.43, 43.89, 32.91, 21.94],
    ["綿月豊姫", 10.97, 14.63, 13.41, 18.29, 32.91, 29.26],
    ["綿月依姫", 5.71, 13.71, 16.00, 18.29, 20.57, 22.86]
];

//ラストワード弾幕別命中率
var lw_hit_table = [
    ["博麗霊夢", 0.80, 0.85, 0.85, 0.90, 0.90, 0.90],
    ["霧雨魔理沙", 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
    ["レミリア・スカーレット", 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
    ["フランドール・スカーレット", 0.50, 0.25, 0.25, 0.25, 0.50, 0.50],
    ["十六夜咲夜", 0.80, 0.80, 0.80, 0.80, 0.80, 0.80],
    ["パチュリー・ノーレッジ", 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
    ["紅美鈴", 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
    ["小悪魔", 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
    ["八雲紫", 0.80, 0.85, 0.90, 0.90, 0.90, 0.90],
    ["西行寺幽々子", 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
    ["魂魄妖夢", 0.80, 0.80, 0.80, 0.80, 0.80, 0.80],
    ["リリーホワイト", 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
    ["八雲藍", 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
    ["橙", 0.50, 0.50, 0.50, 0.50, 0.50, 0.50],
    ["鈴仙・優曇華院・イナバ", 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
    ["綿月豊姫", 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
    ["綿月依姫", 0.80, 0.80, 0.80, 0.80, 0.80, 0.80]
];

//ラストワードCRI率
var lw_cri_table = [
    ["博麗霊夢", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["霧雨魔理沙", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["レミリア・スカーレット", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["フランドール・スカーレット", 0.50, 0.05, 0.05, 0.05, 0.50, 0.50],
    ["十六夜咲夜", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["パチュリー・ノーレッジ", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["紅美鈴", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["小悪魔", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["八雲紫", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["西行寺幽々子", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["魂魄妖夢", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["リリーホワイト", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["八雲藍", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["橙", 0.12, 0.12, 0.12, 0.12, 0.12, 0.12],
    ["鈴仙・優曇華院・イナバ", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["綿月豊姫", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["綿月依姫", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05]
];

//ラストワード弾数
var lw_number_table = [
    ["博麗霊夢", 18, 5, 5, 5, 5, 5],
    ["霧雨魔理沙", 10, 4, 4, 4, 4, 4],
    ["レミリア・スカーレット", 18, 3, 3, 3, 3, 3],
    ["フランドール・スカーレット", 15, 3, 2, 2, 2, 2],
    ["十六夜咲夜", 13, 2, 2, 2, 2, 2],
    ["パチュリー・ノーレッジ", 5, 1, 1, 1, 1, 1],
    ["紅美鈴", 13, 4, 4, 4, 3, 3],
    ["小悪魔", 16, 3, 3, 2, 2, 1],
    ["八雲紫", 18, 3, 3, 3, 3, 3],
    ["西行寺幽々子", 20, 5, 5, 4, 4, 3],
    ["魂魄妖夢", 15, 3, 2, 2, 1, 1],
    ["リリーホワイト", 13, 3, 2, 2, 1, 1],
    ["八雲藍", 16, 4, 3, 2, 2, 1],
    ["橙", 16, 3, 3, 2, 2, 2],
    ["鈴仙・優曇華院・イナバ", 14, 3, 2, 1, 1, 1],
    ["綿月豊姫", 15, 3, 3, 2, 2, 1],
    ["綿月依姫", 18, 3, 3, 3, 3, 3]
];

//ラストワード追加効果（無し0,硬質1,貫通2,斬裂3,爆破4,弾性5）
//例えば【硬質＋弾性】のときは15のように2桁表記
var lw_ad_table = [
    ["博麗霊夢", 1, 1, 1, 1, 1, 1],
    ["霧雨魔理沙", 0, 1, 0, 1, 0, 1],
    ["レミリア・スカーレット", 0, 0, 0, 0, 0, 0],
    ["フランドール・スカーレット", 0, 0, 0, 0, 0, 0],
    ["十六夜咲夜", 0, 0, 3, 3, 3, 3],
    ["パチュリー・ノーレッジ", 0, 0, 0, 0, 0, 0],
    ["紅美鈴", 0, 0, 0, 2, 0, 2],
    ["小悪魔", 3, 3, 4, 3, 4, 3],
    ["八雲紫", 0, 0, 0, 0, 0, 0],
    ["西行寺幽々子", 3, 1, 0, 1, 3, 0],
    ["魂魄妖夢", 0, 0, 0, 0, 0, 0],
    ["リリーホワイト", 0, 0, 0, 0, 0, 0],
    ["八雲藍", 0, 0, 0, 0, 0, 0],
    ["橙", 0, 3, 3, 3, 3, 3],
    ["鈴仙・優曇華院・イナバ", 0, 0, 0, 0, 0, 0],
    ["綿月豊姫", 15, 14, 15, 14, 15, 14],
    ["綿月依姫", 3, 3, 3, 3, 3, 3]
];

//ラストワード特攻（妖怪特攻とか紫に効く特攻があるときは1）
var lw_spc_table = [
    ["博麗霊夢", 0, 0, 1, 0, 1, 1],
    ["霧雨魔理沙", 0, 0, 0, 0, 0, 0],
    ["レミリア・スカーレット", 0, 0, 0, 0, 0, 0],
    ["フランドール・スカーレット", 0, 0, 0, 0, 0, 0],
    ["十六夜咲夜", 0, 0, 0, 0, 0, 0],
    ["パチュリー・ノーレッジ", 0, 0, 0, 0, 0, 0],
    ["紅美鈴", 0, 0, 0, 0, 0, 0],
    ["小悪魔", 0, 0, 0, 0, 0, 0],
    ["八雲紫", 0, 0, 0, 0, 0, 0],
    ["西行寺幽々子", 0, 0, 0, 0, 0, 0],
    ["魂魄妖夢", 0, 0, 0, 0, 0, 0],
    ["リリーホワイト", 0, 0, 0, 0, 0, 0],
    ["八雲藍", 0, 0, 0, 0, 0, 0],
    ["橙", 0, 0, 0, 0, 0, 0],
    ["鈴仙・優曇華院・イナバ", 0, 0, 0, 0, 0, 0],
    ["綿月豊姫", 0, 1, 1, 1, 1, 1],
    ["綿月依姫", 0, 0, 1, 1, 1, 1]
];

//ラスワレベル補正倍率（覚醒度合いによって変化）※※※大部分推測※※※
//Wikiに乗ってないキャラは暫定として霊夢と同じ数値を使用
var lw_level_table = [
    ["博麗霊夢", 1.00, 1.07, 1.14, 1.21, 1.28],
    ["霧雨魔理沙", 1.00, 1.07, 1.14, 1.21, 1.29],
    ["レミリア・スカーレット", 1.00, 1.08, 1.15, 1.22, 1.30],
    ["フランドール・スカーレット", 1.00, 1.08, 1.16, 1.24, 1.32],
    ["十六夜咲夜", 1.00, 1.07, 1.14, 1.21, 1.29],
    ["パチュリー・ノーレッジ", 1.00, 1.07, 1.14, 1.21, 1.27],
    ["紅美鈴", 1.00, 1.07, 1.14, 1.21, 1.29],
    ["小悪魔", 1.00, 1.07, 1.14, 1.21, 1.28],
    ["八雲紫", 1.00, 1.07, 1.14, 1.22, 1.29],
    ["西行寺幽々子", 1.00, 1.07, 1.15, 1.22, 1.29],
    ["魂魄妖夢", 1.00, 1.08, 1.15, 1.22, 1.29],
    ["リリーホワイト", 1.00, 1.07, 1.15, 1.22, 1.29],
    ["八雲藍", 1.00, 1.07, 1.14, 1.21, 1.29],
    ["橙", 1.00, 1.08, 1.15, 1.22, 1.30],
    ["鈴仙・優曇華院・イナバ", 1.00, 1.07, 1.13, 1.20, 1.26],
    ["綿月豊姫", 1.00, 1.07, 1.14, 1.21, 1.29],
    ["綿月依姫", 1.00, 1.08, 1.15, 1.22, 1.30]
];

//ラストワードブーストタイプ
var lw_boost_table = [
    ["博麗霊夢", 1, 3, 4, 6],
    ["霧雨魔理沙", 1, 4, 5, 6],
    ["レミリア・スカーレット", 1, 2, 3, 6],
    ["フランドール・スカーレット", 1, 2, 4, 6],
    ["十六夜咲夜", 1, 2, 3, 6],
    ["パチュリー・ノーレッジ", 1, 4, 5, 6],
    ["紅美鈴", 1, 4, 5, 6],
    ["小悪魔", 1, 3, 5, 6],
    ["八雲紫", 1, 2, 3, 6],
    ["西行寺幽々子", 1, 3, 5, 6],
    ["魂魄妖夢", 1, 3, 5, 6],
    ["リリーホワイト", 1, 4, 5, 6],
    ["八雲藍", 1, 4, 5, 6],
    ["橙", 1, 2, 4, 6],
    ["鈴仙・優曇華院・イナバ", 1, 4, 5, 6],
    ["綿月豊姫", 1, 3, 5, 6],
    ["綿月依姫", 1, 2, 3, 6]
]

//-------------------------------ステータス表ここまで-------------------------------

//画像表示
changeimage();
function changeimage(){
    //キャラクターを選択
    var chara = document.querySelector("#character").value;
    var img = document.getElementById("image");
    img.src = chara + ".png";
}


//初期値計算＋再計算
recalculation();
function recalculation(){

    //キャラクターを選択
    var chara = document.querySelector("#character").value;

    //ブースト数を取得
    var bG = document.querySelector("form#boostGroup");
    var bst = bG.boost.value;
    var bstPlus1 = parseInt(bst) + 1;

    //ブーストタイプを選ぶ
    var bstType = get_boost();
    function get_boost(){    
        for(var i = 0; i < lw_boost_table.length; i++){
            if(lw_boost_table[i][0] == chara){
                return lw_boost_table[i][bstPlus1]
            }
        }
    }

    //ループに入る前にダメージの初期値を宣言
    var damage = 0;
    var damage2 = 0;
    var damage3 = 0;

    //弾幕ごとの期待ダメージを計算する
    for(var i = 0; i < bstType; i++){

        //弾幕の威力を取得する
        var deffaultPower = get_power();
        function get_power() {
            for(var j = 0; j < lw_power_table.length; j++){
                if(lw_power_table[j][0] == chara) {
                    return lw_power_table[j][i+1]
                }
            }
        }

        //弾幕の属性を取得する
        var attribution = get_att();
        function get_att(){
            for(var j = 0; j < lw_att_table.length; j++){
                if(lw_att_table[j][0] == chara) {
                    return lw_att_table[j][i+1]
                }
            }
        }

        //スペカ絵札による威力アップを計算（属性）
        var tG = document.querySelector("form#talismanGroup");
        var talisman_att = tG.talisman.value;
        var talisman_up = document.querySelector("#talisman_up").value;
        if(talisman_att == attribution){
            var talisman_mag = 1 + parseInt(talisman_up)/100;
        }else{
            var talisman_mag = 1;
        }
        var power1 = deffaultPower*talisman_mag;

        var tG2 = document.querySelector("form#talismanGroup2");
        var talisman_att2 = tG2.talisman2.value;
        var talisman_up2 = document.querySelector("#talisman_up2").value;
        if(talisman_att2 == attribution){
            var talisman_mag2 = 1 + parseInt(talisman_up2)/100;
        }else{
            var talisman_mag2 = 1;
        }
        var power2 = power1*talisman_mag2;

        //弾幕の種類を取得する
        var type = get_type();
        function get_type(){
            for(var j = 0; j < lw_type_table.length; j++){
                if(lw_type_table[j][0] == chara) {
                    return lw_type_table[j][i+1]
                }
            }
        }

        //スペカ絵札による威力アップを計算（弾幕種類）
        var tG3 = document.querySelector("form#talismanGroup3");
        var talisman_type = tG3.talisman3.value;
        var talisman_up3 = document.querySelector("#talisman_up3").value;
        if(talisman_type == type){
            var talisman_mag3 = 1 + parseInt(talisman_up3)/100;
        }else{
            var talisman_mag3 = 1;
        }
        var power3 = power2*talisman_mag3;

        var tG4 = document.querySelector("form#talismanGroup4");
        var talisman_type2 = tG4.talisman4.value;
        var talisman_up4 = document.querySelector("#talisman_up4").value;
        if(talisman_type2 == type){
            var talisman_mag4 = 1 + parseInt(talisman_up4)/100;
        }else{
            var talisman_mag4 = 1;
        }
        var power = power3*talisman_mag4;

        //弾幕の陰陽を取得する
        var inyou = get_inyou();
        function get_inyou(){
            for(var j = 0; j < lw_inyou_table.length; j++){
                if(lw_inyou_table[j][0] == chara) {
                    return lw_inyou_table[j][i+1]
                }
            }
        }

        //攻撃・防御バフによる補正係数の取得
        //陰攻バフ
        var innASK = document.querySelector("#inn_up_skill").value;
        var innAT = document.querySelector("#inn_up_talisman").value;
        var innASP = document.querySelector("#inn_up_spell").value;
        var inn_Abuff = parseInt(innASK) + parseInt(innAT) + parseInt(innASP);
        if(inn_Abuff > 10){
            inn_Abuff = 10
        }
        var inn_Amag = inn_Abuff*0.3 + 1.0;
        //陰攻デバフ
        var innDSK = document.querySelector("#inn_down_skill").value;
        var innDT = document.querySelector("#inn_down_talisman").value;
        var innDSP = document.querySelector("#inn_down_spell").value;
        var inn_Dbuff = parseInt(innDSK) + parseInt(innDT) + parseInt(innDSP);
        if(inn_Dbuff > 10){
            inn_Dbuff = 10
        }
        var inn_Dmag = inn_Dbuff*0.3 + 1.0;
        //陽攻バフ
        var youASK = document.querySelector("#you_up_skill").value;
        var youAT = document.querySelector("#you_up_talisman").value;
        var youASP = document.querySelector("#you_up_spell").value;
        var you_Abuff = parseInt(youASK) + parseInt(youAT) + parseInt(youASP);
        if(you_Abuff > 10){
            you_Abuff = 10
        }
        var you_Amag = you_Abuff*0.3 + 1.0;
        //陽攻デバフ（紫が陽防アップした時含め2種類）
        var youDSK = document.querySelector("#you_down_skill").value;
        var youDT = document.querySelector("#you_down_talisman").value;
        var youDSP = document.querySelector("#you_down_spell").value;
        var you_Dbuff = parseInt(youDSK) + parseInt(youDT) + parseInt(youDSP);
        if(you_Dbuff > 10){
            you_Dbuff = 10
        }
        var you_Dmag = you_Dbuff*0.3 + 1.0;
        var you_Dbuff2 = parseInt(youDSK) + parseInt(youDT) + parseInt(youDSP) - 5;
        if(you_Dbuff2 > 10){
            you_Dbuff2 = 10
        }
        if(you_Dbuff2 >= 0){
            var you_Dmag2 = you_Dbuff2*0.3 + 1.0;
        }else{
            var you_Dmag2 = 1/(-1*you_Dbuff2*0.3 + 1.0);
        }

        //弾幕の追加効果を取得する
        var ad_effect = get_ad_effect();
        function get_ad_effect(){
            for(var j = 0; j < lw_ad_table.length; j++){
                if(lw_ad_table[j][0] == chara) {
                    return lw_ad_table[j][i+1]
                }
            }
        }

        //硬質弾の場合、防御力の30%を攻撃バフ後の数値に加算
        var ibc = document.querySelector("#inbou_chara").value;
        var ibt = document.querySelector("#inbou_talisman").value;
        var ybc = document.querySelector("#youbou_chara").value;
        var ybt = document.querySelector("#youbou_talisman").value;
        var inn_defense = parseInt(ibc) + parseInt(ibt);
        var you_defense = parseInt(ybc) + parseInt(ybt);
        if(inyou == 1){
            var defense = inn_defense;
        }else{
            var defense = you_defense;
        }        
        if((ad_effect == 1)||(ad_effect == 14)||(ad_effect == 15)){
            var koushitsu = defense*0.3;
        }else{
            var koushitsu = 0;
        }  

        //斬裂弾の場合、速力の30%を攻撃バフ後の数値に加算
        var sc = document.querySelector("#sokuryoku_chara").value;
        var st = document.querySelector("#sokuryoku_talisman").value;
        var sokuryoku = parseInt(sc) + parseInt(st);
        //速力バフの取得
        var sbuffSK = document.querySelector("#sokuryoku_up_skill").value;
        var sbuffT = document.querySelector("#sokuryoku_up_talisman").value;
        var sbuffSP = document.querySelector("#sokuryoku_up_spell").value;
        var sbuff = parseInt(sbuffSK) + parseInt(sbuffT) + parseInt(sbuffSP);
        if(sbuff > 10){
            sbuff = 10
        }
        var smag = sbuff*0.3 + 1.0;
        if(ad_effect == 3){
            var zanretsu = sokuryoku*smag*0.3;
        }else{
            var zanretsu = 0;
        }  

        //キャラの攻撃力を取得する
        var inn_attack_chara = document.querySelector("#inkou_chara").value;
        var inn_attack_talisman = document.querySelector("#inkou_talisman").value;
        var you_attack_chara = document.querySelector("#youkou_chara").value;
        var you_attack_talisman = document.querySelector("#youkou_talisman").value;
        var inn_attack = parseInt(inn_attack_chara) + parseInt(inn_attack_talisman);
        var you_attack = parseInt(you_attack_chara) + parseInt(you_attack_talisman);

        //補正後の攻撃力を計算（貫通弾の場合は防御補正無視）
        if(ad_effect == 2){
            var pro_inn = (inn_attack*inn_Amag + koushitsu + zanretsu);
            var pro_you = (you_attack*you_Amag + koushitsu + zanretsu);
            var pro_you2 = (you_attack*you_Amag + koushitsu + zanretsu);
        }else{
            var pro_inn = (inn_attack*inn_Amag + koushitsu + zanretsu)*inn_Dmag;
            var pro_you = (you_attack*you_Amag + koushitsu + zanretsu)*you_Dmag;
            var pro_you2 = (you_attack*you_Amag + koushitsu + zanretsu)*you_Dmag2;
        }

        //攻撃と防御の比を計算する
        var inn = parseInt(pro_inn)/parseInt(yukari_inbou);
        var you = parseInt(pro_you)/parseInt(yukari_youbou);
        var you2 = parseInt(pro_you2)/parseInt(yukari_youbou);
        var adratio = cal_ratio();
        function cal_ratio(){    
            for(var j = 0; j < lw_inyou_table.length; j++){
                if (lw_inyou_table[j][0] == chara){
                    if(inyou == 1){
                        return inn;
                    }
                    else{
                        return you;
                    }
                }
            }
        }
        var adratio2 = cal_ratio2();
        function cal_ratio2(){    
            for(var j = 0; j < lw_inyou_table.length; j++){
                if (lw_inyou_table[j][0] == chara){
                    if(inyou == 1){
                        return inn;
                    }
                    else{
                        return you2;
                    }
                }
            }
        }

        //キャラレベルを取得する
        var lv = document.querySelector("#level").value;

        //スペカレベル補正を取得する
        var klv = document.querySelector("#kakusei").value;
        var slv = get_slv();
        function get_slv(){
            for(var j = 0; j < lw_level_table.length; j++){
                if(lw_level_table[j][0] == chara) {
                    return lw_level_table[j][klv]
                }
            }
        }

        //相性による補正倍率を取得する（月2,木5のときは1.6倍、火3と星8は0.5倍）
        //注）紫は能力で不利属性のダメージ20%ダウンなので1.6倍
        var att_mag = get_mag();
        function get_mag(){
            if((attribution == 2)||(attribution == 5)){
                return 1.6
            }else{
                if((attribution == 3)||(attribution == 8)){
                    return 0.5
                }else{
                    return 1.0
                }
            }
        }

        //クリティカル命中率の取得
        var defaultCritical = get_cri();
        function get_cri(){
            for(var j = 0; j < lw_cri_table.length; j++){
                if(lw_cri_table[j][0] == chara) {
                    return lw_cri_table[j][i+1]
                }
            }
        }
        var criMSK = document.querySelector("#cri_meityu_up_skill").value;
        var criMT = document.querySelector("#cri_meityu_up_talisman").value;
        var criMSP = document.querySelector("#cri_meityu_up_spell").value;
        var criM_buff = parseInt(criMSK) + parseInt(criMT) + parseInt(criMSP);

        var criDSK = document.querySelector("#cri_kaihi_down_skill").value;
        var criDT = document.querySelector("#cri_kaihi_down_talisman").value;
        var criDSP = document.querySelector("#cri_kaihi_down_spell").value;
        var criD_buff = parseInt(criDSK) + parseInt(criDT) + parseInt(criDSP);

        var criMKbuff = criM_buff + criD_buff;

        if(criMKbuff > 10){
            criMKbuff = 10
        }
        if(criMKbuff >= 0){
            var criMK_mag = criMKbuff*0.2 + 1.0;
        }else{
            var criMK_mag = 1/(-1*criMKbuff*0.2 + 1.0);
        }
        //特攻を持つ場合はクリ命中を1とする
        var special = get_special();
        function get_special(){
            for(var j = 0; j < lw_spc_table.length; j++){
                if(lw_spc_table[j][0] == chara) {
                    return lw_spc_table[j][i+1]
                }
            }
        }
        if(special == 1){
            var criMeityu = 1;
        }else{
            var criMeityu = defaultCritical*criMK_mag;
        }
        if(criMeityu > 1){
            criMtietyu = 1
        }

        //クリティカル攻撃バフの取得
        var criKSK = document.querySelector("#cri_kou_up_skill").value;
        var criKT = document.querySelector("#cri_kou_up_talisman").value;
        var criKSP = document.querySelector("#cri_kou_up_spell").value;
        var criK_buff = parseInt(criKSK) + parseInt(criKT) + parseInt(criKSP);
        if(criK_buff > 10){
            criK_buff = 10
        }
        var criK_mag = criK_buff*0.3 + 2.0;

        var criBSK = document.querySelector("#cri_bou_down_skill").value;
        var criBT = document.querySelector("#cri_bou_down_talisman").value;
        var criBSP = document.querySelector("#cri_bou_down_spell").value;
        var criB_buff = parseInt(criBSK) + parseInt(criBT) + parseInt(criBSP);
        if(criB_buff > 10){
            criB_buff = 10
        }
        var criB_mag = criB_buff*0.3 + 2.0;

        //命中・回避バフによる補正係数の取得
        var meityuSK = document.querySelector("#meityu_up_skill").value;
        var meityuT = document.querySelector("#meityu_up_talisman").value;
        var meityuSP = document.querySelector("#meityu_up_spell").value;
        var meityu_buff = parseInt(meityuSK) + parseInt(meityuT) + parseInt(meityuSP);

        var kaihiSK = document.querySelector("#kaihi_down_skill").value;
        var kaihiT = document.querySelector("#kaihi_down_talisman").value;
        var kaihiSP = document.querySelector("#kaihi_down_spell").value;
        var kaihi_buff = parseInt(kaihiSK) + parseInt(kaihiT) + parseInt(kaihiSP);

        var MKbuff = meityu_buff + kaihi_buff;
        if(MKbuff > 10){
            MKbuff =10
        }
        if(MKbuff >= 0){
            var MKmag = MKbuff*0.2+1.0;
        }else{
            var MKmag = 1/(-1*MKbuff*0.2+1.0);
        }

        var MKbuff2 = meityu_buff + kaihi_buff - 5;
        if(MKbuff2 > 10){
            MKbuff2 = 10
        }
        if(MKbuff2 >= 0){
            var MKmag2 = MKbuff2*0.2+1.0;
        }else{
            var MKmag2 = 1/(-1*MKbuff2*0.2+1.0);
        }

        //弾幕命中率の計算
        var pro_hitrate = get_hitrate();
        function get_hitrate(){
            for(var j = 0; j < lw_hit_table.length; j++){
                if(lw_hit_table[j][0] == chara) {
                    return lw_hit_table[j][i+1]
                }
            }
        }        
        var hitrate = pro_hitrate*MKmag;
        if(hitrate > 1){
            hitrate = 1
        }
        var hitrate2 = pro_hitrate*MKmag2;
        if(hitrate2 > 1){
            hitrate2 = 1
        }

        //弾数の取得
        var bN = get_bullet();
        function get_bullet(){
            for(var j = 0; j < lw_number_table.length; j++){
                if(lw_number_table[j][0] == chara) {
                    return lw_number_table[j][i+1]
                }
            }
        }   

        //弾幕あたりのダメージ期待値の計算（0.92は乱数の中央値）
        var pro_damage = power*adratio*lv*0.4*slv*att_mag*hitrate*bN*0.92;
        var cridamage = pro_damage*criMeityu*(criK_mag-1)*(criB_mag-1);
    
        var pro_damage2 = power*adratio*lv*0.4*slv*att_mag*hitrate2*bN*0.92;
        var cridamage2 = pro_damage2*criMeityu*(criK_mag-1)*(criB_mag-1);

        var pro_damage3 = power*adratio2*lv*0.4*slv*att_mag*hitrate*bN*0.92;
        var cridamage3 = pro_damage3*criMeityu*(criK_mag-1)*(criB_mag-1);

        //ダメージ期待値の合計
        damage = damage + pro_damage + cridamage;
        damage2 = damage2 + pro_damage2 + cridamage2;
        damage3 = damage3 + pro_damage3 + cridamage3;
    }
 
    //計算結果（バフなし）
    document.getElementById("result_normal").innerHTML = Math.round(damage);
    document.getElementById("result_kaihi").innerHTML = Math.round(damage2);
    document.getElementById("result_youbou").innerHTML = Math.round(damage3);
}
