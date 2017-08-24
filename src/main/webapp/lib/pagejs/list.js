var table;

//日期格式化
Date.prototype.format = function(format){
    var o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(), //day
        "H+" : this.getHours(), //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter
        "S" : this.getMilliseconds() //millisecond
    }

    if(/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }

    for(var k in o) {
        if(new RegExp("("+ k +")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
}

var render = {
    toLink:function(data, type, row) {
        return "<a class='btn btn-info' href='" + webRoot + "/seckill/" + data + "/detail' target='_blank'>查看详情</a>";
    },
    formatDate:function (data,type,row) {
        return new Date(data).format("yyyy-MM-dd HH:mm:ss");
    }
}

$(document).ready(function () {
    load_table();
});

function load_table() {
    if (table) {
        table.clear(true);
        table.destroy();
    }

    table = $('#table').DataTable({
        "info": false,
        "serverSide": false, //为false的时候分页在客户端，为true的时候分页在服务端
        "processing": true, //载入数据的时候是否显示“载入中”
        "pageLength": 5,
        "ordering": false,
        "searching": false,
        "pageChange":false,
        "processing": "数据载入中......",
        "sScrollX": false,
        "ajax": {
            "url": webRoot + '/seckill/getList',
            "type": "GET",
            "cache": true,
            "data": {

            },
            "dataSrc": function(json) {
                return json.data;
            }
        },
        "columns": [
            { "data": 'name', "title": '名称'},
            { "data": 'number', "title": '剩余'},
            { "data": 'startTime', "title": '开始时间', "render": render.formatDate},
            { "data": 'endTime', "title": '结束时间',"render": render.formatDate},
            { "data": 'createTime', "title": '创建时间',"render": render.formatDate},
            { "data": 'seckillId', "title": '详情',"render":render.toLink}
        ]
    });
}