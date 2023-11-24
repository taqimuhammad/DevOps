function filterProjects() {
    var filter = document.getElementById('filter').value.toUpperCase();
    var projects = document.getElementById('projectList').getElementsByTagName('li');
  
    for (var i = 0; i < projects.length; i++) {
      var technology = projects[i].textContent || projects[i].innerText;
  
      if (technology.toUpperCase().indexOf(filter) > -1) {
        projects[i].style.display = '';
      } else {
        projects[i].style.display = 'none';
      }
    }
  }