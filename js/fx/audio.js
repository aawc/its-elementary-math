class AudioFX {
    constructor() {
        this.ctx = null;
        this.muted = false;
        
        const unlock = () => {
            if (!this.ctx) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                this.ctx = new AudioContext();
            }
            if (this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
            window.removeEventListener('click', unlock);
            window.removeEventListener('touchstart', unlock);
            window.removeEventListener('keydown', unlock);
        };
        
        window.addEventListener('click', unlock);
        window.addEventListener('touchstart', unlock);
        window.addEventListener('keydown', unlock);
    }
    
    toggleMute() {
        this.muted = !this.muted;
        return this.muted;
    }
    
    playTone(freq, type, duration, vol = 0.1, slide = 0, startTime = 0) {
        if (this.muted || !this.ctx) return;
        
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = type;
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        const now = startTime || this.ctx.currentTime;
        osc.frequency.setValueAtTime(freq, now);
        if (slide !== 0) {
            osc.frequency.exponentialRampToValueAtTime(freq * slide, now + duration);
        }
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(vol, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        
        osc.start(now);
        osc.stop(now + duration);
    }

    playClick() {
        this.playTone(600, 'sine', 0.1, 0.05);
    }

    playCorrect() {
        if (this.muted || !this.ctx) return;
        const now = this.ctx.currentTime;
        
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => { // C, E, G, C
            this.playTone(freq, 'sine', 0.3, 0.1, 0, now + (i * 0.1));
        });
    }

    playIncorrect() {
        this.playTone(150, 'sawtooth', 0.5, 0.1, 0.8);
    }

    playLevelUp() {
        if (this.muted || !this.ctx) return;
        const now = this.ctx.currentTime;
        [440, 554.37, 659.25, 880, 1108.73, 1318.51].forEach((freq, i) => {
            this.playTone(freq, 'square', 0.4, 0.05, 0, now + (i * 0.1));
        });
    }

    playStreak() {
        this.playTone(880, 'sine', 0.3, 0.1, 1.5);
    }
}

export const audio = new AudioFX();
