const body = document.querySelector('body');


const arrayImg = [{url:'https://midnatthome.com/wp-content/uploads/2021/11/paslakan2-midnatt_brownisch_1400px.jpg', text:'Hassel'},
{url:'https://midnatthome.com/wp-content/uploads/2020/11/paslakan-wilted-midnatt_1170px.jpg',text:'Wilted'},
{url:'https://midnatthome.com/wp-content/uploads/2020/11/Duvet-cover-set-kids-bosco-paslakan-barn-midnatt_LR-Grey-backgroung.jpg',text:'Olive'},
{url:'https://midnatthome.com/wp-content/uploads/2021/11/paslakan2-midnatt_blue_1400px.jpg', text:'Blue'}];

for (let i = 0; i < arrayImg.length; i++) {
  const block = document.createElement('div');
  const title = document.createElement('h2');
  const img = document.createElement('img');
  img.src = arrayImg[i].url;
  title.innerHTML = arrayImg[i].text;
  block.appendChild(img);
  block.appendChild(title);
  body.appendChild(block);
  if (i%3===0) {
    title.style.color='white';
    block.style.backgroundColor='grey';
    }
  else {
      title.style.color='grey';
      block.style.backgroundColor='white';
    }
}
body.style.display='flex';
body.style.flexWrap='wrap';


