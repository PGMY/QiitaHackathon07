window.MyEmbededProgram = {
  helloWorld: function() {
    alert("Hello World!")
  }
};

$(function(){
  // alert(window.location.href);
  $('.itemsShowHeaderStock').append('<a class="btn btn-primary stock-button btn-block js-stock-btn" data-position="top" href="javascript:void(0)" title="Stock">フォークする</a>');
});
