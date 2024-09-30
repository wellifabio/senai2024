document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;

    if (title && date) {
        addAppointment(title, date);
        document.getElementById('form').reset();
    }
});

function addAppointment(title, date) {
    const appointmentsList = document.getElementById('appointments-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${title} - ${new Date(date).toLocaleString()}</span>
        <div>
            <button class="edit-button">Editar</button>
            <button class="complete-button">Concluir</button>
        </div>
    `;
    appointmentsList.appendChild(listItem);

    const editButton = listItem.querySelector('.edit-button');
    const completeButton = listItem.querySelector('.complete-button');

    editButton.addEventListener('click', () => editAppointment(listItem, title, date));
    completeButton.addEventListener('click', () => completeAppointment(listItem));
}

function editAppointment(listItem, title, date) {
    const newTitle = prompt("Editar título:", title);
    const newDate = prompt("Editar data e hora:", date);

    if (newTitle) {
        listItem.querySelector('span').textContent = `${newTitle} - ${new Date(newDate).toLocaleString()}`;
    }
}

function completeAppointment(listItem) {
    const confirmRemoval = confirm("Você deseja concluir e remover este compromisso?");
    if (confirmRemoval) {
        listItem.remove();
    }
}
