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
    	function()
    {
      if($('.btn-primary').html() != '送信'){
         return;
      }
      
  　　var kekka1 = window.location.href.split("\/");
  　　var kekka2 = kekka1[kekka1.length-3].split("#");
     if(kekka2 != 'edit'){
       return;
     }
  　　var id = kekka1[kekka1.length-2];

      $.post('/api/v2/items/' + param['items'] + '/comments',
        { data: post_str },
          function(data){


           }
      );
  });

});






