function showNotification() {
    const notificationContainer = document.getElementById('notification-container');

    // Создаем элемент уведомления
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = 'Это уведомление!';

    // Добавляем уведомление в контейнер
    notificationContainer.appendChild(notification);

    // Удаляем уведомление через 5 секунд
    setTimeout(() => {
        notification.remove();
    }, 5000);
}