# Ben 10 Portfolio - Specification

## Project Overview
- **Project Name:** Ben 10 Portfolio
- **Type:** Single-page interactive portfolio website
- **Core Functionality:** A visually striking portfolio with Ben 10 alien transformation theme, where navigation mimics the Omnitrix watch allowing users to "transform" between different sections
- **Target Users:** Recruiters, potential clients, collaborators

## UI/UX Specification

### Layout Structure
- **Hero Section:** Full-screen landing with Ben 10 inspired design, animated Omnitrix
- **About Section:** Profile card with alien glow effect
- **Skills Section:** Skill bars with transformation animation
- **Projects Section:** Card grid with hover effects
- **Contact Section:** Contact form with glowing inputs
- **Navigation:** Fixed Omnitrix-style circular navigation

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

#### Color Palette
- **Primary Green (Omnitrix):** #00FF41
- **Secondary Green:** #39FF14
- **Dark Background:** #0D0D0D
- **Card Background:** #1A1A1A
- **Text Primary:** #FFFFFF
- **Text Secondary:** #B0B0B0
- **Accent Cyan:** #00FFFF
- **Accent Orange:** #FF6B00

#### Typography
- **Headings:** 'Orbitron', sans-serif (sci-fi feel)
- **Body:** 'Rajdhani', sans-serif
- **Logo/Title:** Custom styled with glow

#### Visual Effects
- Neon glow effects on hover
- Scanline overlay for retro-tech feel
- Particle background animation
- Transformation effect when switching sections
- Pulsing Omnitrix navigation

### Components

1. **Omnitrix Navigation**
   - Circular dial with 5 alien icons
   - Rotates on click
   - Glowing ring effect
   - Transforms content on selection

2. **Hero Section**
   - Animated title with glitch effect
   - Floating alien symbols
   - "Activate Omnitrix" call-to-action

3. **About Card**
   - Profile image with rotating ring
   - Bio text with typewriter effect
   - Stats display (repos, followers, stars)

4. **Skill Bars**
   - Fill animation on view
   - Glowing progress indicators
   - Category groupings

5. **Project Cards**
   - 3D tilt effect on hover
   - Glow border animation
   - Tech stack tags

6. **Contact Form**
   - Floating label inputs
   - Neon border focus states
   - Submit button with pulse effect

## Functionality Specification

### Core Features
1. Omnitrix navigation - click alien icons to navigate sections
2. Smooth scroll transitions between sections
3. Typing animation for hero text
4. Skill bars animate when scrolled into view
5. Project cards have 3D tilt interaction
6. Contact form with validation
7. Particle background animation
8. Sound toggle (optional visual feedback)

### User Interactions
- Click Omnitrix segments to navigate
- Hover on projects for 3D effect
- Scroll to trigger animations
- Form validation on submit

### Data (from GitHub)
- Name: Balamurugan T
- Bio: Frontend Developer | Problem Solver | Tech Enthusiast
- Skills: JavaScript, Python, Java, React, Node.js, Flask, FastAPI, MongoDB, MySQL, Firebase, Docker
- 23 Repositories, 16 Followers, 4 Stars

## Acceptance Criteria
- [ ] Omnitrix navigation works and transforms between sections
- [ ] All sections render correctly
- [ ] Animations trigger on scroll
- [ ] Responsive on mobile/tablet/desktop
- [ ] Ben 10 theme is clearly visible (green, glow, alien aesthetic)
- [ ] Contact form validates inputs
- [ ] No console errors
