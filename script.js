/* ==========================================================================
   TABUADA QUEST - GAME SCRIPT
   Desenvolvedor: Carlos Antonio de Oliveira Piquet
   Contato: carlospiquet.projetos@gmail.com
   ========================================================================== */

// 1. GAME CONSTANTS & DATABASE
const CERTIFICATE_ACCESS_PASSWORD = "415263";

const KINGDOMS = {
    2: {
        name: "Reino do Dobro",
        icon: "🌲",
        bossName: "Duplicador de Sombras",
        puzzleTitle: "Floresta Binária",
        rewardName: "Medalha do Dobro",
        rewardIcon: "🏅",
        gearId: "espada_luz",
        gearName: "Espada de Luz",
        gearIcon: "⚔️",
        gearSlot: "hand",
        color: "var(--k-2)"
    },
    3: {
        name: "Reino dos Triplos",
        icon: "💎",
        bossName: "Lorde Tríplice",
        puzzleTitle: "Catarata de Cristais",
        rewardName: "Cristal Triplo",
        rewardIcon: "💎",
        gearId: "capa_heroi",
        gearName: "Capa de Herói",
        gearIcon: "🧥",
        gearSlot: "back",
        color: "var(--k-3)"
    },
    4: {
        name: "Fortaleza do 4",
        icon: "🏰",
        bossName: "Guardião Quadrangular",
        puzzleTitle: "Muralha Imperial",
        rewardName: "Escudo Quadrado",
        rewardIcon: "🛡️",
        gearId: "escudo_reino",
        gearName: "Escudo do Reino",
        gearIcon: "🛡️",
        gearSlot: "hand",
        color: "var(--k-4)"
    },
    5: {
        name: "Ilha do 5",
        icon: "🏴‍☠️",
        bossName: "Pirata Barba-Múltipla",
        puzzleTitle: "Navio dos Múltiplos",
        rewardName: "Moeda Estrela",
        rewardIcon: "🪙",
        gearId: "chapeu_explorador",
        gearName: "Chapéu de Explorador",
        gearIcon: "🤠",
        gearSlot: "head",
        color: "var(--k-5)"
    },
    6: {
        name: "Caverna do 6",
        icon: "🌋",
        bossName: "Monstro dos Seis Olhos",
        puzzleTitle: "Tesouro Subterrâneo",
        rewardName: "Chave da Caverna",
        rewardIcon: "🔑",
        gearId: "mochila_aventura",
        gearName: "Mochila de Aventura",
        gearIcon: "🎒",
        gearSlot: "back",
        color: "var(--k-6)"
    },
    7: {
        name: "Torre do 7",
        icon: "⚡",
        bossName: "Mago dos Raios",
        puzzleTitle: "Parábola de Relâmpagos",
        rewardName: "Relâmpago Mágico",
        rewardIcon: "⚡",
        gearId: "elmo_fogo",
        gearName: "Elmo de Fogo",
        gearIcon: "🪖",
        gearSlot: "head",
        color: "var(--k-7)"
    },
    8: {
        name: "Labirinto do 8",
        icon: "🌀",
        bossName: "Minotauro Infinito",
        puzzleTitle: "Núcleo de Diamantes",
        rewardName: "Diamante Infinito",
        rewardIcon: "💎",
        gearId: "mochila_jato",
        gearName: "Mochila a Jato",
        gearIcon: "🚀",
        gearSlot: "back",
        color: "var(--k-8)"
    },
    9: {
        name: "Castelo Final",
        icon: "👑",
        bossName: "Dragão dos Mestres",
        puzzleTitle: "Palácio de Ouro",
        rewardName: "Coroa dos Mestres",
        rewardIcon: "👑",
        gearId: "coroa_imperial",
        gearName: "Coroa Imperial",
        gearIcon: "👑",
        gearSlot: "head",
        color: "var(--k-9)"
    }
};

const CHARACTERS = {
    robo: {
        name: "Roby",
        description: "Curioso e elétrico!",
        baseColor: "#8b5cf6",
        image: "assets/companions/companion-robot-card.jpg",
        svg: `<svg viewBox="0 0 100 120" width="100%" height="100%">
            <!-- Body -->
            <rect x="25" y="60" width="50" height="40" rx="10" fill="#6d28d9" stroke="#4c1d95" stroke-width="3"/>
            <rect x="35" y="70" width="30" height="20" rx="5" fill="#3b0764"/>
            <!-- Neck -->
            <rect x="45" y="50" width="10" height="15" fill="#9d4edd"/>
            <!-- Head -->
            <rect x="20" y="15" width="60" height="40" rx="12" fill="#8b5cf6" stroke="#4c1d95" stroke-width="3"/>
            <!-- Eyes -->
            <circle cx="38" cy="35" r="7" fill="#22d3ee"/>
            <circle cx="38" cy="35" r="3" fill="#fff"/>
            <circle cx="62" cy="35" r="7" fill="#22d3ee"/>
            <circle cx="62" cy="35" r="3" fill="#fff"/>
            <!-- Mouth -->
            <rect x="35" y="44" width="30" height="4" rx="2" fill="#22d3ee"/>
            <!-- Antennas -->
            <line x1="50" y1="15" x2="50" y2="5" stroke="#9d4edd" stroke-width="4"/>
            <circle cx="50" cy="5" r="5" fill="#a78bfa"/>
            <!-- Ears -->
            <rect x="14" y="27" width="6" height="16" rx="3" fill="#4c1d95"/>
            <rect x="80" y="27" width="6" height="16" rx="3" fill="#4c1d95"/>
            <g id="acc-slots-robo"></g>
        </svg>`
    },
    dragao: {
        name: "Draco",
        description: "Adoooora fogo!",
        baseColor: "#10b981",
        image: "assets/companions/companion-dragon-card.jpg",
        svg: `<svg viewBox="0 0 100 120" width="100%" height="100%">
            <!-- Wings -->
            <path d="M15,50 C5,30 5,60 20,65 Z" fill="#047857"/>
            <path d="M85,50 C95,30 95,60 80,65 Z" fill="#047857"/>
            <!-- Tail -->
            <path d="M75,90 C90,95 85,110 80,115 C70,110 70,95 75,90 Z" fill="#10b981"/>
            <!-- Body -->
            <ellipse cx="50" cy="85" rx="30" ry="25" fill="#10b981" stroke="#047857" stroke-width="3"/>
            <ellipse cx="50" cy="88" rx="18" ry="16" fill="#6ee7b7"/>
            <!-- Head -->
            <ellipse cx="50" cy="45" rx="28" ry="24" fill="#10b981" stroke="#047857" stroke-width="3"/>
            <!-- Snout -->
            <ellipse cx="50" cy="53" rx="16" ry="10" fill="#6ee7b7"/>
            <circle cx="45" cy="51" r="2" fill="#047857"/>
            <circle cx="55" cy="51" r="2" fill="#047857"/>
            <!-- Eyes -->
            <circle cx="38" cy="38" r="6" fill="#fff" stroke="#047857" stroke-width="1"/>
            <circle cx="38" cy="38" r="3" fill="#000"/>
            <circle cx="62" cy="38" r="6" fill="#fff" stroke="#047857" stroke-width="1"/>
            <circle cx="62" cy="38" r="3" fill="#000"/>
            <!-- Cheeks -->
            <circle cx="28" cy="48" r="3" fill="#f43f5e" opacity="0.6"/>
            <circle cx="72" cy="48" r="3" fill="#f43f5e" opacity="0.6"/>
            <!-- Horns -->
            <path d="M35,23 Q30,10 25,12 Q32,20 37,25" fill="#f59e0b" stroke="#047857" stroke-width="1.5"/>
            <path d="M65,23 Q70,10 75,12 Q68,20 63,25" fill="#f59e0b" stroke="#047857" stroke-width="1.5"/>
            <g id="acc-slots-dragao"></g>
        </svg>`
    },
    cachorro: {
        name: "Toby",
        description: "Companheiro leal!",
        baseColor: "#d97706",
        image: "assets/companions/companion-dog-card.jpg",
        svg: `<svg viewBox="0 0 100 120" width="100%" height="100%">
            <ellipse cx="50" cy="84" rx="30" ry="24" fill="#d97706" stroke="#92400e" stroke-width="3"/>
            <circle cx="50" cy="44" r="28" fill="#f59e0b" stroke="#92400e" stroke-width="3"/>
            <ellipse cx="32" cy="34" rx="10" ry="18" fill="#92400e"/>
            <ellipse cx="68" cy="34" rx="10" ry="18" fill="#92400e"/>
            <circle cx="40" cy="42" r="5" fill="#fff"/>
            <circle cx="60" cy="42" r="5" fill="#fff"/>
            <circle cx="40" cy="42" r="2.5" fill="#111827"/>
            <circle cx="60" cy="42" r="2.5" fill="#111827"/>
            <ellipse cx="50" cy="54" rx="13" ry="9" fill="#fed7aa"/>
            <circle cx="50" cy="51" r="4" fill="#111827"/>
            <path d="M45,59 Q50,64 55,59" fill="none" stroke="#92400e" stroke-width="2" stroke-linecap="round"/>
            <g id="acc-slots-cachorro"></g>
        </svg>`
    },
    gatinho: {
        name: "Miaurício",
        description: "Caçador de mistérios!",
        baseColor: "#f59e0b",
        svg: `<svg viewBox="0 0 100 120" width="100%" height="100%">
            <!-- Tail -->
            <path d="M75,90 Q95,80 90,65 Q85,50 80,60" fill="none" stroke="#d97706" stroke-width="6" stroke-linecap="round"/>
            <!-- Body -->
            <rect x="28" y="70" width="44" height="36" rx="15" fill="#f59e0b" stroke="#d97706" stroke-width="3"/>
            <!-- Head -->
            <ellipse cx="50" cy="45" rx="30" ry="24" fill="#f59e0b" stroke="#d97706" stroke-width="3"/>
            <!-- Ears -->
            <polygon points="23,26 12,5 34,22" fill="#d97706" stroke="#b45309" stroke-width="2"/>
            <polygon points="77,26 88,5 66,22" fill="#d97706" stroke="#b45309" stroke-width="2"/>
            <!-- Inner Ears -->
            <polygon points="22,23 16,9 30,20" fill="#fda4af"/>
            <polygon points="78,23 84,9 70,20" fill="#fda4af"/>
            <!-- Eyes -->
            <ellipse cx="38" cy="42" rx="6" ry="7" fill="#fff" stroke="#d97706" stroke-width="1"/>
            <circle cx="38" cy="42" r="3.5" fill="#10b981"/>
            <circle cx="39" cy="40" r="1.5" fill="#fff"/>
            <ellipse cx="62" cy="42" rx="6" ry="7" fill="#fff" stroke="#d97706" stroke-width="1"/>
            <circle cx="62" cy="42" r="3.5" fill="#10b981"/>
            <circle cx="63" cy="40" r="1.5" fill="#fff"/>
            <!-- Snout & Nose -->
            <polygon points="50,49 46,46 54,46" fill="#fda4af"/>
            <path d="M47,53 Q50,56 53,53" fill="none" stroke="#d97706" stroke-width="2"/>
            <!-- Whiskers -->
            <line x1="22" y1="50" x2="8" y2="48" stroke="#d97706" stroke-width="1.5"/>
            <line x1="22" y1="54" x2="6" y2="55" stroke="#d97706" stroke-width="1.5"/>
            <line x1="78" y1="50" x2="92" y2="48" stroke="#d97706" stroke-width="1.5"/>
            <line x1="78" y1="54" x2="94" y2="55" stroke="#d97706" stroke-width="1.5"/>
            <g id="acc-slots-gatinho"></g>
        </svg>`
    },
    astronauta: {
        name: "Leo",
        description: "Amigo do espaço!",
        baseColor: "#e2e8f0",
        svg: `<svg viewBox="0 0 100 120" width="100%" height="100%">
            <!-- Suits Pack -->
            <rect x="22" y="65" width="56" height="15" rx="5" fill="#94a3b8"/>
            <!-- Body -->
            <rect x="25" y="72" width="50" height="32" rx="10" fill="#cbd5e1" stroke="#94a3b8" stroke-width="3"/>
            <!-- Center Badge -->
            <circle cx="50" cy="85" r="8" fill="#3b82f6"/>
            <polygon points="50,81 54,87 46,87" fill="#fff"/>
            <!-- Helmet Connect -->
            <rect x="36" y="58" width="28" height="15" fill="#64748b"/>
            <!-- Helmet Glass -->
            <circle cx="50" cy="38" r="28" fill="#e2e8f0" stroke="#94a3b8" stroke-width="3"/>
            <circle cx="50" cy="38" r="24" fill="#1e293b"/>
            <circle cx="50" cy="38" r="22" fill="#334155"/>
            <!-- Face inside Helmet -->
            <circle cx="50" cy="40" r="14" fill="#fed7aa"/>
            <circle cx="44" cy="38" r="2" fill="#000"/>
            <circle cx="56" cy="38" r="2" fill="#000"/>
            <path d="M47,44 Q50,47 53,44" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round"/>
            <!-- Helmet Shading Reflection -->
            <path d="M30,26 A24,24 0 0,1 70,26" fill="none" stroke="#fff" stroke-width="3" opacity="0.3" stroke-linecap="round"/>
            <g id="acc-slots-astronauta"></g>
        </svg>`
    }
};

const GEAR_SVGS = {
    // Head items
    chapeu_explorador: `<path d="M20,18 Q50,5 80,18 L70,30 L30,30 Z" fill="#b45309" stroke="#78350f" stroke-width="2"/>
                        <rect x="10" y="27" width="80" height="5" rx="2" fill="#d97706" stroke="#78350f" stroke-width="1.5"/>`,
    elmo_fogo: `<path d="M22,12 L50,0 L78,12 L70,25 L30,25 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
                <polygon points="45,0 50,-10 55,0" fill="#f59e0b"/>`,
    coroa_imperial: `<polygon points="20,28 30,10 40,24 50,5 60,24 70,10 80,28" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
                     <circle cx="50" cy="5" r="3" fill="#ef4444"/>
                     <circle cx="30" cy="10" r="2" fill="#3b82f6"/>
                     <circle cx="70" cy="10" r="2" fill="#3b82f6"/>`,
    
    // Back items
    capa_heroi: `<path d="M25,75 L10,118 L45,110 L50,75 Z" fill="#dc2626"/>
                 <path d="M75,75 L90,118 L55,110 L50,75 Z" fill="#dc2626"/>`,
    mochila_aventura: `<rect x="20" y="74" width="12" height="25" rx="3" fill="#78350f"/>
                       <rect x="68" y="74" width="12" height="25" rx="3" fill="#78350f"/>`,
    mochila_jato: `<rect x="14" y="70" width="14" height="30" rx="3" fill="#94a3b8" stroke="#475569"/>
                   <rect x="72" y="70" width="14" height="30" rx="3" fill="#94a3b8" stroke="#475569"/>
                   <path d="M16,100 L21,112 L26,100 Z" fill="#f97316"/>
                   <path d="M74,100 L79,112 L84,100 Z" fill="#f97316"/>`,
                   
    // Hand items
    espada_luz: `<rect x="80" y="50" width="6" height="40" rx="3" fill="#22d3ee" filter="drop-shadow(0 0 5px #06b6d4)"/>
                 <rect x="78" y="86" width="10" height="10" fill="#475569"/>`,
    escudo_reino: `<path d="M12,65 Q12,95 24,100 Q36,95 36,65 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
                   <polygon points="24,70 28,82 18,75 30,75 20,82" fill="#fbbf24"/>`
};

const PUZZLE_ART = {
    2: `<svg viewBox="0 0 480 384" width="100%" height="100%">
        <rect width="480" height="384" fill="#064e3b"/>
        <circle cx="120" cy="150" r="60" fill="#047857"/>
        <circle cx="360" cy="180" r="80" fill="#047857"/>
        <rect x="110" y="150" width="20" height="120" fill="#78350f"/>
        <rect x="350" y="180" width="20" height="120" fill="#78350f"/>
        <polygon points="60,150 120,40 180,150" fill="#10b981"/>
        <polygon points="280,180 360,60 440,180" fill="#10b981"/>
        <circle cx="240" cy="70" r="30" fill="#fbbf24" opacity="0.8"/>
        <text x="240" y="340" fill="#a7f3d0" font-size="28" font-family="Outfit" font-weight="bold" text-anchor="middle">Floresta do Dobro 🌲</text>
    </svg>`,
    3: `<svg viewBox="0 0 480 384" width="100%" height="100%">
        <rect width="480" height="384" fill="#1e1b4b"/>
        <polygon points="120,260 160,120 200,260" fill="#06b6d4" opacity="0.7"/>
        <polygon points="240,280 280,80 320,280" fill="#22d3ee" opacity="0.9"/>
        <polygon points="320,260 350,150 380,260" fill="#0891b2" opacity="0.6"/>
        <rect x="0" y="260" width="480" height="124" fill="#312e81"/>
        <text x="240" y="340" fill="#cffafe" font-size="28" font-family="Outfit" font-weight="bold" text-anchor="middle">Catarata de Cristais 💎</text>
    </svg>`,
    4: `<svg viewBox="0 0 480 384" width="100%" height="100%">
        <rect width="480" height="384" fill="#451a03"/>
        <rect x="60" y="100" width="80" height="200" fill="#7c2d12" stroke="#ea580c" stroke-width="4"/>
        <rect x="340" y="100" width="80" height="200" fill="#7c2d12" stroke="#ea580c" stroke-width="4"/>
        <rect x="140" y="160" width="200" height="140" fill="#9a3412"/>
        <rect x="210" y="220" width="60" height="80" rx="30" fill="#1c1917"/>
        <polygon points="50,100 100,50 150,100" fill="#ea580c"/>
        <polygon points="330,100 380,50 430,100" fill="#ea580c"/>
        <text x="240" y="340" fill="#ffedd5" font-size="28" font-family="Outfit" font-weight="bold" text-anchor="middle">Fortaleza Quadrada 🏰</text>
    </svg>`,
    5: `<svg viewBox="0 0 480 384" width="100%" height="100%">
        <rect width="480" height="384" fill="#0c4a6e"/>
        <!-- Pirate Ship -->
        <path d="M120,220 L360,220 C340,280 140,280 120,220 Z" fill="#78350f" stroke="#451a03" stroke-width="4"/>
        <rect x="235" y="60" width="10" height="160" fill="#451a03"/>
        <!-- Sails -->
        <path d="M245,70 Q310,110 245,150 Z" fill="#f8fafc"/>
        <path d="M245,150 Q290,180 245,210 Z" fill="#f8fafc"/>
        <circle cx="400" cy="80" r="30" fill="#fef08a"/>
        <text x="240" y="340" fill="#e0f2fe" font-size="28" font-family="Outfit" font-weight="bold" text-anchor="middle">Navio Pirata do 5 🏴‍☠️</text>
    </svg>`,
    6: `<svg viewBox="0 0 480 384" width="100%" height="100%">
        <rect width="480" height="384" fill="#2e1065"/>
        <polygon points="0,0 80,180 160,0" fill="#4c1d95"/>
        <polygon points="320,0 400,180 480,0" fill="#4c1d95"/>
        <polygon points="120,384 240,150 360,384" fill="#1e1b4b"/>
        <circle cx="240" cy="220" r="40" fill="#c084fc" opacity="0.6"/>
        <text x="240" y="340" fill="#f3e8ff" font-size="28" font-family="Outfit" font-weight="bold" text-anchor="middle">Tesouro da Caverna 🌋</text>
    </svg>`,
    7: `<svg viewBox="0 0 480 384" width="100%" height="100%">
        <rect width="480" height="384" fill="#111827"/>
        <rect x="210" y="80" width="60" height="240" fill="#374151" stroke="#4b5563" stroke-width="3"/>
        <polygon points="190,80 240,10 290,80" fill="#1f2937" stroke="#4b5563" stroke-width="2"/>
        <path d="M100,50 L120,120 L80,130 L130,220 L50,230" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
        <path d="M380,50 L400,120 L360,130 L410,220 L330,230" fill="none" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
        <text x="240" y="350" fill="#f9fafb" font-size="28" font-family="Outfit" font-weight="bold" text-anchor="middle">Torre dos Relâmpagos ⚡</text>
    </svg>`,
    8: `<svg viewBox="0 0 480 384" width="100%" height="100%">
        <rect width="480" height="384" fill="#0f172a"/>
        <!-- Maze representation -->
        <rect x="40" y="40" width="400" height="260" fill="none" stroke="#38bdf8" stroke-width="8" stroke-linejoin="round"/>
        <path d="M100,100 L380,100 L380,240 L160,240 L160,170 L280,170" fill="none" stroke="#0284c7" stroke-width="8" stroke-linejoin="round" stroke-linecap="round"/>
        <circle cx="280" cy="170" r="14" fill="#f43f5e"/>
        <text x="240" y="340" fill="#e0f2fe" font-size="28" font-family="Outfit" font-weight="bold" text-anchor="middle">Labirinto Infinito 🌀</text>
    </svg>`,
    9: `<svg viewBox="0 0 480 384" width="100%" height="100%">
        <rect width="480" height="384" fill="#1e293b"/>
        <!-- Cloud details -->
        <circle cx="80" cy="320" r="90" fill="#fff" opacity="0.1"/>
        <circle cx="400" cy="320" r="90" fill="#fff" opacity="0.1"/>
        <circle cx="240" cy="340" r="120" fill="#fff" opacity="0.15"/>
        <!-- Golden Castle -->
        <rect x="180" y="100" width="120" height="150" fill="#d97706"/>
        <rect x="140" y="160" width="40" height="90" fill="#b45309"/>
        <rect x="300" y="160" width="40" height="90" fill="#b45309"/>
        <polygon points="130,160 160,100 190,160" fill="#fbbf24"/>
        <polygon points="290,160 320,100 350,160" fill="#fbbf24"/>
        <polygon points="170,100 240,30 310,100" fill="#fbbf24"/>
        <text x="240" y="340" fill="#fef3c7" font-size="28" font-family="Outfit" font-weight="bold" text-anchor="middle">Castelo das Nuvens 👑</text>
    </svg>`
};

const BOSS_DATA = {
    2: { name: "Duplicador de Sombras", bodyColor: "#334155", detailColor: "#94a3b8", icon: "👤" },
    3: { name: "Lorde Tríplice", bodyColor: "#0891b2", detailColor: "#22d3ee", icon: "💎" },
    4: { name: "Guardião Quadrangular", bodyColor: "#7c2d12", detailColor: "#f97316", icon: "🧱" },
    5: { name: "Pirata Barba-Múltipla", bodyColor: "#7c3aed", detailColor: "#a78bfa", icon: "🏴‍☠️" },
    6: { name: "Monstro dos Seis Olhos", bodyColor: "#b91c1c", detailColor: "#f87171", icon: "👁️" },
    7: { name: "Mago dos Raios", bodyColor: "#1e1b4b", detailColor: "#fbbf24", icon: "🧙‍♂️" },
    8: { name: "Minotauro Infinito", bodyColor: "#451a03", detailColor: "#f59e0b", icon: "🐂" },
    9: { name: "Dragão dos Mestres", bodyColor: "#065f46", detailColor: "#34d399", icon: "🐉" },
    "arena": { name: "Mestre Supremo Giga", bodyColor: "#1e1b4b", detailColor: "#f43f5e", icon: "🔱" }
};

// 2. SOUND EFFECTS SYNTHESIZER (WEB AUDIO API)
class SoundSynth {
    constructor() {
        this.ctx = null;
        this.enabled = true;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    toggle(state) {
        this.enabled = state !== undefined ? state : !this.enabled;
        return this.enabled;
    }

    playClick() {
        if (!this.enabled) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.08);
        
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
        
        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
    }

    playSuccess() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;
        const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
        
        notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.type = "triangle";
            osc.frequency.setValueAtTime(freq, now + idx * 0.06);
            
            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.06 + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.06 + 0.15);
            
            osc.start(now + idx * 0.06);
            osc.stop(now + idx * 0.06 + 0.18);
        });
    }

    playError() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.25);
        
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
        
        osc.start();
        osc.stop(now + 0.26);
    }

    playHit() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;
        
        // Synthesize noise blast for physical impact
        const bufferSize = this.ctx.sampleRate * 0.15; // 0.15s noise
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        
        const filter = this.ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.value = 800;
        
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        
        noise.start();
        
        // Also play a quick low pitch sweep
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        osc.connect(oscGain);
        oscGain.connect(this.ctx.destination);
        
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.15);
        oscGain.gain.setValueAtTime(0.2, now);
        oscGain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        
        osc.start();
        osc.stop(now + 0.16);
    }

    playVictoryMelody() {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;
        // C4, E4, G4, C5, E5, G5
        const melody = [
            { freq: 261.63, time: 0.0 },
            { freq: 329.63, time: 0.12 },
            { freq: 392.00, time: 0.24 },
            { freq: 523.25, time: 0.36 },
            { freq: 392.00, time: 0.48 },
            { freq: 523.25, time: 0.60 },
            { freq: 659.25, time: 0.72 },
            { freq: 783.99, time: 0.84 }
        ];
        
        melody.forEach(note => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            
            osc.type = "triangle";
            osc.frequency.setValueAtTime(note.freq, now + note.time);
            
            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.18, now + note.time + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.01, now + note.time + 0.25);
            
            osc.start(now + note.time);
            osc.stop(now + note.time + 0.3);
        });
    }
}

const AudioPlayer = new SoundSynth();

// Background castle music. Browsers only allow playback after a user gesture.
const BackgroundMusic = {
    audio: null,
    enabled: true,
    started: false,

    init() {
        if (this.audio) return;
        this.audio = new Audio("musica de castelo/castelo.mp3");
        this.audio.loop = true;
        this.audio.volume = 0.22;
        this.audio.preload = "auto";
    },

    setEnabled(enabled) {
        this.enabled = enabled;
        this.init();

        if (!enabled) {
            this.audio.pause();
            return;
        }

        if (this.started) {
            this.play();
        }
    },

    play() {
        if (!this.enabled) return;
        this.init();
        this.started = true;
        this.audio.play().catch(() => {
            // Autoplay may still be blocked until the next click/touch.
        });
    }
};

// 3. GAME STATE MANAGEMENT
class GameState {
    constructor() {
        this.defaultState = {
            playerName: "Aventureiro",
            characterSelected: "", // 'robo', 'dragao', 'gatinho', 'astronauta'
            childPhoto: "",
            coins: 0,
            unlockedLevels: [2], // Level 2 unlocked by default
            stars: {}, // { '2': 3, '3': 2 }
            errors: {}, // { '2': 0 }
            equippedGear: {
                head: "none",
                back: "none",
                hand: "none"
            },
            unlockedGear: [], // list of unlocked items ids
            soundEnabled: true,
            completedAll: false,
            activeRun: null
        };
        this.data = this.mergeWithDefaults({});
        this.load();
    }

    load() {
        const saved = localStorage.getItem("tabuada_quest_progresso");
        if (saved) {
            try {
                this.data = this.mergeWithDefaults(JSON.parse(saved));
            } catch (e) {
                this.data = this.mergeWithDefaults({});
            }
        }
    }

    mergeWithDefaults(savedData) {
        return {
            ...this.defaultState,
            ...savedData,
            stars: { ...this.defaultState.stars, ...(savedData.stars || {}) },
            errors: { ...this.defaultState.errors, ...(savedData.errors || {}) },
            equippedGear: { ...this.defaultState.equippedGear, ...(savedData.equippedGear || {}) },
            unlockedLevels: Array.isArray(savedData.unlockedLevels) ? savedData.unlockedLevels : [...this.defaultState.unlockedLevels],
            unlockedGear: Array.isArray(savedData.unlockedGear) ? savedData.unlockedGear : [...this.defaultState.unlockedGear],
            activeRun: savedData.activeRun || null
        };
    }

    save() {
        localStorage.setItem("tabuada_quest_progresso", JSON.stringify(this.data));
    }

    reset() {
        this.data = JSON.parse(JSON.stringify(this.defaultState)); // deep clone
        this.save();
    }
}

const State = new GameState();

const CINEMATIC_ART = {
    kingdom: "assets/art/fantasy-friends-desktop.jpg"
};

const PUZZLE_IMAGE_ART = {
    2: "assets/art/fantasy-friends-desktop.jpg",
    3: "assets/puzzles/puzzle-3-dragon.jpg",
    4: "assets/puzzles/puzzle-4-robot.jpg",
    5: "assets/puzzles/puzzle-5-dog.jpg",
    6: "assets/puzzles/puzzle-6-cave.jpg",
    7: "assets/puzzles/puzzle-7-tower.jpg",
    8: "assets/puzzles/puzzle-8-labyrinth.jpg",
    9: "assets/art/fantasy-friends-desktop.jpg"
};

function getAdventureProgress() {
    const levels = [2, 3, 4, 5, 6, 7, 8, 9];
    const totalStars = Object.values(State.data.stars).reduce((sum, value) => sum + value, 0);
    const completedLevels = levels.filter(level => (State.data.stars[level] || 0) > 0);
    const nextOpenLevel = levels.find(level => State.data.unlockedLevels.includes(level) && !(State.data.stars[level] > 0));
    const allKingdomsCompleted = completedLevels.length === levels.length;
    const activeRun = State.data.activeRun;

    if (activeRun && activeRun.type === "level" && KINGDOMS[activeRun.level]) {
        const stage = activeRun.stage || 1;
        const kingdom = KINGDOMS[activeRun.level];
        return {
            totalStars,
            completedCount: completedLevels.length,
            nextLevel: activeRun.level,
            nextName: `Continuar ${kingdom.name}`,
            nextDetail: `Você parou na etapa ${stage} da tabuada do ${activeRun.level}.`,
            nextReward: `Conclua para ganhar ${kingdom.gearName}.`,
            allKingdomsCompleted,
            activeRun
        };
    }

    if (activeRun && activeRun.type === "arena") {
        return {
            totalStars,
            completedCount: completedLevels.length,
            nextLevel: "arena",
            nextName: "Continuar Arena dos Mestres",
            nextDetail: "Você parou no desafio final misturado.",
            nextReward: "Vença para liberar o certificado real.",
            allKingdomsCompleted,
            activeRun
        };
    }

    if (allKingdomsCompleted) {
        return {
            totalStars,
            completedCount: completedLevels.length,
            nextLevel: "arena",
            nextName: State.data.completedAll ? "Jornada completa" : "Arena dos Mestres",
            nextDetail: State.data.completedAll ? "Você já conquistou o certificado real." : "Desafio final com tabuadas misturadas.",
            nextReward: State.data.completedAll ? "Certificado conquistado." : "Vença para liberar o certificado real.",
            allKingdomsCompleted,
            activeRun: null
        };
    }

    const nextLevel = nextOpenLevel || 2;
    const kingdom = KINGDOMS[nextLevel];

    return {
        totalStars,
        completedCount: completedLevels.length,
        nextLevel,
        nextName: kingdom.name,
        nextDetail: `Tabuada do ${nextLevel} espera por você.`,
        nextReward: `Vença para ganhar ${kingdom.gearName}.`,
        allKingdomsCompleted,
        activeRun: null
    };
}

function setGameMissionStrip(kicker, missionText, progressText, progressPct) {
    const kickerEl = document.getElementById("stage-kicker");
    const textEl = document.getElementById("stage-mission-text");
    const labelEl = document.getElementById("stage-progress-label");
    const fillEl = document.getElementById("stage-progress-fill");

    if (kickerEl) kickerEl.innerText = kicker;
    if (textEl) textEl.innerText = missionText;
    if (labelEl) labelEl.innerText = progressText;
    if (fillEl) fillEl.style.width = `${Math.max(0, Math.min(100, progressPct))}%`;
}

function showQuestToast(message) {
    let toast = document.getElementById("quest-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "quest-toast";
        toast.className = "quest-toast";
        document.getElementById("game-container").appendChild(toast);
    }

    toast.innerText = message;
    toast.classList.remove("active");
    requestAnimationFrame(() => toast.classList.add("active"));

    clearTimeout(showQuestToast.timer);
    showQuestToast.timer = setTimeout(() => {
        toast.classList.remove("active");
    }, 2200);
}

function getPuzzleArtworkMarkup(levelNum) {
    const src = PUZZLE_IMAGE_ART[levelNum] || CINEMATIC_ART.kingdom;
    return `<img src="${src}" alt="">`;
}

function renderChildPhoto(targetElementId) {
    const container = document.getElementById(targetElementId);
    if (!container) return false;

    container.classList.remove("has-photo");

    if (!State.data.childPhoto) {
        return false;
    }

    container.innerHTML = `<img class="child-photo-img" src="${State.data.childPhoto}" alt="Foto do herói">`;
    container.classList.add("has-photo");
    return true;
}

function renderHeroIdentity(targetElementId, fallbackToCharacter = true) {
    if (renderChildPhoto(targetElementId)) return;

    const container = document.getElementById(targetElementId);
    if (container) container.classList.remove("has-photo");

    if (fallbackToCharacter) {
        renderCharacterAvatar(State.data.characterSelected, targetElementId);
    }
}

function updateChildPhotoPreview() {
    const preview = document.getElementById("child-photo-preview");
    if (!preview) return;

    preview.classList.remove("has-photo");

    if (State.data.childPhoto) {
        preview.innerHTML = `<img class="child-photo-img" src="${State.data.childPhoto}" alt="Foto do herói">`;
        preview.classList.add("has-photo");
    } else {
        preview.innerHTML = `<span class="photo-placeholder-icon">📷</span><span>Foto do Herói</span>`;
    }
}

function renderCertificateScreen() {
    const displayName = (State.data.playerName || "Aventureiro").toUpperCase();
    const nameElement = document.getElementById("cert-display-name");
    const photoFrame = document.getElementById("cert-photo-frame");

    if (nameElement) {
        nameElement.innerText = displayName;
    }

    if (!photoFrame) return;

    photoFrame.classList.remove("has-photo");

    if (State.data.childPhoto) {
        photoFrame.innerHTML = `<img src="${State.data.childPhoto}" alt="Foto da criança">`;
        photoFrame.classList.add("has-photo");
    } else {
        photoFrame.innerHTML = `<span class="cert-emblem">🏆</span>`;
    }
}

function requestCertificateAccess(actionText = "abrir o certificado") {
    const password = prompt(`Área do desenvolvedor: digite a senha para ${actionText}.`);

    if (password === null) {
        return false;
    }

    if (password.trim() === CERTIFICATE_ACCESS_PASSWORD) {
        return true;
    }

    AudioPlayer.playError();
    showQuestToast("Senha incorreta.");
    return false;
}

function resizePhotoForStorage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            const img = new Image();
            img.onload = () => {
                const maxSize = 720;
                const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
                const width = Math.max(1, Math.round(img.width * scale));
                const height = Math.max(1, Math.round(img.height * scale));
                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);
                resolve(canvas.toDataURL("image/jpeg", 0.82));
            };
            img.onerror = reject;
            img.src = reader.result;
        };

        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// 4. DYNAMIC CHARACTER SVG GENERATOR & CUSTOMIZER
function renderCharacterAvatar(charKey, targetElementId, renderGears = true) {
    const container = document.getElementById(targetElementId);
    if (!container) return;
    
    if (!charKey) {
        container.innerHTML = `<span style="font-size:2rem;">❓</span>`;
        return;
    }

    const charConfig = CHARACTERS[charKey];
    if (!charConfig) return;

    if (charConfig.image) {
        container.innerHTML = `<img class="companion-card-img" src="${charConfig.image}" alt="${charConfig.name}">`;
        return;
    }

    // Load base SVG
    container.innerHTML = charConfig.svg;
    
    // Inject gear items
    if (renderGears) {
        const slotsGroup = container.querySelector(`#acc-slots-${charKey}`);
        if (slotsGroup) {
            slotsGroup.innerHTML = ""; // Clear active
            
            // Head
            const headItem = State.data.equippedGear.head;
            if (headItem && headItem !== "none" && GEAR_SVGS[headItem]) {
                const headGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
                headGroup.innerHTML = GEAR_SVGS[headItem];
                // Apply slight transform overrides based on character to align head gear nicely
                if (charKey === "robo") {
                    headGroup.setAttribute("transform", "translate(0, -5) scale(1)");
                } else if (charKey === "dragao") {
                    headGroup.setAttribute("transform", "translate(0, 15) scale(1)");
                } else if (charKey === "gatinho") {
                    headGroup.setAttribute("transform", "translate(0, 15) scale(1)");
                } else if (charKey === "astronauta") {
                    headGroup.setAttribute("transform", "translate(0, 10) scale(1)");
                }
                slotsGroup.appendChild(headGroup);
            }

            // Back
            const backItem = State.data.equippedGear.back;
            if (backItem && backItem !== "none" && GEAR_SVGS[backItem]) {
                const backGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
                backGroup.innerHTML = GEAR_SVGS[backItem];
                slotsGroup.appendChild(backGroup);
            }

            // Hand
            const handItem = State.data.equippedGear.hand;
            if (handItem && handItem !== "none" && GEAR_SVGS[handItem]) {
                const handGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
                handGroup.innerHTML = GEAR_SVGS[handItem];
                if (charKey === "dragao" || charKey === "gatinho") {
                    handGroup.setAttribute("transform", "translate(-5, 20) scale(0.95)");
                } else if (charKey === "astronauta") {
                    handGroup.setAttribute("transform", "translate(-5, 12) scale(0.95)");
                }
                slotsGroup.appendChild(handGroup);
            }
        }
    }
}

// 5. BOSS SVG GENERATION DYNAMICALLY
function generateBossSVG(bossId, targetElementId) {
    const container = document.getElementById(targetElementId);
    if (!container) return;

    const data = BOSS_DATA[bossId] || BOSS_DATA[2];
    
    let svgBody = "";
    if (bossId === "arena") {
        svgBody = `
            <!-- Giga Arena Boss -->
            <polygon points="50,15 15,40 15,90 50,115 85,90 85,40" fill="${data.bodyColor}" stroke="${data.detailColor}" stroke-width="4"/>
            <circle cx="50" cy="50" r="18" fill="#f43f5e"/>
            <polygon points="50,40 60,60 40,60" fill="#fff"/>
            <path d="M30,80 Q50,100 70,80" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
        `;
    } else {
        svgBody = `
            <!-- Kingdom Boss -->
            <circle cx="50" cy="60" r="38" fill="${data.bodyColor}" stroke="${data.detailColor}" stroke-width="3"/>
            <!-- Eyes -->
            <circle cx="36" cy="50" r="6" fill="#fff"/>
            <circle cx="36" cy="50" r="3" fill="#000"/>
            <circle cx="64" cy="50" r="6" fill="#fff"/>
            <circle cx="64" cy="50" r="3" fill="#000"/>
            <!-- Boss Horns/Crown -->
            <polygon points="50,10 40,28 60,28" fill="${data.detailColor}"/>
            <polygon points="25,18 25,35 38,32" fill="${data.detailColor}"/>
            <polygon points="75,18 75,35 62,32" fill="${data.detailColor}"/>
            <!-- Mouth -->
            <path d="M40,75 Q50,65 60,75" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
        `;
    }

    container.innerHTML = `
        <svg viewBox="0 0 100 120" width="100%" height="100%" class="floating-boss">
            ${svgBody}
            <!-- Floating particles -->
            <circle cx="20" cy="30" r="3" fill="${data.detailColor}" opacity="0.6"/>
            <circle cx="80" cy="80" r="4" fill="${data.detailColor}" opacity="0.5"/>
            <circle cx="15" cy="85" r="2" fill="${data.detailColor}" opacity="0.7"/>
        </svg>
    `;
}

// 6. PEDAGOGICAL HINT GENERATOR
function getPedagogicalHint(a, b) {
    // Generates a smart math advice based on the factor combination
    const total = a * b;
    if (b === 1) {
        return `Qualquer número multiplicado por 1 é ele mesmo! Então, <strong>${a} x 1 = ${a}</strong>.`;
    }
    if (b === 2) {
        return `Multiplicar por 2 é o mesmo que somar o número duas vezes (o dobro)! <br><strong>${a} + ${a} = ${total}</strong>.`;
    }
    if (b === 10) {
        return `Para multiplicar por 10, basta acrescentar um zero ao final do número! <br><strong>${a}</strong> vira <strong>${total}</strong>.`;
    }
    if (b === 5) {
        return `Os resultados da tabuada do 5 sempre terminam em <strong>0</strong> ou <strong>5</strong>! <br>Contando de 5 em 5: 5, 10, 15, 20... chegamos a <strong>${total}</strong>.`;
    }
    if (b === 9) {
        const prev = a * 10;
        return `Dica especial do 9: Pense em <strong>${a} x 10</strong> que é <strong>${prev}</strong>, e depois retire <strong>${a}</strong>! <br>${prev} - ${a} = <strong>${total}</strong>.`;
    }
    
    // Default additive suggestion
    let additionList = [];
    for (let i = 0; i < b; i++) {
        additionList.push(a);
    }
    return `Quase lá! Multiplicar <strong>${a} x ${b}</strong> é somar o número <strong>${a}</strong> exatamente <strong>${b}</strong> vezes! <br>${additionList.join(" + ")} = <strong>${total}</strong>.`;
}

// 7. SCREEN NAVIGATION SYSTEM
const Screens = {
    active: "screen-start",
    show(screenId) {
        AudioPlayer.playClick();
        
        // Hide active screen
        const prev = document.getElementById(this.active);
        if (prev) {
            prev.classList.remove("active");
        }
        
        // Show new screen
        const next = document.getElementById(screenId);
        if (next) {
            next.classList.add("active");
            this.active = screenId;
        }

        // Setup screen-specific rendering
        if (screenId === "screen-start") {
            this.renderStartScreen();
        } else if (screenId === "screen-map") {
            this.renderMapScreen();
        } else if (screenId === "screen-achievements") {
            this.renderAchievementsScreen();
        } else if (screenId === "screen-character") {
            updateChildPhotoPreview();
        } else if (screenId === "screen-certificate") {
            renderCertificateScreen();
        } else if (screenId === "screen-settings") {
            this.renderSettingsScreen();
        }
    },

    renderStartScreen() {
        const btnContinue = document.getElementById("btn-continue");
        const progress = getAdventureProgress();
        document.getElementById("start-stars-summary").innerText = `${progress.totalStars}/24 estrelas`;
        document.getElementById("start-next-mission").innerText = progress.nextName;
        document.getElementById("start-next-mission-detail").innerText = progress.nextDetail;

        if (State.data.characterSelected) {
            btnContinue.disabled = false;
            btnContinue.innerHTML = State.data.activeRun
                ? `<span class="icon">💾</span> Continuar Missão`
                : `<span class="icon">💾</span> Continuar Aventura`;
            renderHeroIdentity("start-char-preview");
        } else {
            btnContinue.disabled = true;
            btnContinue.innerHTML = `<span class="icon">💾</span> Continuar Aventura`;
            document.getElementById("start-char-preview").innerHTML = "";
        }
    },

    renderMapScreen() {
        // Render HUD stats
        document.getElementById("hud-player-name").innerText = State.data.playerName;
        document.getElementById("hud-coins").innerText = State.data.coins;
        document.getElementById("game-coins").innerText = State.data.coins;
        
        // Compute total stars
        const progress = getAdventureProgress();
        document.getElementById("hud-stars").innerText = progress.totalStars;
        document.getElementById("map-next-mission").innerText = progress.nextName;
        document.getElementById("map-next-reward").innerText = progress.nextReward;
        document.getElementById("map-progress-label").innerText = `${progress.completedCount} de 8 reinos libertos`;
        document.getElementById("map-progress-fill").style.width = `${(progress.completedCount / 8) * 100}%`;

        // Player Level Title based on progress
        const countLevels = State.data.unlockedLevels.length;
        let title = "Explorador";
        if (countLevels >= 8) title = "Campeão Real";
        else if (countLevels >= 5) title = "Mestre Inteiro";
        else if (countLevels >= 3) title = "Cavaleiro do Dobro";
        document.getElementById("hud-player-title").innerText = title;

        // Render player portrait or fallback avatar
        renderHeroIdentity("map-avatar-preview");

        // Loop all nodes to apply class states
        for (let lvl = 2; lvl <= 9; lvl++) {
            const node = document.getElementById(`node-${lvl}`);
            if (!node) continue;
            
            const starCount = State.data.stars[lvl] || 0;
            const starsContainer = node.querySelector(".node-stars");

            if (State.data.unlockedLevels.includes(lvl)) {
                const classes = ["map-node", "unlocked"];
                if (starCount > 0) classes.push("completed");
                if (progress.nextLevel === lvl) classes.push("next-node");
                node.className = classes.join(" ");
                let starsStr = "";
                for (let s = 0; s < 3; s++) {
                    starsStr += s < starCount ? "⭐" : "☆";
                }
                starsContainer.innerText = starsStr;
            } else {
                node.className = "map-node locked";
                starsContainer.innerText = "";
            }
        }

        // Arena node status
        const arenaNode = document.getElementById("node-arena");
        const allCompleted = [2, 3, 4, 5, 6, 7, 8, 9].every(l => State.data.unlockedLevels.includes(l) && State.data.stars[l] > 0);
        
        if (allCompleted) {
            arenaNode.className = `map-node unlocked special-node ${State.data.completedAll ? 'completed' : 'next-node'}`;
        } else {
            arenaNode.className = "map-node locked special-node";
        }

        requestAnimationFrame(() => this.drawMapPath());
    },

    renderSettingsScreen() {
        const certificateGroup = document.getElementById("settings-certificate-group");
        if (certificateGroup) {
            certificateGroup.hidden = !State.data.completedAll;
        }
    },

    renderAchievementsScreen() {
        document.getElementById("customizer-name").innerText = State.data.playerName;
        renderHeroIdentity("customizer-avatar-preview");
        updateChildPhotoPreview();

        // Update slots descriptors
        document.getElementById("slot-head-name").innerText = State.data.equippedGear.head !== "none" ? KINGDOMS[getKingdomOfItem(State.data.equippedGear.head)].gearName : "Nenhum";
        document.getElementById("slot-back-name").innerText = State.data.equippedGear.back !== "none" ? KINGDOMS[getKingdomOfItem(State.data.equippedGear.back)].gearName : "Nenhum";
        document.getElementById("slot-hand-name").innerText = State.data.equippedGear.hand !== "none" ? KINGDOMS[getKingdomOfItem(State.data.equippedGear.hand)].gearName : "Nenhum";

        // Render Medals Grid
        const medalsGrid = document.getElementById("medals-grid-container");
        medalsGrid.innerHTML = "";
        
        for (let lvl = 2; lvl <= 9; lvl++) {
            const k = KINGDOMS[lvl];
            const unlocked = State.data.stars[lvl] > 0;
            
            const card = document.createElement("div");
            card.className = `album-medal-card ${unlocked ? 'unlocked' : 'locked'}`;
            card.innerHTML = `
                <div class="album-medal-icon">${k.rewardIcon}</div>
                <div class="album-medal-name">${k.rewardName}</div>
                <div class="album-medal-desc">Tabuada do ${lvl}</div>
            `;
            medalsGrid.appendChild(card);
        }

        // Render Equipment Items Grid
        const itemsGrid = document.getElementById("items-grid-container");
        itemsGrid.innerHTML = "";

        let itemsCount = 0;
        for (let lvl = 2; lvl <= 9; lvl++) {
            const k = KINGDOMS[lvl];
            const itemUnlocked = State.data.unlockedGear.includes(k.gearId);
            
            if (itemUnlocked) {
                itemsCount++;
                const isEquipped = State.data.equippedGear[k.gearSlot] === k.gearId;
                
                const card = document.createElement("div");
                card.className = "album-item-card unlocked";
                card.innerHTML = `
                    <div class="album-item-icon">${k.gearIcon}</div>
                    <div class="album-item-name">${k.gearName}</div>
                    <button class="btn btn-small btn-equip ${isEquipped ? 'btn-danger' : 'btn-primary'}" data-gear-id="${k.gearId}" data-slot="${k.gearSlot}">
                        ${isEquipped ? 'Remover' : 'Equipar'}
                    </button>
                `;
                
                // Add equip listener
                card.querySelector(".btn-equip").addEventListener("click", (e) => {
                    const gid = e.target.getAttribute("data-gear-id");
                    const slot = e.target.getAttribute("data-slot");
                    
                    if (State.data.equippedGear[slot] === gid) {
                        State.data.equippedGear[slot] = "none";
                    } else {
                        State.data.equippedGear[slot] = gid;
                    }
                    
                    State.save();
                    AudioPlayer.playClick();
                    this.renderAchievementsScreen();
                });
                
                itemsGrid.appendChild(card);
            }
        }

        if (itemsCount === 0) {
            itemsGrid.innerHTML = `<p style="grid-column: span 3; text-align:center; color:var(--color-text-muted);">Você ainda não desbloqueou equipamentos. Vença reinos para conseguir!</p>`;
        }
    },

    drawMapPath() {
        const svg = document.getElementById("map-path-lines");
        const nodesWrap = document.querySelector(".map-nodes");
        if (!svg || !nodesWrap || Screens.active !== "screen-map") return;

        const nodeIds = ["node-2", "node-3", "node-4", "node-5", "node-6", "node-7", "node-8", "node-9", "node-arena"];
        const nodes = nodeIds.map(id => document.getElementById(id)).filter(Boolean);
        if (nodes.length < 2 || nodesWrap.offsetWidth === 0) return;

        const wrapBox = nodesWrap.getBoundingClientRect();
        const points = nodes.map(node => {
            const box = node.getBoundingClientRect();
            return {
                x: box.left - wrapBox.left + box.width / 2,
                y: box.top - wrapBox.top + box.height / 2
            };
        });

        const buildPath = (pathPoints) => {
            if (pathPoints.length === 0) return "";
            let d = `M ${pathPoints[0].x} ${pathPoints[0].y}`;
            for (let i = 1; i < pathPoints.length; i++) {
                const prev = pathPoints[i - 1];
                const curr = pathPoints[i];
                const midX = (prev.x + curr.x) / 2;
                d += ` C ${midX} ${prev.y}, ${midX} ${curr.y}, ${curr.x} ${curr.y}`;
            }
            return d;
        };

        const unlockedCount = [2, 3, 4, 5, 6, 7, 8, 9].filter(level => State.data.unlockedLevels.includes(level)).length;
        const allCompleted = getAdventureProgress().allKingdomsCompleted;
        const progressPointCount = allCompleted ? points.length : Math.max(1, unlockedCount);
        const progressPoints = points.slice(0, progressPointCount);

        svg.setAttribute("viewBox", `0 0 ${nodesWrap.offsetWidth} ${nodesWrap.offsetHeight}`);
        svg.style.left = `${nodesWrap.offsetLeft}px`;
        svg.style.top = `${nodesWrap.offsetTop}px`;
        svg.style.width = `${nodesWrap.offsetWidth}px`;
        svg.style.height = `${nodesWrap.offsetHeight}px`;
        svg.innerHTML = `
            <path class="map-path-base" d="${buildPath(points)}"></path>
            <path class="map-path-progress" d="${buildPath(progressPoints)}"></path>
        `;
    }
};

function getKingdomOfItem(itemId) {
    for (let lvl = 2; lvl <= 9; lvl++) {
        if (KINGDOMS[lvl].gearId === itemId) return lvl;
    }
    return 2;
}

// 8. GAMEPLAY CONTROLLER (FASES, DRAG AND DROP, ETAPAS)
class GameplayController {
    constructor() {
        this.currentLevel = 2; // Active Kingdom Number
        this.currentStage = 1; // 1, 2, or 3
        this.errorsMade = 0;
        this.selectedEquationCard = null; // Click-matching selection
        
        // Touch tracking helpers
        this.activeTouchElement = null;
        this.touchOffsetX = 0;
        this.touchOffsetY = 0;
        
        // Stage 3 Battle Variables
        this.bossMaxHealth = 100;
        this.bossHealth = 100;
        this.playerHearts = 3;
        this.battleTimerInterval = null;
        this.battleTimerVal = 100; // percent
        this.battleCurrentEquation = null;

        this.setupGeneralEvents();
    }

    configureLevelUI(levelNumber) {
        const k = KINGDOMS[levelNumber];
        document.getElementById("game-reino-name").innerText = k.name;
        document.getElementById("game-reino-icon").innerText = k.icon;
        document.getElementById("game-coins").innerText = State.data.coins;
        document.documentElement.style.setProperty('--color-primary', k.color);
    }

    saveActiveRun(stageNum = this.currentStage) {
        State.data.activeRun = {
            type: "level",
            level: this.currentLevel,
            stage: stageNum,
            errorsMade: this.errorsMade
        };
        State.save();
    }

    recordMistake() {
        this.errorsMade++;
        this.saveActiveRun(this.currentStage);
    }

    resumeSavedRun() {
        const run = State.data.activeRun;

        if (!run) {
            Screens.show("screen-map");
            return;
        }

        if (run.type === "arena") {
            finalArena.startArena({ resume: true });
            return;
        }

        if (run.type !== "level" || !KINGDOMS[run.level]) {
            State.data.activeRun = null;
            State.save();
            Screens.show("screen-map");
            return;
        }

        this.currentLevel = run.level;
        this.errorsMade = run.errorsMade || 0;
        this.configureLevelUI(run.level);

        const stage = Math.max(1, Math.min(3, run.stage || 1));
        this.setStageIndicator(stage);

        if (stage === 3) {
            this.loadStage3();
        } else if (stage === 2) {
            this.loadStage2();
        } else {
            this.loadStage1();
        }

        Screens.show("screen-game");
    }

    startLevel(levelNumber) {
        this.currentLevel = levelNumber;
        this.currentStage = 1;
        this.errorsMade = 0;
        
        // Load UI configurations for Kingdom
        this.configureLevelUI(levelNumber);

        this.setStageIndicator(1);
        this.loadStage1();
        
        Screens.show("screen-game");
    }

    setStageIndicator(stageNum) {
        this.currentStage = stageNum;
        for (let i = 1; i <= 3; i++) {
            const dot = document.getElementById(`dot-stage-${i}`);
            dot.className = "stage-dot";
            if (i < stageNum) dot.classList.add("complete");
            else if (i === stageNum) dot.classList.add("active");
        }
    }

    updateStageProgress(stageNum, completed, total) {
        const levelName = KINGDOMS[this.currentLevel].name;
        const pct = total > 0 ? (completed / total) * 100 : 0;

        if (stageNum === 1) {
            setGameMissionStrip(
                "Etapa 1 de 3",
                `Abra o portal do ${levelName} combinando contas e resultados.`,
                `${completed}/${total} pares`,
                pct
            );
        } else if (stageNum === 2) {
            setGameMissionStrip(
                "Etapa 2 de 3",
                `Restaure o monumento do ${levelName}.`,
                `${completed}/${total} peças`,
                pct
            );
        }
    }

    getPuzzleSlotFromElement(element) {
        if (!element) return null;
        if (element.classList?.contains("puzzle-slot")) return element;
        return element.closest?.(".puzzle-slot") || null;
    }

    // ==========================================
    // ETAPA 1: ENCAIXE RÁPIDO
    // ==========================================
    loadStage1() {
        document.getElementById("game-stage-1").classList.add("active");
        document.getElementById("game-stage-2").classList.remove("active");
        document.getElementById("game-stage-3").classList.remove("active");
        this.saveActiveRun(1);

        const eqCol = document.getElementById("stage1-equations");
        const ansCol = document.getElementById("stage1-answers");
        eqCol.innerHTML = "";
        ansCol.innerHTML = "";
        
        this.selectedEquationCard = null;

        // Pick 6 random math equations for the active kingdom
        const levelNum = this.currentLevel;
        let formulas = [];
        for (let i = 1; i <= 10; i++) {
            formulas.push({ term1: levelNum, term2: i, result: levelNum * i });
        }
        // Shuffle formulas list and slice top 6
        formulas.sort(() => Math.random() - 0.5);
        const activePairs = formulas.slice(0, 6);

        // Render Equations (Left side)
        const shuffledEquations = [...activePairs].sort(() => Math.random() - 0.5);
        shuffledEquations.forEach(pair => {
            const card = document.createElement("div");
            card.className = "match-card";
            card.innerText = `${pair.term1} x ${pair.term2}`;
            card.setAttribute("draggable", "true");
            card.setAttribute("data-result", pair.result);
            card.setAttribute("data-equation", `${pair.term1}x${pair.term2}`);
            
            // Drag listeners
            card.addEventListener("dragstart", (e) => this.onDragStart(e));
            card.addEventListener("dragend", (e) => this.onDragEnd(e));
            
            // Touch listeners (mobile custom drag-drop)
            card.addEventListener("touchstart", (e) => this.onTouchStart(e), { passive: false });
            card.addEventListener("touchmove", (e) => this.onTouchMove(e), { passive: false });
            card.addEventListener("touchend", (e) => this.onTouchEnd(e));

            // Click listener (Click-to-match fallback)
            card.addEventListener("click", () => this.onMatchCardClick(card, "eq"));
            
            eqCol.appendChild(card);
        });

        // Render Answers (Right side)
        const shuffledAnswers = [...activePairs].sort(() => Math.random() - 0.5);
        shuffledAnswers.forEach(pair => {
            const card = document.createElement("div");
            card.className = "match-card";
            card.innerText = pair.result;
            card.setAttribute("data-result", pair.result);
            
            // Drop target listeners
            card.addEventListener("dragover", (e) => this.onDragOver(e));
            card.addEventListener("dragleave", (e) => this.onDragLeave(e));
            card.addEventListener("drop", (e) => this.onDrop(e));

            // Click listener (Click-to-match fallback)
            card.addEventListener("click", () => this.onMatchCardClick(card, "ans"));

            ansCol.appendChild(card);
        });

        this.updateStageProgress(1, 0, activePairs.length);
    }

    onMatchCardClick(card, type) {
        if (card.classList.contains("matched")) return;
        AudioPlayer.playClick();

        if (type === "eq") {
            // Unselect previous
            if (this.selectedEquationCard) {
                this.selectedEquationCard.classList.remove("selected-match");
            }
            this.selectedEquationCard = card;
            card.classList.add("selected-match");
        } else {
            // User clicked an answer card
            if (this.selectedEquationCard) {
                const eqRes = this.selectedEquationCard.getAttribute("data-result");
                const ansRes = card.getAttribute("data-result");
                
                if (eqRes === ansRes) {
                    // Success!
                    this.selectedEquationCard.classList.remove("selected-match");
                    this.selectedEquationCard.classList.add("matched");
                    card.classList.add("matched");
                    this.selectedEquationCard = null;
                    
                    AudioPlayer.playSuccess();
                    this.checkStage1Complete();
                } else {
                    // Incorrect Match
                    this.recordMistake();
                    this.selectedEquationCard.classList.remove("selected-match");
                    this.selectedEquationCard.classList.add("shake");
                    card.classList.add("shake");
                    
                    AudioPlayer.playError();
                    
                    const eqTerms = this.selectedEquationCard.getAttribute("data-equation").split("x");
                    setTimeout(() => {
                        if (this.selectedEquationCard) this.selectedEquationCard.classList.remove("shake");
                        card.classList.remove("shake");
                        this.selectedEquationCard = null;
                        this.showDicaPedagogica(parseInt(eqTerms[0]), parseInt(eqTerms[1]));
                    }, 500);
                }
            }
        }
    }

    // Drag-Drop Standard Implementation
    onDragStart(e) {
        e.dataTransfer.setData("text/plain", e.target.getAttribute("data-result"));
        e.dataTransfer.setData("eq-selector", e.target.getAttribute("data-equation"));
        e.target.classList.add("dragging");
    }

    onDragEnd(e) {
        e.target.classList.remove("dragging");
    }

    onDragOver(e) {
        e.preventDefault();
        const target = e.target.closest?.(".match-card, .puzzle-slot") || e.target;
        if (!target.classList.contains("matched") && !target.classList.contains("revealed")) {
            target.classList.add("drag-over");
        }
    }

    onDragLeave(e) {
        const target = e.target.closest?.(".match-card, .puzzle-slot") || e.target;
        target.classList.remove("drag-over");
    }

    onDrop(e) {
        e.preventDefault();
        e.target.classList.remove("drag-over");
        
        const expectedResult = e.dataTransfer.getData("text/plain");
        const eqCode = e.dataTransfer.getData("eq-selector");
        const actualResult = e.target.getAttribute("data-result");

        const sourceCard = document.querySelector(`[data-equation="${eqCode}"]`);
        if (!sourceCard) return;

        if (expectedResult === actualResult) {
            sourceCard.classList.add("matched");
            e.target.classList.add("matched");
            AudioPlayer.playSuccess();
            this.checkStage1Complete();
        } else {
            this.recordMistake();
            sourceCard.classList.add("shake");
            e.target.classList.add("shake");
            AudioPlayer.playError();
            
            const terms = eqCode.split("x");
            setTimeout(() => {
                sourceCard.classList.remove("shake");
                e.target.classList.remove("shake");
                this.showDicaPedagogica(parseInt(terms[0]), parseInt(terms[1]));
            }, 500);
        }
    }

    // Touch Support Implementation
    onTouchStart(e) {
        const touch = e.touches[0];
        const target = e.currentTarget;
        if (target.classList.contains("matched")) return;
        
        this.activeTouchElement = target;
        target.classList.add("dragging");
        
        // Calculate offsets
        const rect = target.getBoundingClientRect();
        this.touchOffsetX = touch.clientX - rect.left;
        this.touchOffsetY = touch.clientY - rect.top;
        
        // Prepare positioning properties
        target.style.position = 'fixed';
        target.style.zIndex = '1000';
        target.style.width = rect.width + 'px';
        target.style.left = (touch.clientX - this.touchOffsetX) + 'px';
        target.style.top = (touch.clientY - this.touchOffsetY) + 'px';
    }

    onTouchMove(e) {
        if (!this.activeTouchElement) return;
        e.preventDefault();
        const touch = e.touches[0];
        
        this.activeTouchElement.style.left = (touch.clientX - this.touchOffsetX) + 'px';
        this.activeTouchElement.style.top = (touch.clientY - this.touchOffsetY) + 'px';
    }

    onTouchEnd(e) {
        if (!this.activeTouchElement) return;
        const target = this.activeTouchElement;
        this.activeTouchElement = null;
        target.classList.remove("dragging");
        
        // Check landing element under touch coordinate
        const touch = e.changedTouches[0];
        target.style.display = 'none'; // Hide temporarily to detect element below
        const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
        target.style.display = ''; // Restore display
        
        // Reset positioning
        target.style.position = '';
        target.style.zIndex = '';
        target.style.width = '';
        target.style.left = '';
        target.style.top = '';

        if (dropTarget && dropTarget.classList.contains("match-card") && !dropTarget.classList.contains("matched") && dropTarget.parentElement.classList.contains("answers")) {
            const expectedResult = target.getAttribute("data-result");
            const actualResult = dropTarget.getAttribute("data-result");
            const eqCode = target.getAttribute("data-equation");
            
            if (expectedResult === actualResult) {
                target.classList.add("matched");
                dropTarget.classList.add("matched");
                AudioPlayer.playSuccess();
                this.checkStage1Complete();
            } else {
                this.recordMistake();
                target.classList.add("shake");
                dropTarget.classList.add("shake");
                AudioPlayer.playError();
                
                const terms = eqCode.split("x");
                setTimeout(() => {
                    target.classList.remove("shake");
                    dropTarget.classList.remove("shake");
                    this.showDicaPedagogica(parseInt(terms[0]), parseInt(terms[1]));
                }, 500);
            }
        }
    }

    checkStage1Complete() {
        const totalEqs = document.getElementById("stage1-equations").children.length;
        const matchedEqs = document.querySelectorAll("#stage1-equations .match-card.matched").length;
        this.updateStageProgress(1, matchedEqs, totalEqs);
        
        if (matchedEqs === totalEqs) {
            // Stage 1 Completed! Transition to Stage 2
            setTimeout(() => {
                this.setStageIndicator(2);
                this.loadStage2();
            }, 1000);
        }
    }

    // ==========================================
    // ETAPA 2: QUEBRA-CABEÇA DA IMAGEM
    // ==========================================
    loadStage2() {
        document.getElementById("game-stage-1").classList.remove("active");
        document.getElementById("game-stage-2").classList.add("active");
        document.getElementById("game-stage-3").classList.remove("active");
        document.getElementById("puzzle-complete-banner").classList.remove("active");
        this.saveActiveRun(2);

        const piecesPool = document.getElementById("puzzle-pieces-pool");
        const board = document.getElementById("puzzle-board");
        piecesPool.innerHTML = "";
        board.innerHTML = "";

        const levelNum = this.currentLevel;
        this.selectedEquationCard = null;

        // Render board grid slots (10 slots corresponding to x1 to x10)
        // Set background artwork of the board dynamically using Kingdom SVGs
        const boardWrapper = document.querySelector(".puzzle-board-wrapper");
        boardWrapper.style.backgroundImage = "";
        
        const puzzleArtwork = getPuzzleArtworkMarkup(levelNum);

        let formulas = [];
        for (let i = 1; i <= 10; i++) {
            formulas.push({ term1: levelNum, term2: i, result: levelNum * i, index: i });
        }

        // Render slots inside the board in mathematical sequential order (1 to 10)
        formulas.forEach(pair => {
            const slot = document.createElement("div");
            slot.className = "puzzle-slot";
            slot.setAttribute("data-result", pair.result);
            slot.setAttribute("data-equation", `${pair.term1}x${pair.term2}`);
            
            // Set slice background position for visual assembly
            // 2 rows, 5 columns grid.
            // Cols: 0 to 4. Rows: 0 to 1.
            const colIdx = (pair.index - 1) % 5;
            const rowIdx = Math.floor((pair.index - 1) / 5);

            // Inner label representing the result answer
            slot.innerHTML = `
                <span class="slot-art" style="left: -${colIdx * 100}%; top: -${rowIdx * 100}%;">${puzzleArtwork}</span>
                <span class="slot-answer-label">${pair.result}</span>
            `;
            
            // Drop target listeners
            slot.addEventListener("dragover", (e) => this.onDragOver(e));
            slot.addEventListener("dragleave", (e) => this.onDragLeave(e));
            slot.addEventListener("drop", (e) => this.onPuzzleDrop(e));

            // Click listener
            slot.addEventListener("click", () => this.onPuzzleSlotClick(slot));

            board.appendChild(slot);
        });

        // Render draggable Equation puzzle pieces (Shuffled)
        const shuffledPieces = [...formulas].sort(() => Math.random() - 0.5);
        shuffledPieces.forEach(pair => {
            const piece = document.createElement("div");
            piece.className = "puzzle-piece";
            piece.innerText = `${pair.term1} x ${pair.term2}`;
            piece.setAttribute("draggable", "true");
            piece.setAttribute("data-result", pair.result);
            piece.setAttribute("data-equation", `${pair.term1}x${pair.term2}`);
            
            // Drag listeners
            piece.addEventListener("dragstart", (e) => this.onDragStart(e));
            piece.addEventListener("dragend", (e) => this.onDragEnd(e));
            
            // Touch listeners
            piece.addEventListener("touchstart", (e) => this.onTouchStart(e), { passive: false });
            piece.addEventListener("touchmove", (e) => this.onTouchMove(e), { passive: false });
            piece.addEventListener("touchend", (e) => this.onPuzzleTouchEnd(e));

            // Click listener
            piece.addEventListener("click", () => this.onPuzzlePieceClick(piece));

            piecesPool.appendChild(piece);
        });

        this.updateStageProgress(2, 0, formulas.length);
    }

    onPuzzlePieceClick(piece) {
        if (piece.classList.contains("placed")) return;
        AudioPlayer.playClick();
        
        if (this.selectedEquationCard) {
            this.selectedEquationCard.classList.remove("selected-match");
        }
        this.selectedEquationCard = piece;
        piece.classList.add("selected-match");
    }

    onPuzzleSlotClick(slot) {
        if (slot.classList.contains("revealed")) return;
        
        if (this.selectedEquationCard) {
            const eqRes = this.selectedEquationCard.getAttribute("data-result");
            const slotRes = slot.getAttribute("data-result");
            const eqCode = this.selectedEquationCard.getAttribute("data-equation");

            if (eqRes === slotRes) {
                // Success! Place piece
                this.selectedEquationCard.classList.remove("selected-match");
                this.selectedEquationCard.classList.add("placed");
                slot.classList.add("revealed");
                this.selectedEquationCard = null;
                
                AudioPlayer.playSuccess();
                this.checkStage2Complete();
            } else {
                // Error
                this.recordMistake();
                this.selectedEquationCard.classList.remove("selected-match");
                this.selectedEquationCard.classList.add("shake");
                slot.classList.add("shake");
                
                AudioPlayer.playError();
                
                const terms = eqCode.split("x");
                setTimeout(() => {
                    if (this.selectedEquationCard) this.selectedEquationCard.classList.remove("shake");
                    slot.classList.remove("shake");
                    this.selectedEquationCard = null;
                    this.showDicaPedagogica(parseInt(terms[0]), parseInt(terms[1]));
                }, 500);
            }
        }
    }

    onPuzzleDrop(e) {
        e.preventDefault();
        
        const expectedResult = e.dataTransfer.getData("text/plain");
        const eqCode = e.dataTransfer.getData("eq-selector");

        const slotNode = this.getPuzzleSlotFromElement(e.target);
        if (!slotNode) return;
        slotNode.classList.remove("drag-over");
        
        const actualResult = slotNode.getAttribute("data-result");
        const sourcePiece = document.querySelector(`[data-equation="${eqCode}"].puzzle-piece`);
        
        if (!sourcePiece) return;

        if (expectedResult === actualResult) {
            sourcePiece.classList.add("placed");
            slotNode.classList.add("revealed");
            AudioPlayer.playSuccess();
            this.checkStage2Complete();
        } else {
            this.recordMistake();
            sourcePiece.classList.add("shake");
            slotNode.classList.add("shake");
            AudioPlayer.playError();
            
            const terms = eqCode.split("x");
            setTimeout(() => {
                sourcePiece.classList.remove("shake");
                slotNode.classList.remove("shake");
                this.showDicaPedagogica(parseInt(terms[0]), parseInt(terms[1]));
            }, 500);
        }
    }

    onPuzzleTouchEnd(e) {
        if (!this.activeTouchElement) return;
        const target = this.activeTouchElement;
        this.activeTouchElement = null;
        target.classList.remove("dragging");
        
        const touch = e.changedTouches[0];
        target.style.display = 'none';
        let dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
        target.style.display = '';
        
        // Reset positioning
        target.style.position = '';
        target.style.zIndex = '';
        target.style.width = '';
        target.style.left = '';
        target.style.top = '';

        if (dropTarget) {
            dropTarget = this.getPuzzleSlotFromElement(dropTarget);

            if (dropTarget && !dropTarget.classList.contains("revealed")) {
                const expectedResult = target.getAttribute("data-result");
                const actualResult = dropTarget.getAttribute("data-result");
                const eqCode = target.getAttribute("data-equation");
                
                if (expectedResult === actualResult) {
                    target.classList.add("placed");
                    dropTarget.classList.add("revealed");
                    AudioPlayer.playSuccess();
                    this.checkStage2Complete();
                } else {
                    this.recordMistake();
                    target.classList.add("shake");
                    dropTarget.classList.add("shake");
                    AudioPlayer.playError();
                    
                    const terms = eqCode.split("x");
                    setTimeout(() => {
                        target.classList.remove("shake");
                        dropTarget.classList.remove("shake");
                        this.showDicaPedagogica(parseInt(terms[0]), parseInt(terms[1]));
                    }, 500);
                }
            }
        }
    }

    checkStage2Complete() {
        const totalPieces = 10;
        const placedPieces = document.querySelectorAll("#puzzle-board .puzzle-slot.revealed").length;
        this.updateStageProgress(2, placedPieces, totalPieces);
        
        if (placedPieces === totalPieces) {
            // Puzzle Complete! Reveal celebration overlay banner
            setTimeout(() => {
                const banner = document.getElementById("puzzle-complete-banner");
                const kName = KINGDOMS[this.currentLevel].puzzleTitle;
                banner.querySelector(".congrats-text").innerHTML = `Você restaurou o monumento:<br><strong>${kName}</strong>! 🎉`;
                banner.classList.add("active");
                AudioPlayer.playVictoryMelody();
            }, 600);
        }
    }

    // ==========================================
    // ETAPA 3: DESAFIO DO CHEFE
    // ==========================================
    loadStage3() {
        document.getElementById("game-stage-1").classList.remove("active");
        document.getElementById("game-stage-2").classList.remove("active");
        document.getElementById("game-stage-3").classList.add("active");
        this.saveActiveRun(3);
        
        // Reset RPG state
        this.bossMaxHealth = 100;
        this.bossHealth = 100;
        this.playerHearts = 3;
        
        // Render hero avatar inside battle arena
        renderHeroIdentity("battle-hero-avatar");
        document.getElementById("battle-player-name").innerText = State.data.playerName;
        this.updateHeartsDisplay();

        // Render boss avatar
        const k = KINGDOMS[this.currentLevel];
        document.getElementById("battle-boss-name").innerText = k.bossName;
        generateBossSVG(this.currentLevel, "battle-boss-avatar");
        this.updateBossHealthDisplay();

        // Trigger boss quote
        const bubble = document.getElementById("boss-dialogue-bubble");
        bubble.innerText = `"Olá, ${State.data.playerName}! Duvido você resolver minhas contas!"`;

        // Start battle loop
        this.nextBossQuestion();
    }

    updateHeartsDisplay() {
        const container = document.getElementById("player-hearts");
        container.innerHTML = "";
        for (let i = 0; i < 3; i++) {
            container.innerHTML += i < this.playerHearts ? "❤️" : "🖤";
        }
    }

    updateBossHealthDisplay() {
        const fill = document.getElementById("boss-health-fill");
        const pct = (this.bossHealth / this.bossMaxHealth) * 100;
        fill.style.width = `${pct}%`;
        const defeatedPct = Math.round(100 - pct);
        setGameMissionStrip(
            "Etapa 3 de 3",
            `Derrote ${KINGDOMS[this.currentLevel].bossName} com respostas certeiras.`,
            `${defeatedPct}% do guardião derrotado`,
            defeatedPct
        );
    }

    nextBossQuestion() {
        if (this.battleTimerInterval) clearInterval(this.battleTimerInterval);
        
        // Pick random question from current level
        const levelNum = this.currentLevel;
        const val2 = Math.floor(Math.random() * 10) + 1; // 1 to 10
        const result = levelNum * val2;

        this.battleCurrentEquation = { term1: levelNum, term2: val2, result: result };
        
        // Display equation
        document.getElementById("boss-equation").innerText = `${levelNum} x ${val2} = ?`;

        // Display multiple choice options
        const answersGrid = document.getElementById("boss-answers-grid");
        answersGrid.innerHTML = "";

        // Build 4 options (1 correct, 3 wrong ones close to result)
        let options = [result];
        while (options.length < 4) {
            let offset = (Math.floor(Math.random() * 4) + 1) * (Math.random() < 0.5 ? 1 : -1);
            let wrongAns = result + offset;
            // Prevent duplicate options or negatives/zeros
            if (wrongAns > 0 && !options.includes(wrongAns)) {
                options.push(wrongAns);
            }
        }
        // Shuffle options
        options.sort(() => Math.random() - 0.5);

        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "btn btn-answer";
            btn.innerText = opt;
            btn.addEventListener("click", () => this.submitBossAnswer(opt));
            answersGrid.appendChild(btn);
        });

        // Initialize timer countdown
        this.battleTimerVal = 100;
        const timerFill = document.getElementById("boss-timer-fill");
        timerFill.className = "boss-timer-bar";
        timerFill.style.width = "100%";

        const duration = 12000; // 12 seconds
        const step = 100; // updates every 100ms
        let elapsed = 0;

        this.battleTimerInterval = setInterval(() => {
            elapsed += step;
            this.battleTimerVal = 100 - (elapsed / duration) * 100;
            timerFill.style.width = `${this.battleTimerVal}%`;

            if (this.battleTimerVal < 30) {
                timerFill.classList.add("critical");
            }

            if (elapsed >= duration) {
                clearInterval(this.battleTimerInterval);
                this.onBossTimerExpired();
            }
        }, step);
    }

    submitBossAnswer(selectedVal) {
        clearInterval(this.battleTimerInterval);
        
        const correctVal = this.battleCurrentEquation.result;
        
        // Turn off answer buttons to prevent double clicks
        const btns = document.querySelectorAll("#boss-answers-grid .btn-answer");
        btns.forEach(b => b.disabled = true);

        if (selectedVal === correctVal) {
            // SUCCESSFUL ATTACK ON BOSS
            this.bossHealth -= 34; // 3 hits defeat the boss
            if (this.bossHealth < 0) this.bossHealth = 0;
            
            this.updateBossHealthDisplay();
            AudioPlayer.playHit();
            
            // Attack animation (hero slide right, boss hit flash)
            const heroWrapper = document.getElementById("battle-hero-avatar");
            const bossWrapper = document.getElementById("battle-boss-avatar");
            heroWrapper.classList.add("attacking");
            
            document.getElementById("boss-dialogue-bubble").innerText = `"Aaaaargh! Isso doeu!"`;

            setTimeout(() => {
                bossWrapper.classList.add("hit");
            }, 200);

            setTimeout(() => {
                heroWrapper.classList.remove("attacking");
                bossWrapper.classList.remove("hit");
                
                if (this.bossHealth <= 0) {
                    this.onBossDefeated();
                } else {
                    this.nextBossQuestion();
                }
            }, 800);
        } else {
            // INCORRECT ANSWER - BOSS ATTACKS
            this.recordMistake();
            this.playerHearts--;
            this.updateHeartsDisplay();
            AudioPlayer.playError();

            const heroWrapper = document.getElementById("battle-hero-avatar");
            const bossWrapper = document.getElementById("battle-boss-avatar");
            bossWrapper.classList.add("attacking");
            
            document.getElementById("boss-dialogue-bubble").innerText = `"Ha! Errou! Receba meu ataque!"`;

            setTimeout(() => {
                heroWrapper.classList.add("hit");
            }, 200);

            setTimeout(() => {
                bossWrapper.classList.remove("attacking");
                heroWrapper.classList.remove("hit");
                
                if (this.playerHearts <= 0) {
                    this.onPlayerDefeated();
                } else {
                    // Show educational tip overlay modal, then continue
                    this.showDicaPedagogica(this.battleCurrentEquation.term1, this.battleCurrentEquation.term2, () => {
                        this.nextBossQuestion();
                    });
                }
            }, 800);
        }
    }

    onBossTimerExpired() {
        this.recordMistake();
        this.playerHearts--;
        this.updateHeartsDisplay();
        AudioPlayer.playError();

        const heroWrapper = document.getElementById("battle-hero-avatar");
        const bossWrapper = document.getElementById("battle-boss-avatar");
        
        bossWrapper.classList.add("attacking");
        document.getElementById("boss-dialogue-bubble").innerText = `"Tempo esgotado! Muito lento!"`;

        setTimeout(() => {
            heroWrapper.classList.add("hit");
        }, 200);

        setTimeout(() => {
            bossWrapper.classList.remove("attacking");
            heroWrapper.classList.remove("hit");
            
            if (this.playerHearts <= 0) {
                this.onPlayerDefeated();
            } else {
                this.showDicaPedagogica(this.battleCurrentEquation.term1, this.battleCurrentEquation.term2, () => {
                    this.nextBossQuestion();
                });
            }
        }, 800);
    }

    onBossDefeated() {
        if (this.battleTimerInterval) clearInterval(this.battleTimerInterval);
        
        // Save level progress
        const completedLevel = this.currentLevel;
        
        // Compute Stars awarded
        let starsAwarded = 1;
        if (this.errorsMade === 0) starsAwarded = 3;
        else if (this.errorsMade <= 2) starsAwarded = 2;
        
        // Save star counts and unlock next levels
        if (!State.data.stars[completedLevel] || State.data.stars[completedLevel] < starsAwarded) {
            State.data.stars[completedLevel] = starsAwarded;
        }
        State.data.errors[completedLevel] = Math.min(State.data.errors[completedLevel] ?? this.errorsMade, this.errorsMade);

        // Add level rewards
        const k = KINGDOMS[completedLevel];
        if (!State.data.unlockedGear.includes(k.gearId)) {
            State.data.unlockedGear.push(k.gearId);
        }

        // Unlock next stage index
        const nextLvl = completedLevel + 1;
        if (nextLvl <= 9 && !State.data.unlockedLevels.includes(nextLvl)) {
            State.data.unlockedLevels.push(nextLvl);
        }

        // Reward coins
        const coinAward = starsAwarded * 30 + 10;
        State.data.coins += coinAward;
        State.data.activeRun = null;
        
        State.save();

        // Trigger level victory screen
        this.showVictoryScreen(completedLevel, starsAwarded, coinAward);
    }

    onPlayerDefeated() {
        if (this.battleTimerInterval) clearInterval(this.battleTimerInterval);
        // Display friendly retry modal without penalizing progress
        const retryModal = document.getElementById("retry-modal");
        retryModal.classList.add("active");
    }

    restartBossChallenge() {
        document.getElementById("retry-modal").classList.remove("active");
        this.loadStage3();
    }

    // ==========================================
    // TELA DE VITÓRIA DA FASE
    // ==========================================
    showVictoryScreen(levelNum, starsCount, coinsCount) {
        const k = KINGDOMS[levelNum];
        document.getElementById("victory-kingdom-text").innerHTML = `Você dominou as tabuadas do <strong>${levelNum}</strong> e libertou o <strong>${k.name}</strong>!`;
        document.getElementById("victory-recompensa-name").innerText = k.rewardName;
        document.getElementById("victory-recompensa-icon").innerText = k.rewardIcon;
        
        document.getElementById("victory-item-name").innerText = k.gearName;
        document.getElementById("victory-item-icon").innerText = k.gearIcon;

        document.getElementById("victory-coins-added").innerText = coinsCount;
        document.getElementById("victory-errors-count").innerText = this.errorsMade;

        // Render stars dynamically
        const starsSpan = document.querySelectorAll("#victory-stars .star");
        starsSpan.forEach((s, idx) => {
            s.className = "star";
            if (idx < starsCount) {
                setTimeout(() => { s.classList.add("active"); }, idx * 300);
            }
        });

        // Trigger Confetti fall
        this.triggerConfetti();
        AudioPlayer.playVictoryMelody();
        
        // Hide next button if it's Castelo Final (level 9)
        const nextBtn = document.getElementById("btn-victory-next");
        if (levelNum === 9) {
            nextBtn.innerText = "Arena dos Mestres 👑";
        } else {
            nextBtn.innerText = "Próxima Fase! ➡️";
        }

        Screens.show("screen-victory");
    }

    triggerConfetti() {
        const canvas = document.getElementById("victory-confetti");
        canvas.innerHTML = "";
        const colors = ["#ef4444", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899"];
        
        for (let i = 0; i < 40; i++) {
            const piece = document.createElement("div");
            piece.className = "confetti-piece";
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.left = Math.random() * 100 + "%";
            piece.style.animationDelay = Math.random() * 2 + "s";
            piece.style.width = Math.random() * 8 + 6 + "px";
            piece.style.height = Math.random() * 14 + 6 + "px";
            piece.style.borderRadius = Math.random() < 0.5 ? "50%" : "0";
            canvas.appendChild(piece);
        }
    }

    // ==========================================
    // DICA PEDAGÓGICA POPUP MODAL
    // ==========================================
    showDicaPedagogica(a, b, onCloseCallback = null) {
        const modal = document.getElementById("hint-modal");
        const text = document.getElementById("hint-text");
        text.innerHTML = getPedagogicalHint(a, b);
        modal.classList.add("active");

        const closeBtn = document.getElementById("btn-close-hint");
        const handler = () => {
            modal.classList.remove("active");
            closeBtn.removeEventListener("click", handler);
            AudioPlayer.playClick();
            if (onCloseCallback) onCloseCallback();
        };
        closeBtn.addEventListener("click", handler);
    }

    // ==========================================
    // INTERFACES GENERAL EVENTS BINDING
    // ==========================================
    setupGeneralEvents() {
        // Stage 2 completion navigation
        document.getElementById("btn-puzzle-next").addEventListener("click", () => {
            this.setStageIndicator(3);
            this.loadStage3();
        });

        // Game HUD exiting back to Map
        document.getElementById("btn-game-exit").addEventListener("click", () => {
            if (confirm("Quer mesmo sair da fase atual e voltar ao mapa? Todo o progresso desta fase será perdido.")) {
                if (this.battleTimerInterval) clearInterval(this.battleTimerInterval);
                Screens.show("screen-map");
            }
        });

        // Toggle Sound on Game HUD
        document.getElementById("btn-toggle-sound").addEventListener("click", (e) => {
            const state = AudioPlayer.toggle();
            BackgroundMusic.setEnabled(state);
            e.target.innerText = state ? "🔊 Som On" : "🔇 Som Off";
            State.data.soundEnabled = state;
            State.save();
        });

        // Boss retry buttons
        document.getElementById("btn-restart-boss").addEventListener("click", () => this.restartBossChallenge());
        document.getElementById("btn-retry-exit").addEventListener("click", () => {
            document.getElementById("retry-modal").classList.remove("active");
            Screens.show("screen-map");
        });
    }
}

let GameController = null;

// ==========================================================================
// 9. ARENA DOS MESTRES (FINAL SPECIAL BOSS MODE)
// ==========================================================================
class ArenaController {
    constructor() {
        this.errorsMade = 0;
        this.bossHealth = 150; // Bigger health bar
        this.bossMaxHealth = 150;
        this.playerHearts = 3;
        this.battleTimerInterval = null;
        this.battleCurrentEquation = null;
    }

    saveActiveRun() {
        State.data.activeRun = {
            type: "arena",
            errorsMade: this.errorsMade
        };
        State.save();
    }

    recordMistake() {
        this.errorsMade++;
        this.saveActiveRun();
    }

    startArena(options = {}) {
        const savedArenaRun = options.resume && State.data.activeRun?.type === "arena" ? State.data.activeRun : null;
        this.errorsMade = savedArenaRun?.errorsMade || 0;
        this.bossHealth = 150;
        this.playerHearts = 3;

        // Set visual root properties for custom final color glow (Ruby red/pink)
        document.documentElement.style.setProperty('--color-primary', 'hsl(340, 80%, 55%)');

        document.getElementById("game-reino-name").innerText = "Arena dos Mestres";
        document.getElementById("game-reino-icon").innerText = "⚔️";
        document.getElementById("game-coins").innerText = State.data.coins;
        this.saveActiveRun();
        setGameMissionStrip(
            "Arena final",
            "Misture tudo que aprendeu e derrube o Guardião Supremo.",
            "0/5 golpes",
            0
        );

        // Setup HUD active stage
        document.getElementById("game-stage-1").classList.remove("active");
        document.getElementById("game-stage-2").classList.remove("active");
        document.getElementById("game-stage-3").classList.add("active");

        // Hide dot markers for Arena
        document.querySelector(".stage-indicator").style.visibility = "hidden";

        // Setup Hero HUD
        renderHeroIdentity("battle-hero-avatar");
        document.getElementById("battle-player-name").innerText = State.data.playerName;
        this.updateHeartsDisplay();

        // Setup Boss HUD
        document.getElementById("battle-boss-name").innerText = "Guardião Supremo Giga";
        generateBossSVG("arena", "battle-boss-avatar");
        this.updateBossHealthDisplay();

        document.getElementById("boss-dialogue-bubble").innerText = `"Bem-vindo ao desafio supremo! Prove que você domina todas as tabuadas!"`;

        this.nextQuestion();
        Screens.show("screen-game");
    }

    updateHeartsDisplay() {
        const container = document.getElementById("player-hearts");
        container.innerHTML = "";
        for (let i = 0; i < 3; i++) {
            container.innerHTML += i < this.playerHearts ? "❤️" : "🖤";
        }
    }

    updateBossHealthDisplay() {
        const fill = document.getElementById("boss-health-fill");
        const pct = (this.bossHealth / this.bossMaxHealth) * 100;
        fill.style.width = `${pct}%`;
        const hitsDone = Math.min(5, Math.round(((this.bossMaxHealth - this.bossHealth) / this.bossMaxHealth) * 5));
        setGameMissionStrip(
            "Arena final",
            "Misture tudo que aprendeu e derrube o Guardião Supremo.",
            `${hitsDone}/5 golpes`,
            100 - pct
        );
    }

    nextQuestion() {
        if (this.battleTimerInterval) clearInterval(this.battleTimerInterval);

        // Mix equations randomly from 2 to 9
        const factor1 = Math.floor(Math.random() * 8) + 2; // 2 to 9
        const factor2 = Math.floor(Math.random() * 10) + 1; // 1 to 10
        const result = factor1 * factor2;

        this.battleCurrentEquation = { term1: factor1, term2: factor2, result: result };
        document.getElementById("boss-equation").innerText = `${factor1} x ${factor2} = ?`;

        // Generate answers
        const answersGrid = document.getElementById("boss-answers-grid");
        answersGrid.innerHTML = "";

        let options = [result];
        while (options.length < 4) {
            let offset = (Math.floor(Math.random() * 5) + 1) * (Math.random() < 0.5 ? 1 : -1);
            let wrongAns = result + offset;
            if (wrongAns > 0 && !options.includes(wrongAns)) {
                options.push(wrongAns);
            }
        }
        options.sort(() => Math.random() - 0.5);

        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "btn btn-answer";
            btn.innerText = opt;
            btn.addEventListener("click", () => this.submitAnswer(opt));
            answersGrid.appendChild(btn);
        });

        // Initialize Timer
        this.battleTimerVal = 100;
        const timerFill = document.getElementById("boss-timer-fill");
        timerFill.className = "boss-timer-bar";
        timerFill.style.width = "100%";

        const duration = 10000; // 10 seconds (faster than normal reinos!)
        const step = 100;
        let elapsed = 0;

        this.battleTimerInterval = setInterval(() => {
            elapsed += step;
            this.battleTimerVal = 100 - (elapsed / duration) * 100;
            timerFill.style.width = `${this.battleTimerVal}%`;

            if (this.battleTimerVal < 30) {
                timerFill.classList.add("critical");
            }

            if (elapsed >= duration) {
                clearInterval(this.battleTimerInterval);
                this.onTimerExpired();
            }
        }, step);
    }

    submitAnswer(selectedVal) {
        clearInterval(this.battleTimerInterval);
        const correctVal = this.battleCurrentEquation.result;
        
        const btns = document.querySelectorAll("#boss-answers-grid .btn-answer");
        btns.forEach(b => b.disabled = true);

        if (selectedVal === correctVal) {
            this.bossHealth -= 30; // 5 hits to win
            if (this.bossHealth < 0) this.bossHealth = 0;
            
            this.updateBossHealthDisplay();
            AudioPlayer.playHit();
            
            const heroWrapper = document.getElementById("battle-hero-avatar");
            const bossWrapper = document.getElementById("battle-boss-avatar");
            heroWrapper.classList.add("attacking");
            
            document.getElementById("boss-dialogue-bubble").innerText = `"Incrível! Você acertou!"`;

            setTimeout(() => {
                bossWrapper.classList.add("hit");
            }, 200);

            setTimeout(() => {
                heroWrapper.classList.remove("attacking");
                bossWrapper.classList.remove("hit");
                
                if (this.bossHealth <= 0) {
                    this.onVictory();
                } else {
                    this.nextQuestion();
                }
            }, 800);
        } else {
            this.recordMistake();
            this.playerHearts--;
            this.updateHeartsDisplay();
            AudioPlayer.playError();

            const heroWrapper = document.getElementById("battle-hero-avatar");
            const bossWrapper = document.getElementById("battle-boss-avatar");
            bossWrapper.classList.add("attacking");

            document.getElementById("boss-dialogue-bubble").innerText = `"Erro fatal! Cuidado com a tabuada do ${this.battleCurrentEquation.term1}!"`;

            setTimeout(() => {
                heroWrapper.classList.add("hit");
            }, 200);

            setTimeout(() => {
                bossWrapper.classList.remove("attacking");
                heroWrapper.classList.remove("hit");
                
                if (this.playerHearts <= 0) {
                    this.onDefeat();
                } else {
                    this.showTip(() => {
                        this.nextQuestion();
                    });
                }
            }, 800);
        }
    }

    onTimerExpired() {
        this.recordMistake();
        this.playerHearts--;
        this.updateHeartsDisplay();
        AudioPlayer.playError();

        const heroWrapper = document.getElementById("battle-hero-avatar");
        const bossWrapper = document.getElementById("battle-boss-avatar");
        
        bossWrapper.classList.add("attacking");
        document.getElementById("boss-dialogue-bubble").innerText = `"O tempo corre contra você!"`;

        setTimeout(() => {
            heroWrapper.classList.add("hit");
        }, 200);

        setTimeout(() => {
            bossWrapper.classList.remove("attacking");
            heroWrapper.classList.remove("hit");
            
            if (this.playerHearts <= 0) {
                this.onDefeat();
            } else {
                this.showTip(() => {
                    this.nextQuestion();
                });
            }
        }, 800);
    }

    showTip(onClose) {
        const modal = document.getElementById("hint-modal");
        const text = document.getElementById("hint-text");
        text.innerHTML = getPedagogicalHint(this.battleCurrentEquation.term1, this.battleCurrentEquation.term2);
        modal.classList.add("active");

        const closeBtn = document.getElementById("btn-close-hint");
        const handler = () => {
            modal.classList.remove("active");
            closeBtn.removeEventListener("click", handler);
            AudioPlayer.playClick();
            if (onClose) onClose();
        };
        closeBtn.addEventListener("click", handler);
    }

    onVictory() {
        if (this.battleTimerInterval) clearInterval(this.battleTimerInterval);
        
        // Restore indicators
        document.querySelector(".stage-indicator").style.visibility = "visible";
        
        // Mark game completely finished
        State.data.completedAll = true;
        State.data.activeRun = null;
        State.save();

        AudioPlayer.playVictoryMelody();
        
        // Direct to final certificate screen
        Screens.show("screen-certificate");
    }

    onDefeat() {
        if (this.battleTimerInterval) clearInterval(this.battleTimerInterval);
        document.querySelector(".stage-indicator").style.visibility = "visible";
        
        // Show retry modal
        const retryModal = document.getElementById("retry-modal");
        retryModal.classList.add("active");

        // Bind special restart for Arena
        const restartBtn = document.getElementById("btn-restart-boss");
        const exitBtn = document.getElementById("btn-retry-exit");

        const removeListeners = () => {
            restartBtn.removeEventListener("click", restartHandler);
            exitBtn.removeEventListener("click", exitHandler);
        };

        const restartHandler = () => {
            removeListeners();
            retryModal.classList.remove("active");
            this.startArena();
        };

        const exitHandler = () => {
            removeListeners();
            retryModal.classList.remove("active");
            Screens.show("screen-map");
        };

        restartBtn.addEventListener("click", restartHandler);
        exitBtn.addEventListener("click", exitHandler);
    }
}

const finalArena = new ArenaController();

// ==========================================================================
// 10. ENTRY POINT - INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // Instantiate Gameplay controller
    GameController = new GameplayController();

    // 10.1 Check LocalStorage values and show Start screen
    Screens.show("screen-start");
    
    // Sync sound setting toggle on start screen configurations
    AudioPlayer.enabled = State.data.soundEnabled;
    BackgroundMusic.setEnabled(State.data.soundEnabled);
    const btnHUDsound = document.getElementById("btn-toggle-sound");
    btnHUDsound.innerText = AudioPlayer.enabled ? "🔊 Som On" : "🔇 Som Off";

    const startBackgroundMusic = () => {
        BackgroundMusic.play();
    };
    document.addEventListener("pointerdown", startBackgroundMusic, { once: true });
    document.addEventListener("keydown", startBackgroundMusic, { once: true });

    // Initialize character selector visual cards
    const cards = document.querySelectorAll(".char-card");
    cards.forEach(card => {
        const charType = card.getAttribute("data-char");
        // Inject characters SVG on selection cards
        renderCharacterAvatar(charType, `avatar-${charType}-svg`, false);

        card.addEventListener("click", () => {
            cards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            State.data.characterSelected = charType;
            document.getElementById("btn-char-confirm").disabled = false;
            AudioPlayer.playClick();
        });
    });

    // 10.2 Navigation Button Listeners
    document.getElementById("btn-play").addEventListener("click", () => {
        if (State.data.characterSelected) {
            Screens.show("screen-map");
        } else {
            Screens.show("screen-character");
        }
    });

    document.getElementById("btn-continue").addEventListener("click", () => {
        if (State.data.activeRun) {
            GameController.resumeSavedRun();
        } else {
            Screens.show("screen-map");
        }
    });

    document.getElementById("btn-achievements").addEventListener("click", () => {
        if (State.data.characterSelected) {
            Screens.show("screen-achievements");
        } else {
            showQuestToast("Escolha um herói para abrir o álbum.");
            Screens.show("screen-character");
        }
    });

    document.getElementById("btn-settings").addEventListener("click", () => {
        Screens.show("screen-settings");
    });

    document.getElementById("start-char-preview").addEventListener("click", () => {
        Screens.show("screen-character");
    });

    document.getElementById("btn-char-back").addEventListener("click", () => {
        Screens.show("screen-start");
    });

    document.getElementById("btn-char-confirm").addEventListener("click", () => {
        const inputName = document.getElementById("player-name").value.trim();
        State.data.playerName = inputName ? inputName : "Aventureiro";
        State.save();
        Screens.show("screen-map");
    });

    const childPhotoInput = document.getElementById("child-photo-input");
    document.getElementById("btn-child-photo").addEventListener("click", () => {
        childPhotoInput.click();
    });

    childPhotoInput.addEventListener("change", async (event) => {
        const file = event.target.files && event.target.files[0];
        if (!file) return;

        try {
            State.data.childPhoto = await resizePhotoForStorage(file);
            State.save();
            updateChildPhotoPreview();
            showQuestToast("Foto do herói salva neste navegador.");
        } catch (error) {
            showQuestToast("Não consegui carregar essa foto. Tente outra imagem.");
        } finally {
            childPhotoInput.value = "";
        }
    });

    document.getElementById("btn-remove-child-photo").addEventListener("click", () => {
        State.data.childPhoto = "";
        State.save();
        updateChildPhotoPreview();
        showQuestToast("Foto removida.");
    });

    // HUD settings & achievements triggers from map
    document.getElementById("btn-map-achievements").addEventListener("click", () => {
        Screens.show("screen-achievements");
    });
    
    document.getElementById("btn-map-settings").addEventListener("click", () => {
        Screens.show("screen-settings");
    });

    document.getElementById("btn-map-back").addEventListener("click", () => {
        Screens.show("screen-start");
    });

    document.getElementById("btn-map-to-char").addEventListener("click", () => {
        Screens.show("screen-character");
    });

    // Victory Screen Navigations
    document.getElementById("btn-victory-map").addEventListener("click", () => {
        Screens.show("screen-map");
    });

    document.getElementById("btn-victory-next").addEventListener("click", () => {
        const currentLvl = GameController.currentLevel;
        if (currentLvl === 9) {
            // Trigger Arena Dos Mestres Mode
            finalArena.startArena();
        } else {
            // Start next reino tabuada
            GameController.startLevel(currentLvl + 1);
        }
    });

    // Achievements Back to Map
    document.getElementById("btn-achievements-back").addEventListener("click", () => {
        Screens.show("screen-map");
    });

    // Settings listeners
    const btnSettingSound = document.getElementById("btn-settings-sound-toggle");
    btnSettingSound.innerText = State.data.soundEnabled ? "Som: Ativado 🔊" : "Som: Desativado 🔇";
    
    btnSettingSound.addEventListener("click", () => {
        const act = AudioPlayer.toggle();
        BackgroundMusic.setEnabled(act);
        State.data.soundEnabled = act;
        State.save();
        btnSettingSound.innerText = act ? "Som: Ativado 🔊" : "Som: Desativado 🔇";
        btnHUDsound.innerText = act ? "🔊 Som On" : "🔇 Som Off";
        AudioPlayer.playClick();
    });

    document.getElementById("btn-settings-reset").addEventListener("click", () => {
        if (confirm("Você quer mesmo ZERAR o seu progresso? Isso apagará todas as suas conquistas, moedas e medalhas!")) {
            State.reset();
            Screens.show("screen-start");
            showQuestToast("Progresso reiniciado com sucesso.");
        }
    });

    document.getElementById("btn-settings-certificate").addEventListener("click", () => {
        if (!requestCertificateAccess("abrir o certificado")) return;
        Screens.show("screen-certificate");
    });

    document.getElementById("btn-settings-close").addEventListener("click", () => {
        Screens.show(State.data.characterSelected ? "screen-map" : "screen-start");
    });

    // Click map nodes to initiate levels
    const mapNodes = document.querySelectorAll(".map-node");
    mapNodes.forEach(node => {
        node.addEventListener("click", () => {
            if (node.classList.contains("locked")) {
                AudioPlayer.playError();
                showQuestToast("Libere o reino anterior para abrir este portal.");
                return;
            }

            const levelVal = node.getAttribute("data-level");
            if (levelVal) {
                GameController.startLevel(parseInt(levelVal));
            } else if (node.id === "node-arena") {
                // Final Boss Mixed level
                finalArena.startArena();
            }
        });
    });

    // Customizer tabs controls
    const tabMedals = document.getElementById("tab-btn-medals");
    const tabItems = document.getElementById("tab-btn-items");
    const contentMedals = document.getElementById("tab-content-medals");
    const contentItems = document.getElementById("tab-content-items");

    tabMedals.addEventListener("click", () => {
        tabMedals.classList.add("active");
        tabItems.classList.remove("active");
        contentMedals.classList.add("active");
        contentItems.classList.remove("active");
        AudioPlayer.playClick();
    });

    tabItems.addEventListener("click", () => {
        tabItems.classList.add("active");
        tabMedals.classList.remove("active");
        contentItems.classList.add("active");
        contentMedals.classList.remove("active");
        AudioPlayer.playClick();
    });

    // Certificate screen actions
    document.getElementById("btn-cert-print").addEventListener("click", () => {
        AudioPlayer.playClick();
        if (!requestCertificateAccess("salvar ou imprimir o certificado")) return;
        window.print();
    });

    document.getElementById("btn-cert-restart").addEventListener("click", () => {
        if (confirm("Quer iniciar uma nova jornada e apagar o progresso antigo para jogar novamente?")) {
            State.reset();
            Screens.show("screen-character");
        }
    });

    document.getElementById("btn-cert-map").addEventListener("click", () => {
        Screens.show("screen-achievements");
    });
});
