const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const yearNode = document.getElementById('year');

if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
}

if (navToggle && mainNav) {
    const setMenuOpen = (isOpen) => {
        mainNav.classList.toggle('is-open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    };

    navToggle.addEventListener('click', () => {
        setMenuOpen(navToggle.getAttribute('aria-expanded') !== 'true');
    });

    mainNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            setMenuOpen(false);
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
            setMenuOpen(false);
            navToggle.focus();
        }
    });
}

const agreementResults = document.getElementById('agreement-results');
const agreementStatus = document.getElementById('agreement-status');
const agreementToggle = document.getElementById('agreement-toggle');
const agreementDirectory = document.getElementById('agreement-directory');

if (agreementResults && agreementStatus && agreementToggle && agreementDirectory) {
    const agreements = [
        { city: 'santos-dumont', category: 'clinicas', name: 'Clínica Consumed', specialty: 'Consultas médicas', address: 'Rua Dr. Pedro de Almeida, 25 – Centro' },
        { city: 'santos-dumont', category: 'clinicas', name: 'Clínica Medimagem', specialty: 'Diagnósticos por imagem', address: 'Av. Getúlio Vargas, 635 – Centro' },
        { city: 'santos-dumont', category: 'clinicas', name: 'Clínica Digital Cardio', specialty: 'Cardiologia: exames e consulta médica', address: 'Rua Manoel de Paula, 20 – sala 310 – Centro' },
        { city: 'santos-dumont', category: 'clinicas', name: 'Clínica Sandscor – Dr. Pedro Paulo', specialty: 'Cardiologia: exames e consulta médica', address: 'Rua Jacob Ditz, 30 – Centro' },
        { city: 'santos-dumont', category: 'clinicas', name: 'Clínica Dr. Osvane Homem', specialty: 'Cardiologia: exames e consulta médica', address: 'Rua Jacob Ditz, 30 – Centro' },
        { city: 'santos-dumont', category: 'clinicas', name: 'Clínica Dr. Salomão Michel', specialty: 'Cardiologia: exames e consulta médica', address: 'Rua Silva Fortes, 41 – Centro' },
        { city: 'santos-dumont', category: 'clinicas', name: 'Clínica Dr. Suleimen Abdo', specialty: 'Endoscopia e consulta médica', address: 'Rua Antônio Ladeira, 93 – Centro' },
        { city: 'santos-dumont', category: 'fisioterapia', name: 'Clínica Profisio', specialty: 'Fisioterapia', address: 'Rua Treze de Maio, 865 – Centro' },
        { city: 'santos-dumont', category: 'fisioterapia', name: 'Clínica Centro Médico São Lucas', specialty: 'Fisioterapia', address: 'Rua Treze de Maio, 291 – Centro' },
        { city: 'santos-dumont', category: 'dentistas', name: 'Dra. Cristiane Fernandes', specialty: 'Clínica geral', address: 'Rua João Pessoa, 70 – Centro' },
        { city: 'santos-dumont', category: 'dentistas', name: 'Dra. Francine Cristina', specialty: 'Clínica geral', address: 'Rua João Pessoa, 70 – Centro' },
        { city: 'santos-dumont', category: 'dentistas', name: 'Dra. Laís Fernandes', specialty: 'Clínica geral', address: 'Rua João Pessoa, 70 – Centro' },
        { city: 'santos-dumont', category: 'dentistas', name: 'Dra. Luana Cristina Araújo', specialty: 'Clínica geral / Periodontia', address: 'Rua Afonso Pena, 161 – sala 04 – Centro' },
        { city: 'santos-dumont', category: 'dentistas', name: 'Dra. Tainara de O. Freitas', specialty: 'Clínica geral / Ortodontia / Prótese', address: 'Av. Getúlio Vargas, 231 – Centro' },
        { city: 'santos-dumont', category: 'dentistas', name: 'Dr. Otto Neves', specialty: 'Clínica geral / Endodontia', address: 'Rua Dr. Guilherme de Castro, 806 – Centro' },
        { city: 'santos-dumont', category: 'dentistas', name: 'Dr. Nilo Segheto', specialty: 'Clínica geral / Prótese / Implante', address: 'Rua João Pessoa, 59 A – Centro' },
        { city: 'santos-dumont', category: 'dentistas', name: 'Dra. Solange Baião', specialty: 'Clínica geral / Ortodontia', address: 'Rua João Pessoa, 59 A – Centro' },
        { city: 'santos-dumont', category: 'dentistas', name: 'Dra. Gilmara Guedes', specialty: 'Odontopediatria', address: 'Rua João Pessoa, 70 – Centro' },
        { city: 'santos-dumont', category: 'dentistas', name: 'Dr. Luiz Claudio', specialty: 'Ortodontia', address: 'Rua João Pessoa, 70 – Centro' },
        { city: 'santos-dumont', category: 'dentistas', name: 'Dr. Fabricio de Paula', specialty: 'Implante', address: 'Rua João Pessoa, 70 – Centro' },
        { city: 'santos-dumont', category: 'dentistas', name: 'Dr. Nereu Teixeira', specialty: 'Clínica geral / Prótese / Endodontia / Extração', address: 'Rua Dr. Guilherme de Castro, 806 – Centro' },
        { city: 'juiz-de-fora', category: 'clinicas', name: 'Clínica CIA', specialty: 'Consultas médicas', address: 'Rua Dr. Constantino Paleta, 134 – Centro' },
        { city: 'juiz-de-fora', category: 'clinicas', name: 'Clínica da Mulher', specialty: 'Consultas médicas', address: 'Rua Delfim Moreira, 95 – Centro' },
        { city: 'juiz-de-fora', category: 'clinicas', name: 'Clínica Ortoclin', specialty: 'Ortopedia: consultas médicas', address: 'Rua Prof. Benjamin Colucci, 50 – 4º andar – Centro' },
        { city: 'juiz-de-fora', category: 'clinicas', name: 'Clínica Ortra', specialty: 'Consultas médicas', address: 'Rua Dr. Antônio Carlos, 384 – Centro' },
        { city: 'juiz-de-fora', category: 'clinicas', name: 'Clínica TCR', specialty: 'Diagnósticos por imagem', address: 'Av. Itamar Franco, 800 – Centro' },
        { city: 'juiz-de-fora', category: 'clinicas', name: 'Clínica Exame e Neuralob', specialty: 'Diagnósticos por imagem', address: 'Rua Delfim Moreira, 54 – Centro' },
        { city: 'juiz-de-fora', category: 'clinicas', name: 'Clínica Ultrimagem', specialty: 'Diagnósticos por imagem', address: 'Av. Barão do Rio Branco, 3029 – Centro' },
        { city: 'juiz-de-fora', category: 'clinicas', name: 'Clínica Magnescan', specialty: 'Diagnósticos por imagem', address: 'Rua Dr. Constantino Paleta, 129 – Centro' },
        { city: 'juiz-de-fora', category: 'clinicas', name: 'Clínica Policonsultas', specialty: 'Exames e consultas', address: 'Av. Rio Branco, 718 – Centro' },
        { city: 'juiz-de-fora', category: 'clinicas', name: 'Clínica CEEO', specialty: 'Oftalmologia', address: 'Av. Rio Branco, 4433 – Centro' },
        { city: 'juiz-de-fora', category: 'clinicas', name: 'Clínica Olhar.com', specialty: 'Oftalmologia', address: 'Rua Fernando Lobo, 102 – 6º andar – sala 605' },
        { city: 'juiz-de-fora', category: 'clinicas', name: 'Hospital de Olhos', specialty: 'Oftalmologia', address: 'Av. Rio Branco, 4051 – 501 – Centro' },
        { city: 'juiz-de-fora', category: 'clinicas', name: 'Clínica Lumen', specialty: 'Endoscopia / Aparelho digestivo / Consultas médicas', address: 'Rua Delfim Moreira, 217 – Centro' },
        { city: 'juiz-de-fora', category: 'clinicas', name: 'Clínica Cintilocenter', specialty: 'Cintilografia', address: 'Rua Rei Alberto, 196 – Centro' },
        { city: 'juiz-de-fora', category: 'clinicas', name: 'Clínica Nova Cardio', specialty: 'Cardiologia: exames e consultas', address: 'Rua Oscar Vidal, 71 – 12º andar' },
        { city: 'juiz-de-fora', category: 'clinicas', name: 'Clínica Digital Cardio', specialty: 'Cardiologia: exames e consultas médicas', address: 'Av. Rio Branco, 1871 – Centro – sala 1904' }
    ];

    const cityLabels = {
        'santos-dumont': 'Santos Dumont',
        'juiz-de-fora': 'Juiz de Fora',
        barbacena: 'Barbacena'
    };
    const categoryLabels = {
        clinicas: 'Médicos e clínicas',
        dentistas: 'Dentistas',
        fisioterapia: 'Fisioterapia'
    };
    const selectedFilters = { city: 'all', category: 'all' };

    const createTextElement = (tagName, className, text) => {
        const element = document.createElement(tagName);
        element.className = className;
        element.textContent = text;
        return element;
    };

    const renderAgreements = () => {
        const filteredAgreements = agreements.filter((agreement) =>
            (selectedFilters.city === 'all' || agreement.city === selectedFilters.city)
            && (selectedFilters.category === 'all' || agreement.category === selectedFilters.category)
        );
        const visibleCities = selectedFilters.city === 'all'
            ? Object.keys(cityLabels)
            : [selectedFilters.city];

        agreementResults.replaceChildren();

        visibleCities.forEach((city) => {
            const cityAgreements = filteredAgreements.filter((agreement) => agreement.city === city);
            const citySection = document.createElement('section');
            citySection.className = 'agreement-city';
            citySection.append(createTextElement('h3', 'agreement-city-title', cityLabels[city]));

            if (cityAgreements.length === 0) {
                const message = city === 'barbacena'
                    ? 'Ainda não há convênios cadastrados neste local.'
                    : `Ainda não há convênio de ${categoryLabels[selectedFilters.category]} cadastrado neste local.`;
                citySection.append(createTextElement('p', 'agreement-empty', message));
                agreementResults.append(citySection);
                return;
            }

            const cards = document.createElement('div');
            cards.className = 'agreement-card-grid';

            cityAgreements.forEach((agreement) => {
                const card = document.createElement('article');
                card.className = 'agreement-card';
                card.append(createTextElement('span', 'agreement-category', categoryLabels[agreement.category]));
                card.append(createTextElement('h4', 'agreement-name', agreement.name));
                card.append(createTextElement('p', 'agreement-specialty', `Especialidade: ${agreement.specialty}`));
                card.append(createTextElement('p', 'agreement-address', `Endereço: ${agreement.address}`));
                cards.append(card);
            });

            citySection.append(cards);
            agreementResults.append(citySection);
        });

        agreementStatus.textContent = `${filteredAgreements.length} ${filteredAgreements.length === 1 ? 'registro encontrado' : 'registros encontrados'}.`;
    };

    document.querySelectorAll('[data-agreement-city]').forEach((button) => {
        button.addEventListener('click', () => {
            selectedFilters.city = button.dataset.agreementCity;
            document.querySelectorAll('[data-agreement-city]').forEach((filter) => {
                const isActive = filter === button;
                filter.classList.toggle('is-active', isActive);
                filter.setAttribute('aria-pressed', String(isActive));
            });
            renderAgreements();
        });
    });

    document.querySelectorAll('[data-agreement-category]').forEach((button) => {
        button.addEventListener('click', () => {
            selectedFilters.category = button.dataset.agreementCategory;
            document.querySelectorAll('[data-agreement-category]').forEach((filter) => {
                const isActive = filter === button;
                filter.classList.toggle('is-active', isActive);
                filter.setAttribute('aria-pressed', String(isActive));
            });
            renderAgreements();
        });
    });

    agreementToggle.addEventListener('click', () => {
        const isOpen = agreementToggle.getAttribute('aria-expanded') !== 'true';
        agreementDirectory.hidden = !isOpen;
        agreementToggle.setAttribute('aria-expanded', String(isOpen));
        agreementToggle.textContent = isOpen ? 'Ocultar convênios' : 'Ver convênios';

        if (isOpen && agreementResults.childElementCount === 0) {
            renderAgreements();
        }
    });
}
