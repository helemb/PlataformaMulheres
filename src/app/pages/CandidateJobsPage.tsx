import { motion } from "motion/react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { UserCircle, Briefcase, Target, Users, Settings, MapPin, Clock, TrendingUp, BookmarkPlus, Sparkles, List, Send } from "lucide-react";
import { useState } from "react";

export function CandidateJobsPage() {
  const [viewMode, setViewMode] = useState<'recommended' | 'all' | 'applied'>('recommended');

  const sidebarItems = [
    { name: "Meu Perfil", href: "/dashboard/candidata", icon: <UserCircle className="w-5 h-5" /> },
    { name: "Vagas", href: "/dashboard/candidata/vagas", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Testes e IA", href: "/dashboard/candidata/testes", icon: <Target className="w-5 h-5" /> },
    { name: "Comunidade", href: "/dashboard/candidata/comunidade", icon: <Users className="w-5 h-5" /> },
    { name: "Configurações", href: "/dashboard/candidata/config", icon: <Settings className="w-5 h-5" /> },
  ];

  const recommendedJobs = [
    {
      title: "Desenvolvedora Web Pleno",
      company: "Sistemas Paracatu",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 4.500 - R$ 6.500",
      match: 94,
      posted: "2 dias atrás",
      tags: ["React", "HTML/CSS", "WordPress"],
    },
    {
      title: "Designer Digital e Social Media",
      company: "GoldTech Soluções",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 2.200 - R$ 3.200",
      match: 89,
      posted: "1 semana atrás",
      tags: ["Figma", "Canva", "Instagram"],
    },
    {
      title: "Analista de Dados Agrícolas",
      company: "AgroForte Paracatu",
      location: "Paracatu, MG - Híbrido",
      type: "CLT",
      salary: "R$ 4.000 - R$ 6.000",
      match: 87,
      posted: "3 dias atrás",
      tags: ["Power BI", "Excel", "SQL"],
    },
    {
      title: "Analista de Infraestrutura e Redes",
      company: "Paracatu Net",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 3.500 - R$ 5.000",
      match: 82,
      posted: "5 dias atrás",
      tags: ["Redes", "Linux", "MikroTik"],
    },
    {
      title: "Engenheira Agrônoma",
      company: "AgroForte Paracatu",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 5.000 - R$ 7.500",
      match: 85,
      posted: "4 dias atrás",
      tags: ["Agronomia", "Visita a Campo", "Mapeamento"],
    },
  ];

  const allJobs = [
    ...recommendedJobs,
    {
      title: "Desenvolvedora Backend Júnior",
      company: "GoldTech Soluções",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 3.000 - R$ 4.500",
      match: 76,
      posted: "1 semana atrás",
      tags: ["Node.js", "SQL", "APIs"],
    },
    {
      title: "Analista de Suporte de Sistemas (ERP)",
      company: "Cooperativa Agropecuária (COOPA)",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 2.800 - R$ 4.200",
      match: 72,
      posted: "2 semanas atrás",
      tags: ["ERP", "Protheus", "Suporte"],
    },
    {
      title: "Analista de TI (Infraestrutura)",
      company: "Mineração Vale do Ouro",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 5.500 - R$ 8.000",
      match: 68,
      posted: "3 semanas atrás",
      tags: ["Suporte", "Servidores", "Segurança"],
    },
    {
      title: "Analista de Recursos Humanos (RH)",
      company: "Mineração Vale do Ouro",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 3.200 - R$ 4.500",
      match: 80,
      posted: "1 semana atrás",
      tags: ["Recrutamento", "Treinamento", "Departamento Pessoal"],
    },
    {
      title: "Auxiliar Administrativo e Financeiro",
      company: "Cooperativa Agropecuária (COOPA)",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 1.800 - R$ 2.600",
      match: 75,
      posted: "6 dias atrás",
      tags: ["Administração", "Faturamento", "Excel"],
    },
  ];

  const appliedJobs = [
    {
      title: "Desenvolvedora Web Pleno",
      company: "Sistemas Paracatu",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 4.500 - R$ 6.500",
      match: 94,
      posted: "2 dias atrás",
      tags: ["React", "HTML/CSS", "WordPress"],
      appliedDate: "Há 1 dia",
      status: "Em análise",
    },
    {
      title: "Designer Digital e Social Media",
      company: "GoldTech Soluções",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 2.200 - R$ 3.200",
      match: 89,
      posted: "1 semana atrás",
      tags: ["Figma", "Canva", "Instagram"],
      appliedDate: "Há 3 dias",
      status: "Em análise",
    },
    {
      title: "Analista de Dados Agrícolas",
      company: "AgroForte Paracatu",
      location: "Paracatu, MG - Híbrido",
      type: "CLT",
      salary: "R$ 4.000 - R$ 6.000",
      match: 87,
      posted: "3 dias atrás",
      tags: ["Power BI", "Excel", "SQL"],
      appliedDate: "Há 2 dias",
      status: "Visualizado",
    },
    {
      title: "Desenvolvedora Backend Júnior",
      company: "GoldTech Soluções",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 3.000 - R$ 4.500",
      match: 76,
      posted: "1 semana atrás",
      tags: ["Node.js", "SQL", "APIs"],
      appliedDate: "Há 5 dias",
      status: "Em análise",
    },
    {
      title: "Analista de TI (Infraestrutura)",
      company: "Mineração Vale do Ouro",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 5.500 - R$ 8.000",
      match: 68,
      posted: "3 semanas atrás",
      tags: ["Suporte", "Servidores", "Segurança"],
      appliedDate: "Há 1 semana",
      status: "Não visualizado",
    },
    {
      title: "Desenvolvedora Full Stack",
      company: "Sistemas Paracatu",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 5.000 - R$ 7.000",
      match: 81,
      posted: "1 mês atrás",
      tags: ["React", "Node.js", "PostgreSQL"],
      appliedDate: "Há 2 semanas",
      status: "Encerrada",
    },
    {
      title: "Analista de Suporte de Sistemas (ERP)",
      company: "Cooperativa Agropecuária (COOPA)",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 2.800 - R$ 4.200",
      match: 78,
      posted: "1 mês atrás",
      tags: ["ERP", "Protheus", "Suporte"],
      appliedDate: "Há 3 semanas",
      status: "Encerrada",
    },
    {
      title: "Analista de Infraestrutura e Redes",
      company: "Paracatu Net",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 3.500 - R$ 5.000",
      match: 84,
      posted: "1 mês atrás",
      tags: ["Redes", "Linux", "MikroTik"],
      appliedDate: "Há 1 mês",
      status: "Encerrada",
    },
    {
      title: "Auxiliar Administrativo e Financeiro",
      company: "Cooperativa Agropecuária (COOPA)",
      location: "Paracatu, MG",
      type: "CLT",
      salary: "R$ 1.800 - R$ 2.600",
      match: 75,
      posted: "6 dias atrás",
      tags: ["Administração", "Faturamento", "Excel"],
      appliedDate: "Há 4 dias",
      status: "Visualizado",
    },
  ];

  const jobs = viewMode === 'recommended' ? recommendedJobs : viewMode === 'applied' ? appliedJobs : allJobs;

  return (
    <DashboardLayout
      userType="candidata"
      userName="Marina Silva"
      userImage="https://images.unsplash.com/photo-1758876017874-1332333026b2?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col xl:flex-row gap-6 justify-between items-start xl:items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
              {viewMode === 'recommended' ? 'Vagas Recomendadas' : viewMode === 'applied' ? 'Minhas Candidaturas' : 'Todas as Vagas'}
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              {viewMode === 'recommended'
                ? 'Oportunidades escolhidas pela inteligência artificial com base no seu perfil.'
                : viewMode === 'applied'
                ? 'Acompanhe o status das vagas para as quais você se candidatou.'
                : 'Explore todas as vagas disponíveis na plataforma.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
            {/* Toggle View Mode */}
            <div className="flex p-1 bg-white rounded-xl shadow-sm border border-[#FDF0F4] overflow-x-auto max-w-full scrollbar-none">
              <button
                onClick={() => setViewMode('recommended')}
                className={`flex items-center gap-2 py-2 px-3 sm:py-2.5 sm:px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  viewMode === 'recommended'
                    ? 'bg-[#FEF7F9] text-[#AC1634] border border-[#AC1634]/20'
                    : 'text-slate-500 hover:text-[#3E0014]'
                }`}
              >
                <Sparkles className="w-4 h-4 shrink-0" />
                Recomendadas
              </button>
              <button
                onClick={() => setViewMode('all')}
                className={`flex items-center gap-2 py-2 px-3 sm:py-2.5 sm:px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  viewMode === 'all'
                    ? 'bg-[#FEF7F9] text-[#AC1634] border border-[#AC1634]/20'
                    : 'text-slate-500 hover:text-[#3E0014]'
                }`}
              >
                <List className="w-4 h-4 shrink-0" />
                Todas
              </button>
              <button
                onClick={() => setViewMode('applied')}
                className={`flex items-center gap-2 py-2 px-3 sm:py-2.5 sm:px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  viewMode === 'applied'
                    ? 'bg-[#FEF7F9] text-[#AC1634] border border-[#AC1634]/20'
                    : 'text-slate-500 hover:text-[#3E0014]'
                }`}
              >
                <Send className="w-4 h-4 shrink-0" />
                Candidaturas
              </button>
            </div>

            <button className="flex items-center justify-center gap-2 bg-white text-slate-700 hover:bg-slate-50 font-semibold px-5 py-2.5 rounded-xl border border-slate-200 shadow-sm transition-all active:scale-95 w-full sm:w-auto text-sm">
              Filtros
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              label: viewMode === 'recommended' ? 'Vagas Recomendadas' : viewMode === 'applied' ? 'Candidaturas Ativas' : 'Total de Vagas',
              value: viewMode === 'recommended' ? '24' : viewMode === 'applied' ? '5' : '31',
              color: 'text-[#3E0014]',
              icon: <Sparkles className="w-5 h-5" />,
            },
            {
              label: viewMode === 'applied' ? 'Candidaturas Encerradas' : 'Candidaturas Enviadas',
              value: viewMode === 'applied' ? '3' : '8',
              color: 'text-[#5B002C]',
              icon: <Send className="w-5 h-5" />,
            },
            {
              label: 'Chance Média',
              value: viewMode === 'recommended' ? '88%' : viewMode === 'applied' ? '85%' : '79%',
              color: 'text-[#AC1634]',
              icon: <Target className="w-5 h-5" />,
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-4 border border-[#FDF0F4] shadow-sm flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-slate-500 text-xs sm:text-sm font-medium">{stat.label}</p>
                <div className="w-8 h-8 bg-[#FEF7F9] rounded-lg flex items-center justify-center text-[#AC1634] shrink-0">
                  {stat.icon}
                </div>
              </div>
              <h3 className={`text-2xl sm:text-3xl font-black ${stat.color}`}>{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {jobs.map((job, idx) => {
            const isEncerrada = (job as any).status === 'Encerrada';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`bg-white rounded-2xl p-4 sm:p-6 border shadow-sm transition-all ${
                  isEncerrada
                    ? 'opacity-50 border-slate-200'
                    : 'border-[#FDF0F4] hover:shadow-md'
                }`}
              >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#3E0014] mb-1 sm:mb-2">{job.title}</h3>
                  <p className="text-slate-600 font-semibold text-sm mb-3">{job.company}</p>

                  <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs sm:text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {job.posted}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-[#FEF7F9] text-[#5B002C] rounded-lg text-xs font-semibold border border-[#FDF0F4]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-base sm:text-lg font-bold text-[#3E0014]">{job.salary}</p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-center justify-between sm:justify-start gap-4 sm:gap-1.5 bg-[#FEF7F9] sm:bg-transparent p-3 sm:p-0 rounded-xl">
                  <div className="bg-gradient-to-br from-[#5B002C] to-[#AC1634] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl shadow-md flex sm:flex-col items-center justify-center gap-1 sm:gap-0 sm:mb-2 w-full sm:w-24">
                    <span className="text-2xl sm:text-3xl font-black">{job.match}%</span>
                    <p className="text-[10px] sm:text-xs uppercase font-bold opacity-90">Chance</p>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 text-xs sm:text-sm font-semibold whitespace-nowrap pr-2 sm:pr-0">
                    <TrendingUp className="w-4 h-4" /> Alto
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-[#FDF0F4]">
                {viewMode === 'applied' ? (
                  isEncerrada ? (
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <p className="text-xs sm:text-sm text-slate-400 font-medium">Processo encerrado</p>
                        <p className="text-xs sm:text-sm text-slate-500 font-semibold">{(job as any).appliedDate}</p>
                      </div>
                      <div className="px-4 py-2 bg-slate-100 text-slate-500 rounded-lg border border-slate-200 self-start sm:self-auto">
                        <p className="text-xs sm:text-sm font-bold">Encerrada</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium">Candidatura enviada</p>
                        <p className="text-xs sm:text-sm text-slate-700 font-semibold">{(job as any).appliedDate}</p>
                      </div>
                      <div className="px-4 py-2 bg-[#FEF7F9] text-[#AC1634] rounded-lg border border-[#AC1634]/20 self-start sm:self-auto">
                        <p className="text-xs sm:text-sm font-bold">{(job as any).status}</p>
                      </div>
                    </div>
                  )
                ) : (
                  <>
                    <button className="flex-1 bg-[#3E0014] text-white hover:bg-[#2C000E] font-semibold px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-sm text-xs sm:text-sm transition-all active:scale-95">
                      Candidatar-se
                    </button>
                    <button className="bg-white text-[#3E0014] hover:bg-slate-50 font-semibold px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-slate-200 shadow-sm transition-all active:scale-95">
                      <BookmarkPlus className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
