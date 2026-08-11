(function(){
  const SHOULD_PLAY_KEY = 'portfolioAudioShouldPlay';
  const VOLUME_KEY = 'portfolioAudioVolume';

  function setPlayState(player, playing){
    if(!player) return;
    player.classList.toggle('is-playing', playing);
    const button = player.querySelector('[data-audio-toggle]');
    if(button){
      button.setAttribute('aria-label', playing ? 'Pause music' : 'Play music');
      button.setAttribute('aria-pressed', playing ? 'true' : 'false');
    }
  }

  function initProjectPlayer(){
    const audio = document.getElementById('portfolioAudio');
    const player = document.querySelector('[data-audio-player]');
    if(!audio || !player) return;

    const toggle = player.querySelector('[data-audio-toggle]');
    const volume = player.querySelector('[data-audio-volume]');
    const storedVolume = Number(localStorage.getItem(VOLUME_KEY));
    audio.volume = Number.isFinite(storedVolume) && storedVolume >= 0 && storedVolume <= 1
      ? storedVolume
      : 0.55;
    volume.value = String(audio.volume);

    async function play(){
      try {
        await audio.play();
        sessionStorage.setItem(SHOULD_PLAY_KEY, '1');
      } catch(error) {
        sessionStorage.setItem(SHOULD_PLAY_KEY, '0');
        setPlayState(player, false);
      }
    }

    toggle.addEventListener('click', ()=>{
      if(audio.paused) play();
      else {
        audio.pause();
        sessionStorage.setItem(SHOULD_PLAY_KEY, '0');
      }
    });

    volume.addEventListener('input', ()=>{
      audio.volume = Number(volume.value);
      localStorage.setItem(VOLUME_KEY, String(audio.volume));
      if(audio.volume > 0 && audio.paused) play();
    });

    audio.addEventListener('play', ()=>setPlayState(player, true));
    audio.addEventListener('pause', ()=>setPlayState(player, false));
    audio.addEventListener('volumechange', ()=>{
      player.classList.toggle('is-muted', audio.muted || audio.volume === 0);
    });

    if(sessionStorage.getItem(SHOULD_PLAY_KEY) === '1') play();
    else setPlayState(player, false);
  }

  function initIndexTrigger(){
    const link = document.querySelector('.enter-btn[href="project.html"]');
    if(!link) return;
    link.addEventListener('click', event=>{
      event.preventDefault();
      sessionStorage.setItem('hasEntered', '1');
      sessionStorage.setItem(SHOULD_PLAY_KEY, '1');
    });
  }

  initProjectPlayer();
  initIndexTrigger();
})();
