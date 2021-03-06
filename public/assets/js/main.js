import Modal from  './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')
//Pegar quando o marcar como o lido for clicado
checkButtons.forEach(button => {
     //adcionar a escuta 
     button.addEventListener('click', handleClick)

})

//Quando o botão trash for clicado ele abre a modal
const trashButton = document.querySelectorAll('.actions a.trash')

trashButton.forEach(button => {
    button.addEventListener('click', (event) => handleClick(event, false))

})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "trash"
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id 

    const form = document.querySelector('.modal form')
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}` 
    check? modalButton.classList.remove('red') : modalButton.classList.add('red')



    //abrir modal
    modal.open()
}
