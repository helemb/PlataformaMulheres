import { motion } from "motion/react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { UserCircle, Briefcase, Target, Users, Settings, User, Bell, Shield, Mail, Pencil } from "lucide-react";

export function CandidateSettingsPage() {
  const sidebarItems = [
    { name: "Meu Perfil", href: "/dashboard/candidata", icon: <UserCircle className="w-5 h-5" /> },
    { name: "Vagas", href: "/dashboard/candidata/vagas", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Testes e IA", href: "/dashboard/candidata/testes", icon: <Target className="w-5 h-5" /> },
    { name: "Comunidade", href: "/dashboard/candidata/comunidade", icon: <Users className="w-5 h-5" /> },
    { name: "Configurações", href: "/dashboard/candidata/config", icon: <Settings className="w-5 h-5" /> },
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
          <h2 className="text-2xl font-bold text-slate-800">Configurações</h2>
          <p className="text-slate-500 mt-1">Gerencie suas preferências e privacidade.</p>
        </div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 gap-6">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FEF7F9] rounded-xl flex items-center justify-center text-[#AC1634]">
                <User className="w-6 h-6" />
              </div>
              <div>

                <h3 className="text-lg font-bold text-[#3E0014]">Informações Pessoais</h3>
                <p className="text-sm text-slate-500">Atualize seus dados básicos</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-end items-center">
                <button className="text-[#AC1634] hover:text-[#7A002B] font-semibold text-sm inline-flex items-center gap-1"><Pencil className="w-3.5 h-3.5" />Editar</button>
              </div>
              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-2">Nome Completo</label>
                <input
                  type="text"
                  defaultValue="Marina Silva"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">E-mail</label>
                <input
                  type="email"
                  defaultValue="marina.silva@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">LinkedIn</label>
                <input
                  type="text"
                  defaultValue="linkedin.com/in/marina-silva"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Biografia</label>
                <input
                  type="tel"
                  defaultValue="Conte um pouco sobre você!"
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
                { label: "Novas vagas recomendadas", desc: "Receber alertas de vagas com alta chance de contratação" },
                { label: "Mensagens de empresas", desc: "Notificar quando uma empresa entrar em contato" },
                { label: "Atualizações da comunidade", desc: "Posts e comentários de interesse" },
                { label: "E-mail semanal", desc: "Resumo semanal de atividades e oportunidades" },
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
                Gerenciar privacidade do perfil
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
