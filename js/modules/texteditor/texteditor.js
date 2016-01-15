// unique instance
neo.TextEditorMgr = {
  editorId : 0,

  getId : function() {
    return ++this.editorId;
  }
}

neo.TextEditor = $.extend(true, {}, neo.Module, {
  construct : function(options) {
    var editorId = neo.TextEditorMgr.getId();
    var $editorEl = $(this.tag.root).find('div');
    $editorEl.attr('id', 'editor-' + editorId);

    if (options) {
      if (typeof options.text != 'undefined') {
        $editorEl.html(options.text);
      }
    }
    
    tinymce.init({
      selector : '#editor-' + editorId
    });
  }
});