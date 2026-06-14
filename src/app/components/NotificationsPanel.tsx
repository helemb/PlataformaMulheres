import { motion, AnimatePresence } from "motion/react";
import { Bell, X, CheckCircle2, Briefcase, Users, TrendingUp, Clock } from "lucide-react";

interface Notification {
  id: string;
  type: "match" | "message" | "application" | "update";
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: React.ReactNode;
}

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  userType: "candidata" | "empresa";
}

export function NotificationsPanel({ isOpen, onClose, userType }: NotificationsPanelProps) {
  const candidateNotifications: Notification[] = [
    {
      id: "1",
      type: "match",
      title: "Nova chance de 94%!",
      message: "A vaga 'Desenvolvedora Web Pleno' na Sistemas Paracatu combina muito com você.",
      time: "5 min atrás",
      read: false,
      icon: <TrendingUp className="w-5 h-5 text-[#AC1634]" />,
    },
    {
      id: "2",
      type: "message",
      title: "Mensagem de empresa",
      message: "GoldTech Soluções enviou uma mensagem sobre sua candidatura.",
      time: "2h atrás",
      read: false,
      icon: <Users className="w-5 h-5 text-[#5B002C]" />,
    },
    {
      id: "3",
      type: "application",
      title: "Candidatura visualizada",
      message: "Sua candidatura para 'Designer Digital e Social Media' foi visualizada pela empresa.",
      time: "1 dia atrás",
      read: true,
      icon: <Briefcase className="w-5 h-5 text-slate-400" />,
    },
    {
      id: "4",
      type: "update",
      title: "Complete seu perfil",
      message: "Adicione certificações para aumentar suas chances em 15%.",
      time: "2 dias atrás",
      read: true,
      icon: <CheckCircle2 className="w-5 h-5 text-slate-400" />,
    },
  ];

  const companyNotifications: Notification[] = [
    {
      id: "1",
      type: "application",
      title: "Nova candidatura!",
      message: "Carolina Alves se candidatou para 'Analista de Dados Agrícolas' (Chance: 98%).",
      time: "10 min atrás",
      read: false,
      icon: <Users className="w-5 h-5 text-[#AC1634]" />,
    },
    {
      id: "2",
      type: "match",
      title: "Chance de alto nível detectada",
      message: "Encontramos 3 candidatas com chance acima de 90% para sua vaga.",
      time: "1h atrás",
      read: false,
      icon: <TrendingUp className="w-5 h-5 text-[#5B002C]" />,
    },
    {
      id: "3",
      type: "update",
      title: "Prazo de vaga",
      message: "A vaga 'Analista de Suporte de Sistemas (ERP)' fecha em 3 dias.",
      time: "3h atrás",
      read: true,
      icon: <Clock className="w-5 h-5 text-slate-400" />,
    },
    {
      id: "4",
      type: "application",
      title: "Candidaturas recebidas",
      message: "Você recebeu 12 novas candidaturas hoje.",
      time: "1 dia atrás",
      read: true,
      icon: <Briefcase className="w-5 h-5 text-slate-400" />,
    },
  ];

  const notifications = userType === "candidata" ? candidateNotifications : companyNotifications;
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#3E0014] to-[#5B002C] p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Notificações</h2>
                  {unreadCount > 0 && (
                    <p className="text-sm text-white/80">{unreadCount} não lida{unreadCount > 1 ? "s" : ""}</p>
                  )}
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Actions */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <button className="text-sm font-semibold text-[#AC1634] hover:text-[#5B002C] transition-colors">
                Marcar todas como lidas
              </button>
              <button className="text-sm font-semibold text-slate-500 hover:text-slate-700 transition-colors">
                Limpar todas
              </button>
            </div>

            {/* Notifications List */}
            <div className="flex-1 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`px-6 py-4 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer ${
                    !notification.read ? "bg-[#FFFBFC]" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      !notification.read ? "bg-[#FEF7F9]" : "bg-slate-100"
                    }`}>
                      {notification.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className={`font-bold ${!notification.read ? "text-[#3E0014]" : "text-slate-700"}`}>
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <div className="w-2 h-2 rounded-full bg-[#AC1634] flex-shrink-0 mt-1.5" />
                        )}
                      </div>
                      <p className="text-sm text-slate-600 mb-2 leading-relaxed">{notification.message}</p>
                      <p className="text-xs text-slate-400 font-medium">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-100">
              <button className="w-full bg-[#3E0014] text-white hover:bg-[#2C000E] font-semibold py-3 rounded-xl shadow-sm transition-all active:scale-95">
                Ver todas as notificações
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
