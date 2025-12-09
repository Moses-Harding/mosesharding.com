/**
 * Site Configuration
 * Edit these values to update your portfolio content
 */

const CONFIG = {
    // Personal Info
    name: 'Moses Harding',
    title: 'iOS Developer & Product Manager',
    location: 'NYC',
    tagline: 'I build apps focused on solving real problems.',

    // Contact Links
    email: 'moses.harding.dev@gmail.com',
    github: 'https://github.com/Moses-Harding',
    linkedin: 'https://www.linkedin.com/in/moses-harding/',

    // Hero Section
    hero: {
        badge: 'Available for new projects',
        greeting: "Hi, I'm",
        intro: 'I build apps focused on solving real problems. Based in NYC, crafting thoughtful software experiences.'
    },

    // About Section
    about: {
        paragraphs: [
            "I'm Moses, an iOS developer and product manager based in NYC. I'm passionate about building apps that solve real problems and deliver meaningful value to users.",
            "With a focus on clean design and intuitive user experiences, I build tools that help people work smarter and more efficiently. Currently interested in exploring how AI can enhance everyday workflows without losing the human element."
        ]
    },

    // Apps - Add or modify your apps here
    apps: [
        {
            id: 'gradevine',
            name: 'GradeVine',
            tagline: 'AI-powered grading that teachers can trust',
            description: 'GradeVine helps educators save hours on grading while maintaining the human touch. Upload student work, get AI-generated evaluations with detailed feedback, and review before sharing. Pay only for what you use with credit-based pricing.',
            features: [
                'AI-assisted evaluation with customizable rubrics',
                'Detailed, constructive feedback generation',
                'Teacher review and editing before finalizing grades',
                'Credit-based pricing — no subscriptions, pay per use',
                'Built for educators, by someone who listens to them'
            ],
            // Set to App Store URL when available, or null for "Coming Soon"
            appStoreUrl: null,
            // Icon: set to image path when available, or null for placeholder
            iconUrl: null,
            iconPlaceholder: 'GV',
            // Screenshots: array of image paths, or empty for placeholders
            screenshots: []
        },
        {
            id: 'marinate',
            name: 'Marinate',
            tagline: 'Digitize recipes with AI',
            description: 'Transform photos, voice recordings, and links into clean, distraction-free recipe cards. Capture family recipes, organize your collection, and collaborate on shared cookbooks with friends and family.',
            features: [
                'Voice input with automatic translation (35+ languages)',
                'AI-powered scanning from books, handwritten cards, or screenshots',
                'Shared cookbooks with real-time collaboration',
                'Smart search by cook time, cuisine, or ingredients',
                'Unit conversion and serving size scaling',
                'Offline access with cloud sync across devices'
            ],
            appStoreUrl: 'https://apps.apple.com/us/app/marinate-social-cookbooks/id6468971786',
            // Icon from App Store
            iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/70/96/12/70961221-0c21-acd4-db98-bafc102fe3e0/AppIcon-0-0-1x_U007epad-0-1-85-220.png/230x0w.webp',
            iconPlaceholder: 'M',
            screenshots: []
        },
        {
            id: 'neon-fury',
            name: 'Neon Fury',
            tagline: 'Multiplayer turn-based tactics',
            description: 'A competitive grid-based strategy game where two players face off on a tactical board, each commanding 24 pieces. Acquire power-ups, outmaneuver your opponent, and climb the leaderboards.',
            features: [
                'Real-time multiplayer with friends or random opponents',
                'Diverse power-ups: Artillery, Breach, Defect, Nuclear Strike & more',
                'Up to 30 simultaneous active games',
                'Game Center leaderboard integration',
                'Cross-platform on iPhone, iPad, and Mac'
            ],
            appStoreUrl: 'https://apps.apple.com/us/app/neon-fury/id1606637568',
            iconUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/06/71/ec/0671ecff-64a4-6922-d63f-f45efa965952/AppIcon-0-0-1x_U007ephone-0-85-220.png/230x0w.webp',
            iconPlaceholder: 'NF',
            screenshots: []
        }
        // Add more apps here following the same structure
    ],

    // Footer
    footer: {
        copyright: '© 2025 Moses Harding. Built with care in NYC.'
    }
};
