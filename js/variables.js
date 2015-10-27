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
  console.log(results.data);
    }
});