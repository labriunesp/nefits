import React from "react";
import clsx from "clsx";
/* import Layout from "@theme/Layout"; */
import LanguageSelector from "../../components/LanguageSelector";
import Translator from "../../components/i18n/translator";
import styles from "./styles.module.css";

const intro = [
    {
        imgBanner: "/images/logo-banner.png",
        link1: "/",
        link2: "/sobre",
        link3: "/equipe",
        link4: "/noticias",
        link6: "/publicacoes",
        link7: "/videos"
    }
]

const rodape = [
  {
    icon1: "/images/facebook_rodape2.svg",
    icon2: "/images/instagram_rodape2.svg",
    icon3: "/images/linkedin_rodape2.svg",
    icon4: "/images/youtube_rodape.svg",
    link1: "#",
    link2: "https://www.instagram.com/nefits.unesp?igsh=MTQxcXhiYjd5N2R1",
    link3: "#",
    link4: "https://www.youtube.com/@nefits8028",
    logo1: "/images/logos_rodape.svg",
  }
];

const fapesp = [
  {
    logo: "/images/fapesp_logo.svg"
  }
]

const primeiroContainer = [
  {
    titulo: "Projetos",
    texto: (
      <>
      </>
    )
  }
]

const abas = [
  {
    titulo1: "Liberdades e opressões",
    subtitulo1: "A interseccionalidade como crítica do neoliberalismo",
    autor1: "Ana Júlia Diniz Neves do Lago",
    ano1: "2023-2024",
    link1: "/arquivos/Ana_Julia_Diniz-Projeto_FAPESP.pdf",

    titulo2: "A relação entre ideologia, propriedade e desigualdade na obra Capital e Ideologia de Thomas Piketty",
    autor2: "Eduarda Pereira Pires Barboza",
    ano2: "2023-2024",
    link2: "/arquivos/2023_2024-Eduarda_Barboza_Projeto_PIBIC.docx",

    titulo3: "Pobreza e dever moral na Metafísica dos Costumes de Kant",
    autor3: "Julia de Andrade Fernandes Francisco",
    ano3: "2023-2024",
    link3: "/arquivos/2023_2024-Julia_Andrade-Projeto_PIBIC.pdf",

    titulo5: "Entendendo o Feminismo Islâmico",
    autor5: "Bianca Regina Poltronieri",
    subtitulo3: "Uma Análise sobre os Desafios que Obstam ente Movimento Político-Religioso Transnacional",
    ano10: "2022-2023",
    link5: "/arquivos/Feminismo_Islamico--Margot_Badran-Projeto_PIBIC.docx",


    t1: "Religião, Política e Retórica",
    s1: "Contornos da Relação entre Fé e Razão no Estado Civil de Thomas Hobbes.",
    a1: "Vinícius Antonio Ramos Zecca",
    ano4: "2020-2021",
    l1: "/arquivos/Vinicius_Antonio_Ramos_Zecca-Projeto_FAPESP.pdf",

    t2: "A erradicação da pobreza extrema através da reforma das instituições compartilhadas proposta por Thomas Pogge",
    a2: "Matheus de Vilhena Moraes",
    ano5: "2022-2023",
    l2: "/arquivos/MATHEUS_VILHENA-Projeto_FAPESP.docx",

    t3: "Alienação de Negras e Negros em Achille Mbembe",
    a3: "Matheus Sena Asevedo Campanhã",
    ano6: "2022-2023",
    l3: "/arquivos/Matheus_Sena-Projeto_FAPESP.pdf",

    t4: "Critério de Justiça Universal, Dever Negativo e Dever Positivo de Justiça",
    a4: "Matheus de Vilhena Moraes",
    ano7: "2022-2023",
    l4: "/arquivos/2022-Matheus_de_Vilhena_Moraes-PROJETO_BEPE.docx",

    t5: "Subjetividade e Opressão",
    s2: "Um Recorte de Gênero no Neoliberalismo",
    a5: "Ana Júlia Diniz Neves do Lago",
    ano8: "2023-2024",
    l5: "/arquivos/2023-Ana_Julia-Projeto_BEPE.pdf",

    t6: "O conceito de interseccionalidade e seu uso para análise da justiça social nas políticas globais",
    a6: "Ana Júlia Diniz Neves do Lago",
    ano11: "2021-2022",
    l6: "/arquivos/Interseccionalidade--Silma_Bilge_e_Patricia_Hill_Collins-Projeto_PIBIC.pdf",

    t7: "Pobreza, funcionamentos [functionings] e capacidades [capabilities] na obra Desigualdade Reexaminada de Amartya Sen",
    a7: "Guilherme Vicente Moura",
    ano12: "2021-2022",
    l7: "/arquivos/Amartya_Sen--Pobreza_functionings_e_capabilities-Projeto_PIBIC.pdf",

    t8: "Alienação De Negras E Negros Em Achille Mbembe",
    a8: "Matheus Sena Asevedo Campanhã",
    ano13: "2021-2022",
    l8: "/arquivos/Achille_Mbembe--Alienacao_escravidao_colonizacao_e_apartheid-Projeto_PIBIC.pdf",
  },
]

function Abas({titulo1, titulo2, titulo3, titulo4, titulo5, t1, t2, t3, t4, t5, t6, t7, t8, subtitulo1, subtitulo2, subtitulo3, s1, s2, ano1, ano2, ano3, ano4, ano5, ano6, 
  ano7, ano8, ano9, ano10, ano11, ano12, ano13, autor1, autor2, autor3, autor4, autor5, a1, a2, a3, a4, a5, a6, a7, a8, link1, link2, link3, link4, link5, l1, l2, l3, l4, l5, 
  l6, l7, l8}){
  return(
    <div class="row justify-content-center">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="andamento-tab" data-bs-toggle="tab" data-bs-target="#andamento-tab-pane" type="button" role="tab" aria-controls="andamento-tab-pane" aria-selected="true">Projetos em Andamento</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="concluidos-tab" data-bs-toggle="tab" data-bs-target="#concluidos-tab-pane" type="button" role="tab" aria-controls="concluidos-tab-pane" aria-selected="false">Projetos Concluídos</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        
        <div class="tab-pane fade show active" id="andamento-tab-pane" role="tabpanel" aria-labelledby="andamento-tab" tabindex="0">
          <div class="row justify-content-center">
            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo1}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo1}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor1} • {ano1}</p>
                    <a href={link1} target="_blank" className={clsx(styles.btnUm)}>Visualizar</a>
                  </div>
                </div>
            </div> 

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo2}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor2} • {ano2}</p>
                    <a href={link2} target="_blank" className={clsx(styles.btnUm)}>Visualizar</a>
                  </div>
                </div>
            </div> 

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo3}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor3} • {ano3}</p>
                    <a href={link3} target="_blank" className={clsx(styles.btnUm)}>Visualizar</a>
                  </div>
                </div>
            </div> 
          </div>
        </div>
        
        <div class="tab-pane fade" id="concluidos-tab-pane" role="tabpanel" aria-labelledby="concluidos-tab" tabindex="0">
          <div class="row justify-content-center">
            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t1}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{s1}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a1} • {ano4}</p>
                    <a href={l1} target="_blank" className={clsx(styles.btnUm)}>Visualizar</a>
                  </div>
                </div>
            </div> 

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t2}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a2} • {ano5}</p>
                    <a href={l2} target="_blank" className={clsx(styles.btnUm)}>Visualizar</a>
                  </div>
                </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t3}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a3} • {ano6}</p>
                    <a href={l3} target="_blank" className={clsx(styles.btnUm)}>Visualizar</a>
                  </div>
                </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t4}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a4} • {ano7}</p>
                    <a href={l4} target="_blank" className={clsx(styles.btnUm)}>Visualizar</a>
                  </div>
                </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t5}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{s2}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a5} • {ano8}</p>
                    <a href={l5} target="_blank" className={clsx(styles.btnUm)}>Visualizar</a>
                  </div>
                </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t6}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a6} • {ano11}</p>
                    <a href={l6} target="_blank" className={clsx(styles.btnUm)}>Visualizar</a>
                  </div>
                </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t7}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a7} • {ano12}</p>
                    <a href={l7} target="_blank" className={clsx(styles.btnUm)}>Visualizar</a>
                  </div>
                </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{t8}</h3>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{a8} • {ano13}</p>
                    <a href={l8} target="_blank" className={clsx(styles.btnUm)}>Visualizar</a>
                  </div>
                </div>
            </div>

            <div className={clsx(styles.cardProjetos, "col-12 col-xl-3 p-3 gy-3 mx-3")}>
                <div class="row">
                  <div class="col-12">
                    <h3 className={clsx(styles.cardTitulo, "fw-bold")}>{titulo5}</h3>
                    <p className={clsx(styles.cardSubtitulo, "fst-italic")}>{subtitulo3}</p>
                    <p className={clsx(styles.cardTexto, "fw-bold")}>{autor5} • {ano10}</p>
                    <a href={link5} target="_blank" className={clsx(styles.btnUm)}>Visualizar</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PrimeiroContainer({titulo, texto}){
  return(
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <h1 className={clsx(styles.titulo)}><Translator path="5.publicacoes" /></h1>
          <p className={clsx(styles.texto)}>{texto}</p>
        </div>
      </div>
    </div>
  )
}

function Fapesp({logo}){
  return(
    <div class="container rodape2">
      <div class="row d-flex">
        <div class="col-12 d-flex align-items-center text-start justify-content-center">
          <div class="row">
            <div class="col-1 d-flex align-items-center">
              <img className={clsx(styles.logoRodape, "img-fluid")} src={logo} alt="Logo" />
            </div>
            <div class="col-11 d-flex align-items-center gx-2 gy-4 text-wrap">
              <p className={clsx(styles.textoRodape2)}><Translator path="1.fapesp1" />    
                <b className={clsx(styles.textoRodape2)}><Translator path="1.fapesp2" /></b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Rodape({icon1, icon2, icon3, icon4, link1, link2, link3, link4, logo1, logo2}){
  return(
    <div class="container rodape">
      <div class="row">
        <div class="col-6 col-lg-3 d-flex align-items-center justify-content-sm-center">
          <div class="row">
            <div class="col-12 mb-1">
              <h4 className={clsx(styles.tituloRodape)}><Translator path="1.social" /></h4>
            </div>
            <div class="col-3 gx-2 ps-3">
              <a href={link1} target="_blank"><img src={icon1} alt="Rede Social 1" /></a>
            </div>

            <div class="col-3 gx-2">
              <a href={link2} target="_blank"><img src={icon2} alt="Rede Social 2" /></a>
            </div>

            <div class="col-3 gx-2">
              <a href={link3} target="_blank"><img src={icon3} alt="Rede Social 3" /></a>
            </div>

            <div class="col-3 gx-2">
              <a href={link4} target="_blank"><img src={icon4} alt="Rede Social 4" /></a>
            </div>
          </div>
        </div>

        <div class="col-6 col-lg-3 d-flex align-items-center justify-content-sm-center">
          <div class="row">
            <div class="col-12 mb-1 pt-3">
              <h4 className={clsx(styles.tituloRodape)}><Translator path="1.contato" /></h4>
            </div>
            <div class="col-12">
              <p className={clsx(styles.textoRodape)}>nefits.unesp@gmail.com</p>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6 d-flex justify-content-sm-center justify-content-lg-end">
          <div class="row">
            <div class="col-4 pt-3">
              <img src={logo1} alt="Logos" />
            </div>
          </div>
        </div>

        <hr className={clsx(styles.hr, "mt-3 mb-3")} />

        <p className={clsx(styles.textoRodape)}>Design por <b className={clsx(styles.textoRodape)}>Júlia dos Santos Silveira</b> © 2024 Current</p>

      </div>
    </div>
  )
}

function Intro({ link1, link2, link3, link4, link5, link6, link7 }) {
  return (
    <div className={clsx(styles.heroBanner)}>
      <div class="row">
        <div className="col-md-3 col-sm-12">
          <a href="/"><img className="intro" src="/images/logo-banner.png" alt="Logo NéFiTs" /></a>
        </div>
        <div className="col-md-7 text-end mt-2">
          <ul className={clsx(styles.ulLista)}>
            <li className={clsx(styles.liLista)}>
              <a href={link1}><Translator path="7.home" /></a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link2}><Translator path="7.sobre" /></a>
            </li>
            <li className={clsx(styles.liListaSelecionado)}>
              <a href={link3}><Translator path="7.equipe" /></a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link4}><Translator path="7.noticias" /></a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link6}><Translator path="7.publicacoes" /></a>
            </li>
            <li className={clsx(styles.liLista)}>
              <a href={link7}><Translator path="7.videos" /></a>
            </li>
            <li className={clsx(styles.liLista, "gx-5 mt-1")}>
              <LanguageSelector />
            </li>
          </ul>
        </div>
        <div className={clsx(styles.logoMenu, "col-md-2 col-sm-12")}>
          <img  src="/images/logo_unesp.svg" alt="Seja bem vindo ao NéFiTS" />
        </div>
      </div>
    </div>
  );
}

function Projetos() {
  return (
    <div title="NéFiTs">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
      ></script>

      <header className={clsx(styles.heroBanner)}>
        <div>
          {intro.map((props, idx) => (
            <Intro key={idx} {...props} />
          ))}
        </div>
      </header>
      <main className={clsx(styles.main, "p-5 h-100")}>
        <section className={styles.content}>
          <div className={clsx(styles.container)}>
            <div className={clsx(styles.row, "row")}>
              {primeiroContainer.map((props, idx) => (
                <PrimeiroContainer key={idx} {...props} />
              ))}
            </div>
          </div>

          <div className={clsx(styles.container)}>
            <div className={clsx(styles.row, "row")}>
              {abas.map((props, idx) => (
                <Abas key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <div className={clsx(styles.rodape2)}>
        {fapesp.map((props, idx) => (
          <Fapesp key={idx} {...props} />
          ))}
      </div>

      <footer className={clsx(styles.rodape)}>
        <div>
          {rodape.map((props, idx) => (
            <Rodape key={idx} {...props} />
            ))}
        </div>
      </footer>
    </div>
  );
}

export default Projetos;
