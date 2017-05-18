import $ from 'jquery'

export function allCities (search) {
  var urlAll = ('https://stormy-hamlet-96191.herokuapp.com/api/cities/'+ search);
  return $.getJSON(urlAll).then(function(res) {
    console.log("city response from db", res);
    return res;
  })
}

export function getCities () {
  var url = ('https://stormy-hamlet-96191.herokuapp.com/api/cities/');
  return $.getJSON(url).then(function(res) {
    console.log("all cities from db", res);
    return res;
  })
}

export function oneCity (name) {
  var urlOne = ('https://stormy-hamlet-96191.herokuapp.com/api/cities/' + name + '/posts');
  return $.getJSON(urlOne).then(function(res) {
    console.log('all the posts res from db', res);
    return res;
  })
}


export function createUser(data) {
  var url = 'http://localhost:3001/api/users/';
  $.post(url, data, function(res) {
    console.log('posted response from DB: ', res);
  });
}
//EXAMPLE FOR PROFILE
export function getUser(id) {
  var url =('http://localhost:3001/api/user/' + id);
  return $.getJSON(url).then(function(res) {
    console.log("we got from db", res);
    return res;
  })
}

export function getUserInfo(username){
  console.log("passing into db", username);
  var url =('http://localhost:3001/api/user/' + username);
  return $.getJSON(url).then(function(res) {
    console.log("USSEERRRRRRRRRRRRR", res);
    return res;
  })
}

export function checkForExistingUser (id) {
  var url = ('http://localhost:3001/api/users/' + id);
  return $.getJSON(url).then(function(res) {
    console.log('SEARCH IN CHECK FOR EXISTING USER: ', res);
    return res;
  });
}

export function getUserPosts(name){
  var url = ('http://localhost:3001/api/users/' + name + '/posts');
  return $.getJSON(url).then(function(res){
    console.log('found all posts by user', res);
    return res;
  })
}
export function createPost(post){
  var username = post.author;
  var cityname = post.city;
  console.log(post,"this is going to db");
  var urlPost = ('http://localhost:3001/api/user/' + username + '/city/' + cityname + '/posts');
  return $.post(urlPost, post).then(function(res) {
    console.log('post added to db', res);
  })
}

export function editPost(id,post){
  console.log(id,'post going to db');
  var url = ('http://localhost:3001/api/posts/' + id);
  return $.ajax({
    method:"PUT",
    data: post,
    url: url,
    success: function(res){
      console.log('we edited', id);
    }
  })
}
export function deletePost(id){
  console.log("this is id in fx", id);
  var urlDelete = ('http://localhost:3001/api/posts/' + id);
  return $.ajax({
    method:"DELETE",
    url: urlDelete,
    success: function(res) {
    console.log("we deleted", id);
}
})
}


export function editUser(username,profile){
  console.log(username,'post going to db');
  var url = ('http://localhost:3001/api/users/' + username);
  return $.ajax({
    method:"PUT",
    data: profile,
    url: url,
    success: function(res){
      console.log('we edited', username);
    }
  })
}

export function deleteUser(username){
  console.log("going to db", username);
  var urlDelete = ('http://localhost:3001/api/users/'+ username);
  return $.ajax({
    method:"DELETE",
    url:urlDelete,
    success: function(res){
      console.log("deleted", res);
    }
  })
}
