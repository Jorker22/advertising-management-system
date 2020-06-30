$(document).ready(function () {

    // prevent double click
    // $('button').click(function(e){
    //     var mybutton = $(this);
    //     mybutton.prop('disabled', true);
    //     setTimeout(function() {
    //         mybutton.prop('disabled', false);
    //     }, 500);
    // })
});

function isEmpty(value){
    return (value == null || value.length === 0);
}

function haveValue(item){
    if(item !== '' && item !== undefined && item != null){
        return true;
    }else{
        return false;
    }
}

function checkFormRequired(name,callback){
    var form = document.getElementById(name);
    for(var i=0; i < form.elements.length; i++){
        if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
            var test = form.elements[i];
            form.elements[i].className += ' input-error';
            responseModal('error',"กรุณากรอกข้อมูลให้ครบถ้วน");
            return false;
        }
    }
    callback()
}

function confirmDelete() {
    if(deleteUrl == null)
         return false;
    $.ajax({
        type: "DELETE",
        url: deleteUrl,
        contentType: false,
        processData: false,
        success:function (data, statusText, request) {
            var contentType = request.getResponseHeader("Content-Type");
            if (request.status === 200 && contentType.toLowerCase().indexOf("text/html") >= 0) {
                location.href = "/login";
            }else {
                responseModal('success', data, undefined, function () {
                    location.reload();
                })
            }
        },
        error: function(error){
            responseModal('error', error.responseText, undefined, undefined)
        },
        complete: function(){
            $("#deleteModal").modal('hide');
        }
    });

}
function cancelDelete() {
    deleteUrl = null;
}


function responseModal(status,message,link,callback){

    if(status == 'success'){
        // $('#responseModal-header').addClass("modal-success");
        // $('#responseModal-header').removeClass("modal-error");
        $("#responseModal-title").text("ดำเนินการสำเร็จ");

    } else {
        // $('#responseModal-header').addClass("modal-error");
        // $('#responseModal-header').removeClass("modal-success");
        // $("#responseModal-header").css("background-color","#b1324d!important;");
        $("#responseModal-title").text("เกิดข้อผิดพลาด");

    }
    $("#responseModal-text").text(message);
    $("#responseModal").modal();
    if(link !== undefined){
        $('#responseModal').on('hidden.bs.modal', function (e) {
            window.location.href = link;
        });
    }
    if(callback !== undefined){
        $('#responseModal').on('hidden.bs.modal', function (e) {
            callback();
        });
    }
    window.setTimeout(function(){
        $("#responseModal").modal("hide");
    }, 2000);

}

function loadingPage(){
    $('#loading-page').toggle();
}

function isEmpty(value){
    return (value == null || value.length === 0);
}

function haveValue(item){
    if(item !== '' && item !== undefined && item != null){
        return true;
    }else{
        return false;
    }
}

function toastSuccess(text,header,position){
    toastr.success(text,header, {
        positionClass: position,
        containerId: position,
        closeButton: !0,
        progressBar: !0
    })
}

function toastError(text,header,position){
    toastr.error(text,header, {
        positionClass: position,
        containerId: position,
        closeButton: !0,
        progressBar: !0
    })
}