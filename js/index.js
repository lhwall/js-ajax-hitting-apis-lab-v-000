// your code here
function getRepositories(){
  const req = new XMLHttpRequest()
  username = document.getElementById("username")
  req.open("GET", "http://api.github.com/users/" + username + "/repos")
  req.send()
}

function showRepositories(){
  let repos = JSON.parse(this.responseText)
  let repoList = 'ul> ${repos
    .map{
    r=>
    '<li>' + r.name + ' - <a href = "#" data-repo="' + r.name + '" onclick="getCommits(this)"Get Commits</a></li>'
  ).join('')}<ul>'

  document.getElementById("repositories").innerHTML=repoList;
  }
