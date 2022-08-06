//add this to Slashy command's action script

const label = 'Add item with #category';
const placeholder = 'Do laundry #Personal';

showModal(label, placeholder, onsubmit);

function onsubmit(val) {
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: val, url: window.location.href }),
  })
    .then((response) => response.json())
    .then((result) => {

      var div = document.createElement('div');
      div.id = 'todo-popup';

      writeToNotion(`🙋🏻‍♀️ to-do: [${val.split('#')[0].trim()}](${result.url})`);
      const newContent = document.createTextNode(result.message);
      div.appendChild(newContent);

      div.classList.add('notion-popup', 'notion-plugin-show');

      div.style.padding = '20px';
      div.style.height = '60px';
      div.style.top = '-70%';
      div.style.borderRadius = '8px';
      div.style.color = 'rgb(133 132 128)';
      div.style.boxShadow = 'rgb(15 15 15 / 5%) 0px 0px 0px 1px, rgb(15 15 15 / 10%) 0px 3px 6px, rgb(15 15 15 / 7%) 0px 9px 24px';

      document.body.appendChild(div);

      setTimeout(function () {
        document.getElementById('todo-popup').remove();
      }, 800);

      document.getElementById('notion-plugin-popup-input').value = '';
    })
    .catch((error) => console.log('error', error));
}
