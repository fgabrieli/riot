/**
 * Inject javascript code into a riot tag.
 * 
 * @param Object instance implementing neo.Module
 * 
 * Usage: 
 * 
 * Within dropdown.tag:
 * 
 *  neo.inject.call(this, neo.DropDown) // where "this" points to the riot tag since it is executed in the same scope
 *  
 * When the tag is mounted, neo.DropDown.construct(options) will be called. 
 * 
 * Options are specified in the tag like:
 * 
 *  <dropdown data-options="{label : 'Mike', value : 45}"></dropdown>
 * 
 * The attribute allows any valid javascript expression.
 */

neo.inject = function(instance) {
  // create a new instance
  var mixin = $.extend(true, {}, instance);
  
  mixin.tag = this;

  // set the mixin
  this.mixin(mixin);

  if (typeof mixin.construct != 'undefined') {
    var options = false;
    var optionsAttr = $(mixin.tag.root).attr('data-options');
    if (typeof optionsAttr != 'undefined') {
      eval('options = ' + optionsAttr);
    }
    
    mixin.tag.on('mount', function() {
      mixin.construct(options);
    });
  }
}