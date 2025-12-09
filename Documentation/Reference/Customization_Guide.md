# Customization Guide - Personalizing Your Portfolio

## Overview
This guide explains how to customize the visual appearance and styling of your portfolio website.

## Quick Customization (No CSS Knowledge Required)

### 1. Changing Theme Colors
Edit `css/styles.css` variables section:
```css
:root {
    --primary-color: #3498db;      /* Change main accent color */
    --secondary-color: #2c3e50;    /* Change text/dark elements */
    --background-color: #ffffff;   /* Page background */
    --text-color: #333333;         /* Main text color */
}
```

### 2. Updating Fonts
Replace in `css/styles.css`:
```css
/* Import new font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=FontName:wght@400;700&display=swap');

body {
    font-family: 'FontName', sans-serif;
}
```

### 3. Adjusting Section Spacing
Edit padding values in `css/styles.css`:
```css
section {
    padding: 80px 0;  /* Increase/decrease as needed */
}
```

## Advanced Customization (CSS Knowledge Required)

### 1. Custom Component Styling

#### Navigation Menu
```css
.navbar {
    background-color: #yourcolor;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.navbar a {
    color: #yourcolor;
    font-weight: 600;
}
```

#### Project Cards
```css
.project-card {
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
}
```

#### Buttons
```css
.btn-primary {
    background: linear-gradient(45deg, var(--primary-color), #yourcolor);
    border: none;
    border-radius: 25px;
    padding: 12px 30px;
}
```

### 2. Adding Custom Animations

#### Fade In Animation
```css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.fade-in {
    animation: fadeIn 1s ease-out;
}
```

#### Hover Effects
```css
.hover-grow:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease;
}
```

## Layout Modifications

### 1. Changing Page Width
```css
.container {
    max-width: 1200px;  /* Default: 1140px */
    margin: 0 auto;
}
```

### 2. Adjusting Grid Layouts
Projects grid in `css/styles.css`:
```css
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}
```

### 3. Custom Breakpoints
Add to `css/responsive.css`:
```css
@media (max-width: 600px) {
    .projects-grid {
        grid-template-columns: 1fr;
    }
}
```

## Theme Examples

### Dark Theme
Add to `css/styles.css`:
```css
[data-theme="dark"] {
    --background-color: #1a1a1a;
    --text-color: #f0f0f0;
    --secondary-color: #ffffff;
    --primary-color: #64b5f6;
}
```

### Minimal Theme
```css
.minimal {
    --primary-color: #000000;
    --secondary-color: #000000;
    --background-color: #ffffff;
    --text-color: #000000;
    font-family: 'Helvetica', sans-serif;
}
```

## Testing Your Changes

1. **Browser Developer Tools**
   - F12 or right-click → Inspect
   - Test changes in real-time
   - Use device emulation for responsive testing

2. **Cross-browser Testing**
   - Test in Chrome, Firefox, Safari, Edge
   - Check mobile versions

3. **Performance Check**
   - Use Lighthouse in Chrome DevTools
   - Aim for >90 performance score

## Best Practices

1. **Use CSS Variables**
   - Easy to update later
   - Consistent throughout site

2. **Keep It Simple**
   - Don't over-customize
   - Maintain good contrast ratios
   - Ensure readability

3. **Document Changes**
   - Note custom CSS in comments
   - Update documentation for major changes

## Getting Help
- Check `Lessons Learned.md` for known styling issues
- Create improvement roadmap item for complex changes
- Reference MDN Web Docs for CSS properties