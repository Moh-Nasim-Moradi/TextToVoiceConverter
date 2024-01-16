let textArea = document.querySelector('textarea');
let Btn = document.querySelector('button');
let selectVoice = document.querySelector('select');
let spk = new SpeechSynthesisUtterance();
let voices = [];


window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    spk.voice = voices[0];
    voices.forEach((voice, i) => (selectVoice.options[i] = new Option(voice.name, i)));
};


selectVoice.addEventListener('change', () => {
    spk.voice = voices[selectVoice.value];
});


function speakText() {
    spk.text = textArea.value;
    window.speechSynthesis.speak(spk);
};
Btn.addEventListener('click', speakText);

