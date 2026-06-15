import { motion } from "motion/react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Briefcase, Users, BarChart3, Settings, MapPin, DollarSign, Calendar, FileText, Sparkles, Save } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export function NewJobPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    workMode: "remoto",
    contractType: "CLT",
    salaryMin: "",
    salaryMax: "",
    experienceLevel: "pleno",
    description: "",
    requirements: "",
    benefits: "",
    deadline: "",
  });

  const sidebarItems = [
    { name: "Vagas Ativas", href: "/dashboard/empresa", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Banco de Talentos", href: "/dashboard/empresa/talentos", icon: <Users className="w-5 h-5" /> },
    { name: "Analytics IA", href: "/dashboard/empresa/analytics", icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Configurações", href: "/dashboard/empresa/config", icon: <Settings className="w-5 h-5" /> },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria feita a chamada para a API
    console.log("Nova vaga:", formData);
    navigate("/dashboard/empresa");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <DashboardLayout
      userType="empresa"
      userName="TechNova Corp"
      userImage="https://images.unsplash.com/photo-1758876017874-1332333026b2?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Criar Nova Vaga</h2>
          <p className="text-slate-500 mt-1">Preencha os detalhes e nossa IA encontrará as melhores candidatas.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informações Básicas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FEF7F9] rounded-xl flex items-center justify-center text-[#AC1634]">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#3E0014]">Informações Básicas</h3>
                <p className="text-sm text-slate-500">Detalhes principais da vaga</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Título da Vaga *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Ex: Desenvolvedora Web Pleno"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Departamento *</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  placeholder="Ex: Engenharia"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nível de Experiência *</label>
                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all"
                >
                  <option value="estagio">Estágio</option>
                  <option value="junior">Júnior</option>
                  <option value="pleno">Pleno</option>
                  <option value="senior">Sênior</option>
                  <option value="especialista">Especialista</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Localização e Modalidade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FEF7F9] rounded-xl flex items-center justify-center text-[#AC1634]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#3E0014]">Localização e Modalidade</h3>
                <p className="text-sm text-slate-500">Onde e como será o trabalho</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Localização</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Ex: São Paulo, SP"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Modalidade *</label>
                <select
                  name="workMode"
                  value={formData.workMode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all"
                >
                  <option value="remoto">Remoto</option>
                  <option value="presencial">Presencial</option>
                  <option value="hibrido">Híbrido</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Tipo de Contrato *</label>
                <select
                  name="contractType"
                  value={formData.contractType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all"
                >
                  <option value="CLT">CLT</option>
                  <option value="PJ">PJ</option>
                  <option value="Temporário">Temporário</option>
                  <option value="Estágio">Estágio</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Remuneração */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FEF7F9] rounded-xl flex items-center justify-center text-[#AC1634]">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#3E0014]">Remuneração</h3>
                <p className="text-sm text-slate-500">Faixa salarial da vaga</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Salário Mínimo (R$)</label>
                <input
                  type="number"
                  name="salaryMin"
                  value={formData.salaryMin}
                  onChange={handleChange}
                  placeholder="Ex: 8000"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Salário Máximo (R$)</label>
                <input
                  type="number"
                  name="salaryMax"
                  value={formData.salaryMax}
                  onChange={handleChange}
                  placeholder="Ex: 12000"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all"
                />
              </div>
            </div>
          </motion.div>

          {/* Descrição e Requisitos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FEF7F9] rounded-xl flex items-center justify-center text-[#AC1634]">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#3E0014]">Descrição e Requisitos</h3>
                <p className="text-sm text-slate-500">Detalhes sobre a vaga e o que você busca</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Descrição da Vaga *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Descreva as responsabilidades, desafios e o que torna essa vaga especial..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Requisitos e Qualificações *</label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Liste as habilidades técnicas, experiência e conhecimentos necessários..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Benefícios</label>
                <textarea
                  name="benefits"
                  value={formData.benefits}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Liste os benefícios oferecidos (plano de saúde, vale-refeição, home office, etc)..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all resize-none"
                />
              </div>
            </div>
          </motion.div>

          {/* Prazo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FEF7F9] rounded-xl flex items-center justify-center text-[#AC1634]">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#3E0014]">Prazo de Candidatura</h3>
                <p className="text-sm text-slate-500">Até quando a vaga receberá candidaturas</p>
              </div>
            </div>

            <div className="max-w-md">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Data de Encerramento</label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all"
              />
            </div>
          </motion.div>

          {/* IA Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-[#3E0014] to-[#5B002C] rounded-2xl p-6 text-white shadow-xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-[#E77291]" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Nossa inteligência artificial está pronta para ajudar!</h3>
                <p className="text-slate-200 leading-relaxed">
                  Assim que você publicar essa vaga, nossa inteligência artificial começará a analisar milhares de
                  perfis para encontrar as candidatas com maior compatibilidade. Você receberá notificações em tempo
                  real de afinidade acima de 85%.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4">
            <button
              type="button"
              onClick={() => navigate("/dashboard/empresa")}
              className="px-8 py-3 bg-white text-slate-700 hover:bg-slate-50 font-semibold rounded-xl border border-slate-200 shadow-sm transition-all active:scale-95"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="px-8 py-3 bg-white text-[#3E0014] hover:bg-slate-50 font-semibold rounded-xl border border-slate-200 shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" /> Salvar Rascunho
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-[#3E0014] text-white hover:bg-[#2C000E] font-semibold rounded-xl shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" /> Publicar Vaga
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
