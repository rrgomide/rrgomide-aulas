let CURRENT_DISCIPLINE = 'Programação II';
let CLASS01 = 'Apresentação da disciplina e configurações iniciais';

function setTitle(classIndex) {
  document.title = CURRENT_DISCIPLINE + ' - ' + getNameOfClass(classIndex);
}

function getNameOfClass(classIndex) {

  switch(classIndex) {
    case 1: return CLASS01;
  }
}

function getDisciplineData() {

  var discipline = {
    name: "Programação II",
    university: "Centro Universitário Estácio",
    semester: "02/2017",
    teacher: "Prof. Raphael Gomide",
    teacherEmail: "raphael.gomide@live.estacio.br",
    weekDays: "Quinta-feira",
    startTime: "19:00",
    endTime: "22:30",
    where: "Lab. 06"
  }

  return discipline;
}
