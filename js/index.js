// your code here
function getRepositories(){
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  username = document.getElementById("username").value
  userURL = "https://api.github.com/users/" + username + "/repos"
  req.open("GET", userURL)
  req.send()
}

function showRepositories(){
  let repos = JSON.parse(this.responseText)
  let repoList = `<ul>${repos
    .map(
      r =>
        '<li>' +
    '<a href="https://github.com/' + username + "/" + r.name + '">"' +
    r.name + '</a>' +
    ' - <a href="#" data-repo="' +
        r.name +
        '" onclick="getCommits(this)">Get Commits</a></li>'
    )
    .join('')}</ul>`;

  document.getElementById("repositories").innerHTML=repoList;
  }
