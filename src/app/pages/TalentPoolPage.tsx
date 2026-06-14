import { motion } from "motion/react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Briefcase, Users, BarChart3, Settings, Search, Filter, Star, MapPin, Briefcase as BriefcaseIcon, Mail, Award } from "lucide-react";

export function TalentPoolPage() {
  const sidebarItems = [
    { name: "Vagas Ativas", href: "/dashboard/empresa", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Banco de Talentos", href: "/dashboard/empresa/talentos", icon: <Users className="w-5 h-5" /> },
    { name: "Analytics IA", href: "/dashboard/empresa/analytics", icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Configurações", href: "/dashboard/empresa/config", icon: <Settings className="w-5 h-5" /> },
  ];

  const talents = [
    {
      name: "Carolina Alves",
      role: "Analista de Dados Agrícolas Sênior",
      location: "Paracatu, MG",
      experience: "8 anos",
      skills: ["Power BI", "Excel Avançado", "SQL", "Análise de Safra"],
      match: 98,
      img: "https://images.unsplash.com/photo-1769636929388-99eff95d3bf1?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80",
      premium: true,
    },
    {
      name: "Juliana Santos",
      role: "Engenheira Agrônoma",
      location: "Paracatu, MG",
      experience: "6 anos",
      skills: ["Mapeamento", "Planejamento de Safra", "Consultoria", "Agro"],
      match: 95,
      img: "https://images.unsplash.com/photo-1609371497456-3a55a205d5eb?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80",
      premium: true,
    },
    {
      name: "Beatriz Lima",
      role: "Analista de Dados Agrícolas",
      location: "Paracatu, MG",
      experience: "4 anos",
      skills: ["Power BI", "Excel", "Estatística", "Dashboard"],
      match: 91,
      img: "https://images.unsplash.com/photo-1758874384556-cc2b9dcbb6e0?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80",
      premium: false,
    },
    {
      name: "Amanda Costa",
      role: "Auxiliar de TI e Banco de Dados",
      location: "Paracatu, MG",
      experience: "5 anos",
      skills: ["SQL", "Suporte", "Windows Server", "Planilhas"],
      match: 89,
      img: "https://images.unsplash.com/photo-1767875635163-57c7efa96e7f?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80",
      premium: false,
    },
  ];

  return (
    <DashboardLayout
      userType="empresa"
      userName="TechNova Corp"
      userImage="https://images.unsplash.com/photo-1758876017874-1332333026b2?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Banco de Talentos</h2>
            <p className="text-slate-500 mt-1">Explore candidatas qualificadas para suas vagas.</p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white text-slate-700 hover:bg-slate-50 font-semibold px-5 py-2.5 rounded-xl border border-slate-200 shadow-sm transition-all active:scale-95">
              <Filter className="w-5 h-5" /> Filtros
            </button>
            <button className="flex items-center gap-2 bg-white text-slate-700 hover:bg-slate-50 font-semibold px-5 py-2.5 rounded-xl border border-slate-200 shadow-sm transition-all active:scale-95">
              <Search className="w-5 h-5" /> Buscar
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Total de Candidatas", value: "2.847", color: "text-[#3E0014]", bg: "bg-[#FEF7F9]" },
            { label: "Afinidade +90%", value: "486", color: "text-[#5B002C]", bg: "bg-[#FFFBFC]" },
            { label: "Novas esta semana", value: "124", color: "text-[#AC1634]", bg: "bg-[#FDF0F4]" },
            { label: "Favoritas", value: "38", color: "text-[#7A002B]", bg: "bg-[#FEF7F9]" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`${stat.bg} rounded-2xl p-6 border border-[#FDF0F4] shadow-sm`}
            >
              <p className="text-slate-600 text-sm font-medium mb-1">{stat.label}</p>
              <h3 className={`text-3xl font-black ${stat.color}`}>{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Talents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {talents.map((talent, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-[#FDF0F4] shadow-sm hover:shadow-md transition-all overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={talent.img}
                      alt={talent.name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-[#FDF0F4] group-hover:border-[#AC1634] transition-colors"
                    />
                    {talent.premium && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                        <Star className="w-3 h-3 text-yellow-700 fill-yellow-700" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-[#3E0014] mb-1">{talent.name}</h3>
                    <p className="text-slate-600 font-medium mb-2">{talent.role}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {talent.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <BriefcaseIcon className="w-4 h-4" /> {talent.experience}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="bg-gradient-to-br from-[#5B002C] to-[#AC1634] text-white px-4 py-2 rounded-xl shadow-md">
                      <span className="text-2xl font-black">{talent.match}%</span>
                      <p className="text-xs uppercase font-bold opacity-90">Afinidade</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-slate-500 font-semibold mb-2 uppercase">Habilidades principais</p>
                  <div className="flex flex-wrap gap-2">
                    {talent.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[#FEF7F9] text-[#5B002C] rounded-lg text-sm font-semibold border border-[#FDF0F4]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-[#FDF0F4]">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-[#3E0014] text-white hover:bg-[#2C000E] font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all active:scale-95">
                    <Mail className="w-4 h-4" /> Enviar mensagem
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-white text-[#3E0014] hover:bg-slate-50 font-semibold px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm transition-all active:scale-95">
                    <Award className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
