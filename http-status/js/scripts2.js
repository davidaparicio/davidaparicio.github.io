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

(function ($) {
    $(document).ready(function(){
        $('#frmContact').validate({
            submitHandler: function(form){
                $(form).ajaxSubmit({
                    target: $(form).parent()
                });
            }
        });

        $('#frmTell').validate({
            submitHandler: function(form){
                $(form).ajaxSubmit({
                    target: $(form).parent()
                });
            }
        });

        $('#frmPlanPricingEnquiry').validate({
            submitHandler: function(form){
                $(form).ajaxSubmit({
                    target: $(form).parent()
                });
            }
        });

        if ($('.company_landing #partners').length) {
            if ($('.partner-logos li').length > 4) {
                $('.partner-logos').css('text-align','left');
            }
        }

    });

}(jQuery));


}