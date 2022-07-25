const btn = document.createElement('button')
document.body.append(btn);
btn.onclick = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioCtx = new AudioContext();
    audioCtx.createMediaStreamSource(stream).connect(audioCtx.destination);
};
btn.innerText = 'From Microphone to Speaker';
