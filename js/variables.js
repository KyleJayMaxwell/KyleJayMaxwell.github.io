$.ajax({
  url: 'https://api.instagram.com/v1/users/1721552028/media/recent?access_token=1721552028.5b9e1e6.1ef4cc17d83a4c14990feaffc31b5b90',
  type: 'GET',
  data: {
    format: 'json'
  },
  error: function(){
    alert('An error has occurred');
  },
  success: function(results){
    for(i=0;i<results.data.length;i++){
      console.log(results.data[i]);
      if(i%2){      
        var post2 = results.data[i].images.standard_resolution.url;
        var text2 = results.data[i].caption.text;
        var limit2 = text2.substring(0, 35);
        var link2 = results.data[i].link;
        $('#instagram2 ul').append("<li><img src=\""+post2+"\" /><p>"+limit2+"... <a class=\"iglink\" href=\"link2\">See the Picture</a></p></li>");
      } else{
        var post = results.data[i].images.standard_resolution.url;
        var text = results.data[i].caption.text;
        var limit = text.substring(0, 35);
        var link = results.data[i].link;
        $('#instagram ul').append("<li><img src=\""+post+"\" /><p>"+limit+"... <a class=\"iglink\" href=\"link\">See the Picture</a></p></li>");      }
    }
  }
});