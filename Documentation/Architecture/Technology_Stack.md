# Technology Stack

This document outlines the technologies used in the Moses Harding portfolio website and the reasoning behind each technology choice.

## Core Technologies

### HTML5 (HyperText Markup Language)
**Version**: HTML5 Standard
**Purpose**: Semantic structure and content organization

**Why HTML5**:
- Semantic elements provide better accessibility and SEO
- Native multimedia support without plugins
- Better mobile device support
- Cleaner, more readable code structure
- Standard across all modern browsers

**Key Features Used**:
- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` for semantic structure
- `<meta>` tags for SEO and social sharing
- `data-*` attributes for JavaScript hooks
- Proper heading hierarchy (h1-h6)
- Open Graph meta tags for social media

### CSS3 (Cascading Style Sheets)
**Version**: CSS3 with modern features
**Purpose**: Visual styling, layout, animations, and theme system

**Why CSS3**:
- No build process required
- Instant visual feedback
- Powerful layout systems (Grid, Flexbox)
- Custom Properties for theming
- Hardware-accelerated animations
- Widely supported across browsers

**Key Features Used**:
- **CSS Custom Properties**: Dynamic theming without preprocessors
- **CSS Grid**: Modern layout system
- **Flexbox**: Component alignment
- **Media Queries**: Responsive design
- **Transitions & Animations**: Smooth interactions
- **Transforms**: GPU-accelerated animations
- **Backdrop Filter**: Modern glassmorphism effects
- **Clamp()**: Fluid typography

### Vanilla JavaScript (ES6+)
**Version**: ECMAScript 2015+ features
**Purpose**: Interactivity, dynamic content, and user experience enhancements

**Why Vanilla JavaScript**:
- Zero dependencies and faster load times
- Full control over implementation
- Smaller bundle size
- No framework-specific limitations
- Better understanding of core concepts
- Easier to debug and maintain

**Key Features Used**:
- **Arrow Functions**: Cleaner syntax
- **Template Literals**: Dynamic HTML generation
- **Destructuring**: Clean data extraction
- **Async/Await Ready**: Prepared for future features
- **Modules**: Ready for future expansion
- **IntersectionObserver API**: Performance-optimized scroll detection
- **LocalStorage**: Theme persistence
- **RequestAnimationFrame**: Smooth animations

## External Resources

### Google Fonts - Inter
**URL**: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap`
**Purpose**: Typography system

**Why Inter**:
- Excellent readability at all sizes
- Designed for user interfaces
- Multiple weights for visual hierarchy
- Good character support
- Optimized for screens
- Professional appearance

**Optimizations**:
- `preconnect` hints for faster loading
- `font-display: swap` for performance
- Loaded with proper font-weight range
- Fallback fonts specified

### App Store Images
**Source**: Apple App Store CDN
**Purpose**: App icons and screenshots

**Why Use External URLs**:
- Always up-to-date app icons
- Reduced site storage
- Automatic updates when apps update
- Official Apple-styled badges
- Cached by CDNs globally

## No-Technology Choices (Intentional Exclusions)

### No CSS Framework (Bootstrap, Tailwind, etc.)
**Reasoning**:
- Custom design better for personal branding
- Smaller CSS file without unused utilities
- Full control over styling
- Learning opportunity
- Better performance without framework overhead

### No JavaScript Framework (React, Vue, Angular)
**Reasoning**:
- Overkill for static portfolio site
- Faster loading without bundle size
- Simpler deployment and hosting
- No server-side rendering needed
- Easier maintenance
- Better SEO with static HTML

### No Build Tools (Webpack, Vite, etc.)
**Reasoning**:
- Simpler development workflow
- No compilation step required
- Instant preview of changes
- Easier for non-developers to update
- Zero-configuration approach
- Future-proof and dependency-free

### No CSS Preprocessor (SASS, LESS)
**Reasoning**:
- CSS Custom Properties provide theming
- Modern CSS has most needed features
- Additional build complexity not justified
- Easier for others to contribute
- Direct browser debugging

## Browser APIs Used

### Intersection Observer API
**Purpose**: Detecting element visibility for scroll animations
**Benefits**:
- Performance-optimized
- No scroll event listener overhead
- Built-in browser optimization
- Smooth animations with proper timing

### Local Storage API
**Purpose**: Persisting user theme preference
**Benefits**:
- No server required
- Instant loading of preferences
- Privacy-friendly
- Works offline

### Media Query API
**Purpose**: Detecting system color scheme preference
**Benefits**:
- Respects user OS settings
- Automatic theme detection
- Better user experience
- Standards-compliant

### RequestAnimationFrame
**Purpose**: Smooth animations and scroll handling
**Benefits**:
- 60fps performance
- Battery-efficient
- Syncs with browser refresh rate
- Prevents layout thrashing

## Development Tools

### Git Version Control
**Purpose**: Source code management
**Benefits**:
- Track changes over time
- Collaboration ready
- Deployment integration
- Backup and history

### Claude Code
**Purpose**: AI-assisted development
**Benefits**:
- Faster development
- Code review assistance
- Documentation generation
- Debugging help

### VS Code (Recommended)
**Purpose**: Code editor
**Extensions Used**:
- Live Server for local development
- Prettier for code formatting
- ESLint for code quality
- GitLens for Git integration

## Performance Technologies

### CSS GPU Acceleration
**Techniques**:
- `transform` for animations
- `will-change` for optimization
- `opacity` transitions
- `translate3d()` for hardware acceleration

### Critical CSS
**Approach**:
- Inline critical path CSS
- Non-blocking CSS loading
- Above-the-fold optimization
- Media query optimization

### Image Optimization
**Strategies**:
- External CDN for app icons
- Proper image sizing
- WebP format where supported
- Lazy loading implementation

## Accessibility Technologies

### ARIA (Accessible Rich Internet Applications)
**Implementation**:
- `aria-label` for icon buttons
- Semantic HTML structure
- Focus management
- Screen reader compatibility

### WCAG 2.1 Compliance
**Features**:
- Color contrast ratios
- Keyboard navigation
- Focus indicators
- Reduced motion support
- Screen reader friendly

## Security Technologies

### Content Security Policy (Ready)
**Preparation**:
- No inline scripts
- Trusted external domains
- HTTPS-ready structure
- Safe external links

### XSS Prevention
**Approach**:
- No user input processing
- Sanitized dynamic content
- Safe DOM manipulation
- Trusted sources only

## Deployment Technologies

### Static Site Hosting
**Options**:
- Netlify
- Vercel
- GitHub Pages
- Any static web server

**Benefits**:
- No server maintenance
- Global CDN distribution
- Instant deployments
- Free hosting options
- HTTPS included

### Progressive Web App Ready
**Technologies**:
- Service Worker ready
- Manifest file structure
- Offline capability
- App-like experience

## Future Technology Considerations

### TypeScript (Potential Upgrade)
**Benefits**:
- Type safety
- Better IDE support
- Self-documenting code
- Easier refactoring

### Web Components (Potential)
**Benefits**:
- True component encapsulation
- Framework-agnostic
- Reusable elements
- Modern standards

### CSS Modules (Potential)
**Benefits**:
- Scoped styles
- No class name conflicts
- Better organization
- Maintained specificity

## Technology Rationale Summary

The technology stack prioritizes:
1. **Performance**: Fast load times and smooth interactions
2. **Simplicity**: Easy to understand and maintain
3. **Accessibility**: Works for all users
4. **Future-Proof**: Based on web standards
5. **Cost**: Free and open-source
6. **Reliability**: No third-party dependencies
7. **Control**: Complete ownership of the code

This stack creates a professional, fast, and maintainable portfolio site that showcases development skills without unnecessary complexity.