
/**
 * Get all classes created for the 
 * current discipline, based on
 * existing files, which are also
 * based on a pattern
 * @param {} path Indicates the path
 * to which we look for the files 
 */
function getClassesList(path) {
  
  var ulAulas = document.createElement('ul');  

  for(var i = 1; i <= 15; i++) {
  
    var aulaAtual = (i.toString().length == 1)
      ? '0' + i.toString()
      : i.toString();

    var fullURL = path + 'aula' + aulaAtual + '.html'; 
    //console.log('fullURL:' + fullURL);
      
    if (fileExists(fullURL)) {   

      //console.log('Achou: ' + fullURL);  
      var liAula    = document.createElement('li');
      var linkAula  = document.createElement('a');
      linkAula.href = fullURL; 
      linkAula.textContent = 'Aula ' + aulaAtual;
      liAula.appendChild(linkAula);      
      ulAulas.appendChild(liAula);
      ulAulas.innerHTML += ' / ';
    }
  }  
  
  //console.log(ulAulas);
  return ulAulas;
}

function fillClasses(path) {

  document
    .querySelector('#classes')
    .appendChild(
      getClassesList(path)
    );
}

function getCurrentSemester() {
  var currentDate = new Date();
  var semester = (currentDate.getMonth() > 5) 
    ? '2'
    : '1';
  return semester + '° semestre de ' + currentDate.getFullYear(); 
}

function getYearsPassedFrom(year) {
  return new Date().getFullYear() - year;
}

function getNewSection(id) {
  var section = document.createElement('section');

  if (id > 0)
    section.id = 'section' + id.toString();
  
  return section;
}

function getGITSlides(slideNumber) {

  var section1 = getNewSection(slideNumber);

  var figureGit = document.createElement('figure');
  var imgGit = document.createElement('img');
  imgGit.setAttribute('src', '../../img/gitlogo2.gif');
  imgGit.setAttribute('width', '64px');
  imgGit.setAttribute('height', '64px');
  imgGit.classList.add('imgLeft');
  figureGit.appendChild(imgGit);

  var figureGithub = document.createElement('figure');
  var imgGithub = document.createElement('img');
  imgGithub.setAttribute('src', '../../img/github.png');
  imgGithub.setAttribute('width', '64px');
  imgGithub.setAttribute('height', '64px');
  imgGithub.classList.add('imgRight');
  figureGithub.appendChild(imgGithub);
 
  var h3 = document.createElement('h3');
  h3.textContent = 'git + github';

  var items = [];
  items.push(
    'GIT é uma ferramenta para controle de versão de código-fonte, ' +
    'muito utilizada no mercado',

    'Github é uma plataforma de hospedagem de repositórios git ' +
    '(portfólio do desenvolvedor)',
    
    'Ambas as ferramentas serão utilizadas nesta disciplina ' +
    '(entrega e correção de trabalhos)', 
    
    "<i>Download</i> disponível em " +
    "<a target='_blank' href='https://git-scm.com'>https://git-scm.com/</a>",

    "Há um guia básico em português " +
    "<a target='_blank' " + 
    "href='http://rogerdudler.github.io/git-guide/index.pt_BR.html'>aqui</a>", 
    
    'Acompanhe o professor na configuração do git e criação de conta no Github'
  );

  section1.appendChild(h3);
  section1.appendChild(figureGit);
  section1.appendChild(figureGithub);
  section1.appendChild(createSimpleUL(items, true));
  return section1;
}

function getNewLi(data, render) {

  var li = document.createElement('li');
  if (render) {
    li.innerHTML = data;
  } 
  else {
    li.textContent = data;
  }
  return li;
}

function getStandardObjectives() {

  var objectives = [];
  objectives.push('Apresentação dos alunos');
  objectives.push('Apresentação do professor');
  objectives.push('Apresentação da disciplina');
  objectives.push('Metodologia');
  objectives.push('Formas de avaliação');
  objectives.push('Validação do ambiente em laboratório');
  objectives.push('Introdução ao git e github');
  return objectives;
}

function createSimpleSlide(id, title, items, renderHTML) {

  var section = getNewSection(id);
  var h3 = document.createElement('h3');
  h3.textContent = title; 
  section.appendChild(h3);
  section.appendChild(createSimpleUL(items, renderHTML));
  return section;
}

function createSimpleUL(items, renderHTML) {
  var ul = document.createElement('ul');
  items.forEach(function(item) {
    ul.appendChild(getNewLi(item, renderHTML));
  });
  return ul;
}

function createTitleSlide(id, title) {

  var section = getNewSection(id);
  
  var h2 = document.createElement('h2');
  h2.textContent = title;

  section.appendChild(h2);
  return section;
}

function insertSlide(inside, data, before) {
  document
    .querySelector(inside)
    .insertBefore(
      data, 
      document.querySelector(before)
    );
}

function createFigure(path, width, height, className) {
  var figure = document.createElement('figure');
  var img = document.createElement('img');
  img.setAttribute('src', path);
  img.setAttribute('width', width);
  img.setAttribute('height', height);
  if (className != '')
    img.classList.add(className);
  figure.appendChild(img);
  return figure;
}

