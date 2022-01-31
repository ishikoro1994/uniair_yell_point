/**
 * ページ読み込み時
 */
$(document).ready(function() {
    var eventName = $('#select_event_name').val();
    var d = new $.Deferred();
    async(function() {
        LoadPointJson(eventName);
        d.resolve();
    });
});

function async(f) {
    setTimeout(f, 500);
}

function btnTestClick() {
    console.log("test");
    LoadPointJson("");
}

/**
 * 交換リスト設定
 */
 function LoadPointJson(eventName) {
    $.getJSON('./data/test.json' , function(data) {
        console.log(data);
        // for(var row in data) {
        //     console.log(row);
        // }
    });
}