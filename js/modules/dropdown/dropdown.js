neo.DropDown = $.extend(true, {}, neo.Module, {
  construct : function(options) {
    this.tag.options = options;
    
    this.tag.update();
  }
});