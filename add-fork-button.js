window.MyEmbededProgram = {
  helloWorld: function() {
    alert("Hello World!")
  }
};

$(function(){
  // alert(window.location.href);
  var kekka1 = window.location.href.split("\/");
  var kekka2 = kekka1[kekka1.length-1].split("#");
  var id = kekka2[0];
  alert(id);
  var param = "?fork=true&items="+id;
  $('.itemsShowHeaderStock').append('<a class="btn btn-primary stock-button btn-block js-stock-btn" data-position="top" href="http://qiita.com/drafts/new'+param+'" title="Stock">フォークする</a>');
});
