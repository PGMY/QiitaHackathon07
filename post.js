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
  
  $.get('/api/v2/items?' + param['items']",
	function(data){
      if( typeof data['body'] != "undefined")
      {
        $('#draft_item_raw_body').append(data['body']);
      }
    });

    $('.js-submitButton').click(function()
    {
      $('.draftFormSubmit_submitBtnLabel')

    });




});






