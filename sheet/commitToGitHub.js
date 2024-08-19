function commitToGitHub(sheet) {
  var gitHubClient = new GitHubClient('mohamed-khettab', 'dcs-connect', 'dcsconnect', 'my_token');
  var email = 'my_email';
  var filename;

  if (sheet == sciotoExtracurriculars) {
    filename = 'frontend/src/data/scioto.json';
  } else if (sheet == coffmanExtracurriculars) {
    filename = 'frontend/src/data/coffman.json';
  } else if (sheet == jeromeExtracurriculars) {
    filename = 'frontend/src/data/jerome.json';
  } else {
    Logger.log('Unknown sheet: ' + sheet.getName());
    return;
  }

  var content = convertToJSON(sheet);
  gitHubClient.commit(content, filename, email);
  Logger.log('Commited Successfully!');
}
