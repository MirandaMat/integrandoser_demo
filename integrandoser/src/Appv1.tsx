import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';

import ServicesCarousel from './ServicesCarousel';
import Terapeutas from './Terapeutas';

// Icons
import { FiUser, FiHome } from 'react-icons/fi';
import { LuHeartHandshake } from "react-icons/lu";

const heroVideoPath = '/assets/video_hero.mov';



function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        
        {/* Navbar Minimalista */}
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="navbar-container">
            <a href="#home" className="navbar-logo">IntegrandoSer</a>
            <div 
              className={`menu-icon ${menuOpen ? 'active' : ''}`} 
              onClick={toggleMenu}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
              <li className="nav-item"><a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li className="nav-item"><a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>Sobre</a></li>
              <li className="nav-item"><a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>Serviços</a></li>
              <li className="nav-item"><a href="#portfolio" className="nav-link" onClick={() => setMenuOpen(false)}>Terapeutas</a></li>
              <li className="nav-item"><a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>Blog</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contato</a></li>
            </ul>
          </div>
        </nav>
        
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <video className="hero-video-bg" autoPlay loop muted playsInline>
            <source src={heroVideoPath} type="video/mp4" />
            {/* Fallback para navegadores que não suportam vídeo */}
            Seu navegador não suporta o elemento de vídeo.
          </video>
        
          {/* Sobreposição para legibilidade */}
          <div className="hero-overlay"></div>
          {/* Conteúdo do Hero */}
          <div className="hero-content">
            <h1 className="hero-title">Integrando sua vida ao equilíbrio de uma mente saudável</h1>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Converse concosco</a>
              <a href="#portfolio" className="btn btn-outline">Ver trabalhos</a>
            </div>
          </div>
          <div className="hero-scroll-indicator"></div>
        </section>
        
        {/* Sobre */}
        <section id="about" className="section-padding about-wrapper">
          <h2 className="section-title">Nossa Essência</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                O IntegrandoSer nasceu do sonho da Analista Junguiana Fernanda Oliveira, 
                que idealizou um espaço onde cada indivíduo pudesse encontrar o suporte 
                terapêutico mais alinhado às suas necessidades e singularidades.
                Inspirada por sua experiência clínica e pelo desejo de tornar a 
                terapia mais acessível e humanizada, Fernanda criou um projeto 
                inovador que conecta pacientes ao terapeuta ideal com base em um 
                perfil cuidadosamente analisado. Acreditamos que a relação entre
                paciente e terapeuta é essencial para o êxito do processo de 
                autoconhecimento, buscando sempre um encaixe assertivo e 
                respeitando a evolução de cada paciente. Nosso compromisso é 
                transformar vidas com acolhimento, escuta e integração entre mente, 
                corpo e alma.
              </p>
            </div>
          </div>
          {/* Features */}
          <div className="about-features">
            <div className="feature-slider">
              <div className="feature-wrapper">
                <div className="feature-block">
                  <div className="feature-icon">
                    <FiUser size={40} /> 
                  </div>
                  <span>Apoio Personalizado</span>
                  <p className="separator">Oferecemos suporte terapêutico alinhado às necessidades e singularidades de cada indivíduo em sua jornada.</p>
                </div>

                <div className="feature-block">
                  <div className="feature-icon">
                    <LuHeartHandshake size={40} /> 
                  </div>
                  <span>Encontro Ideal</span>
                  <p className="separator">Facilitamos a conexão entre pacientes e terapeutas, assegurando uma relação que promove o sucesso terapêutico.</p>
                </div>

                <div className="feature-block">
                  <div className="feature-icon">
                    <FiHome size={40} /> 
                  </div>
                  <span>Ambiente Acolhedor</span>
                  <p className="separator">Promovemos um ambiente acolhedor e acessível, onde a terapia se torna uma experiência transformadora.</p>
                </div>

              </div>
            </div>
          </div>
        </section>

        
        {/* Serviços */}
        <section id="services" className="section-padding light-bg">
          <h2 className="section-title">Nossos Serviços</h2>
          <ServicesCarousel />
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="#" className="service-btn" style={{ display: 'inline-block', marginTop: '20px' }}>
              Saiba Mais
            </a>
          </div>
        </section>
        
        {/* Terapeuta */}
        <section id="portfolio" className="section-padding therapists-section">
          <div className="therapists-container">
            <div className="therapists-bg-image"></div>
            <div className="therapists-content">
              <h2 className="section-therapists-title">Nossos Terapeutas</h2>
              <div className="therapists-text-box">
                <p>
                  Nossa equipe é composta por terapeutas altamente qualificados e experientes, 
                  cada um especializado em diferentes abordagens terapêuticas. Desde psicólogos 
                  clínicos até analistas junguianos, todos compartilham o compromisso com o seu 
                  bem-estar emocional e crescimento pessoal.
                </p>
                <p>
                  Conheça nossos profissionais e encontre aquele com quem você mais se identifica 
                  para iniciar sua jornada de autoconhecimento e cura.
                </p>
                {/*<a href="./Terapeutas" className="btn btn-primary">Conheça Todos</a> */}
                <Link to="/terapeutas" className="btn btn-primary">
                  Conheça Todos
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* Blog */}

        
        {/* Depoimentos */}
        <section id="testimonials" className="section-padding light-bg">
          <h2 className="section-title">O que dizem sobre nós</h2>
          <div className="testimonial-slider">
            {Array(3).fill(0).map((_, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <p>"
                    "</p>
                </div>
                <div className="testimonial-author">
                  <img src="https://via.placeholder.com/80x80" alt="Cliente" />
                  <div>
                    <h4>Nome do Cliente</h4>
                    <p>...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Contato */}
        <section id="contact" className="section-padding">
          <h2 className="section-title">Vamos conversar</h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Informações de Contato</h3>
              <p><strong>Email:</strong> contato@integrandoser.com</p>
              <p><strong>Telefone:</strong> (11) 98765-4321</p>
              <p><strong>Endereço:</strong> São Paulo, Brasil</p>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Seu nome" required />
              <input type="email" placeholder="Seu email" required />
              <textarea placeholder="Sua mensagem" rows={5} required></textarea>
              <button type="submit" className="btn btn-primary">Enviar mensagem</button>
            </form>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">IntegrandoSer</div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#">Login</a>
            </div>
            <div className="footer-social">
              {['instagram', 'linkedin'].map((social) => (
                <a key={social} href={`https://${social}.com`} target="_blank" rel="noopener noreferrer">
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} IntegrandoSer. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;