/**
 * //alert提示框，content,提示内容,funObject为点确定按钮后的操作函数
 */
function showAlertInfo(content, funObject) {
	
    $.confirm({
        title: '信息提示',
        content: content,
        //autoClose: 'confirm|6000',//6秒自动关闭提示框
        //columnClass: 'col-md-4 col-md-offset-4',
        confirmButton: '确定',
        cancelButton: false,
        closeIcon: true,
        confirmButtonClass: 'btn-danger',
        confirm: funObject
    });
}

function loadFormData(formId, url) {

    var json;

    function _load($form, data) {
        for (var name in data) {
            var val = data[name];
            if (!_checkField($form, name, val)) {
                $form.find('input[name="' + name + '"]').val(val);
                $form.find('textarea[name="' + name + '"]').val(val);
                $form.find('select[name="' + name + '"]').val(val);
                val = val + '';
                var selected = val.split(',');
                $form.find('select[value="' + name + '"][multiple="multiple"]').multiselect('select', selected);
            }
        }

    }


    function _checkField(target, name, val) {

        var cc = $(target).find('input[name="' + name + '"][type=radio], input[name="' + name + '"][type=checkbox]');
        val = val + '';
        var valArray = val.split(',');
        if (cc.length) {
            $(cc).attr('checked', false);
            cc.each(function(index, elment) {

                for (var i = 0; i < valArray.length; i++) {


                    if (_isChecked($(this).val(), valArray[i])) {
                        $(this).attr('checked', true);
                    }

                }
            });
            return true;
        }
        return false;
    }

    function _isChecked(v, val) {
        if (v == val) {
            return true;
        } else {
            return false;
        }
    }


    $.post(url, {}, function(data) {
        if (data.data == undefined) {
            json = data;
        } else {
            json = data.data;
        }
        var $from = $('#' + formId);
        _load($from, json);
    }, 'json');


}


/**
 * 远程加载表单里的数据，作为编辑
 * @param formId
 * @param url
 * @param callback
 *
 * data format : { name:'testname',value:'testvalue'}
 */
function loadFormData2(formId,url,callback) {

    var json;

    function _load($form, data,callback) {
        for (var name in data) {
            var val = data[name];
            if (!_checkField($form, name, val)) {
                $form.find('input[name="' + name + '"]').val(val);
                $form.find('textarea[name="' + name + '"]').val(val);
                $form.find('select[name="' + name + '"]').val(val);
                val = val + '';
                var selected = val.split(',');
                $form.find('select[name="' + name + '"][multiple="multiple"]').multiselect('select', selected);
            }
        }
       callback(data);
    }


    function _checkField(target, name, val) {

        var cc = $(target).find('input[name="' + name + '"][type=radio], input[name="' + name + '"][type=checkbox]');
        val = val + '';
        var valArray = val.split(',');
        if (cc.length) {
            $(cc).attr('checked', false);
            cc.each(function(index, elment) {

                for (var i = 0; i < valArray.length; i++) {


                    if (_isChecked($(this).val(), valArray[i])) {
                        $(this).attr('checked', true);
                    }

                }
            });
            return true;
        }
        return false;
    }

    function _isChecked(v, val) {
        if (v == val) {
            return true;
        } else {
            return false;
        }
    }


    $.post(url, {}, function(data) {
        if (data.data == undefined) {
            json = data;
        } else {
            json = data.data[0];
        }
        var $from = $('#' + formId);
        _load($from, json,callback);
    }, 'json');


}