//紫の陽防陰防ステータス
var yukari_inbou = 699;
var yukari_youbou = 732;
//ラスワ弾幕属性（無0,日1,月2,火3,水4,木5,金6,土7,星8）
var lw_att_table = [
    ["博麗霊夢", 1, 0, 0, 1, 0, 1],
    ["霧雨魔理沙", 8, 0, 0, 0, 0, 8],
    ["魂魄妖夢", 2, 2, 0, 2, 0, 0],
    ["西行寺幽々子", 5, 0, 0, 0, 5, 0],
    ["リリーホワイト", 5, 0, 0, 0, 0, 5]
];
//ラストワード弾幕種類（通常0,御札1,エネ2,肉3,斬撃4,レーザー5）
var lw_type_table = [
    ["博麗霊夢", 1, 1, 1, 2, 2, 2],
    ["霧雨魔理沙", 3, 3, 3, 3, 3, 3],
    ["魂魄妖夢", 4, 4, 4, 4, 4, 4],
    ["西行寺幽々子", 5, 3, 5, 3, 5, 3],
    ["リリーホワイト", 3, 3, 3, 3, 3, 3]
];
//ラストワード弾幕別陰陽（陰1,陽2）
var lw_inyou_table = [
    ["博麗霊夢", 2, 2, 2, 1, 1, 2],
    ["霧雨魔理沙", 1, 2, 1, 2, 1, 2],
    ["魂魄妖夢", 2, 1, 2, 1, 2, 1],
    ["西行寺幽々子", 2, 2, 2, 2, 2, 2],
    ["リリーホワイト", 2, 2, 2, 2, 2, 2]
];
//ラストワード弾幕別威力
var lw_power_table = [
    ["博麗霊夢", 7.62, 7.74, 7.74, 7.31, 7.31, 7.31],
    ["霧雨魔理沙", 27.43, 16.46, 13.71, 10.97, 8.23, 5.49],
    ["魂魄妖夢", 10.29, 13.71, 18.86, 17.14, 30.86, 27.43],
    ["西行寺幽々子", 8.23, 8.78, 8.05, 9.14, 8.23, 9.75],
    ["リリーホワイト", 14.07, 14.63, 18.29, 14.63, 21.94, 14.63]
];
//ラストワード弾幕別命中率
var lw_hit_table = [
    ["博麗霊夢", 0.80, 0.85, 0.85, 0.90, 0.90, 0.90],
    ["霧雨魔理沙", 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
    ["魂魄妖夢", 0.80, 0.80, 0.80, 0.80, 0.80, 0.80],
    ["西行寺幽々子", 0.75, 0.75, 0.75, 0.75, 0.75, 0.75],
    ["リリーホワイト", 0.75, 0.75, 0.75, 0.75, 0.75, 0.75]
];

//ラストワードCRI率
var lw_cri_table = [
    ["博麗霊夢", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["霧雨魔理沙", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["魂魄妖夢", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["西行寺幽々子", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
    ["リリーホワイト", 0.05, 0.05, 0.05, 0.05, 0.05, 0.05]
];
//ラストワード弾数
var lw_number_table = [
    ["博麗霊夢", 18, 5, 5, 5, 5, 5],
    ["霧雨魔理沙", 10, 4, 4, 4, 4, 4],
    ["魂魄妖夢", 15, 3, 2, 2, 1, 1],
    ["西行寺幽々子", 20, 5, 5, 4, 4, 3],
    ["リリーホワイト", 13, 3, 2, 2, 1, 1]
];
//ラストワード追加効果（硬質1,貫通2,斬裂3）
var lw_ad_table = [
    ["博麗霊夢", 1, 1, 1, 1, 1, 1],
    ["霧雨魔理沙", 0, 1, 0, 1, 0, 1],
    ["魂魄妖夢", 0, 0, 0, 0, 0, 0],
    ["西行寺幽々子", 3, 1, 0, 1, 3, 0],
    ["リリーホワイト", 0, 0, 0, 0, 0, 0]
];
//ラストワード特攻（妖怪特攻とか紫に効く特攻があるときは1）
var lw_spc_table = [
    ["博麗霊夢", 0, 0, 1, 0, 1, 1],
    ["霧雨魔理沙", 0, 0, 0, 0, 0, 0],
    ["魂魄妖夢", 0, 0, 0, 0, 0, 0],
    ["西行寺幽々子", 0, 0, 0, 0, 0, 0],
    ["リリーホワイト", 0, 0, 0, 0, 0, 0]
];
//ラスワレベル補正倍率（覚醒度合いによって変化）※一部推測
var lw_level_table = [
    ["博麗霊夢", 1.00, 1.07, 1.14, 1.21, 1.28],
    ["霧雨魔理沙", 1.00, 1.07, 1.14, 1.21, 1.29],
    ["魂魄妖夢", 1.00, 1.08, 1.15, 1.22, 1.29],
    ["西行寺幽々子", 1.00, 1.07, 1.15, 1.22, 1.29],
    ["リリーホワイト", 1.00, 1.07, 1.15, 1.22, 1.29]
];
//ラストワードブーストタイプ
var lw_boost_table = [
    ["博麗霊夢", 1, 3, 4, 6],
    ["霧雨魔理沙", 1, 4, 5, 6],
    ["魂魄妖夢", 1, 3, 5, 6],
    ["西行寺幽々子", 1, 3, 5, 6],
    ["リリーホワイト", 1, 4, 5, 6]
]

//---------------表ここまで---------------

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
        //弾幕の属性を取得する
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
        //キャラの攻撃力を取得する
        var inn_attack_chara = document.querySelector("#inkou_chara").value;
        var inn_attack_talisman = document.querySelector("#inkou_talisman").value;
        var you_attack_chara = document.querySelector("#youkou_chara").value;
        var you_attack_talisman = document.querySelector("#youkou_talisman").value;
        var inn_attack = parseInt(inn_attack_chara) + parseInt(inn_attack_talisman);
        var you_attack = parseInt(you_attack_chara) + parseInt(you_attack_talisman);
        //攻撃と防御の比を計算する
        var inn = parseInt(inn_attack)/parseInt(yukari_inbou)
        var you = parseInt(you_attack)/parseInt(yukari_youbou)
        var adratio = cal_ratio();
        function cal_ratio(){    
            for(var j = 0; j < lw_inyou_table.length; j++){
                if (lw_inyou_table[j][0] == chara){
                    if(lw_inyou_table[j][i+1] == 1){
                        return inn;
                    }
                    else{
                        return you;
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
        var criMeityu = defaultCritical*criMK_mag;
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
        //攻撃・防御バフによる補正係数の取得
        var innASK = document.querySelector("#inn_up_skill").value;
        var innAT = document.querySelector("#inn_up_talisman").value;
        var innASP = document.querySelector("#inn_up_spell").value;
        var inn_Abuff = parseInt(innASK) + parseInt(innAT) + parseInt(innASP);
        if(inn_Abuff > 10){
            inn_Abuff = 10
        }
        var inn_Amag = inn_Abuff*0.3 + 1.0;

        var innDSK = document.querySelector("#inn_down_skill").value;
        var innDT = document.querySelector("#inn_down_talisman").value;
        var innDSP = document.querySelector("#inn_down_spell").value;
        var inn_Dbuff = parseInt(innDSK) + parseInt(innDT) + parseInt(innDSP);
        if(inn_Dbuff > 10){
            inn_Dbuff = 10
        }
        var inn_Dmag = inn_Dbuff*0.3 + 1.0;

        var youASK = document.querySelector("#you_up_skill").value;
        var youAT = document.querySelector("#you_up_talisman").value;
        var youASP = document.querySelector("#you_up_spell").value;
        var you_Abuff = parseInt(youASK) + parseInt(youAT) + parseInt(youASP);
        if(you_Abuff > 10){
            you_Abuff = 10
        }
        var you_Amag = you_Abuff*0.3 + 1.0;

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
        if(inyou == 1){
            var solodamage = pro_damage*inn_Amag*inn_Dmag;
        }else{
            var solodamage = pro_damage*you_Amag*you_Dmag;
        }
        var cridamage = solodamage*criMeityu*(criK_mag-1)*(criB_mag-1);
    
        var pro_damage2 = power*adratio*lv*0.4*slv*att_mag*hitrate2*bN*0.92;
        if(inyou == 1){
            var solodamage2 = pro_damage2*inn_Amag*inn_Dmag;
        }else{
            var solodamage2 = pro_damage2*you_Amag*you_Dmag;
        }
        var cridamage2 = solodamage2*criMeityu*(criK_mag-1)*(criB_mag-1);

        var pro_damage3 = power*adratio*lv*0.4*slv*att_mag*hitrate*bN*0.92;
        if(inyou == 1){
            var solodamage3 = pro_damage3*inn_Amag*inn_Dmag;
        }else{
            var solodamage3 = pro_damage3*you_Amag*you_Dmag2;
        }
        var cridamage3 = solodamage3*criMeityu*(criK_mag-1)*(criB_mag-1);

        //ダメージ期待値の合計
        damage = damage + solodamage + cridamage;
        damage2 = damage2 + solodamage2 + cridamage2;
        damage3 = damage3 + solodamage3 + cridamage3;
    }
 
    //計算結果（バフなし）
    document.getElementById("result_normal").innerHTML = Math.round(damage);
    document.getElementById("result_kaihi").innerHTML = Math.round(damage2);
    document.getElementById("result_youbou").innerHTML = Math.round(damage3);
}
