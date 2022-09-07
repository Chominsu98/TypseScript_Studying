// utils
function $(selector:string) {
  return document.querySelector(selector);
}
function getUnixTimestamp(date:Date) {
  return new Date(date).getTime();
}

// DOM
var a:Element|HTMLElement|HTMLParagraphElement;
// 엘리먼트와 관련된 타입들 Element보다 추가한게 HtmlElement 더 확장한게 HtmlParagraphElement 이런 게 등등이 존재함
//htmlParagraph말고도 각 태그별로 종류는 많음

//밑에서 innterText부분에서 문제가 터지는 이유는 $유틸에 의하여 반환되어 나오는 것은 Element이다->querySelector로 나오는것이기에?
//근데 innerText속성은 실제로 Element에는 없는요소로서 따라서 innerText가 에러가 터지는 것

//따라서 $()유틸이 반환하는 것이 Element이기에 동시에 만족시킬려면 
//as로 그냥 타입단언을 해주며 오류가 안터짐

//물론 단언말고 deathesTotal:Element해주면 되지 않냐 할 수 있는데 그러면 똑같이 innerText속성은 Element에 없기에 에러발생!
//그럼 :HTMLElement로 해주면 ?그럼 deathesTotal은 또 반환되서 받는게 Element라서 없는 속성들이 있어서 또 터짐
//:HTTMLParagraphElement도 똑같다,,,

//그리고 타입단언을 해줄수있는 이유는 이미 내가 저렇게 쓰기전에 index.html에서 해당 태그를 알고있는 상태여서


const confirmedTotal = $('.confirmed-total') as HTMLSpanElement;
const deathsTotal = $('.deaths') as HTMLParagraphElement;
const recoveredTotal = $('.recovered') as HTMLParagraphElement;
const lastUpdatedTime = $('.last-updated-time') as HTMLParagraphElement;
const rankList = $('.rank-list');
const deathsList = $('.deaths-list');
const recoveredList = $('.recovered-list');
const deathSpinner = createSpinnerElement('deaths-spinner');
const recoveredSpinner = createSpinnerElement('recovered-spinner');

function createSpinnerElement(id:string) {
  const wrapperDiv = document.createElement('div');
  wrapperDiv.setAttribute('id', id);
  wrapperDiv.setAttribute(
    'class',
    'spinner-wrapper flex justify-center align-center',
  );
  const spinnerDiv = document.createElement('div');
  spinnerDiv.setAttribute('class', 'ripple-spinner');
  spinnerDiv.appendChild(document.createElement('div'));
  spinnerDiv.appendChild(document.createElement('div'));
  wrapperDiv.appendChild(spinnerDiv);
  return wrapperDiv;
}

// state
let isDeathLoading = false;
let isRecoveredLoading = false;

// api
function fetchCovidSummary() {
  const url = 'https://api.covid19api.com/summary';
  return axios.get(url);
}

enum CovidStatus{
  Confirmed="confirmed",
  Recovered="recovered",
  Deaths="deaths"
};
// 밑에 fetchCountryInfo의 인자로 주는것이 status의 종류가 가능한게 세가지가 있기에
//enum으로 편히 만들어줌

function fetchCountryInfo(countryCode:string, status:CovidStatus) {
  // params: confirmed, recovered, deaths
  const url = `https://api.covid19api.com/country/${countryCode}/status/${status}`;
  return axios.get(url);
}

// methods
function startApp() {
  setupData();
  initEvents();
}

// events
function initEvents() {
  rankList.addEventListener('click', handleListClick);
}

async function handleListClick(event:any) {
  let selectedId;
  if (
    event.target instanceof HTMLParagraphElement ||
    event.target instanceof HTMLSpanElement
  ) {
    selectedId = event.target.parentElement.id;
  }
  if (event.target instanceof HTMLLIElement) {
    selectedId = event.target.id;
  }
  if (isDeathLoading) {
    return;
  }
  clearDeathList();
  clearRecoveredList();
  startLoadingAnimation();
  isDeathLoading = true;
  const { data: deathResponse } = await fetchCountryInfo(selectedId, CovidStatus.Deaths);
  const { data: recoveredResponse } = await fetchCountryInfo(
    selectedId,
    CovidStatus.Recovered,
  );
  const { data: confirmedResponse } = await fetchCountryInfo(
    selectedId,
    CovidStatus.Confirmed,
  );
  endLoadingAnimation();
  setDeathsList(deathResponse);
  setTotalDeathsByCountry(deathResponse);
  setRecoveredList(recoveredResponse);
  setTotalRecoveredByCountry(recoveredResponse);
  setChartData(confirmedResponse);
  isDeathLoading = false;
}

function setDeathsList(data:any) {
  const sorted = data.sort(
    (a:any, b:any) => getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date),
  );
  sorted.forEach((value:any) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item-b flex align-center');
    const span = document.createElement('span');
    span.textContent = value.Cases;
    span.setAttribute('class', 'deaths');
    const p = document.createElement('p');
    p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
    li.appendChild(span);
    li.appendChild(p);
    deathsList.appendChild(li);
  });
}

function clearDeathList() {
  deathsList.innerHTML = null;
}

function setTotalDeathsByCountry(data:any) {
  deathsTotal.innerText = data[0].Cases;
}

function setRecoveredList(data:any) {
  const sorted = data.sort(
    (a:any, b:any) => getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date),
  );
  sorted.forEach((value:any) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item-b flex align-center');
    const span = document.createElement('span');
    span.textContent = value.Cases;
    span.setAttribute('class', 'recovered');
    const p = document.createElement('p');
    p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
    li.appendChild(span);
    li.appendChild(p);
    recoveredList.appendChild(li);
  });
}

function clearRecoveredList() {
  recoveredList.innerHTML = null;
}

function setTotalRecoveredByCountry(data:any) {
  recoveredTotal.innerText = data[0].Cases;
}

function startLoadingAnimation() {
  deathsList.appendChild(deathSpinner);
  recoveredList.appendChild(recoveredSpinner);
}

function endLoadingAnimation() {
  deathsList.removeChild(deathSpinner);
  recoveredList.removeChild(recoveredSpinner);
}

async function setupData() {
  const { data } = await fetchCovidSummary();
  setTotalConfirmedNumber(data);
  setTotalDeathsByWorld(data);
  setTotalRecoveredByWorld(data);
  setCountryRanksByConfirmedCases(data);
  setLastUpdatedTimestamp(data);
}

function renderChart(data:any, labels:any) {
  var ctx = $('#lineChart').getContext('2d');
  Chart.defaults.color = '#f5eaea';
  Chart.defaults.font.family = 'Exo 2';
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Confirmed for the last two weeks',
          backgroundColor: '#feb72b',
          borderColor: '#feb72b',
          data,
        },
      ],
    },
    options: {},
  });
}

function setChartData(data:any) {
  const chartData = data.slice(-14).map((value:any) => value.Cases);
  const chartLabel = data
    .slice(-14)
    .map((value:any) => new Date(value.Date).toLocaleDateString().slice(5, -1));
  renderChart(chartData, chartLabel);
}

function setTotalConfirmedNumber(data:any) {
  confirmedTotal.innerText = data.Countries.reduce(
    (total:any, current:any) => (total += current.TotalConfirmed),
    0,
  );
}

function setTotalDeathsByWorld(data:any) {
  deathsTotal.innerText = data.Countries.reduce(
    (total:any, current:any) => (total += current.TotalDeaths),
    0,
  );
}

function setTotalRecoveredByWorld(data:any) {
  recoveredTotal.innerText = data.Countries.reduce(
    (total:any, current:any) => (total += current.TotalRecovered),
    0,
  );
}

function setCountryRanksByConfirmedCases(data:any) {
  const sorted = data.Countries.sort(
    (a:any, b:any) => b.TotalConfirmed - a.TotalConfirmed,
  );
  sorted.forEach((value:any) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item flex align-center');
    li.setAttribute('id', value.Slug);
    const span = document.createElement('span');
    span.textContent = value.TotalConfirmed;
    span.setAttribute('class', 'cases');
    const p = document.createElement('p');
    p.setAttribute('class', 'country');
    p.textContent = value.Country;
    li.appendChild(span);
    li.appendChild(p);
    rankList.appendChild(li);
  });
}

function setLastUpdatedTimestamp(data:any) {
  lastUpdatedTime.innerText = new Date(data.Date).toLocaleString();
}

startApp();
