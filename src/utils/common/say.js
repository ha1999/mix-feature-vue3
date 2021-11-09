export default function say(message) {
    const msg = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(msg);
  }