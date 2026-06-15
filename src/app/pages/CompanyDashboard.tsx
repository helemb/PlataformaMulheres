import { motion } from "motion/react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Briefcase, Users, BarChart3, Settings, TrendingUp, Plus, Search, Filter, MoreHorizontal, CheckCircle2, Clock, Play } from "lucide-react";
import { Link } from "react-router";

export function CompanyDashboard() {
  const sidebarItems = [
    { name: "Vagas Ativas", href: "/dashboard/empresa", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Banco de Talentos", href: "/dashboard/empresa/talentos", icon: <Users className="w-5 h-5" /> },
    { name: "Analytics IA", href: "/dashboard/empresa/analytics", icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Configurações", href: "/dashboard/empresa/config", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <DashboardLayout
      userType="empresa"
      userName="TechNova Corp"
      userImage="https://images.unsplash.com/photo-1758876017874-1332333026b2?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-8">
        
        {/* Header Actions & Metrics */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Visão Geral</h2>
            <p className="text-slate-500 mt-1">Acompanhe o desempenho das suas vagas exclusivas.</p>
          </div>
          
          <Link
            to="/dashboard/empresa/nova-vaga"
            className="flex items-center gap-2 bg-[#3E0014] text-white hover:bg-[#2C000E] font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all active:scale-95"
          >
            <Plus className="w-5 h-5" /> Nova Vaga
          </Link>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Vagas Ativas", value: "12", trend: "+2", trendColor: "text-emerald-500", icon: <Briefcase />, bg: "bg-[#FEF7F9]", color: "text-[#3E0014]" },
            { title: "Candidaturas", value: "486", trend: "+124", trendColor: "text-emerald-500", icon: <Users />, bg: "bg-[#FFFBFC]", color: "text-[#5B002C]" },
            { title: "Combinações Geradas (IA)", value: "85%", trend: "Alto", trendColor: "text-emerald-500", icon: <TrendingUp />, bg: "bg-[#FDF0F4]", color: "text-[#AC1634]" },
          ].map((metric, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm flex items-start justify-between"
            >
              <div>
                <p className="text-slate-500 font-medium mb-1">{metric.title}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-3xl font-black text-[#3E0014]">{metric.value}</h3>
                  <span className={`text-sm font-bold ${metric.trendColor} bg-slate-50 px-2 py-0.5 rounded-md`}>{metric.trend}</span>
                </div>
              </div>
              <div className={`w-12 h-12 rounded-xl ${metric.bg} flex items-center justify-center ${metric.color}`}>
                {metric.icon}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Vagas Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-[#FDF0F4] shadow-sm overflow-hidden">
              <div className="p-6 border-b border-[#FFFBFC] flex justify-between items-center">
                <h3 className="text-lg font-bold text-[#3E0014]">Vagas Recentes</h3>
                <div className="flex gap-2">
                  <button className="p-2 text-slate-400 hover:text-[#5B002C] bg-[#FFFBFC] hover:bg-[#FEF7F9] rounded-lg transition-colors"><Search className="w-5 h-5" /></button>
                  <button className="p-2 text-slate-400 hover:text-[#5B002C] bg-[#FFFBFC] hover:bg-[#FEF7F9] rounded-lg transition-colors"><Filter className="w-5 h-5" /></button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left">
                  <thead className="bg-[#FFFBFC] text-slate-500 text-xs uppercase font-bold tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Vaga</th>
                      <th className="px-6 py-4">Modalidade</th>
                      <th className="px-6 py-4">Compatibilidade Média</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#FFFBFC]">
                    {[
                      { role: "Desenvolvedora Web Pleno", dept: "Desenvolvimento/TI", mode: "Presencial", match: "94%", status: "Ativa", statusColor: "text-emerald-600 bg-emerald-50", icon: <CheckCircle2 className="w-3 h-3" /> },
                      { role: "Analista de Dados Agrícolas", dept: "Dados/Agro", mode: "Híbrido", match: "87%", status: "Em andamento", statusColor: "text-[#AC1634] bg-[#FEF7F9]", icon: <Clock className="w-3 h-3" /> },
                      { role: "Designer Digital e Social Media", dept: "Design/Marketing", mode: "Presencial", match: "89%", status: "Ativa", statusColor: "text-emerald-600 bg-emerald-50", icon: <CheckCircle2 className="w-3 h-3" /> },
                      { role: "Engenheira Agrônoma", dept: "Campo/Agronomia", mode: "Presencial", match: "85%", status: "Ativa", statusColor: "text-emerald-600 bg-emerald-50", icon: <CheckCircle2 className="w-3 h-3" /> },
                      { role: "Analista de Suporte de Sistemas (ERP)", dept: "Suporte/Sistemas", mode: "Presencial", match: "78%", status: "Pausada", statusColor: "text-slate-600 bg-slate-100", icon: <Play className="w-3 h-3 rotate-90" /> },
                    ].map((job, idx) => (
                      <tr key={idx} className="hover:bg-[#FFFBFC] transition-colors">
                        <td className="px-6 py-4">
                          <p className="font-bold text-[#3E0014] text-sm">{job.role}</p>
                          <p className="text-xs text-slate-500">{job.dept}</p>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-slate-600">{job.mode}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-[#FDF0F4] rounded-full h-1.5 max-w-[60px]">
                              {job.match !== "N/A" && <div className="bg-[#5B002C] h-1.5 rounded-full" style={{ width: job.match }}></div>}
                            </div>
                            <span className="text-sm font-bold text-slate-700">{job.match}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${job.statusColor}`}>
                            {job.icon} {job.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-[#5B002C]"><MoreHorizontal className="w-5 h-5" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Candidatas em Destaque (Ranking IA) */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#3E0014] to-[#2C000E] rounded-2xl p-6 shadow-xl text-white h-full relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#5B002C]/40 rounded-bl-full blur-xl"></div>
               
               <div className="flex justify-between items-center mb-6 relative z-10">
                 <h3 className="text-lg font-bold flex items-center gap-2">
                   <TrendingUp className="w-5 h-5 text-[#AC1634]" /> Ordem de Afinidade (IA)
                 </h3>
                 <span className="text-xs font-semibold bg-white/10 px-2 py-1 rounded-md">Vaga: Analista de Dados...</span>
               </div>
               
               <p className="text-slate-300 text-sm mb-6 relative z-10">
                 Candidatas que mais se parecem com o que a vaga e a empresa procuram.
               </p>

               <div className="space-y-4 relative z-10">
                 {[
                   { name: "Carolina Alves", role: "Analista de Dados Agrícolas Sênior", match: 98, img: "https://images.unsplash.com/photo-1769636929388-99eff95d3bf1?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=100&h=100&q=80" },
                   { name: "Juliana Santos", role: "Engenheira Agrônoma", match: 95, img: "https://images.unsplash.com/photo-1609371497456-3a55a205d5eb?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=100&h=100&q=80" },
                   { name: "Beatriz Lima", role: "Analista de Dados Agrícolas", match: 91, img: "https://images.unsplash.com/photo-1758874384556-cc2b9dcbb6e0?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=100&h=100&q=80" },
                 ].map((candidate, idx) => (
                   <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
                     <div className="flex items-center gap-3">
                       <div className="relative">
                         <img src={candidate.img} alt={candidate.name} className="w-10 h-10 rounded-full object-cover border-2 border-transparent group-hover:border-[#AC1634] transition-colors" />
                         {idx === 0 && <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-[#3E0014] flex items-center justify-center text-[10px] font-black text-[#3E0014]">1</div>}
                       </div>
                       <div>
                         <h4 className="font-bold text-white text-sm">{candidate.name}</h4>
                         <p className="text-xs text-slate-300">{candidate.role}</p>
                       </div>
                     </div>
                     <div className="text-right">
                       <span className="text-[#AC1634] font-black text-sm">{candidate.match}%</span>
                       <p className="text-[10px] text-slate-400 uppercase font-bold">Compatibilidade</p>
                     </div>
                   </div>
                 ))}
               </div>
               
               <Link
                 to="/dashboard/empresa/talentos"
                 className="block w-full mt-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-semibold text-white transition-colors relative z-10 text-center"
               >
                 Ver todas as candidatas
               </Link>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
