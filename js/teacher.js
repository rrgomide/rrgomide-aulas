
function getTeacherData() {
  var data = [];
  data.push('Natural de Arcos/MG');
  data.push('Formado em Sistemas de Informação pela PUC Minas (2004)');
  data.push('Pós-graduado em Software Livre Aplicado (2005)');
  data.push(getYearsPassedFrom(2006) + ' anos de experiência com docência em nível superior');
  data.push(getYearsPassedFrom(2007) + ' anos de experiência de mercado como desenvolvedor');
  return data;
}

function getTeacherExperience() {
  var data = [];
  data.push("<img src='../img/sankhya.png'>");
  data.push("<img src='../img/totvs.png'>");
  return data;
}

function getTeacherSlides(id) {
  var mainSection   = getNewSection(id);

  var innerSection1 = getNewSection(-1);
  var h3 = document.createElement('h3');
  h3.textContent = 'Apresentação do professor'; 
  innerSection1.appendChild(h3);
  innerSection1.appendChild(createSimpleUL(getTeacherData(), false));

  var innerSection2 = getNewSection(-1);
  var h3_2 = document.createElement('h3');
  h3_2.textContent = 'Experiência'; 
  innerSection2.appendChild(h3_2);
  var fig1 = createFigure('../../img/totvs.png', '64px', '64px', '');
  innerSection2.appendChild(fig1);
  var fig2 = createFigure('../../img/totvs.png', '64px', '64px', '');
  innerSection2.appendChild(fig2);
  var fig3 = createFigure('../../img/totvs.png', '64px', '64px', '');
  innerSection2.appendChild(fig3);
  var fig4 = createFigure('../../img/totvs.png', '64px', '64px', '');
  innerSection2.appendChild(fig4);

  mainSection.appendChild(innerSection1);
  mainSection.appendChild(innerSection2);
  return mainSection;
}