// Use cases for Drupal behaviors
// - Reinitialize something after an AJAX call
// - using Drupal settings that are sent from php
// - etc.
// To understand behaviors, see https://drupal.org/node/756722#behaviors
(function ($, Drupal, window, document, undefined) {

  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {
      // Add cool loading gif to triggered submits
      $('input[type="submit"], .pager-show-more a', context).removeClass('load-triggered').click(function(){
        $(this).addClass('load-triggered');
      });

      // Add label to SHS select list
      $('select.shs-select.form-select.shs-select-level-1').each(function(){
        $(this).before('<label class="element-invisible" for="' + $(this).attr('id') + '">Select an Issue</label>');
      });
    }
  };


})(jQuery, Drupal, this, this.document);