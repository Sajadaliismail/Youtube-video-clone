function addComment() {
  var commentInput = document.getElementById('comment-input');
  var commentText = commentInput.value;

  if (commentText.trim() !== '') {
    var commentList = document.getElementById('comment-list');
    var topsection = document.createElement('div')
    var commentsection = document.createElement('div');
    var buttonsection = document.createElement('div')
    var profilepic = document.createElement('div')
    commentsection.className = 'comment';
    commentsection.textContent = commentText;

    topsection.className = 'topsection'

    profilepic.className = 'prodp'
    profilepic.textContent ='A'

    buttonsection.className = 'buttonrow'
    var button = document.createElement('BUTTON');
    button.className = 'Button1'
    button.innerText = 'Reply'
    
    var likebtn = document.createElement('BUTTON');
    likebtn.className = 'likebtn'

    var dislikebtn = document.createElement('BUTTON');
    dislikebtn.className = 'dislikebtn'

    commentList.appendChild(topsection);
    commentList.appendChild(buttonsection)
    topsection.appendChild(profilepic);
    topsection.appendChild(commentsection);
    buttonsection.appendChild(likebtn);
    buttonsection.appendChild(dislikebtn);
    buttonsection.appendChild(button);
    commentInput.value = '';
  }

}
function clearcom(){
  var comment = document.getElementById('comment-input');
  comment.value =  " ";
}
function more()
{
  var a = document.getElementById('demo');
  var b = document.getElementById('seemore')
  if (demo.style.display === "none") {
  a.style.display = "block";
  b.innerHTML = "See less";
} else {
  a.style.display = "none";
  b.innerHTML = "....more";
}

}
