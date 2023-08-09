/*header*/

const textHead = document.querySelector('.showNumber_header');
const numberHead = document.querySelector('.number_header');
const textHeadEm = document.querySelector('.showEmail_header');
const numberHeadEm = document.querySelector('.email_headerTop');


function showNumberHead() {
  numberHead.style.display = 'flex';
  textHead.style.display = 'none';
}

function showEmailHead() {
  numberHeadEm.style.display = 'flex';
  textHeadEm.style.display = 'none';
}


/*footer*/

const text = document.querySelector('.showNumber_footer');
const number = document.querySelector('.number_footer');
const number1 = document.querySelector('.number_footer1');

const textEm = document.querySelector('.showEmail_footer');
const email = document.querySelector('.email_footer');

function showNumber() {
  number.style.display = 'flex';
  number1.style.display = 'flex';
  text.style.display = 'none';
}

function showEmail() {
  email.style.display = 'flex';
  textEm.style.display = 'none';
}