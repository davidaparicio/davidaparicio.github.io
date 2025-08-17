var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

!function(t){var n=[];t.fn.inViewport=function(o,i){return this.each(function(){var e={element:this,inFunction:o,outFunction:i};n.push(e),doCheck=function(){for(var o=t(window).scrollTop(),i=o+t(window).height(),e=t(window).scrollLeft(),u=e+t(window).width(),a=0;a<n.length;a++){var c=n[a].element,r=t(c),f=r.offset().top,d=r.offset().left,h=d+r.outerWidth(),l=f+r.outerHeight();i>f&&u>d&&l>o&&h>e?"in"!=r.attr("data-vpStatus")&&(r.attr("data-vpStatus","in"),"function"==typeof n[a].inFunction&&n[a].inFunction.call(c)):"out"!=r.attr("data-vpStatus")&&(r.attr("data-vpStatus","out"),"function"==typeof n[a].outFunction&&n[a].outFunction.call(c))}},t(window).scroll(doCheck).resize(doCheck),doCheck()})}}(jQuery);

}