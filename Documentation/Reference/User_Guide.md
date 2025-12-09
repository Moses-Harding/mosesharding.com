# User Guide - Managing Your Portfolio Content

## Overview
This guide helps you manage and update your portfolio website content without needing to edit code.

## Content Structure

### 1. Personal Information
Located in `js/config.js`:
```javascript
const config = {
    name: "Your Name",
    title: "Your Professional Title",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567"
}
```

### 2. About Section
Update your bio in `index.html`:
```html
<section id="about">
    <h2>About Me</h2>
    <p>Your professional story goes here...</p>
</section>
```

### 3. Projects Portfolio
Projects are defined in `js/config.js`:
```javascript
projects: [
    {
        title: "Project Name",
        description: "Brief description",
        image: "images/project.jpg",
        link: "https://github.com/username/repo",
        tags: ["HTML", "CSS", "JavaScript"]
    }
]
```

## Adding New Projects

1. **Prepare project image**
   - Add to `/images/projects/` folder
   - Recommended size: 800x600px
   - Format: JPG or PNG

2. **Update configuration**
   - Edit `js/config.js`
   - Add new project object to projects array
   - Include all required fields

3. **Test changes**
   - Open website in browser
   - Verify project appears correctly
   - Check all links work

## Updating Skills List

Skills are managed in `js/config.js`:
```javascript
skills: [
    "JavaScript",
    "React",
    "Node.js",
    // Add new skills here
]
```

## Social Media Links

Update in `js/config.js`:
```javascript
social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username"
}
```

## Best Practices

1. **Keep descriptions concise** - 2-3 sentences maximum
2. **Use consistent image sizes** for professional appearance
3. **Test all links** after updates
4. **Backup changes** before making updates
5. **Use version control** (git) for tracking changes

## Common Updates

### Updating Contact Information
1. Open `js/config.js`
2. Find contact object
3. Update email, phone, location
4. Save file

### Changing Theme Colors
See `Customization_Guide.md` for detailed instructions

### Adding New Sections
This requires HTML/CSS knowledge. Consider adding to roadmap as a feature request.

## Getting Help
- Check `System_Guide.md` for technical explanations
- Review `Lessons Learned.md` for known issues
- Create new feature request in roadmaps for additional functionality