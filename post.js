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

$(function(){
  var param = getUrlVars();
  if(typeof param["folk"] == "undefined")
  {
  	return;
  }
  if(typeof param["items"] == "undefined")
  {
  	return;
  }
  
  $.get('/api/v2/items/' + param['items']",
	function(data){
      if( typeof data['body'] != "undefined")
      {
        $('#draft_item_raw_body').append(data['body']);
      }
    });

    $('.btn-primary').click(function()
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
        }
      );

});






