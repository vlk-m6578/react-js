const tracks = [
  { title: 'Musicfan soundtrack', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3' },
  { title: 'Musicfan soundtrack instrumental', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3' }
]

const rootEl = document.getElementById('root');

const headerEl = document.createElement('h1');
headerEl.append('Musicfun Player');
rootEl.append(headerEl);

const tracksEl = document.createElement('ul');
tracks.forEach(track => {
  const trackEl = document.createElement('li');
  const trackTitleEl = document.createElement('div');
  trackTitleEl.append(track.title);
  trackEl.append(trackTitleEl)

  const audioEl = document.createElement('audio');
  audioEl.controls = true;
  audioEl.src = track.url;
  trackEl.append(audioEl);
  
  rootEl.append(trackEl);
})
rootEl.append(tracksEl);
