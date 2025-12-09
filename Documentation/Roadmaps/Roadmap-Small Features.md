# Roadmap - Small Features

This roadmap tracks small feature additions to the portfolio website. Each feature adds NEW functionality and is tracked with a FEAT-### identifier.

## Active Features

### FEAT-001: Blog Section
**Status**: Pending
**Priority**: Medium
**Description**: Add a blog section to share thoughts, tutorials, and insights
**Implementation Considerations**:
- Markdown support for easy content creation
- Category/tag system for organization
- Search functionality
- RSS feed generation
- Comment system (optional)
- Social sharing buttons
- Reading time estimates

### FEAT-002: Newsletter Signup
**Status**: Pending
**Priority**: High
**Description**: Implement newsletter signup with email capture
**Implementation Considerations**:
- Integration with email service (Mailchimp, Substack, etc.)
- Simple form with validation
- Success/error state handling
- GDPR compliance checkbox
- Thank you confirmation page/modal

### FEAT-003: Testimonials/Recommendations Section
**Status**: Pending
**Priority**: Medium
**Description**: Add testimonials from colleagues, clients, or mentors
**Implementation Considerations**:
- Card-based layout with photo and quote
- Star rating or endorsement badges
- Source credibility (company/role)
- Carousel or static grid layout
- Link to full LinkedIn recommendation if available

### FEAT-004: Resume Download
**Status**: Pending
**Priority**: High
**Description**: Provide downloadable resume in multiple formats
**Implementation Considerations**:
- PDF version (primary)
- DOCX version (optional)
- Version control - update date displayed
- Download analytics tracking
- Print-friendly CSS version

### FEAT-005: Social Feed Integration
**Status**: Pending
**Priority**: Low
**Description**: Display recent activity from social profiles
**Implementation Considerations**:
- API integration (Twitter/X, GitHub, LinkedIn)
- Cache management for performance
- Privacy considerations
- Selective content filtering
- Fallback to static links if API limits reached

### FEAT-006: Contact Form
**Status**: Pending
**Priority**: High
**Description**: Replace email link with proper contact form
**Implementation Considerations**:
- Form validation (required fields, email format)
- Anti-spam protection (reCAPTCHA or simple honeypot)
- Email service integration (Formspree, Netlify Forms, etc.)
- File attachment option (resume submission)
- Auto-responder setup

### FEAT-007: Dark Mode Theme Variants
**Status**: Pending
**Priority**: Medium
**Description**: Offer multiple dark mode color schemes
**Implementation Considerations**:
- 2-3 theme options beyond default dark
- Smooth theme switching
- Theme preference persistence
- Consider color accessibility for each theme
- Custom accent colors for each theme

### FEAT-008: Loading Animations
**Status**: Pending
**Priority**: Low
**Description**: Add elegant loading animations for better UX
**Implementation Considerations**:
- Skeleton screens for content loading
- Progress indicators for portfolio items
- Page transition animations
- Performance impact assessment
- Accessibility (respect prefers-reduced-motion)

### FEAT-009: Project Showcase Filters
**Status**: Pending
**Priority**: Medium
**Description**: Add filtering system for portfolio projects
**Implementation Considerations**:
- Filter by technology, type, or category
- Animated transitions between filters
- URL state management for shareable filtered views
- Search functionality within projects
- "Show all" option

### FEAT-010: Interactive Timeline
**Status**: Pending
**Priority**: Medium
**Description**: Create an interactive timeline for career history
**Implementation Considerations**:
- Scroll-based or click-based navigation
- Milestone details in modal or expandable cards
- Company logos and duration badges
- Skills learned tag cloud per position
- Export/share timeline option

## How to Add New Features

1. Assign next FEAT-### number (increment from highest existing)
2. Fill in the feature details following the template above
3. Set initial status to "Pending"
4. Define priority (High/Medium/Low)
5. Add comprehensive implementation considerations
6. Update when status changes (In Progress, Completed, Blocked)

## Notes

- Features are considered "small" when they can be implemented in 1-2 weeks
- Each feature should be relatively independent of others
- When a feature is completed, move it to Change Log/Completed Features.md
- Complex features requiring multi-week implementation should be their own major roadmap