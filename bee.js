const bees = [
    { title: "Скромные пчёлы", info: "Базовый вид пчёл, с которого всё начинается." },
    { title: "Лесные пчёлы", info: "Обитают в лесных биомах с дубами и лиственными деревьями." },
    { title: "Луговые пчёлы", info: "Оптимизированы для открытых пространств с цветами." },
    { title: "Болотные пчёлы", info: "Живут в болотистых и влажных районах." },
    { title: "Тропические пчёлы", info: "Выносливы в жарком климате с экзотической флорой." },
    { title: "Зимние пчёлы", info: "Приспособлены к холодным и снежным условиям." },
    { title: "Пчёлы Края", info: "Редкий мистический вид из Края." },
    { title: "Райские пчёлы", info: "Получены путём селекции для улучшенных характеристик." },
    { title: "Трудолюбивые пчёлы", info: "Разведены для увеличения продуктивности ульев." },
    { title: "Имперские пчёлы", info: "Обладают высокой производительностью и качеством мёда." },
    { title: "Культивируемые пчёлы", info: "Получены при оптимальных условиях разведения." },
    { title: "Величественные пчёлы", info: "Скрещены для получения элитного мёда." },
    { title: "Добросовестные пчёлы", info: "Обеспечивают стабильную работу в умеренном климате." },
    { title: "Доблестные пчёлы", info: "Выведены для повышения выносливости в экстремальных условиях." },
    { title: "Стойкие пчёлы", info: "Переносят высокие нагрузки и стрессовые условия." },
    { title: "Зловещие пчёлы", info: "Обладают загадочной тёмной энергией." },
    { title: "Суровые пчёлы", info: "Приспособлены к самым суровым климатическим условиям." },
    { title: "Дьявольские пчёлы", info: "Имеют огненную мощь и редкие свойства." },
    { title: "Имперские пчёлы на опыт", info: "Особый вид, который даёт опыт." }
];

const container = document.querySelector('.container');

bees.forEach(bee => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<h2>${bee.title}</h2><p>клик по мне</p>`;
    card.addEventListener('click', () => openModal(bee.title, bee.info));
    container.appendChild(card);
});

function openModal(title, info) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-info').innerText = info;
    document.getElementById('modal').classList.add('show');
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}