// Create a new instance of GithubClient
var githubClient = new GithubClient('mohamed-khettab', 'Scioto-Connect', 'sciotoconnect', 'my_token');
var filename = 'client/src/data/extracurriculars.json';
var email = 'my_email';

// Function to commit spreadsheet changes to Github
function commitToGithub() {
  // Get the JSON content of the extracurriculars spreadsheet
  var content = convertToJSON();

  // Temporarily comment out for testing purposes
  // var commitUrl = githubClient.commit(content, filename, email);
  // Logger.log("New commit URL: " + commitUrl);

  Logger.log('Commited Successfully!');
}
