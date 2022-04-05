class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.mainContainer = document.querySelector('#main-container');
    this.input = document.querySelector('#user-message');
    this.buttonEl.addEventListener('click', () => {
      this.displayMessage();
    });
    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    let div = document.createElement('div');
    div.setAttribute('id', 'message');
    div.innerText = this.input.value;
    this.mainContainer.append(div);

    console.log('Thanks for clicking me!');
  }

  hideMessage() {
    this.mainContainer.innerHTML = '';
  }
}

module.exports = MessageView;
