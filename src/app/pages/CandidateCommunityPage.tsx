import { motion } from "motion/react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { UserCircle, Briefcase, Target, Users, Settings, MessageCircle, Heart, Bookmark, TrendingUp } from "lucide-react";

export function CandidateCommunityPage() {
  const sidebarItems = [
    { name: "Meu Perfil", href: "/dashboard/candidata", icon: <UserCircle className="w-5 h-5" /> },
    { name: "Vagas", href: "/dashboard/candidata/vagas", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Testes e IA", href: "/dashboard/candidata/testes", icon: <Target className="w-5 h-5" /> },
    { name: "Comunidade", href: "/dashboard/candidata/comunidade", icon: <Users className="w-5 h-5" /> },
    { name: "Configurações", href: "/dashboard/candidata/config", icon: <Settings className="w-5 h-5" /> },
  ];

  const posts = [
    {
      author: "Carolina Mendes",
      role: "Gerente de Produtos (Product Manager)",
      avatar: "https://images.unsplash.com/photo-1769636929388-99eff95d3bf1?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=100&h=100&q=80",
      time: "2h atrás",
      content: "Acabei de receber uma proposta incrível através da Iara! O processo foi super transparente e respeitoso. Gratidão a todas que compartilharam dicas aqui! 💜",
      likes: 24,
      comments: 8,
    },
    {
      author: "Juliana Costa",
      role: "Designer de Páginas e Aplicativos (UX Designer)",
      avatar: "https://images.unsplash.com/photo-1609371497456-3a55a205d5eb?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=100&h=100&q=80",
      time: "5h atrás",
      content: "Alguém mais fazendo transição de carreira? Estou migrando de design gráfico para UX e adoraria trocar experiências!",
      likes: 18,
      comments: 12,
    },
    {
      author: "Beatriz Santos",
      role: "Desenvolvedora Frontend (Criação de Telas)",
      avatar: "https://images.unsplash.com/photo-1758874384556-cc2b9dcbb6e0?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=100&h=100&q=80",
      time: "1 dia atrás",
      content: "Dica: Atualizem seus perfis regularmente! A IA da plataforma melhora muito as recomendações quando mantemos tudo atualizado 🚀",
      likes: 42,
      comments: 15,
    },
  ];

  const trending = [
    { tag: "#TransiçãoDeCarreira", posts: 128 },
    { tag: "#TechFeminina", posts: 94 },
    { tag: "#DicasDeEntrevista", posts: 76 },
    { tag: "#PrimeiroEmprego", posts: 63 },
  ];

  return (
    <DashboardLayout
      userType="candidata"
      userName="Marina Silva"
      userImage="https://images.unsplash.com/photo-1758876017874-1332333026b2?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=200&h=200&q=80"
      sidebarItems={sidebarItems}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Comunidade</h2>
            <p className="text-slate-500 mt-1">Conecte-se, compartilhe e aprenda com outras profissionais.</p>
          </div>

          {/* New Post */}
          <div className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm">
            <textarea
              placeholder="Compartilhe sua experiência, dúvida ou conquista..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20 outline-none transition-all resize-none"
              rows={3}
            />
            <div className="flex justify-end mt-3">
              <button className="bg-[#3E0014] text-white hover:bg-[#2C000E] font-semibold px-6 py-2.5 rounded-xl shadow-sm transition-all active:scale-95">
                Publicar
              </button>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <h4 className="font-bold text-[#3E0014]">{post.author}</h4>
                  <p className="text-sm text-slate-500">{post.role} • {post.time}</p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4">{post.content}</p>

              <div className="flex items-center gap-6 pt-4 border-t border-[#FDF0F4]">
                <button className="flex items-center gap-2 text-slate-600 hover:text-[#AC1634] transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="font-semibold">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-600 hover:text-[#AC1634] transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-600 hover:text-[#AC1634] transition-colors ml-auto">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <div className="bg-white rounded-2xl p-6 border border-[#FDF0F4] shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-[#AC1634]" />
              <h3 className="text-lg font-bold text-[#3E0014]">Assuntos do Momento</h3>
            </div>
            <div className="space-y-4">
              {trending.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-[#FFFBFC] rounded-xl hover:bg-[#FEF7F9] transition-colors cursor-pointer">
                  <span className="font-semibold text-[#5B002C]">{item.tag}</span>
                  <span className="text-sm text-slate-500">{item.posts} publicações</span>
                </div>
              ))}
            </div>
          </div>

          {/* Community Stats */}
          <div className="bg-gradient-to-br from-[#3E0014] to-[#5B002C] rounded-2xl p-6 text-white shadow-xl">
            <h3 className="text-lg font-bold mb-4">Sua participação</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Posts publicados</span>
                <span className="text-2xl font-black">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Comentários</span>
                <span className="text-2xl font-black">34</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Conexões</span>
                <span className="text-2xl font-black">87</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
