﻿// ==UserScript==
// @name           Tweetapaper
// @namespace      http://jason.karns.name
// @include        http://www.instapaper.com/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @description    Add a 'Tweet' action for sharing Instapaper items on Twitter
// @author         Jason Karns
// @version        1.0
// @date           2010-12-29
// @change         initial release
// ==/UserScript==


(function(){
  function isHelvetapaper(){
    return $("a[href*=helvetapaper]").length > 0;
  }

  $(".tableViewCell").each(function(index, element){
    var link = $(element).find("a.tableViewCellTitleLink");
    var t = {
      text: link.text(),
      url: link.attr("href")
    };
    var tweetLink = $('<a href="http://twitter.com/share?'+$.param(t)+'" target="_blank">Tweet</a>');
    if(isHelvetapaper()){
      $(element).find(".cornerControls").append(tweetLink.addClass('actionButton'));
    }
    else {
      $(element).find(".secondaryControls").append('<span class="separator">&bull;</span> ').append(tweetLink.addClass('actionLink'));
    }
  });
})();
