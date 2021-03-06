define([
		'vendors/text!tpl/preferences.html',
		'keyboard',
		'preferences/General',
		'preferences/Editor',
		'preferences/Viewer',
		'preferences/Helper',
		'preferences/About'
	], function(html, HotKey, General, Editor, Viewer, Helper, About) {

		$('#dialogs').append(html);
		$('.switch').bootstrapSwitch();

		function showPreferences(e) {
			$('._preferences').modal('show');
		}

		var tabGeneral = new General();
		var tabEditor = new Editor();
		var tabViewer = new Viewer();
		var tabHelper = new Helper();
		var tabAbout = new About();

		var gui = require('nw.gui'),
      	win = gui.Window.get();

    win.on('context.preferences', showPreferences);
    win.on('preferences.show', showPreferences);

		HotKey('defmod-,', showPreferences);
});