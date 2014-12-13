var token =  "60c9b343011bf8d56b3e7a0b94ee29edb598f004";
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

var post_str = "@takutok forked this POST "  ;
var url_param;

function post_comment(url, id){
$.ajax({
   type: "POST",
   url: url,
   data: '{"body": "' + post_str + "http://qiita.com/takutok/items/"+ id  +'"}',
   /*
   beforeSend: function(req) {
        req.setRequestHeader("Authorization", "Bearer "+token);
    },*/

    headers: {
    	"Host": "qiita.com",
    	'Content-Type': 'application/json',
        "Authorization":"Bearer "+token
    },

   success: function(msg){
     //alert( "Data Saved: " + msg );
   }
 });
/*
        $.post(url,
          { data: post_str ,
          	token : token },
          function(data){
           alert("1");
          }
      );
*/
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

        $.each(data["tags"], function(key, value) {
            if ( key == 0 ){
              $(".draftFormTagDatum").find(".draftFormTagDatum_name").val(value["name"]);
              $(".draftFormTagDatum").find(".draftFormTagDatum_version").val(value["versions"]);
            } else if ( key > 0 ){
              var tagForm = $(".draftFormTagDatum").clone();
              tagForm.find(".draftFormTagDatum_name").val(value["name"]);
              tagForm.find(".draftFormTagDatum_version").val(value["versions"]);
              $(".draftFormTagDatum").after(tagForm);
            }
        });
        $('#draft_item_raw_body').append(fork_body);
        $("#draft_item_title").val(data['title']);
        $('#draft_item_raw_body').trigger("change");

      }
    });

    $('.btn-primary').click(
    	function(){

          if($(this).html() != '送信'){
          	//alert("not 送信");
            return;
          }


            chrome.runtime.sendMessage({ req_url: "test" },
			function(response){
				//alert("message sent");
			});

      　　var kekka1 = window.location.href.split("\/");
  　    　var kekka2 = kekka1[kekka1.length-1].split("#");
         if(kekka2 != 'edit'){
           //alert("edit error:"+kekka2);
           return;
         }

     　　var id = kekka1[kekka1.length-2];
        //alert('https://qiita.com/api/v2/items/' + url_param['items'] + '/comments');
        post_comment('/api/v2/items/' + url_param['items'] + '/comments', id);
  });
});
