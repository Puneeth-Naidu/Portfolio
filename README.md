# Y S Puneeth - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion, showcasing the work and skills of Y S Puneeth, a Software Developer and Data Scientist.

## 🌟 Features

- **Modern Design**: Clean, professional, and minimalist design
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Navigation**: Smooth scrolling between sections
- **Contact Form**: Integrated with EmailJS for functional contact form
- **Light Theme**: Professional light theme with excellent readability
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.1.0
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Contact Form**: EmailJS
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📁 Project Structure

```
puneeth-portfolio/
├── public/
├── src/
│   ├── assets/
│   │   └── profile.jpg          # Profile image
│   ├── components/
│   │   ├── ui/                  # UI components from shadcn/ui
│   │   └── ContactForm.jsx      # Contact form component
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions
│   ├── App.css                  # Global styles and theme
│   ├── App.jsx                  # Main application component
│   ├── index.css                # Base styles
│   └── main.jsx                 # Application entry point
├── components.json              # shadcn/ui configuration
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd puneeth-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm run dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Building for Production

```bash
pnpm run build
# or
npm run build
```

The built files will be in the `dist/` directory.

## 📧 Setting Up the Contact Form

The contact form uses EmailJS to send emails. To enable it:

1. **Create an EmailJS account**
   - Go to [emailjs.com](https://emailjs.com)
   - Sign up for a free account

2. **Create an email service**
   - Add your email service (Gmail, Outlook, etc.)
   - Note down the Service ID

3. **Create an email template**
   - Create a new template with the following variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_name}}` - Your name (Y S Puneeth)
   - Note down the Template ID

4. **Get your Public Key**
   - Go to Account > API Keys
   - Copy your Public Key

5. **Update the ContactForm component**
   - Open `src/components/ContactForm.jsx`
   - Replace the placeholder values:
     ```javascript
     const serviceId = 'YOUR_SERVICE_ID';        // Replace with your Service ID
     const templateId = 'YOUR_TEMPLATE_ID';      // Replace with your Template ID
     const publicKey = 'YOUR_PUBLIC_KEY';        // Replace with your Public Key
     ```

6. **Test the form**
   - Fill out the contact form on your website
   - Check if you receive the email

## 🎨 Customization

### Updating Personal Information

Edit the following sections in `src/App.jsx`:

- **Personal Details**: Update name, tagline, bio, location, email, phone
- **Skills**: Modify the skills arrays in each category
- **Projects**: Update project information, descriptions, and GitHub links
- **Experience**: Update work experience details
- **Education**: Update educational background and certifications
- **Social Links**: Update GitHub, LinkedIn, and other social media links

### Changing Colors and Styling

The color scheme is defined in `src/App.css`. The current theme uses:
- Light background with dark text
- Professional color palette
- Consistent spacing and typography

To customize colors, modify the CSS custom properties in the `:root` section of `App.css`.

### Adding New Sections

1. Create a new section in `src/App.jsx`
2. Add navigation link in the navigation bar
3. Implement smooth scrolling functionality
4. Add Framer Motion animations for consistency

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Link to your Git repository
   - Configure build settings (auto-detected)
   - Deploy

### Other Platforms

The portfolio can also be deployed to:
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Firebase Hosting**: Use Firebase CLI

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

If you'd like to contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Y S Puneeth**
- Email: puneethharshithnaidu20@gmail.com
- Phone: 7483533581
- Location: Bangalore, India
- GitHub: [Puneeth-Naidu](https://github.com/Puneeth-Naidu)
- LinkedIn: [Y S Puneeth](https://www.linkedin.com/in/y-s-puneeth-382260310?trk=contact-info)

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)
- Contact form powered by [EmailJS](https://emailjs.com/)

---

**Built with ❤️ by Y S Puneeth**

