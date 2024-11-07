function createCard(project) {
    
    const card = document.createElement('div');
    card.classList.add('card', 'hover-scale');
    card.id = project.id;
    let cardStyle = `background-image:url(assets/thumbnails/${project.bg}); `
    // if (project.primaryColour) {
    //     cardStyle += `--primary-card-colour: ${project.primaryColour};`;
    // }
    card.style = cardStyle;

    card.innerHTML = `
        <h2>${project.name}</h2>
        <p>${project.shortDescription}</p>
        `

    const cardModal = createModal(project);

    card.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(`Clicked on ${project.name}`);
        cardModal.children[0].scrollTop = 0;
        cardModal.children[0].children[0].scrollTop = 0;
        cardModal.children[0].children[1].scrollTop = 0;
        cardModal.classList.add('show');
    });

    cards.appendChild(card);
    modals.appendChild(cardModal);

    const closeButton = document.getElementById(`close-${project.id}`);
    closeButton.addEventListener('click', (event) => {
        event.preventDefault();
        cardModal.classList.remove('show');
    })
}

function createTab(project) {
    const card = document.createElement('div');
    card.classList.add('tab', 'hover-scale');
    card.id = project.id;
    let cardStyle = `background-image:url(assets/thumbnails/${project.bg}); `
    if (project.primaryColour) {
        cardStyle += `--primary-card-colour: ${project.primaryColour};`;
    }
    card.style = cardStyle;

    card.innerHTML = `
        <h2>${project.name}</h2>
        `

    const cardModal = createModal(project);

    card.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(`Clicked on ${project.name}`);
        cardModal.children[0].scrollTop = 0;
        cardModal.children[0].children[0].scrollTop = 0;
        cardModal.children[0].children[1].scrollTop = 0;
        cardModal.classList.add('show');
    });

    miscs.appendChild(card);
    modals.appendChild(cardModal);

    const closeButton = document.getElementById(`close-${project.id}`);
    closeButton.addEventListener('click', (event) => {
        event.preventDefault();
        cardModal.classList.remove('show');
    })
}

function createModal(project) {
    const cardModal = document.createElement('div');
    cardModal.classList.add('modal-container');
    cardModal.id = `modal-container-${project.id}`;

    let imageCards = "";
    for (image of project.info.images) {
        imageCards += `<div class="modal-image" title="${image.caption}" style="background-image: url(assets/images/${image.url})"></div>`;
    }

    let linkButtons = "";
    if (project.info.links) {
        for (link of project.info.links) {
            linkButtons += `<a href="${link.url}" title="${link.hover}" target="_blank"><button class="modal-link">${link.text}</button></a>`
        }
    }

    const primaryStyle = project.primaryColour ? `--primary-card-colour: ${project.primaryColour};` : "";
    const secondaryStyle = project.secondaryColour ? `--secondary-card-colour: ${project.secondaryColour};` : "";
    const backgroundStyle = project.backgroundColour ? `--background-card-colour: ${project.backgroundColour};` : "";
    const textStyle = project.textColour ? `--text-card-colour: ${project.textColour};` : "";

    const modalString = `
    <div class="modal-box" style="${primaryStyle} ${secondaryStyle} ${backgroundStyle} ${textStyle}">
        <div class="modal">
            <h1>${project.name}</h1>
            <h3>Description</h3>
            <p>
                ${project.info.description}
            </p>
            <hr>
            ${ project.info.contributions ? `<h3>Contribution</h3>
            <p>
                ${project.info.contributions}
            </p>
            <hr>` : ""}
            <div class="modal-dates">
                <p>${project.startDate ? "Started on: " + project.startDate.toDateString() : "Project has yet to begin"}</p>
                <p>${project.endDate ? "Ended on: " + project.endDate.toDateString() : "Project is still ongoing"}</p>
            </div>
            <hr>
            ${ (project.info.links && project.info.links.length != 0) ? 
            `<h3>Links</h3><div class="link-container">`
                + linkButtons +
            `</div><hr>` : ""}
            <button class="close-modal-button" id="close-${project.id}">Go Back</button>
        </div>
        <div class="modal-images-container">
            <h2>Gallery</h2>
            ${imageCards}
        </div>
    </div>`

    cardModal.innerHTML = modalString;
    
    return cardModal;
}

const open = document.getElementById('open');
const close = document.getElementById('close');
const cards = document.getElementById('card-container');

const miscs = document.getElementById('misc-container');
const modals = document.getElementById('modals');

// Sort the project data
// Smaller number (generally) means older project, move further down
projectData.sort((a, b) => b.sortPriority - a.sortPriority);
for (project of projectData) {
    createCard(project);
}

miscData.sort((a, b) => b.sortPriority - a.sortPriority);
for (misc of miscData) {
    createTab(misc);
}