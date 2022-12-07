  
export default function displayMessage(messageType, message, targetElement) {
    const element = document.querySelector(targetElement);

    element.innerHTML = `<div className="message ${messageType}">${message}</div>`;
}