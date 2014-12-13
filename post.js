function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var post_str = "@id forked this POST ";
var url_param;

function post_comment(url){
        $.post(url,
          { data: post_str },
          function(data){
           alert("1");
          }
      );
}


$(function(){
url_param = getUrlVars();
  if(typeof url_param["fork"] == "undefined")
  {
  	return;
  }
  if(typeof url_param["items"] == "undefined")
  {
  	return;
  }
  var url = 'https://qiita.com/api/v2/items/' + url_param['items'];
  
  $.get(
  		url,
	function(data){
      if( typeof data['body'] != "undefined")
      {
        var fork_body = "元記事:[" + data['title'] + "](" + data['url'] + ')\n' + data['body'];

        $('#draft_item_raw_body').append(fork_body);
        $("#draft_item_title").val(data['title']);
        $('#draft_item_raw_body').trigger("change");

      }
    });

    $('.btn-primary').click(
    	function(){
     
          if($(this).html() != '送信'){
          	alert("not 送信");
            return;
          }
      　　var kekka1 = window.location.href.split("\/");
  　    　var kekka2 = kekka1[kekka1.length-1].split("#");
         if(kekka2 != 'edit'){
           alert("edit error:"+kekka2);
           return;
         }

     　　var id = kekka1[kekka1.length-2];
        alert('https://qiita.com/api/v2/items/' + param['items'] + '/comments');
        post_comment('https://qiita.com/api/v2/items/' + param['items'] + '/comments');
  });
});






