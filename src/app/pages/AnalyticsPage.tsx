import { motion } from "motion/react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Briefcase, Users, BarChart3, Settings, TrendingUp, TrendingDown, Activity } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

export function AnalyticsPage() {
  const sidebarItems = [
    { name: "Vagas Ativas", href: "/dashboard/empresa", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Banco de Talentos", href: "/dashboard/empresa/talentos", icon: <Users className="w-5 h-5" /> },
    { name: "Análise de Resultados", href: "/dashboard/empresa/analytics", icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Configurações", href: "/dashboard/empresa/config", icon: <Settings className="w-5 h-5" /> },
  ];

  const monthlyData = [
    { id: 'jan', month: "Jan", candidaturas: 65, matches: 48 },
    { id: 'fev', month: "Fev", candidaturas: 82, matches: 61 },
    { id: 'mar', month: "Mar", candidaturas: 95, matches: 74 },
    { id: 'abr', month: "Abr", candidaturas: 124, matches: 98 },
    { id: 'mai', month: "Mai", candidaturas: 158, matches: 127 },
  ];

  const matchDistribution = [
    { id: 'match-90-100', name: "90-100%", value: 124, color: "#3E0014" },
    { id: 'match-80-89', name: "80-89%", value: 186, color: "#5B002C" },
    { id: 'match-70-79', name: "70-79%", value: 94, color: "#7A002B" },
    { id: 'match-below-70', name: "Abaixo 70%", value: 82, color: "#E77291" },
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
          <h2 className="text-2xl font-bold text-slate-800">Análise de Resultados</h2>
          <p className="text-slate-500 mt-1">Informações inteligentes sobre contratações e desempenho.</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Grau de Afinidade Médio", value: "87.3%", trend: "+5.2%", up: true, icon: <TrendingUp /> },
            { label: "Tempo Médio p/ Contratação", value: "18 dias", trend: "-3 dias", up: true, icon: <Activity /> },
            { label: "Taxa de Conversão", value: "24.8%", trend: "+2.1%", up: true, icon: <TrendingUp /> },
            { label: "Candidatas Ativas", value: "486", trend: "+124", up: true, icon: <Users /> },
          ].map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-slate-500 text-sm font-medium">{kpi.label}</p>
                <div className="w-10 h-10 bg-[#FEF7F9] rounded-xl flex items-center justify-center text-[#AC1634]">
                  {kpi.icon}
                </div>
              </div>
              <h3 className="text-3xl font-black text-[#3E0014] mb-2">{kpi.value}</h3>
              <div className={`flex items-center gap-1 text-sm font-semibold ${kpi.up ? "text-emerald-600" : "text-red-600"}`}>
                {kpi.up ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {kpi.trend}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Candidaturas x Matches */}
          <div className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm">
            <h3 className="text-lg font-bold text-[#3E0014] mb-6">Candidaturas vs Combinações (IA)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#FDF0F4" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #FDF0F4",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                />
                <Line
                  key="line-candidaturas"
                  type="monotone"
                  dataKey="candidaturas"
                  name="Candidaturas"
                  stroke="#7A002B"
                  strokeWidth={3}
                  dot={{ fill: "#7A002B", r: 5 }}
                  isAnimationActive={false}
                />
                <Line
                  key="line-matches"
                  type="monotone"
                  dataKey="matches"
                  name="Combinações"
                  stroke="#AC1634"
                  strokeWidth={3}
                  dot={{ fill: "#AC1634", r: 5 }}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Match Distribution */}
          <div className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm">
            <h3 className="text-lg font-bold text-[#3E0014] mb-6">Distribuição de Afinidade (IA)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={matchDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  isAnimationActive={false}
                >
                  {matchDistribution.map((entry) => (
                    <Cell key={entry.id} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Performing Jobs */}
        <div className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm">
          <h3 className="text-lg font-bold text-[#3E0014] mb-6">Vagas com Melhor Desempenho</h3>
          <div className="space-y-4">
            {[
              { job: "Desenvolvedora Web Pleno", applications: 124, matches: 98, rate: "79%" },
              { job: "Analista de Dados Agrícolas", applications: 98, matches: 87, rate: "89%" },
              { job: "Designer Digital e Social Media", applications: 86, matches: 68, rate: "79%" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-[#FFFBFC] rounded-xl border border-[#FDF0F4]">
                <div className="flex-1">
                  <h4 className="font-bold text-[#3E0014] mb-1">{item.job}</h4>
                  <p className="text-sm text-slate-500">
                    {item.applications} candidaturas • {item.matches} combinações
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-[#AC1634]">{item.rate}</span>
                  <p className="text-xs text-slate-500 font-semibold">Compatibilidade Média</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
