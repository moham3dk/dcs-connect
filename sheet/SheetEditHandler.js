function onEdit(e) {
  var range = e.range;
  var editedSheet = range.getSheet();

  if (editedSheet == sciotoExtracurriculars) {
    if (checkUnfilledRows(sciotoExtracurriculars)) {
      commitToGitHub(sciotoExtracurriculars);
    }
  } else if (editedSheet == coffmanExtracurriculars) {
    if (checkUnfilledRows(coffmanExtracurriculars)) {
      commitToGitHub(coffmanExtracurriculars);
    }
  } else if (editedSheet == jeromeExtracurriculars) {
    if (checkUnfilledRows(jeromeExtracurriculars)) {
      commitToGitHub(jeromeExtracurriculars);
    }
  }
}