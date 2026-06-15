import { motion } from "motion/react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Briefcase, Users, BarChart3, Settings, Building2, Bell, Shield } from "lucide-react";

export function CompanySettingsPage() {
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
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Configurações</h2>
          <p className="text-slate-500 mt-1">Gerencie as preferências da sua empresa.</p>
        </div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 gap-6">

          {/* Company Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FEF7F9] rounded-xl flex items-center justify-center text-[#AC1634]">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#3E0014]">Perfil da Empresa</h3>
                <p className="text-sm text-slate-500">Informações básicas e visual da marca</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nome da Empresa</label>
                <input
                  type="text"
                  defaultValue="TechNova Corp"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Setor</label>
                <input
                  type="text"
                  defaultValue="Tecnologia"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Website</label>
                <input
                  type="url"
                  defaultValue="https://technova.com.br"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all"
                />
              </div>
            </div>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FEF7F9] rounded-xl flex items-center justify-center text-[#AC1634]">
                <Bell className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#3E0014]">Notificações</h3>
                <p className="text-sm text-slate-500">Gerencie como você recebe atualizações</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: "Novas candidaturas", desc: "Notificar quando uma candidata se candidatar" },
                { label: "Combinações com alta afinidade", desc: "Alertas de afinidade acima de 90%" },
                { label: "Atualizações de produto", desc: "Novidades e melhorias da plataforma" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-[#FFFBFC] rounded-xl">
                  <div>
                    <h4 className="font-semibold text-[#3E0014]">{item.label}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#AC1634]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#AC1634]"></div>
                  </label>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Privacy & Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FEF7F9] rounded-xl flex items-center justify-center text-[#AC1634]">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#3E0014]">Privacidade e Segurança</h3>
                <p className="text-sm text-slate-500">Proteja seus dados e acesso</p>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 bg-[#FFFBFC] hover:bg-[#FEF7F9] rounded-xl text-[#3E0014] font-semibold transition-colors">
                Gerenciar permissões de equipe
              </button>
            </div>
          </motion.div>

        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="bg-[#3E0014] text-white hover:bg-[#2C000E] font-semibold px-8 py-3 rounded-xl shadow-sm transition-all active:scale-95">
            Salvar alterações
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
