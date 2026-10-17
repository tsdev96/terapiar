import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, BookOpen, Check, Flower2, Heart, Instagram, Menu, MoveRight, Sprout, Play, Quote, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import therapyImage from "@/assets/auriculoterapia.jpg";
import studentOne from "@/assets/aluna-15.png";
import studentTwo from "@/assets/aluna-16.png";
import studentThree from "@/assets/aluna-17.png";
import { historicalSessionRange } from "@/lib/sales-offers";

const instagram = "https://www.instagram.com/terapiar.tti_/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Terapiar | Curso em vídeo de Auriculoterapia, E-book e Sessões" },
      { name: "description", content: "Aprenda auriculoterapia com a Terapiar: conheça o curso em vídeo, o e-book introdutório em atualização e agende uma sessão de cuidado." },
      { property: "og:title", content: "Terapiar | Curso em vídeo de Auriculoterapia, E-book e Sessões" },
      { property: "og:description", content: "Do primeiro contato à formação: curso em vídeo de auriculoterapia, e-book e sessões com a Terapiar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const topics = [
  { number: "01", title: "Comece do zero", text: "Fundamentos da auriculoterapia em uma linguagem clara, para quem está conhecendo a técnica." },
  { number: "02", title: "Vá além de um ponto", text: "Mapeamento da orelha e raciocínio terapêutico para compreender a escolha e a combinação dos pontos." },
  { number: "03", title: "Aprenda a cuidar", text: "Aplicação prática, cuidados técnicos e ética: conhecimento para uma atuação responsável." },
  { number: "04", title: "Prepare seus caminhos", text: "Noções de empreendedorismo terapêutico, posicionamento e organização dos primeiros atendimentos." },
];
const testimonials = [
  { photo: studentOne.url, label: "Neuropsicopedagoga e terapeuta integrativa", text: "Por meio do curso de auriculoterapia, encontrei mais uma forma de cuidar da minha mente e do meu corpo, além de poder cuidar daqueles que amo e atender meus pacientes com ainda mais qualidade e técnica.", extra: "O curso é detalhado, didático e muito bem organizado." },
  { photo: studentTwo.url, label: "Aluna do curso de auriculoterapia", text: "Com o curso de Auriculoterapia, tenho conseguido cuidar de pessoas e fazer atendimento dentro dos meus horários, e cada dia vem aumentando o número de clientes, trazendo uma renda extra para minha casa." },
  { photo: studentThree.url, label: "Aluna do curso de auriculoterapia", text: "O conteúdo foi explicado de forma simples e muito clara, o que facilitou bastante o aprendizado. Mesmo os pontos mais detalhados foram ensinados com calma, prática e muita didática. Saí do curso me sentindo segura e preparada para aplicar a técnica." },
];
const therapies = ["Auriculoterapia", "Acupuntura sistêmica", "Ventosaterapia", "Massagem relaxante", "Quick massage", "Escalda-pés"];

function Brand({ footer = false }: { footer?: boolean }) {
  return <a href="#inicio" aria-label="Terapiar Terapias Integrativas, início" className={`brand ${footer ? "brand-footer" : ""}`}><span className="brand-name">Terapiar<span className="brand-dot">.</span></span><span className="brand-subtitle">TERAPIAS INTEGRATIVAS</span></a>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="terapiar-site" id="inicio">
      <header className="site-header">
        <div className="page-width nav-inner">
          <Brand />
          <nav aria-label="Navegação principal" className="desktop-nav"><a href="#formacao">Curso em vídeo</a><a href="#ebook">E-book</a><a href="#terapias">Agende uma sessão</a></nav>
          <Button asChild className="nav-contact"><a href={instagram} target="_blank" rel="noopener noreferrer">Fale com a gente <ArrowUpRight /></a></Button>
          <Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Navegação móvel">{[["Curso em vídeo", "#formacao"], ["E-book", "#ebook"], ["Depoimentos", "#depoimentos"], ["Agende uma sessão", "#terapias"]].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}</nav>}
      </header>

      <main>
        <section className="therapy-hero" aria-labelledby="hero-title">
          <img className="hero-photo" src={therapyImage} alt="Imagem ilustrativa de aplicação de sementes de auriculoterapia na orelha" width={1920} height={1088} fetchPriority="high" />
          <div className="hero-shade" />
          <div className="page-width hero-inner">
            <div className="hero-copy"><span className="eyebrow hero-eyebrow"><span /> CURSO DE AURICULOTERAPIA EM VÍDEO</span><h1 id="hero-title">Auriculoterapia<br /><em>na prática.</em></h1><p>Aprenda do zero e vá além dos pontos.<br />Conhecimento para cuidar com responsabilidade<br className="desktop-break" /> e abrir caminhos nas terapias integrativas.</p><Button asChild size="lg" className="hero-button"><a href="#formacao">Conhecer o curso em vídeo <ArrowUpRight /></a></Button><a className="hero-more" href="#ebook">Comece pelo e-book <ArrowDown size={15} /></a></div>
            <div className="hero-caption"><span>TERAPIAR</span><span>Cuidar de você é o nosso propósito.</span></div>
          </div>
        </section>

        <div className="values-strip"><div className="page-width values-inner"><span><Play /> Curso gravado em vídeo</span><span><BookOpen /> E-book introdutório</span><span><Heart /> Sessões de cuidado</span></div></div>

        <section id="sobre" className="about-section section-space">
          <div className="page-width about-grid"><div><span className="eyebrow">DO INTERESSE À PRÁTICA</span><h2>Aprender para cuidar.<br /><em>Cuidar para transformar.</em></h2></div><div className="about-copy"><p>Conhecer alguns pontos é apenas o começo. Entender como avaliar uma pessoa, combinar estímulos e reconhecer os limites da técnica exige estudo e responsabilidade.</p><p>O curso da Terapiar é voltado a quem deseja aprender do zero, com fundamentos, mapeamento da orelha e aplicação prática com segurança.</p><a className="text-link" href={instagram} target="_blank" rel="noopener noreferrer">Conheça nosso dia a dia <ArrowUpRight size={17} /></a></div></div>
        </section>

        <section id="formacao" className="formation-section section-space">
          <div className="page-width"><div className="section-heading"><div><span className="eyebrow">SEU PRÓXIMO PASSO: O CURSO EM VÍDEO</span><h2>Do primeiro ponto<br /><em>ao cuidado consciente.</em></h2></div><p>O e-book apresenta a técnica. O curso aprofunda o aprendizado: fundamentos, mapeamento, raciocínio terapêutico e aplicação com segurança.</p></div>
            <div className="topics-grid">{topics.map(topic => <article className="topic" key={topic.number}><span className="topic-number">{topic.number}</span><h3>{topic.title}</h3><p>{topic.text}</p></article>)}</div>
            <div className="formation-bottom"><p><Sprout size={21} /> Aulas gravadas para aprofundar seu aprendizado.</p><Button asChild size="lg"><a href={instagram} target="_blank" rel="noopener noreferrer">Quero saber mais sobre o curso <ArrowUpRight /></a></Button></div>
          </div>
        </section>


        <section className="career-section section-space"><div className="page-width career-grid"><div><span className="eyebrow">CONHECIMENTO QUE ABRE CAMINHOS</span><h2>Uma nova habilidade.<br /><em>Novas possibilidades.</em></h2><p>A formação pode ampliar o cuidado que você já oferece ou ser um primeiro passo nas terapias integrativas. A atuação depende de preparo, das exigências da sua profissão e das regras locais.</p><ul className="career-list"><li><Check size={17} /> Complementar outras práticas de cuidado</li><li><Check size={17} /> Organizar seus primeiros atendimentos</li><li><Check size={17} /> Construir uma atuação ética e responsável</li></ul></div><aside className="price-reference"><span className="eyebrow">POSSIBILIDADES DE ATENDIMENTO</span><div className="session-price">R$ {historicalSessionRange.min} <span>a</span> R$ {historicalSessionRange.max}</div><p>por sessão de auriculoterapia · faixa indicativa</p><small>Faixa não atualizada, sujeita a variações por região, experiência e posicionamento. Não representa a tabela de preços da Terapiar nem uma promessa de renda ou retorno financeiro. Consulte a equipe para saber os valores atuais.</small><a className="text-link" href="#formacao">Conheça o caminho de aprendizado <ArrowUpRight size={17} /></a></aside></div></section>

        <section id="depoimentos" className="testimonials-section section-space"><div className="page-width"><div className="section-heading"><div><span className="eyebrow">QUEM JÁ APRENDEU COM A GENTE</span><h2>Experiências reais.<br /><em>Nas palavras das alunas.</em></h2></div><p>Conheça a experiência de quem fez o curso de auriculoterapia. Relatos individuais não garantem os mesmos resultados.</p></div><div className="testimonials-grid">{testimonials.map((item, i) => <article className="testimonial" key={item.photo}><img src={item.photo} alt={`Foto da aluna do depoimento ${i + 1}`} loading="lazy" width={300} height={360} /><div className="testimonial-copy"><Quote size={24} strokeWidth={1.2} /><blockquote>“{item.text}”{item.extra && <p>“{item.extra}”</p>}</blockquote><p className="testimonial-author">{item.label}</p></div></article>)}</div></div></section>

        <section id="ebook" className="ebook-section section-space"><div className="page-width ebook-grid"><div className="ebook-preview" aria-label="Apresentação editorial do e-book em atualização"><BookOpen size={30} strokeWidth={1} /><span>TERAPIAR · E-BOOK</span><h3>Auriculoterapia<br /><em>na prática.</em></h3><p>Corpo · Emoção · Mente</p><div className="ebook-cover-bottom"><Sprout size={32} strokeWidth={1} /><span>NOVA EDIÇÃO EM PREPARAÇÃO</span></div></div><div className="ebook-copy"><span className="eyebrow">SEU PRIMEIRO CONTATO COM A TÉCNICA</span><h2>Comece pela leitura.<br /><em>Continue pela formação.</em></h2><p>Uma introdução acessível à auriculoterapia para compreender a técnica, conhecer pontos como Shen Men e entender por que a formação faz diferença.</p><ul className="career-list"><li><Check size={17} /> Fundamentos em linguagem simples</li><li><Check size={17} /> Corpo, emoções e cuidado complementar</li><li><Check size={17} /> Limites e segurança antes da prática</li></ul><div className="ebook-status">E-book em atualização · venda em breve na Hotmart</div><p className="offer-note">A nova edição será oferecida por um valor acessível. Preço e data de lançamento serão divulgados quando estiver disponível. O e-book não substitui formação profissional.</p><Button asChild size="lg"><a href={instagram} target="_blank" rel="noopener noreferrer">Consultar o lançamento <ArrowUpRight /></a></Button></div></div></section>

        <section id="terapias" className="therapies-section section-space"><div className="page-width therapies-grid"><div><span className="eyebrow">PREFERE RECEBER O CUIDADO?</span><h2>Agende sua sessão<br /><em>de auriculoterapia.</em></h2><p>Não é preciso fazer o curso para receber cuidado. Converse com a equipe sobre uma sessão de auriculoterapia ou outras terapias integrativas, indicação, disponibilidade e valores.</p><a className="text-link" href={instagram} target="_blank" rel="noopener noreferrer">Quero agendar uma sessão <MoveRight size={19} /></a></div><div className="therapy-list">{therapies.map((therapy, index) => <div className="therapy-row" key={therapy}><span className="therapy-index">0{index + 1}</span><h3>{therapy}</h3><Check size={17} /></div>)}</div></div></section>

        <section className="faq-section section-space"><div className="page-width faq-grid"><div><span className="eyebrow">VAMOS CONVERSAR?</span><h2>Antes de<br /><em>dar o primeiro passo.</em></h2></div><div className="faq-list"><details><summary>O que é auriculoterapia?<span>+</span></summary><p>É uma prática integrativa que utiliza a estimulação de pontos na orelha. A indicação e a aplicação devem ser orientadas por um profissional capacitado.</p></details><details><summary>Como conhecer o curso em vídeo?<span>+</span></summary><p>Fale com a Terapiar pelo Instagram para consultar a disponibilidade do curso gravado, conteúdo, valores, condições de acesso, suporte e materiais incluídos.</p></details><details><summary>O e-book já está à venda?<span>+</span></summary><p>A nova edição está em atualização. A venda será pela Hotmart quando estiver disponível. Até lá, consulte a Terapiar pelo Instagram. O e-book é introdutório e não habilita para atendimento profissional.</p></details><details><summary>Como agendar um atendimento?<span>+</span></summary><p>Envie uma mensagem no Instagram <a href={instagram} target="_blank" rel="noopener noreferrer">@terapiar.tti_</a>. Nossa equipe poderá informar disponibilidade, localização e valores.</p></details><details><summary>As terapias substituem acompanhamento médico?<span>+</span></summary><p>Não. As práticas integrativas são complementares e não substituem avaliação, acompanhamento médico ou tratamentos prescritos.</p></details></div></div></section>

        <section id="contato" className="contact-section"><div className="page-width contact-inner"><Flower2 size={42} strokeWidth={1} /><span className="eyebrow">SEU MOMENTO DE CUIDADO</span><h2>Seu próximo passo<br /><em>começa aqui.</em></h2><p>Curso em vídeo, lançamento do e-book ou uma sessão.<br />Conte para a Terapiar o que você procura.</p><Button asChild size="lg"><a href={instagram} target="_blank" rel="noopener noreferrer"><Instagram /> Fale com a Terapiar <ArrowUpRight /></a></Button></div></section>
      </main>
      <footer className="site-footer"><div className="page-width footer-top"><Brand footer /><p>Corpo, mente e cuidado.<br />Um olhar para você por inteiro.</p><a href={instagram} target="_blank" rel="noopener noreferrer" className="footer-instagram"><Instagram size={19} /> @terapiar.tti_ <ArrowUpRight size={16} /></a></div><div className="page-width footer-bottom"><span>© {new Date().getFullYear()} Terapiar Terapias Integrativas.</span><span>Práticas integrativas não substituem acompanhamento médico.</span></div></footer>
    </div>
  );
}
