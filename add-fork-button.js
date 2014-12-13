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
  // alert(id);
  var param = "?fork=true&items="+id;
  var forkLink = $('<a class="btn btn-primary btn-block" data-position="top" href="http://qiita.com/drafts/new'+param+'" title="Fork">フォークする</a>');
  forkLink.css("background-color","#f0ad4e");
  forkLink.css("border-color","#e29a42");
  $('.itemsShowHeaderStock').append(forkLink);
});


// style="background-color:#f0ad4e;"
