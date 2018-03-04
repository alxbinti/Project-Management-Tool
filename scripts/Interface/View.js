document.addEventListener("DOMContentLoaded", function () {
  console.log('it is working');

  let users = [];
  let sprints = [];
  let issues = [];

  let user = new User('Alex');
  users.push(user);
  console.log(users);

  let sprint = new Sprint('Sprint-01');
  sprints.push(sprint);
  console.log(sprints);

  let sprint_two = new Sprint('Sprint-02');
  sprints.push(sprint_two);
  console.log(sprint_two);

  // issues hardcodata
  let issue = new Issue('Feature', ' random issue ', sprint.Id, user.Id, ' awesome description');
  issues.push(issue);
  console.log(issues);
  // issues hardcodata

  let issue_two = new Issue('Bug', ' danger danger', sprint_two.Id, user.Id, ' no description provided');
  issues.push(issue_two);

  var addIssue = function () {
    const issue_type = prompt('Issue type: ');
    if (issue_type === '') {
      alert('Type something');
      return;
    }

    let issue_name = prompt('Name: ');
    // console.log(issue_name);
    // verifica daca exista sprintul cu id`ul
    let sprint = prompt('SprintId: ');
    if (isNaN(parseInt(sprint, 10))) {
      alert('Invalid Sprint id');
      return;
    }
    sprint = parseInt(sprint, 10);

    let found = false;
    for (let i = 0; i < sprints.length; i++) {
      if (sprints[i].Id === sprint) {
        found = true;
      }
    }
    if (!found) {
      alert('No sprint with that Id');
      return;
    }

    let issue_description = prompt('Description :');
    // console.log(issue_description);
    let new_issue = new Issue(issue_type, issue_name, sprint, user.Id, issue_description);
    console.log(new_issue);
    issues.push(new_issue);
  };
  var showOverview = function () {
    // console.log('qwe')
    let result = '';
    for (let i = 0; i < sprints.length; i++) {
      result += ` Sprint with ID : ${sprints[i].Id} and name : ${sprints[i].Name} \n`;
      // console.log(result);
      for (let j = 0; j < issues.length; j++) {
        if (issues[j].SprintId === sprints[i].Id && issues[j].Type !== typeTask) {
          result += `   Issue with id : ${issues[j].Id}\n`;
          result += `   Type : ${issues[j].Type}\n`;
          result += `   Status : ${issues[j].Status}\n`;
          result += `   Description : ${issues[j].Description}\n`;
        }
      }
    }
    alert(result);
  };

  var addSprint = function () {
    // console.log('new sprint added');
    const sprint_name = prompt('Sprint Name: ');
    if (sprint_name === '' || !sprint_name) {
      alert('You must enter a name');
      return;
    }

    const sprint = new Sprint(sprint_name);
    sprints.push(sprint);
    alert(`Added new sprint with id '${sprint.Id}' and name '${sprint.Name}'`);
    console.log(sprints);

    refreshSprint();
  };

  var filterBySprint = function () {
    let sprint = prompt('Sprint ID: ');
    if (isNaN(parseInt(sprint, 10))) {
      alert('You must enter a number');
      return;
    }
    sprint = parseInt(sprint, 10);

    let filtered = issues.filter(function (item) {
      return item.SprintId === sprint;
    });
    console.log(filtered);
    let result = '';
    for (let i = 0; i < filtered.length; i++) {
      result += `   Issue with id : ${filtered[i].Id}\n`;
      result += `   Type : ${filtered[i].Type}\n`;
      result += `   Status : ${filtered[i].Status}\n`;
      result += `   Description : ${filtered[i].Description}\n`;
    }
    alert(result);
    return;
  };

  var getIssueId = function getIssueId() {
    let issueId = prompt('IssueId: ');
    if (isNaN(parseInt(issueId, 10))) {
      alert('Invalid Issue Id');
      return -1;
    }
    issueId = parseInt(issueId, 10);

    for (let i = 0; i < issues.length; i++) {
      if (issues[i].Id === issueId) {
        return i;
      }
    }
    return -1;
  };
  var getIssueName = function getIssueName() {
    const index = getIssueId();
    if (index === -1) {
      alert('No Issue with that Id');
      return;
    }
    const name = prompt('New Name: ');
    if (name === null || name === '') {
      alert('No Name');
      return;
    }
    issues[index].Name = name;
  };

  var getIssueType = function getIssueType() {
    const index = getIssueId();
    if (index === -1) {
      alert('No Issue with that Id');
      return;
    }
    const type = prompt('New Type: ');
    if (type !== typeFeature && type !== typeBug && type !== typeBug) {
      alert('Invalid Type');
      return;
    }
    issues[index].Type = type;
  };

  var getIssueDescription = function getIssueDescription() {
    const index = getIssueId();
    if (index === -1) {
      alert('No Issue with that Id');
      return;
    }
    const description = prompt('New Description: ');
    if (description === null || description === '') {
      alert('No Description');
    }
    issues[index].Description = description;
  };

  let newSprint = document.getElementById('add_sprint');
  newSprint.addEventListener('click', addSprint);

  let filterButton = document.getElementById('filter_by_sprint');
  filterButton.addEventListener('click', filterBySprint);

  let addIssueButton = document.getElementById('issue');
  addIssueButton.addEventListener('click', addIssue);

  let updateType = document.getElementById('update_type');
  updateType.addEventListener('click', getIssueType);

  let updateName = document.getElementById('update_name');
  updateName.addEventListener('click', getIssueName);

  let updateDescription = document.getElementById('update_description');
  updateDescription.addEventListener('click', getIssueDescription);

 // adauga dinamic sprinturile
  var refreshSprint = function () {
    var w = document.getElementsByClassName('list')[0];
    w.innerHTML = '';
    console.log(sprints);
    for (var i = 0; i < sprints.length; i++) {
      console.log(i);
      console.log(sprints);
      var currentSprint = sprints[i];
      var menuitem = document.createElement('menuitem');
      var a = document.createElement('a');
      a.innerHTML = currentSprint.name;
      menuitem.appendChild(a);
      w.appendChild(menuitem);
      console.log(currentSprint.name);
      a.addEventListener('click', showOverview);
    }
  };
  refreshSprint();
});