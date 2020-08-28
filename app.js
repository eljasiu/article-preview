const shareBtn = document.querySelector('.share');
const socialsIcons = document.querySelector('.socials');

function show(){
  if(socialsIcons.classList.contains('active')) return;
  socialsIcons.classList.add('active');

  socialsIcons.style.opacity = '0';
  window.setTimeout(function() {
    socialsIcons.style.opacity = '1';
  }, 50)
}

function hide(e){
  if(e.target !== shareBtn && e.target !== socialsIcons && e.target !== (document.querySelector('.share img')) && e.target !== (document.querySelector('.socials span'))){
    socialsIcons.classList.remove('active')
  }
}

shareBtn.addEventListener('mousemove', show);
shareBtn.addEventListener('click', show);

window.addEventListener('click', hide);
