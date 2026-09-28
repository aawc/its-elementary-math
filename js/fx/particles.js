class ParticleSystem {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.active = false;
        
        this.resize = this.resize.bind(this);
        this.loop = this.loop.bind(this);
    }
    
    init(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        window.addEventListener('resize', this.resize);
        this.resize();
    }
    
    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    burst(x, y, count = 50) {
        if (!this.canvas) return;
        const wasActive = this.active;
        this.active = true;
        const colors = ['#0072B2', '#D55E00', '#F0E442', '#CC79A7', '#56B4E9']; // Colorblind safe
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x, y,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 0.5) * 10,
                life: 1,
                decay: Math.random() * 0.02 + 0.02,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 5 + 3
            });
        }
        if (!wasActive) requestAnimationFrame(this.loop);
    }
    
    stop() {
        this.active = false;
        this.particles = [];
        if (this.ctx && this.canvas) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
    
    loop() {
        if (!this.active || !this.ctx) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let i = this.particles.length - 1; i >= 0; i--) {
            let p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.2; // Gravity
            p.life -= p.decay;
            
            if (p.life <= 0) {
                this.particles.splice(i, 1);
                continue;
            }
            
            this.ctx.globalAlpha = p.life;
            this.ctx.fillStyle = p.color;
            this.ctx.beginPath();
            if (i % 2 === 0) {
                this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            } else {
                this.ctx.rect(p.x - p.size/2, p.y - p.size/2, p.size, p.size);
            }
            this.ctx.fill();
        }
        this.ctx.globalAlpha = 1;
        
        if (this.particles.length > 0) {
            requestAnimationFrame(this.loop);
        } else {
            this.active = false;
        }
    }
}

export const particles = new ParticleSystem();
