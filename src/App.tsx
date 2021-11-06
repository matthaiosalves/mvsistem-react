import React from 'react';
import './App.css';


function App() {
  return (
    <>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">

          <h1 className="logo me-auto"><a href="index.html">MVsistems</a></h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Início</a></li>
              <li><a className="nav-link scrollto" href="#about">Sobre</a></li>
              <li><a className="nav-link scrollto" href="#services">Serviços</a></li>
              <li><a className="nav-link scrollto" href="https://api.whatsapp.com/send?phone=5561985811224&text=Desejo%20saber%20mais%20sobre%20vossos%20servi%C3%A7os">Contato</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>

      <section id="hero" className="d-flex align-items-center">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>Melhores soluções para o seu negócio.</h1>
              <h2>Somos uma equipe de desenvolvedores que está disposta a tirar seu projeto do papel.</h2>
              <div className="d-flex justify-content-center justify-content-lg-center">
                <a href="#about" className="btn-get-started scrollto">Nos conheça</a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src="https://i.imgur.com/FBZ4jcb.png" className="img-fluid animated" alt="hero" />
            </div>
          </div>
        </div>

      </section>

      <main id="main">

        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Sobre nós</h2>
            </div>

            <div className="row content">
              <div className="col-lg-12">
                <p>
                  Somos uma empresa focada em desenvolvimento de sistemas (app) e sistemas web, garantindo uma boa manutenção e agilidade na entrega de deus serviços. Nós sempre prezamos em atender todos os pedidos de nossos clientes e também aplicar sugestões para um melhor desenvolvimento.
                </p>
                <div className="d-flex justify-content-center">
                  <a href="#why-us" className="btn-learn-more">Saiba mais</a>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="why-us" className="why-us section-bg">
          <div className="container-fluid" data-aos="fade-up">

            <div className="row">

              <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                <div className="content">
                  <h3>Perguntas Frequentes <strong>FAQ</strong></h3>
                </div>

                <div className="accordion-list">
                  <ul>
                    <li>
                      <a href="/" data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> A MVsistems trabalha com quais linguagens de programação? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                      <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                        <p>
                          Atualmente trabalhamos com JavaScript e PHP.
                        </p>
                      </div>
                    </li>

                    <li>
                      <a href="/" data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Utilizam algum framework? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                      <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                        <p>
                          Sim, utilizamos. Tais como, React, Next, Gatsby, Node e Laravel.
                        </p>
                      </div>
                    </li>

                    <li>
                      <a href="/" data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> A MVsistems trabalha com automações e criação de BOT? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                      <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                        <p>
                          Sim, fazemos também automações com BOT.
                        </p>
                      </div>
                    </li>

                  </ul>
                </div>

              </div>

              <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img gambi" data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
            </div>

          </div>
        </section>

        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Serviços</h2>
            </div>

            <div className="row">
              <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box">
                  <div className="icon"><i className="bx bxl-dribbble"></i></div>
                  <h4><a href="/">Desenvolvimento Web</a></h4>
                  <p>Desenvolvimento de sistemas web.</p>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-file"></i></div>
                  <h4><a href="/">Desenvolvimento de Aplicativos</a></h4>
                  <p>Desenvolvimento de sistemas de aplicativos (Mobile ou GUI).</p>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-tachometer"></i></div>
                  <h4><a href="/">Web Design</a></h4>
                  <p>Desenvolvimento de prototipação de sistemas e diagramação.</p>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-layer"></i></div>
                  <h4><a href="/">Painéis Administrativos</a></h4>
                  <p>Desenvolvimento de painéis administrativos e análise dados.</p>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      <footer id="footer">

        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright <strong><span>MVsistems</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            <a href="/">MVsistems</a>
          </div>
        </div>
      </footer>

      <div id="preloader"></div>
      <a href="/" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  );
}

export default App;
