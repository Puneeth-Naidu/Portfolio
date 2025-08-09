import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Calendar, GraduationCap, Briefcase, Code, Database, Brain, Server, Award } from 'lucide-react';
import ContactForm from './components/ContactForm';
import ParticleBackground from './components/ParticleBackground';
import FloatingGeometry from './components/FloatingGeometry';
import ThemeToggle from './components/ThemeToggle';
import './App.css';
import profileImg from './assets/profile.jpg';
import dataFlowImg from './assets/data-flow-divider.png';


function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerTextVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen digital-bg font-inter">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-electric-gradient z-50"
        style={{ scaleX }}
      />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-rajdhani font-bold text-primary"
              whileHover={{ scale: 1.05 }}
            >
              Y S Puneeth
            </motion.h1>
            <div className="hidden md:flex space-x-6">
              {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    activeSection === item.toLowerCase()
                      ? 'bg-primary text-primary-foreground glow-effect'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <ParticleBackground particleCount={30} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div 
              className="lg:w-1/2 mb-8 lg:mb-0"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="w-48 h-48 mx-auto lg:mx-0 mb-8 rounded-full overflow-hidden border-4 border-primary glow-effect"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <img 
                  src={profileImg}
                  alt="Y S Puneeth" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div variants={staggerTextVariants} initial="hidden" animate="visible">
                <motion.h1 className="text-5xl md:text-7xl font-rajdhani font-bold mb-4 text-glow">
                  {"Y S Puneeth".split("").map((letter, index) => (
                    <motion.span key={index} variants={letterVariants} className="inline-block">
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.h1>
              </motion.div>

              <motion.h2 
                className="text-xl md:text-2xl text-muted-foreground mb-6 font-space-mono"
                variants={textRevealVariants}
              >
                Software Developer & Data Scientist
              </motion.h2>

              <motion.p 
                className="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 text-accent font-medium"
                variants={textRevealVariants}
              >
                Solving complex problems with code and data
              </motion.p>

              <motion.div 
                className="flex justify-center lg:justify-start space-x-6"
                variants={itemVariants}
              >
                <motion.a
                  href="https://github.com/Puneeth-Naidu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 glow-effect"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-6 h-6 text-primary" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/y-s-puneeth-382260310?trk=contact-info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 glow-effect"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-6 h-6 text-primary" />
                </motion.a>
                <motion.a
                  href="mailto:puneethharshithnaidu20@gmail.com"
                  className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 glow-effect"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-6 h-6 text-primary" />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <FloatingGeometry className="animate-float" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-24 flex items-center justify-center">
        <img 
          src={dataFlowImg} 
          alt="Data Flow" 
          className="w-full max-w-4xl opacity-60"
        />
      </div>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-20 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-rajdhani font-bold text-center mb-16 text-glow"
            variants={textRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed">
                I'm Y. S. Puneeth, a final-year Computer Science student at PES University, specializing in Artificial Intelligence and Machine Learning. With a strong academic foundation (GPA: 9.04/10) and hands-on experience in full-stack web development and AI research, I enjoy building intelligent systems that solve real-world problems.
              </p>
              <p className="text-lg leading-relaxed">
                My interests lie at the intersection of software engineering and data science — from designing scalable microservices to developing deep learning models for computer vision tasks. I'm passionate about merging logic with learning, and always eager to explore new technologies that push boundaries.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.div 
                  className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border glow-effect"
                  whileHover={{ scale: 1.02 }}
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Bangalore, India</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border glow-effect"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm">puneethharshithnaidu20@gmail.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border glow-effect"
                  whileHover={{ scale: 1.02 }}
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>7483533581</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border glow-effect"
                  whileHover={{ scale: 1.02 }}
                >
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>PES University</span>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img 
                src="/src/assets/neural-network.png" 
                alt="Neural Network" 
                className="w-full max-w-md opacity-80 animate-pulse-glow"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="py-20 animated-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-rajdhani font-bold text-center mb-16 text-white"
            variants={textRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Frontend",
                skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"]
              },
              {
                icon: <Server className="w-8 h-8" />,
                title: "Backend",
                skills: ["Node.js", "Express.js", "PHP", "Flask", "Python"]
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Database & DevOps",
                skills: ["MongoDB", "MySQL", "Docker", "Git", "Kubernetes"]
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI & ML",
                skills: ["PyTorch", "TensorFlow", "OpenCV", "Pandas", "NumPy"]
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 glow-effect"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-electric-teal-400 mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-rajdhani font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(20, 184, 166, 0.3)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-rajdhani font-semibold mb-6 text-white">Programming Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Python", "C", "C++", "Java", "JavaScript", "SQL"].map((lang) => (
                <motion.span
                  key={lang}
                  className="bg-digital-blue-800/50 text-white px-6 py-3 rounded-full text-lg font-space-mono border border-electric-teal-400/30"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(20, 184, 166, 0.2)",
                    borderColor: "rgba(20, 184, 166, 0.8)"
                  }}
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-rajdhani font-bold text-center mb-16 text-glow"
            variants={textRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SkillSwap",
                description: "A peer-to-peer learning platform fostering collaborative learning by allowing users to share skills and learn from each other.",
                tech: ["React.js", "Node.js", "MongoDB", "JWT"],
                github: "https://github.com/Puneeth-Naidu/Skill-Swap",
                status: "Deployed"
              },
              {
                title: "Student-Managed Internship Tracker",
                description: "A secure, full-stack web platform for students to log and manage their internships with role-based access control.",
                tech: ["PHP", "MySQL", "HTML", "CSS"],
                github: "https://github.com/Puneeth-Naidu/Intern-System",
                status: "Complete"
              },
              {
                title: "Cloud Microservices Travel App",
                description: "A scalable travel platform using microservices architecture for hotel reviews and loyalty programs.",
                tech: ["Flask", "Docker", "MongoDB", "MySQL"],
                github: "https://github.com/Puneeth-Naidu/MicroServices",
                status: "Complete"
              },
              {
                title: "Saukarya",
                description: "A digital platform connecting farmers directly with consumers, eliminating intermediaries in agricultural supply chain.",
                tech: ["PHP", "MongoDB", "Bootstrap", "JavaScript"],
                github: "https://github.com/Puneeth-Naidu/Saukharya",
                status: "Complete"
              },
              {
                title: "MOH Detection System",
                description: "AI-driven system for simultaneous object classification, material detection, and height estimation using multi-task learning.",
                tech: ["Python", "PyTorch", "OpenCV", "COCO"],
                github: "#",
                status: "Ongoing"
              },
              {
                title: "IntoxiAI",
                description: "Deep learning system for detecting intoxication from facial images with 90% accuracy, part of research at RAPID Lab.",
                tech: ["Python", "PyTorch", "OpenCV", "CNNs"],
                github: "https://github.com/Puneeth-Naidu/Intoxi_AI",
                status: "Research"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 glow-effect group"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-rajdhani font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Deployed' ? 'bg-green-100 text-green-800' :
                    project.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-800' :
                    project.status === 'Research' ? 'bg-purple-100 text-purple-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary hover:text-accent transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                  <motion.button
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience" 
        className="py-20 bg-muted/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-rajdhani font-bold text-center mb-16 text-glow"
            variants={textRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          
          <motion.div
            className="max-w-4xl mx-auto"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-xl p-8 glow-effect">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-rajdhani font-semibold">Data Science Intern</h3>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>June 2024 – July 2024</span>
                    </div>
                  </div>
                  <p className="text-lg text-primary mb-4">RAPID Lab, PES University</p>
                  <p className="text-muted-foreground mb-4">Research and development lab focusing on innovative technology projects</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Designed and built a deep learning system (IntoxiAI) to identify intoxication in people from their facial images, achieving 90% accuracy on testing data.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Helped write a research paper about IntoxiAI for submission to a scientific journal. Wrote project reports and gave presentations to explain results and deployment ideas.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        id="education" 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-rajdhani font-bold text-center mb-16 text-glow"
            variants={textRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              className="bg-card border border-border rounded-xl p-8 glow-effect"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-rajdhani font-semibold">B. Tech in Computer Science - AI & ML</h3>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Dec 2022 – June 2026</span>
                    </div>
                  </div>
                  <p className="text-lg text-primary mb-2">PES University, Bangalore, India</p>
                  <div className="flex items-center mb-4">
                    <Award className="w-5 h-5 text-accent mr-2" />
                    <span className="text-lg font-semibold text-accent">GPA: 9.04/10</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-card border border-border rounded-xl p-8 glow-effect"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-rajdhani font-semibold mb-6">Certifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "100 Days Of Code: The Complete Python Pro Bootcamp",
                  "The Complete 2024 Web Development Bootcamp",
                  "Mastering Data Structures & Algorithms using C and C++",
                  "Supervised Machine Learning: Regression And Classification"
                ].map((cert, index) => (
                  <motion.div
                    key={cert}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50"
                    whileHover={{ scale: 1.02, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                  >
                    <Award className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20 animated-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-rajdhani font-bold text-center mb-16 text-white"
            variants={textRevealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 glow-effect"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Y S Puneeth. Built with ❤️ using React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

