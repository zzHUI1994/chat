//url定义
var url = {
    getTime: function () {
        return  webRoot + "/seckill/time/now";
    },
    exposer:function (seckillId) {
        return webRoot + "/seckill/" + seckillId + "/exposer";
    },
    execution:function (seckillId, md5) {
        return webRoot + "/seckill/" + seckillId + "/" + md5 + "/excute";

    }
}

$(document).ready(function () {
    init();
});

//初始化，获取系统时间，并完成抢购计时
function init() {
    $.get(url.getTime(), {}, function (json) {
        if(json && json.success) {
            var now = json.data;
            countdown(now, startTime, endTime);
        } else {
            console.log(json);
        }

    }, "json");
}

/**
 * 处理抢购
 * @param seckillId
 * @param node
 */
function handleSeckill(seckillId, node) {
    node.hide().html("<button id='kill_btn' class='btn btn-primary'>抢购</button>");
    //请求获取抢购地址
    $.post(
        url.exposer(seckillId),
        {},
        function (json) {
            if(json && json.success) {
                var exposer = json.data;
                if(exposer.exposed) {
                    var md5 = exposer.md5;
                    var killUrl = url.execution(seckillId, md5);
                    console.log(killUrl);
                    //为点击按钮添加一次点击事件
                    $("#kill_btn").one("click", function () {
                        //按钮失效
                        $(this).addClass("disabled");
                        //执行抢购
                        $.post(
                            killUrl,
                            {},
                            function (result) {
                                if(result && result.success) {
                                    var killResult = result.data;
                                    var state = killResult.state;
                                    var msg = killResult.msg;
                                    //输出抢购结果
                                    node.html("<span class='label label-success'>" + msg + "</span>");
                                } else {
                                    console.log(result);
                                }
                            },
                            "json"
                        );
                    });
                    //显示按钮
                    node.show();
                } else {
                    var now = exposer.now;
                    var start = exposer.start;
                    var end = exposer.end;
                    countdown(now, start, end);
                }
            } else {
                console.log(json);
            }
        },
        "json"
    );
}

/**
 * 倒数逻辑
 * @param now
 * @param start
 * @param end
 */
function countdown(now, start, end) {
    var time_box = $("#time_box");
    if(now > end) {
        time_box.html("秒杀结束");
    } else if(now < start)  {
        var date = new Date(start + 1000);
        time_box.countdown(date, function (event) {
            var format = event.strftime("秒杀倒计时：%D天 %H时 %M分 %S秒");
            time_box.html(format);
        }).on('finish.countdown', function () {
            handleSeckill(seckillId, time_box);
        });

    } else {
        handleSeckill(seckillId, time_box);
    }
}