class UI{
  constructor(){
    this.profile = document.getElementById('profile');
  }
    
  showProfile(user){
   // console.log(user.avatar_url);
    
    this.profile.innerHTML= `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4"> View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists ${user.public_public_gists}</span>
            <span class="badge badge-success">Followers ${user.followers}</span>
            <span class="badge badge-info">Following ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company : ${user.company}</li>
              <li class="list-group-item">Website/Blog : ${user.blog}</li>
              <li class="list-group-item">Location : ${user.location}</li>
              <li class="list-group-item">Member Since : ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }
  clearProfile(){
    this.profile.innerHTML = '';
  }
  showAlert(msg , className){
      this.clearAlert();
      this.clearProfile();
      const div = document.createElement('div');
      div.className = className;
      div.appendChild(document.createTextNode(msg));
      const container = document.querySelector('.searchContainer');
      const search = document.querySelector('.search');
      container.insertBefore(div,search);
      setTimeout(() =>{
        this.clearAlert();
      },1000);
  }
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }
  showRepos(repos){
    let output = '';
    repos.forEach(function(repo){
      output +=`
      <div class="card card-body mb2">
        <div class="row">
          <div class="col-md6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md6">
            <span class="badge badge-primary">Stars ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watcheters ${repo.watchers}</span>
            <span class="badge badge-success">Fork ${repo.fork}</span>
          </div>
        </div>
      </div>
      `;
      console.log(repo.name);
    })
    
    document.getElementById('repos').innerHTML = output;
  }
}