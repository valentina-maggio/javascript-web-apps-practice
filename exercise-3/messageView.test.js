/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#user-message');

    inputEl.value = 'Hi there!';

    buttonEl.click();
    view.displayMessage();
    
    expect(document.querySelector('#message').innerText).toBe('Hi there!');
  });

  it('removes the message when hide message button clicked', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  })
});