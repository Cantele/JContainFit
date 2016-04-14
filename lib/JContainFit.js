/*
JContainFit v0.0.1 / 11-04-2016
jQuery plugin to resize images to fit in a container and keep aspect ratio.
Copyright (c) 2016 Paolo Cantele
Dual licensed under the MIT
*/
/*
ex:
	$('.imgContainer').JContainFit();
*/
(function($) {
	$.fn.JContainFit = function() {
        function imageShow(t, o){
            var w, h, i,  img;
            if (t.is("div") || t.is("img")) {
                if (t.is("div")){
                    i = t.find("img:first");
                } else if (t.is("img")){
                    i = t;                
                    t = t.parent("div");                
                }
                w = t.width();
                h = t.height();
                img = i.attr("src");
				if(t.css("position")!='relative'){
					
				}
//                if (img!="undefined" && img.trim().length>0){
                if ((w!=o.width || h!=o.height) && img!="undefined" && img.trim().length>0){
                    o.width=w;
                    o.height=h;
                    $("body").append('<div id="__JContainFit_imgCenter" style="position:absolute; top:-10000px; left:-10000px;width:'+w+'px;height:'+h+'px;"><img id="__JContainFit_Foto1" src="'+img+'" style="width:100%;height:initial;"></div>');
                    
                    if ($("#__JContainFit_Foto1").height()>h) {
                        i.css({"height":"100%",
                            "width":"initial",
                            "position":"absolute",
                            "margin": "auto",
                            "top": "0",
                            "left": "0",
                            "right": "0",
                            "bottom": "0"});
                    } else {
                        i.css({"width":"100%",
                            "height":"initial",
                            "position":"absolute",
                            "margin": "auto",
                            "top": "0",
                            "left": "0",
                            "right": "0",
                            "bottom": "0"});
                    }
                    $("#__JContainFit_imgCenter").remove();
                }
            }
        }
        
        function imgPaint(t){
            var oldSize = {width:0, height:0};
            if (t.is("div")) {
					t.wrapInner('<div style="position:relative; width:100%; height:100%; margin:auto;">');
			} else if (t.is("img")){
				t.wrap('<div style="position:relative; width:100%; height:100%; margin:auto;">');
			}
            imageShow(t, oldSize);
            $(window).resize(function () {
                imageShow(t, oldSize);
            });
        }
        
		return this.each(function(){
            imgPaint($(this));
        });    
	};
})(jQuery)
