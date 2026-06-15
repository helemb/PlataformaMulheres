import heroImage from "../../imports/image-3.png";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  Brain,
  Zap,
  Target,
  Users,
  Shield,
  Award,
  CheckCircle2,
  Menu,
  UserCircle,
  TrendingUp,
  Briefcase,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import logoSofia from "../../imports/logoinsta.jpeg";
import { useState } from "react";

export function LandingPage() {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Menos mulheres empregadas",
      value: "49,1%",
      description:
        "Apenas 49,1% das mulheres estão empregadas, contra 68,8% dos homens.",
      source: "IBGE",
      color: "from-[#7A002B] to-[#AC1634]",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Pouca presença na liderança",
      value: "39%",
      description:
        "Apenas 39% dos cargos de liderança são ocupados por mulheres.",
      source: "IBGE",
      color: "from-[#5B002C] to-[#AC1634]",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Maior taxa de desemprego",
      value: "6,9%",
      description:
        "Mulheres enfrentam maior taxa de desemprego do que homens.",
      source: "IBGE",
      color: "from-[#AC1634] to-[#E77291]",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Desigualdade ainda maior",
      value: "Mulheres negras",
      description:
        "Mulheres pretas e pardas são as mais afetadas pelo desemprego e falta de oportunidades.",
      source: "IBGE",
      color: "from-[#3E0014] to-[#7A002B]",
    },
  ];

  const nextStat = () => {
    setCurrentStatIndex((prev) => (prev + 1) % stats.length);
  };

  const prevStat = () => {
    setCurrentStatIndex(
      (prev) => (prev - 1 + stats.length) % stats.length,
    );
  };

  return (
    <div className="min-h-screen bg-[#FFFBFC] font-sans text-slate-900 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#FDF0F4] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-2">
              <img
                src={logoSofia}
                alt="Sofia Logo"
                className="h-20 w-auto object-contain rounded-full mix-blend-multiply"
              />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#como-funciona"
                className="text-sm font-medium text-slate-600 hover:text-[#5B002C] transition-colors"
              >
                Como funciona
              </a>
              <a
                href="#candidatas"
                className="text-sm font-medium text-slate-600 hover:text-[#5B002C] transition-colors"
              >
                Para candidatas
              </a>
              <a
                href="#empresas"
                className="text-sm font-medium text-slate-600 hover:text-[#5B002C] transition-colors"
              >
                Para empresas
              </a>
              <a
                href="#ia"
                className="text-sm font-medium text-slate-600 hover:text-[#5B002C] transition-colors flex items-center gap-1"
              >
                Tecnologia IA
              </a>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/login"
                className="text-sm font-semibold text-[#3E0014] hover:text-[#5B002C] transition-colors"
              >
                Entrar
              </Link>
              <Link
                to="/cadastro"
                className="inline-flex items-center justify-center
                text-sm font-semibold
                bg-[#AC1634] hover:bg-[#7A002B]
                text-white px-5 py-2.5
                rounded-xl
                shadow-md shadow-[#AC1634]/30
                transition-all duration-300
                hover:scale-105 active:scale-95"
              >
                Criar conta grátis
              </Link>
            </div>

            <button className="md:hidden p-2 text-slate-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-[#FFFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-[#AC1634] font-medium text-sm mb-6 border border-[#FDF0F4] shadow-sm">
                <span className="text-base">♀</span> Exclusivo  para mulheres
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#3E0014] leading-tight mb-6">
                Oportunidades de trabalho para voltadas para mulheres{" "}
                <span className="text-[#AC1634]">

                </span>
              </h1>
              <p className="text-base text-slate-600 mb-8 leading-relaxed">
                Criamos um espaço seguro e inclusivo para você.
                Conectando talentos femininos com empresas
                comprometidas com a diversidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/login"
                  className="inline-flex justify-center items-center gap-2
                  bg-[#AC1634] hover:bg-[#7A002B]
                  text-white font-semibold px-6 py-3
                  rounded-lg
                  shadow-md
                  transition-all duration-300
                  hover:scale-105 active:scale-95"
                >
                  Buscar vagas
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#como-funciona"
                  className="inline-flex justify-center items-center bg-white hover:bg-slate-50 text-[#3E0014] font-semibold px-6 py-3 rounded-lg border border-slate-200 shadow-sm transition-all"
                >
                  Saber mais
                </a>
              </div>
            </motion.div>

            {/* Right Content - Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-lg border border-[#FDF0F4] overflow-hidden">
                {/* Profile Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200">
                  <img
                    src={heroImage}
                    alt="Beatriz Almeida"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md">
                    <span className="text-xs font-semibold text-[#3E0014]">
                      ✓ Contratada via Sofia
                    </span>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-xl text-[#3E0014] mb-1">
                        Beatriz Almeida
                      </h3>
                      <p className="text-slate-600 font-medium">
                        Desenvolvedora Full Stack
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#5B002C] to-[#AC1634] flex flex-col items-center justify-center text-white shadow-md">
                      <span className="text-xl font-black leading-none">
                        94%
                      </span>
                      <span className="text-[9px] font-bold uppercase opacity-90">
                        chance
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#AC1634] flex-shrink-0 mt-0.5" />
                      <span>
                        Conhecimento em softwares de CAD/CAE.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#AC1634] flex-shrink-0 mt-0.5" />
                      <span>
                        Capacidade de resolução de problemas.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#AC1634] flex-shrink-0 mt-0.5" />
                      <span>
                        Liderança e comunicação técnica.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Carousel */}
      <section className="relative overflow-hidden bg-[#3E0014]">
        {/* Wave Top Transition */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#FFFBFC"
            ></path>
          </svg>
        </div>

        <div className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center justify-between gap-8">
              {/* Left Arrow */}
              <button
                onClick={prevStat}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all shadow-md hover:shadow-lg z-10 border border-white/20 backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Carousel Container */}
              <div className="flex-1 relative overflow-hidden">
                <div className="flex items-center justify-center gap-4 px-4">
                  {/* Previous Slide (smaller, darker) */}
                  <div
                    className="hidden md:block w-64 opacity-30 scale-90 transition-all duration-500 cursor-pointer hover:opacity-50"
                    onClick={prevStat}
                  >
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
                      <div
                        className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stats[(currentStatIndex - 1 + stats.length) % stats.length].color} flex items-center justify-center text-white shadow-md`}
                      >
                        {
                          stats[
                            (currentStatIndex -
                              1 +
                              stats.length) %
                            stats.length
                          ].icon
                        }
                      </div>
                      <h3 className="text-sm font-semibold text-slate-700 mb-2 text-center">
                        {
                          stats[
                            (currentStatIndex -
                              1 +
                              stats.length) %
                            stats.length
                          ].title
                        }
                      </h3>
                      <p className="text-2xl font-black text-[#3E0014] mb-2 text-center">
                        {
                          stats[
                            (currentStatIndex -
                              1 +
                              stats.length) %
                            stats.length
                          ].value
                        }
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed text-center line-clamp-2">
                        {
                          stats[
                            (currentStatIndex -
                              1 +
                              stats.length) %
                            stats.length
                          ].description
                        }
                      </p>
                    </div>
                  </div>

                  {/* Current Slide (larger, prominent) */}
                  <motion.div
                    key={currentStatIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md relative"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E77291]/20 to-[#AC1634]/20 rounded-2xl blur-xl"></div>

                    <div className="relative bg-gradient-to-br from-[#FEF7F9] via-white to-[#FDF0F4] rounded-2xl p-8 border-2 border-[#E77291] shadow-2xl">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stats[currentStatIndex].color} flex items-center justify-center text-white shadow-lg ring-4 ring-white`}
                      >
                        {stats[currentStatIndex].icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#3E0014] mb-3 text-center">
                        {stats[currentStatIndex].title}
                      </h3>
                      <p className="text-5xl font-black bg-gradient-to-r from-[#7A002B] to-[#AC1634] bg-clip-text text-transparent mb-4 text-center">
                        {stats[currentStatIndex].value}
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed text-center mb-3">
                        {stats[currentStatIndex].description}
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#E77291]"></div>
                        <p className="text-xs text-[#5B002C] font-bold uppercase tracking-wide">
                          Fonte:{" "}
                          {stats[currentStatIndex].source}
                        </p>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#E77291]"></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Next Slide (smaller, darker) */}
                  <div
                    className="hidden md:block w-64 opacity-30 scale-90 transition-all duration-500 cursor-pointer hover:opacity-50"
                    onClick={nextStat}
                  >
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
                      <div
                        className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stats[(currentStatIndex + 1) % stats.length].color} flex items-center justify-center text-white shadow-md`}
                      >
                        {
                          stats[
                            (currentStatIndex + 1) %
                            stats.length
                          ].icon
                        }
                      </div>
                      <h3 className="text-sm font-semibold text-slate-700 mb-2 text-center">
                        {
                          stats[
                            (currentStatIndex + 1) %
                            stats.length
                          ].title
                        }
                      </h3>
                      <p className="text-2xl font-black text-[#3E0014] mb-2 text-center">
                        {
                          stats[
                            (currentStatIndex + 1) %
                            stats.length
                          ].value
                        }
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed text-center line-clamp-2">
                        {
                          stats[
                            (currentStatIndex + 1) %
                            stats.length
                          ].description
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextStat}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all shadow-md hover:shadow-lg z-10 border border-white/20 backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Centered Text */}
            <div className="mt-10 text-center">
              <p className="text-white/90 max-w-3xl mx-auto flex items-center justify-center gap-2 font-medium">
                <span className="text-[#E77291] text-lg">
                  ♥
                </span>{" "}
                Esse dado mostra a necessidade de espaço
                profissional feito para mulheres.
              </p>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {stats.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStatIndex(idx)}
                  className={`h-2 rounded-full transition-all ${idx === currentStatIndex
                    ? "bg-[#E77291] w-8"
                    : "bg-white/30 w-2 hover:bg-white/50"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Wave Bottom Transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ display: "block" }}
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#FFFBFC"
              style={{ display: "block" }}
            ></path>
          </svg>
        </div>
      </section>

      {/* Como Funciona */}
      <section
        id="como-funciona"
        className="py-24 bg-[#FFFBFC]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#3E0014] mb-4">
              Como a Sofia funciona?
            </h2>
            <p className="text-slate-600">
              Sem complicação e sem perder tempo. Comece ainda hoje.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-[#E77291] to-transparent z-0"></div>

            {[
              {
                icon: (
                  <UserCircle className="w-6 h-6 text-[#AC1634]" />
                ),
                title: "1. Configure  seu currículo em poucos minutos",
                desc: "Conte suas experiências, habilidades e objetivos. A gente te ajuda a organizar tudo de forma simples e estratégica no currículo.",
              },
              {
                icon: (
                  <Brain className="w-6 h-6 text-[#AC1634]" />
                ),
                title: "2. Nossa IA analisa seu perfil",
                desc: "A tecnologia da Sophia cruza seu perfil com as vagas disponíveis.",
              },
              {
                icon: (
                  <Zap className="w-6 h-6 text-[#AC1634]" />
                ),
                title: "3. Oportunidades de trabalho para você mulher",
                desc: " Ao final, são selecionadas vagas voltadas para suas experiências de mercado.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-white rounded-2xl shadow-lg border border-[#FDF0F4] flex items-center justify-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-[#FFFBFC] flex items-center justify-center`}
                  >
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#3E0014] mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="relative overflow-hidden bg-[#3E0014]">
        {/* Wave Top Transition */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#FFFBFC"
            ></path>
          </svg>
        </div>

        <div className="py-24 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-4">
                Por que a Sofia é diferente?
              </h2>
              <p className="text-slate-300 text-lg">
                Uma plataforma construída por mulheres e unicamente para mulheres.

                Diante dos detalhes e desafios do mercado de
                trabalho, ajudamos mulheres a encontrar um trabalho de forma mais certeira e ao mesmo tempo empresas responsáveis a encontrarem candidatas qualificadas.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: <Users />, title: "Foco no Feminino" },
                { icon: <Sparkles />, title: "Criação de Curriculo" },
                {
                  icon: <Award />,
                  title: "Selo para Empresas Parceiras ",
                },
                { icon: <Shield />, title: "Segurança com a LGPD" },

              ].map((diff, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all cursor-default group w-full sm:w-60"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#5B002C]/40 to-[#AC1634]/40 flex items-center justify-center mb-4 border border-white/10 text-[#FEF7F9] group-hover:scale-110 transition-transform">
                    {diff.icon}
                  </div>
                  <h3 className="font-semibold text-white text-sm">
                    {diff.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave Bottom Transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ display: "block" }}
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#ffffff"
              style={{ display: "block" }}
            ></path>
          </svg>
        </div>
      </section>

      {/* Funcionalidades (Para candidatas / Para empresas) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Para Candidatas */}
            <div className="bg-[#FFFBFC] rounded-3xl p-8 md:p-12 shadow-sm border border-[#E77291] hover:shadow-xl transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FEF7F9] rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[#5B002C] font-semibold text-sm mb-6 shadow-sm border border-[#FDF0F4]">
                Para Candidatas
              </span>
              <h2 className="text-3xl font-bold text-[#3E0014] mb-6">
                Impulsione sua jornada profissional
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Criar currículo otimizado com a ajuda da nossa tecnologia",
                  "Receber vagas exclusivas para seu perfil",
                  "Retornos detalhados sobre a afinidade com as vagas",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#AC1634] shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/login?tab=candidata"
                className="inline-flex items-center gap-2 font-semibold text-[#AC1634] hover:text-[#5B002C] group-hover:gap-3 transition-all"
              >
                Acessar{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Para Empresas */}
            <div className="rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden group text-white bg-gradient-to-br from-[#3E0014] to-[#5B002C]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#FEF7F9] font-semibold text-sm mb-6 border border-white/20 backdrop-blur-sm">
                Para Empresas
              </span>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Contrate talentos femininos com precisão
              </h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Publicar vagas e gerenciar fluxo sem esforço",
                  "Filtrar candidatas ranqueadas por habilidades e experiências de mercado",
                  "Perfis focados em habilidades pessoais e técnicas",
                  "Selo gerado pela Secretaria da Mulher de Paracatu - MG para empresas comprometidas com a inclusão feminina",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#AC1634] shrink-0 mt-0.5" />
                    <span className="text-slate-100 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/login?tab=empresa"
                className="inline-flex items-center gap-2 font-semibold text-[#FEF7F9] hover:text-white group-hover:gap-3 transition-all"
              >
                Faça parte{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Transformação */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3E0014] via-[#5B002C] to-[#AC1634]"></div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E77291]/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#AC1634]/20 rounded-full blur-[120px]"></div>

            {/* Content */}
            <div className="relative px-8 py-16 md:py-20 lg:px-16">
              <div className="max-w-3xl mx-auto text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-sm mb-8">
                  <Sparkles className="w-4 h-4" />
                  <span>Comece sua transformação hoje</span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                  O momento de transformar sua vida é agora
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Nossa plataforma é mais do que um site de vagas. É uma plataforma desenvolvida por mulheres e unicamente para mulheres, conectando talentos femininos com empresas comprometidas com a diversidade. Junte-se a nós e faça parte dessa revolução no mercado de trabalho.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                  <Link
                    to="/cadastro?tab=candidata"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#3E0014] hover:bg-slate-50 font-bold px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95 text-lg group"
                  >
                    Cadastrar currículo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/cadastro?tab=empresa"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 text-lg group"
                  >
                    Encontrar candidatas
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>100% Seguro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Cadastro gratuito</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Voltado para mulheres</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F8F8] py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo e Descrição */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={logoSofia}
                  alt="Sofia Logo"
                  className="h-16 w-auto object-contain rounded-full mix-blend-multiply"
                />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Plataforma de empregabilidade desenvolvida por
                mulheres e exclusivamente para mulheres.
              </p>
            </div>

            {/* Para Candidatas */}
            <div>
              <h3 className="font-bold text-[#3E0014] mb-4">
                Para Candidatas
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/cadastro?tab=candidata"
                    className="text-slate-600 hover:text-[#AC1634] text-sm transition-colors"
                  >
                    Criar conta
                  </Link>
                </li>
                <li>
                  <a
                    href="#como-funciona"
                    className="text-slate-600 hover:text-[#AC1634] text-sm transition-colors"
                  >
                    Como funciona
                  </a>
                </li>
                <li>
                  <Link
                    to="/dashboard/candidata/vagas"
                    className="text-slate-600 hover:text-[#AC1634] text-sm transition-colors"
                  >
                    Vagas
                  </Link>
                </li>
              </ul>
            </div>

            {/* Para Empresas */}
            <div>
              <h3 className="font-bold text-[#3E0014] mb-4">
                Para Empresas
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/cadastro?tab=empresa"
                    className="text-slate-600 hover:text-[#AC1634] text-sm transition-colors"
                  >
                    Cadastrar empresa
                  </Link>
                </li>
                <li>
                  <a
                    href="#empresas"
                    className="text-slate-600 hover:text-[#AC1634] text-sm transition-colors"
                  >
                    Receba selo de empresa parceira da Secretaria da Mulher de Paracatu - MG
                  </a>
                </li>
                <li>
                  <Link
                    to="/dashboard/empresa/analytics"
                    className="text-slate-600 hover:text-[#AC1634] text-sm transition-colors"
                  >

                  </Link>
                </li>
              </ul>
            </div>

            {/* Parceria */}
            <div>
              <h3 className="font-bold text-[#3E0014] mb-4">
                Parceria
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-[#AC1634] mt-0.5">
                    ♀
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Projeto desenvolvido diretamente com a Secretaria da
                    Mulher de Paracatu
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#AC1634] mt-0.5">
                    ♥
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Comprometidos com o empoderamento feminino e
                    igualdade de gênero
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="pt-8 border-t border-slate-300">
            <p className="text-center text-slate-500 text-sm">
              © 2026 Sofia - Plataforma de Recrutamento Feminino. Todos os direitos reservados ao ADS IFTM - Paracatu/MG.
            </p>
            <p className="text-center text-slate-400 text-xs mt-2">
              Desenvolvido para mulheres
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}