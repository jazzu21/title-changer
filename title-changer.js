window.onload = function() {
  var pageTitle = document.title;
  var attentionMsg = 'YOUR ALERT MESSAGE';
  var attentionBlog = 'YOUR OTHER ALERT MESSAGE';
  var timer="";
  var isBlurred=false;
  $(window).on("blur",function() {
    isBlurred = true;
    timer=window.setInterval(function() {
      if (window.location.href.indexOf("hair-blog") != -1) { 
         document.title = document.title == pageTitle ? attentionBlog : pageTitle;
      } else {
         document.title = document.title == pageTitle ? attentionMsg : pageTitle;
      }
    }, 2000);
  }).on("focus",function() { 
    isBlurred = false;
    document.title = pageTitle;
    clearInterval(timer);
  });
};
