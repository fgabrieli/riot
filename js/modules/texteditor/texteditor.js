// unique instance
neo.TextEditorMgr = {
  editorId : 0,

  getId : function() {
    return ++this.editorId;
  }
}

neo.TextEditor = {
  init : function() {
    this.on('mount', this.setup);
  },

  setup : function() {
    var editorId = neo.TextEditorMgr.getId();
    var $editorEl = $(this.root).find('div');
    $editorEl.attr('id', 'editor-' + editorId);

    var options = this.opts.dataOptions;

    if (typeof options.text != 'undefined') {
      $editorEl.html(options.text);
    }

    tinymce.init({
      selector : '#editor-' + editorId
    });
  }
}