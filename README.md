# Modern Portfolio Website

A stunning, fully responsive portfolio website built with modern web technologies featuring glassmorphism design, smooth animations, and interactive elements.

## 🌟 Features

### Design & UI
- **Glassmorphism Design**: Modern frosted glass effect with backdrop blur
- **Gradient Accents**: Vibrant cyan and purple color schemes
- **Smooth Animations**: CSS transitions and keyframe animations throughout
- **Responsive Layout**: Fully optimized for all device sizes (desktop, tablet, mobile)
- **Sticky Navigation**: Header stays visible while scrolling
- **Mobile Menu**: Hamburger menu for mobile devices

### Sections

#### 🏠 Home
- Dynamic typing animation showing multiple roles
- Professional introduction with call-to-action buttons
- Social media links with hover effects
- Animated profile image with glow effect

#### 💼 Services
- 4 service cards with glassmorphism styling
- Hover animations and icon effects
- Grid layout with responsive columns
- Services include: Web Development, Cloud Services, Data Analysis, Graphic Design

#### 📚 Resume
- **3-Tab System**: Education, Skills, About Me
- **Education Timeline**: 4 educational milestones with descriptions
- **Skills Showcase**: 16 technology icons (HTML, CSS, JS, React, Node.js, Python, etc.)
- **About Section**: 12 information cards with personal details
- Smooth tab switching with active states

#### 🎨 Portfolio
- 6 project showcases with filter system
- **Filter Categories**: All, Web Design, Cloud Computing, Graphic Design
- **Project 2 Image Slider**: 
  - 8 images with smooth transitions
  - Previous/Next navigation buttons
  - Dot indicators for slide position
  - Auto-slide every 5 seconds
- Split-view layout with images and descriptions
- Live preview and source code links

#### 📧 Contact
- **Contact Information Cards**: Phone, Email, Address with icons
- **Social Media Links**: LinkedIn, GitHub, Instagram, Twitter
- **Contact Form** with validation:
  - Name, Email, Phone, Subject, Message fields
  - Real-time validation (email format, required fields, message length)
  - Success/Error message display
  - Loading state during submission
  - Auto-reset after successful submission

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: 
  - CSS Custom Properties (variables)
  - Flexbox & Grid layouts
  - Backdrop-filter for glassmorphism
  - Keyframe animations
  - Media queries for responsiveness
- **JavaScript (Vanilla ES6)**:
  - DOM manipulation
  - Event listeners
  - Form validation with regex
  - Tab switching functionality
  - Portfolio filtering system
  - Image slider with auto-play
  - Smooth scrolling
  - Intersection Observer for scroll animations
- **Boxicons**: Icon library (v2.1.4)
- **Google Fonts**: Poppins font family

## 📁 Project Structure

```
New portfolio/
├── Home.html          # Main HTML file with all sections
├── styles.css         # Complete stylesheet with modern design
├── script.js          # All JavaScript functionality
└── README.md          # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SamithThamel/New-portfolio.git
   ```

2. **Navigate to the project folder**
   ```bash
   cd "New portfolio"
   ```

3. **Open in browser**
   - Double-click `Home.html`, or
   - Right-click `Home.html` → Open with → Your browser, or
   - Use a local server (optional):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

4. **View the website**
   - Direct file: Opens automatically
   - Local server: Navigate to `http://localhost:8000`

## 🎨 Color Scheme

```css
--bg-color: #0a1929 to #1a2744 (Dark blue gradient)
--main-color: #00d9ff (Cyan)
--secondary-color: #667eea (Purple)
--white-color: #ffffff
--text-color: rgba(255, 255, 255, 0.8)
--accent-gradient: linear-gradient(135deg, #667eea 0%, #00d9ff 100%)
--card-bg: rgba(255, 255, 255, 0.05)
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 991px - 768px
- **Mobile**: 767px - 450px
- **Small Mobile**: Below 450px

## ✨ Key Features Explained

### Typing Animation
The home section features a dynamic typing effect that cycles through multiple roles:
- Web Designer
- Full Stack Developer
- Cloud Engineer
- Graphic Designer

### Form Validation
Contact form includes comprehensive validation:
- Required field checking
- Email format validation (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- Phone number format validation
- Minimum message length (10 characters)
- Visual feedback with success/error states

### Image Slider
Advanced slider functionality with:
- Manual navigation (prev/next buttons)
- Dot indicators
- Auto-slide with 5-second intervals
- Smooth fade transitions
- Pause on interaction

### Portfolio Filter
Click-to-filter system that shows/hides projects based on category with smooth animations.

## 🔧 Customization

### Updating Personal Information

1. **Contact Details** (Home.html, Contact section):
   ```html
   <p>+94 76 479 4730</p>
   <p>samith@example.com</p>
   ```

2. **Social Media Links** (Home.html):
   ```html
   <a href="your-linkedin-url"><i class='bx bxl-linkedin'></i></a>
   ```

3. **Color Theme** (styles.css):
   ```css
   :root {
       --main-color: #yourcolor;
   }
   ```

### Adding Projects

Add to the portfolio section in `Home.html`:
```html
<div class="portfolio-box" data-category="web">
    <!-- Your project content -->
</div>
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Samith Thamel**
- GitHub: [@SamithThamel](https://github.com/SamithThamel)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/SamithThamel/New-portfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

## 📝 Changelog

### Version 1.0.0 (November 2025)
- Initial release with complete portfolio sections
- Modern glassmorphism design
- Fully responsive layout
- Interactive features (tabs, filters, sliders)
- Form validation
- Smooth animations throughout

---

**Built with ❤️ using HTML, CSS, and JavaScript**
