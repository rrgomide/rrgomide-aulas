function putFirstSlide(classIndex) {

  var firstSectionDiv = document.querySelector('#slide1');

  var h2 = document.createElement('h2');
  h2.textContent = CURRENT_DISCIPLINE;

  var h3 = document.createElement('h3');
  h3.textContent = getNameOfClass(classIndex);

  var h4 = document.createElement('h4');
  h4.textContent = getTeacherName() + ' - ' + getCurrentSemester();

  firstSectionDiv.appendChild(h2);
  firstSectionDiv.appendChild(h3);
  firstSectionDiv.appendChild(h4);
}

function putOtherSlides(currentSlide) {

  var classData = getSimpleSlides();

  classData.forEach(function(aula) {
    insertSlide(
      '.slides',
      createSimpleSlide(aula.id, aula.title, aula.topics, aula.renderHTML),
      '#lastSlide'
    );
  });
  
  insertSlide(
    '.slides',
    getGITSlides(currentSlide++),
    '#lastSlide'
  );
  
  insertSlide(
    '.slides',
    createTitleSlide(currentSlide++, 'Apresentação dos alunos'),
    '#lastSlide'
  );

  /*
  insertSlide(
    '.slides',
    createSimpleSlide(
      currentSlide++, 
      'Apresentação do professor', 
      getTeacherData(), 
      false
    ),
    '#lastSlide'
  );
  */
  insertSlide(
    '.slides',
    getTeacherSlides(currentSlide++),
    '#lastSlide'
  );
}

function getSimpleSlides() {

  var data = [
    {
      id: "2",
      renderHTML: "false",
      title: "Objetivos",
      topics: getStandardObjectives()
    }
  ];

  return data;
}
