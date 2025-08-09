import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Calendar, GraduationCap, Briefcase, Code, Database, Server, Brain, Award } from 'lucide-react';
import profileImage from './assets/profile.jpg';
import ContactForm from './components/ContactForm';
import './App.css';

const App = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold"
            >
              Y S Puneeth
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              {['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <img
              src={profileImage}
              alt="Y S Puneeth"
              className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-primary/20"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Y S Puneeth
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Software Developer & Data Scientist
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Solving complex problems with code and data
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/Puneeth-Naidu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/y-s-puneeth-382260310?trk=contact-info"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:puneethharshithnaidu20@gmail.com"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              About Me
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm Y. S. Puneeth, a final-year Computer Science student at PES University, specializing in Artificial Intelligence and Machine Learning. With a strong academic foundation (GPA: 9.04/10) and hands-on experience in full-stack web development and AI research, I enjoy building intelligent systems that solve real-world problems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My interests lie at the intersection of software engineering and data science — from designing scalable microservices to developing deep learning models for computer vision tasks. I'm passionate about merging logic with learning, and always eager to explore new technologies that push boundaries.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary" size={20} />
                  <span>Bangalore, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary" size={20} />
                  <span>puneethharshithnaidu20@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary" size={20} />
                  <span>7483533581</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-primary" size={20} />
                  <span>PES University - Computer Science (AI & ML)</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Skills & Technologies
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div variants={fadeInUp} className="bg-card p-6 rounded-lg border">
                <div className="flex items-center mb-4">
                  <Code className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <div className="space-y-2">
                  {['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React'].map((skill) => (
                    <span key={skill} className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mr-2 mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-card p-6 rounded-lg border">
                <div className="flex items-center mb-4">
                  <Server className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <div className="space-y-2">
                  {['Node.js', 'Express.js', 'PHP', 'Flask', 'Python'].map((skill) => (
                    <span key={skill} className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mr-2 mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-card p-6 rounded-lg border">
                <div className="flex items-center mb-4">
                  <Database className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Database & DevOps</h3>
                </div>
                <div className="space-y-2">
                  {['MongoDB', 'MySQL', 'Docker', 'Docker Compose', 'Git', 'Kubernetes'].map((skill) => (
                    <span key={skill} className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mr-2 mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-card p-6 rounded-lg border">
                <div className="flex items-center mb-4">
                  <Brain className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-semibold">AI & ML</h3>
                </div>
                <div className="space-y-2">
                  {['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy'].map((skill) => (
                    <span key={skill} className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mr-2 mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="mt-12">
              <h3 className="text-2xl font-semibold text-center mb-8">Programming Languages</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['Python', 'C', 'C++', 'Java', 'JavaScript', 'SQL'].map((lang) => (
                  <span key={lang} className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Featured Projects
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SkillSwap Project */}
              <motion.div variants={fadeInUp} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">SkillSwap</h3>
                <p className="text-muted-foreground mb-4">
                  A peer-to-peer learning platform fostering collaborative learning. Users can share skills and learn from each other with 60+ unique skills shared and 150+ learning resources uploaded.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React.js', 'Node.js', 'MongoDB', 'JWT'].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Puneeth-Naidu/Skill-Swap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </motion.div>

              {/* Internship Tracker Project */}
              <motion.div variants={fadeInUp} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Student-Managed Internship Tracker</h3>
                <p className="text-muted-foreground mb-4">
                  A secure, full-stack web platform for students to log and manage internships with role-based access and dynamic dashboards for administrators.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Puneeth-Naidu/Intern-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </motion.div>

              {/* Microservices Travel App */}
              <motion.div variants={fadeInUp} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Cloud Microservices Travel App</h3>
                <p className="text-muted-foreground mb-4">
                  A scalable travel review platform using microservices architecture with Flask, incorporating both relational and NoSQL databases.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Flask', 'MySQL', 'MongoDB', 'Docker', 'JWT'].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Puneeth-Naidu/MicroServices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </motion.div>

              {/* Saukarya Project */}
              <motion.div variants={fadeInUp} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Saukarya</h3>
                <p className="text-muted-foreground mb-4">
                  A platform connecting farmers and consumers directly, eliminating intermediaries in the agricultural supply chain for fairer pricing.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['HTML', 'CSS', 'JavaScript', 'PHP', 'MongoDB'].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Puneeth-Naidu/Saukharya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </motion.div>

              {/* MOH Detection System */}
              <motion.div variants={fadeInUp} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">MOH Detection System</h3>
                <p className="text-muted-foreground mb-4">
                  An AI-driven system for simultaneous object classification, material detection, and height estimation using multi-task learning. Achieved 89% accuracy.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'PyTorch', 'OpenCV', 'Deep Learning'].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <span className="text-muted-foreground text-sm">Ongoing Project</span>
                </div>
              </motion.div>

              {/* IntoxiAI Project */}
              <motion.div variants={fadeInUp} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">IntoxiAI</h3>
                <p className="text-muted-foreground mb-4">
                  Deep learning system for detecting intoxication from facial images. Research project at RAPID Lab with 90% accuracy and ongoing journal publication.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Python', 'PyTorch', 'OpenCV', 'CNNs'].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Puneeth-Naidu/Intoxi_AI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Experience
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="bg-card p-8 rounded-lg border">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Data Science Intern</h3>
                  <p className="text-primary font-medium mb-2">RAPID Lab, PES University</p>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>June 2024 – July 2024</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Research and development lab focusing on innovative technology projects
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Designed and built a deep learning system (IntoxiAI) to identify intoxication in people from their facial images, achieving 90% accuracy on testing data.</li>
                    <li>• Helped write a research paper about IntoxiAI for submission to a scientific journal. Wrote project reports and gave presentations to explain results and deployment ideas.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Education & Certifications
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp} className="bg-card p-8 rounded-lg border">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">B. Tech in Computer Science - AI & ML</h3>
                    <p className="text-primary font-medium mb-2">PES University, Bangalore, India</p>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>Dec 2022 – June 2026</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="text-primary mr-2" size={16} />
                      <span className="font-medium">GPA: 9.04/10</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-card p-8 rounded-lg border">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• 100 Days Of Code: The Complete Python Pro Bootcamp</li>
                      <li>• The Complete 2024 Web Development Bootcamp</li>
                      <li>• Mastering Data Structures & Algorithms using C and C++</li>
                      <li>• Supervised Machine Learning: Regression And Classification</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Get In Touch
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:puneethharshithnaidu20@gmail.com" className="text-muted-foreground hover:text-primary">
                        puneethharshithnaidu20@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <span className="text-muted-foreground">7483533581</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <span className="text-muted-foreground">Bangalore, India</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-6 mt-8">
                  <a
                    href="https://github.com/Puneeth-Naidu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/y-s-puneeth-382260310?trk=contact-info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:puneethharshithnaidu20@gmail.com"
                    className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </motion.div>
              
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Y S Puneeth. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

