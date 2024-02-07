let count = 3;

const unread = document.querySelectorAll('.unread');
const plural = document.querySelector('.plural');
const countSpan = document.querySelector('.count');
const markAsRead = document.querySelector('.mark__as-red');

function removeDots(event) {
    const dot = event.querySelector('* > .dot');
    dot.remove();
}

function manageCount(count) {
    countSpan.textContent = count;
    if (count <= 1) {
        plural.style.display = "none"; // remove the s word form the notification
    }
}

unread.forEach(event => {
    event.addEventListener('click', () => {
        event.classList.remove('unread');
        removeDots(event);
        count--;

        manageCount(count);
        unread = document.querySelectorAll('.unread')
    })
})

markAsRead.addEventListener('click', () => {
    countSpan.textContent = 0;
    unread.forEach(event => {
        event.classList.remove('unread');
        removeDots(event);
    })
})