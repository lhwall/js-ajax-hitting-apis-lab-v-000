// your code here
function getRepositories(){
  const req = new XMLHttpRequest()
  username = document.getElementById("username")
  req.open("GET", "http://api.github.com/users/" + username + "/repos")
  req.send()
}
