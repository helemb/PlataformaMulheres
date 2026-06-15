import { motion } from "motion/react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { UserCircle, Briefcase, Target, Users, Settings, Brain, CheckCircle2, Play, Clock } from "lucide-react";

export function CandidateTestsPage() {
  const sidebarItems = [
    { name: "Meu Perfil", href: "/dashboard/candidata", icon: <UserCircle className="w-5 h-5" /> },
    { name: "Vagas", href: "/dashboard/candidata/vagas", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Testes e IA", href: "/dashboard/candidata/testes", icon: <Target className="w-5 h-5" /> },
    { name: "Comunidade", href: "/dashboard/candidata/comunidade", icon: <Users className="w-5 h-5" /> },
    { name: "Configurações", href: "/dashboard/candidata/config", icon: <Settings className="w-5 h-5" /> },
  ];

  const tests = [
    {
      title: "Avaliação de Habilidades Pessoais (Soft Skills)",
      description: "Teste de personalidade e jeito de lidar com as pessoas",
      duration: "15 min",
      status: "completed",
      score: 92,
    },
    {
      title: "Teste de Lógica",
      description: "Raciocínio lógico e resolução de problemas",
      duration: "20 min",
      status: "completed",
      score: 85,
    },
    {
      title: "Mapeamento de características de trabalho",
      description: "Entenda suas principais forças no ambiente profissional",
      duration: "10 min",
      status: "pending",
      score: null,
    },
    {
      title: "Teste de Criação de Sites (Frontend)",
      description: "Conhecimentos práticos de programação de telas (React, TypeScript e CSS)",
      duration: "45 min",
      status: "pending",
      score: null,
    },
  ];

  return (
    <DashboardLayout
      userType="candidata"
      userName="Marina Silva"
      userImage="https://images.unsplash.com/photo-1758876017874-1332333026b2?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Testes e Avaliações IA</h2>
          <p className="text-slate-500 mt-1">Complete os testes para melhorar seu perfil e aumentar suas chances.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Testes Concluídos", value: "2/4", color: "text-[#3E0014]" },
            { label: "Pontuação Média", value: "88.5", color: "text-[#5B002C]" },
            { label: "Nível de Perfil", value: "Avançado", color: "text-[#AC1634]" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
            >
              <p className="text-slate-500 text-sm font-medium mb-1">{stat.label}</p>
              <h3 className={`text-3xl font-black ${stat.color}`}>{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* AI Insights */}
        <div className="bg-gradient-to-br from-[#3E0014] to-[#5B002C] rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Brain className="w-6 h-6 text-[#E77291]" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Conselhos da Inteligência Artificial sobre seu perfil</h3>
              <p className="text-slate-200 leading-relaxed">
                Sua facilidade em resolver problemas e raciocínio rápido estão muito boas. Recomendamos
                concluir o teste de Criação de Sites (Frontend) para aumentar muito suas chances em vagas de desenvolvimento de telas.
              </p>
            </div>
          </div>
        </div>

        {/* Tests List */}
        <div className="space-y-4">
          {tests.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-[#3E0014]">{test.title}</h3>
                    {test.status === "completed" && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50">
                        <CheckCircle2 className="w-3 h-3" /> Concluído
                      </span>
                    )}
                    {test.status === "pending" && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100">
                        <Clock className="w-3 h-3" /> Pendente
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 mb-3">{test.description}</p>
                  <p className="text-sm text-slate-500 font-medium">Duração: {test.duration}</p>
                </div>

                <div className="text-right flex flex-col items-end gap-3">
                  {test.score !== null ? (
                    <div className="bg-gradient-to-br from-[#5B002C] to-[#AC1634] text-white px-6 py-3 rounded-xl shadow-md">
                      <span className="text-3xl font-black">{test.score}</span>
                      <p className="text-xs uppercase font-bold opacity-90">Pontos</p>
                    </div>
                  ) : (
                    <button className="flex items-center gap-2 bg-[#3E0014] text-white hover:bg-[#2C000E] font-semibold px-6 py-3 rounded-xl shadow-sm transition-all active:scale-95">
                      <Play className="w-4 h-4" /> Iniciar Teste
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
