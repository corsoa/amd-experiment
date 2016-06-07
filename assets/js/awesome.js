define('awesome', ['jquery'], function($) {
    return {
        /**
         * Accepts array of <input> elements and appends their values.
         * @param inputs - <input>s in jQuery selector
         */
        doTheAwesome: function(inputs) {
           inputs.each(function(key) {
               $(this).val($(this).val() + ' is awesome');
           });
        }
   };
});
