$(function() {
    // 1.文字色変化
    $('#change-color').on('click', function() {
        $('#target').css('color', 'red');
    });

    // 2.内容変化
    $('#change-text').on('click', function() {
        $('#target').text("Hello!");
    });

    // 3.フェードアウト
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });

    // 4.フェードイン
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });

});