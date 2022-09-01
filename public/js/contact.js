function form() {
    let data = $('#cform').serialize();

    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbyO_vvUlNBtPhzMJ2qfJfDAzmg91SrNFKSnugghH1AexEZ-YO98/exec',
        method: 'GET',
        dataType: 'json',
        data: data,
        success: function(responseData, textStatus, jqXHR) {
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });

    window.jQuery(this).trigger('reset');
    // TODO: Show modal
    alert('Lời nhắn của bạn đã được gửi thành công!');

    return true;
};

