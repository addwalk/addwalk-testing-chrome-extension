// Copyright (c) 2014 addwalk GmbH. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var addwalkTestWidget = {

  /**
   * Saves the Settings
   *
   * @public
   */

  saveSettings: function() {
    // Get a value saved in a form.
    var widget_id = document.getElementById("addwalk_settings_widget_id").value;
    var widget_url = document.getElementById("addwalk_settings_widget_url").value;
    // Save it using the Chrome local storage.
    chrome.storage.local.set({ 'addwalk_settings_widget_id': widget_id, 'addwalk_settings_widget_url': widget_url }, function() {
      //message('Settings saved');
    });
  },

  init: function() {
    // set  click listener on Save-Button
    document.getElementById("addwalk_settings_save").addEventListener('click', addwalkTestWidget.saveSettings, true);
    // prefill value for widget-id
    chrome.storage.local.get(['addwalk_settings_widget_id', 'addwalk_settings_widget_url' ], function(items){
      document.getElementById("addwalk_settings_widget_id").value = items.addwalk_settings_widget_id;
      document.getElementById("addwalk_settings_widget_url").value = items.addwalk_settings_widget_url;
    });
  }
};


addwalkTestWidget.init();
