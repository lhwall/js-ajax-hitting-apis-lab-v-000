// your code here
function getRepositories(){
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  username = document.getElementById("username")
  userURL = "http://api.github.com/users/" + username + "/repos"
  debugger
  req.open("GET", userURL)
  req.send()
}

function showRepositories(){
  let repos = JSON.parse(this.responseText)
  let repoList = `<ul>${repos
    .map(r => '<li>' + r.name + '</li>')
    .join('')}</ul>`;

  document.getElementById("repositories").innerHTML=repoList;
  }
