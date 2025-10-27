const UI_NAME_STRINGS = {
    userName: 'username',
    skillsList: 'skillsItemlist',
    // lanaugeList,
    // hobbiesList
}

function main() {
    preLoadUserName();
    generateSkiilsList();
    // generateLanguageList(languages, languagesListElement)
    // generateHobbiesList(hobbies, hobbiesListElement)
}

function preLoadUserName() {
    const values = getStoragePayload();
    const name = values.nameParts;
    document.getElementById(UI_NAME_STRINGS.userName).textContent = name;
}

function getStoragePayload() {
    const values = localStorage.getItem('userInfo');
    return JSON.parse(values);
}

function generateSkiilsList() {
    const skillsListElement = document.getElementById(UI_NAME_STRINGS.skillsList);
    const values = getStoragePayload();

    const skills = values
        .skills.replaceAll(",", " ")
        .split(" ")
        .filter(Boolean);
    
    generateList(skills, skillsListElement);
}

function generateList(values, elementList) {
    values.forEach(value => {
        generateListItem(elementList, value)
    })
}

function generateListItem(list, skill) {
    const li = document.createElement('li');
    li.textContent = skill;
    list.appendChild(li);
}

main();