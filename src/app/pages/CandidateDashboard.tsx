import { motion } from "motion/react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { UserCircle, Briefcase, FileText, Users, Settings, Target, CheckCircle2, ChevronRight, Award, Zap, TrendingUp, BookOpen, Clock, Upload, Mail, Phone, MapPin, Calendar, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export function CandidateDashboard() {
  const [resumeUploaded, setResumeUploaded] = useState(true);

  const sidebarItems = [
    { name: "Meu Perfil", href: "/dashboard/candidata", icon: <UserCircle className="w-5 h-5" /> },
    { name: "Vagas", href: "/dashboard/candidata/vagas", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Testes e IA", href: "/dashboard/candidata/testes", icon: <Target className="w-5 h-5" /> },
    { name: "Comunidade", href: "/dashboard/candidata/comunidade", icon: <Users className="w-5 h-5" /> },
    { name: "Configurações", href: "/dashboard/candidata/config", icon: <Settings className="w-5 h-5" /> },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeUploaded(true);
      console.log('Arquivo selecionado:', e.target.files[0].name);
    }
  };

  return (
    <DashboardLayout
      userType="candidata"
      userName="Marina Silva"
      userImage="https://images.unsplash.com/photo-1758876017874-1332333026b2?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80"
      sidebarItems={sidebarItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Details */}
        <div className="lg:col-span-2 space-y-8">

          {/* Progress Bar & Status - MOVIDO PARA O TOPO */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
          >
            <div className="flex justify-between items-end mb-4">
              <div>
                <h2 className="text-xl font-bold text-[#3E0014] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  Finalize seu perfil
                </h2>
                <p className="text-slate-500 mt-1">Conclua seu perfil para aumentar a chance com as melhores vagas.</p>
              </div>
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#5B002C] to-[#AC1634]">85%</span>
            </div>

            <div className="w-full bg-[#FEF7F9] rounded-full h-3 mb-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-gradient-to-r from-[#5B002C] to-[#AC1634] h-3 rounded-full"
              />
            </div>

            <div className="flex gap-4">
              <button className="text-sm font-semibold bg-[#FEF7F9] text-[#5B002C] hover:bg-[#FDF0F4] px-4 py-2 rounded-lg transition-colors">
                Completar
              </button>
              <button className="text-sm font-semibold text-slate-600 hover:text-[#3E0014] px-4 py-2 transition-colors">

              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-[#3E0014] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#5B002C]" /> Currículo
              </h3>
              {resumeUploaded && (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50">
                  <CheckCircle2 className="w-3 h-3" /> Enviado
                </span>
              )}
            </div>

            {resumeUploaded ? (
              <div className="bg-[#FEF7F9] rounded-xl p-4 border border-[#E77291]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#AC1634]">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#3E0014] text-sm">Marina_Silva_CV.pdf</h4>
                      <p className="text-xs text-slate-500">Atualizado em 05/05/2026 • 245 KB</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-white text-[#3E0014] hover:bg-slate-50 font-semibold px-4 py-2 rounded-lg border border-slate-200 transition-colors text-sm">
                    Visualizar
                  </button>
                  <label className="flex-1 cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <div className="bg-[#AC1634] text-white hover:bg-[#7A002B] font-semibold px-4 py-2 rounded-lg transition-colors text-sm text-center">
                      Atualizar
                    </div>
                  </label>
                </div>
              </div>
            ) : (
              <label className="block cursor-pointer">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="border-2 border-dashed border-[#E77291] rounded-xl p-8 text-center hover:border-[#AC1634] hover:bg-[#FEF7F9] transition-all">
                  <div className="w-16 h-16 rounded-full bg-[#FEF7F9] flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-[#AC1634]" />
                  </div>
                  <h4 className="font-bold text-[#3E0014] mb-2">Faça upload do seu currículo</h4>
                  <p className="text-sm text-slate-500 mb-4">
                    Arraste e solte ou clique para selecionar
                  </p>
                  <p className="text-xs text-slate-400">PDF, DOC ou DOCX (máx. 5MB)</p>
                </div>
              </label>
            )}
          </motion.div>

        </div>

        {/* Informações do Perfil */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#3E0014] flex items-center gap-2">
              <UserCircle className="w-6 h-6 text-[#5B002C]" />
              Informações do Perfil
            </h2>
            <button className="text-[#AC1634] hover:text-[#7A002B] font-semibold text-sm">
              Editar Perfil
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Coluna 1 */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF7F9] flex items-center justify-center text-[#AC1634] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">E-mail</p>
                  <p className="text-sm font-medium text-slate-800">marina.silva@email.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF7F9] flex items-center justify-center text-[#AC1634] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">Telefone</p>
                  <p className="text-sm font-medium text-slate-800">(11) 98765-4321</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF7F9] flex items-center justify-center text-[#AC1634] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">Localização</p>
                  <p className="text-sm font-medium text-slate-800">São Paulo, SP</p>
                </div>
              </div>
            </div>

            {/* Coluna 2 */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF7F9] flex items-center justify-center text-[#AC1634] shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">Cargo Atual</p>
                  <p className="text-sm font-medium text-slate-800">Product Manager Sênior</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF7F9] flex items-center justify-center text-[#AC1634] shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">Experiência</p>
                  <p className="text-sm font-medium text-slate-800">8 anos</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF7F9] flex items-center justify-center text-[#AC1634] shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">Disponibilidade</p>
                  <p className="text-sm font-medium text-slate-800">Remoto / Híbrido</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Sociais */}
          <div className="pt-4 border-t border-[#FDF0F4]">
            <p className="text-xs font-semibold text-slate-500 uppercase mb-3">Links Profissionais</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-[#FEF7F9] hover:bg-[#FDF0F4] rounded-xl text-sm font-semibold text-[#5B002C] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-[#FEF7F9] hover:bg-[#FDF0F4] rounded-xl text-sm font-semibold text-[#5B002C] transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="grid mt-6 grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formação & Competências */}
        <div className="flex w-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-[#3E0014] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#AC1634]" /> Formação
              </h3>
              <div className="flex justify-between items-end">
                <button className="mr-4 text-[#AC1634] hover:text-[#7A002B] font-semibold text-sm"><FontAwesomeIcon className="mr-1" icon={['fas', 'pencil']} />Editar</button>
                <button className="text-[#AC1634] hover:text-[#7A002B] font-semibold text-sm">+ Adicionar</button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FEF7F9] flex items-center justify-center text-[#AC1634] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">MBA em Gestão Estratégica</h4>
                  <p className="text-xs text-slate-500">FGV • 2022 - 2023</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-[#FDF0F4] flex items-center justify-center text-slate-400 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Engenharia de Computação</h4>
                  <p className="text-xs text-slate-500">USP • 2016 - 2020</p>
                </div>
              </div>
            </div>

            <hr className="mt-3" />


            <div className="flex justify-between items-center mt-6 mb-4">
              <h3 className="text-lg font-bold text-[#3E0014] flex items-center gap-2">
                <Target className="w-5 h-5 text-[#5B002C]" /> Competências
              </h3>
              <div className="flex justify-between items-end">
                <button className="mr-4 text-[#AC1634] hover:text-[#7A002B] font-semibold text-sm"><FontAwesomeIcon className="mr-1" icon={['fas', 'pencil']} />Editar</button>
                <button className="text-[#AC1634] hover:text-[#7A002B] font-semibold text-sm">+ Adicionar</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Product Strategy", "Agile", "Liderança de Tribo", "Data-Driven", "UX Research", "Comunicação Não-Violenta", "Gestão de Stakeholders"
              ].map((skill, i) => (
                <span key={i} className="px-3 py-1.5 bg-[#FFFBFC] border border-[#E77291] rounded-lg text-xs font-semibold text-slate-600 hover:border-[#5B002C]/30 hover:bg-[#FEF7F9] hover:text-[#3E0014] transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>



            <hr className="mt-3" />



            {/* Experiência Section */}

            <div className="flex justify-between items-center mt-6 mb-4">
              <h3 className="text-lg font-bold text-[#3E0014] flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#5B002C]" /> Experiência Profissional
              </h3>
              <div className="flex justify-between items-end">
                <button className="mr-4 text-[#AC1634] hover:text-[#7A002B] font-semibold text-sm"><FontAwesomeIcon className="mr-1" icon={['fas', 'pencil']} />Editar</button>
                <button className="text-[#AC1634] hover:text-[#7A002B] font-semibold text-sm">+ Adicionar</button>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { title: "Product Manager Sênior", company: "FintechBR", period: "Jan 2024 - Presente", desc: "Liderança de tribo de pagamentos com 4 squads. Redução de churn em 12% em 6 meses." },
                { title: "Product Manager Pleno", company: "RetailCorp", period: "Fev 2021 - Dez 2023", desc: "Gestão do app B2B e reestruturação do funil de onboarding de novos lojistas." }
              ].map((exp, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#FEF7F9] border border-[#E77291] flex items-center justify-center text-[#5B002C]">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    {i === 0 && <div className="w-0.5 h-full bg-[#FDF0F4] mt-2"></div>}
                  </div>
                  <div className="pb-4">
                    <h4 className="font-bold text-slate-800">{exp.title}</h4>
                    <p className="text-sm font-medium text-[#5B002C] mb-1">{exp.company} <span className="text-slate-400 font-normal ml-2">{exp.period}</span></p>
                    <p className="text-slate-600 text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>







        {/* Right Column - Recommended Jobs */}
        <div className="space-y-6">
          <div className="bg-[#3E0014] rounded-2xl p-6 shadow-xl text-white relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#5B002C]/60 rounded-full blur-2xl"></div>
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" /> Vagas Recomendadas
            </h3>
            <p className="text-[#E77291] text-sm mb-6">Selecionadas pela nossa IA com base no seu perfil, momento de carreira e aderência cultural.</p>

            <div className="space-y-4 relative z-10">
              {[
                { title: "Group Product Manager", company: "Nubank", match: 96, type: "Híbrido - SP", tag: "Novo" },
                { title: "Senior PM - Checkout", company: "Mercado Livre", match: 91, type: "Remoto", tag: "Em alta" },
                { title: "Product Leader", company: "QuintoAndar", match: 88, type: "Remoto", tag: "" },
              ].map((job, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/20 transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-white mb-0.5">{job.title}</h4>
                      <p className="text-[#E77291] text-xs">{job.company} • {job.type}</p>
                    </div>
                    {job.tag && (
                      <span className="px-2 py-0.5 bg-[#AC1634] text-white text-[10px] font-bold rounded uppercase tracking-wider">{job.tag}</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <span className="text-emerald-400 font-bold text-sm">{job.match}% Chance</span>
                    </div>
                    <button className="text-xs font-semibold text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                      Ver vaga <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 border border-white/20 rounded-xl text-sm font-semibold text-[#FEF7F9] hover:text-white hover:bg-white/10 transition-colors">
              Ver todas as recomendações
            </button>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
