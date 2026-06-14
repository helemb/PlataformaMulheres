import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router";
import { Sparkles, LogOut, Bell, Settings, UserCircle, Briefcase, FileText, Users, BarChart3, HelpCircle, Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import logoSofia from '../../imports/logoinsta.jpeg';
import { NotificationsPanel } from "../components/NotificationsPanel";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface DashboardLayoutProps {
  children: ReactNode;
  userType: "candidata" | "empresa";
  userName: string;
  userImage: string;
  sidebarItems: SidebarItem[];
}

export function DashboardLayout({ children, userType, userName, userImage, sidebarItems }: DashboardLayoutProps) {
  const location = useLocation();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFBFC] font-sans flex text-slate-900 relative">
      {/* Sidebar Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-20 lg:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "w-72 bg-white border-r border-[#FDF0F4] fixed inset-y-0 left-0 flex flex-col z-30 transition-transform duration-300 ease-in-out lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-24 flex items-center px-6 border-b border-[#FDF0F4] relative">
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsSidebarOpen(false)}>
            <img
              src={logoSofia}
              alt="Sofia Logo"
              className="h-20 w-auto object-contain rounded-full mix-blend-multiply"
            />
          </Link>
          <span className="ml-auto text-xs font-semibold px-2 py-1 bg-[#FEF7F9] rounded-md text-[#5B002C] uppercase tracking-wider hidden sm:inline-block">
            {userType}
          </span>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 absolute right-4 text-slate-500 hover:text-[#3E0014] focus:outline-none"
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => {
            const isActive =
              location.pathname === item.href ||
              (location.pathname.startsWith(item.href + "/") &&
                !sidebarItems.some(
                  (other) =>
                    other.href !== item.href &&
                    other.href.startsWith(item.href + "/") &&
                    location.pathname.startsWith(other.href)
                ));
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all group",
                  isActive
                    ? "bg-[#FEF7F9] text-[#3E0014]"
                    : "text-slate-600 hover:bg-[#FFFBFC] hover:text-[#3E0014]"
                )}
              >
                <div className={cn("transition-colors", isActive ? "text-[#AC1634]" : "text-slate-400 group-hover:text-[#5B002C]")}>
                  {item.icon}
                </div>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#FDF0F4]">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors group"
          >
            <LogOut className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />
            Sair da plataforma
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-0 lg:ml-72 flex flex-col min-h-screen w-full overflow-x-hidden">
        {/* Header */}
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-[#FDF0F4] sticky top-0 z-10 px-4 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-[#3E0014] focus:outline-none"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-base lg:text-xl font-bold text-[#3E0014] truncate max-w-[180px] sm:max-w-none">
              Olá, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B002C] to-[#AC1634]">{userName}</span> 👋
            </h1>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <button
              onClick={() => setIsNotificationsOpen(true)}
              className="relative text-slate-500 hover:text-[#3E0014] transition-colors"
            >
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#AC1634] rounded-full border-2 border-white ring-2 ring-[#FEF7F9] ring-offset-2"></span>
            </button>

            <div className="flex items-center gap-2 lg:gap-3 pl-4 lg:pl-6 border-l border-[#FDF0F4]">
              <img src={userImage} alt={userName} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white shadow-sm object-cover" />
              <div className="hidden sm:block">
                <p className="text-xs lg:text-sm font-semibold text-[#3E0014]">{userName}</p>
                <p className="text-[10px] lg:text-xs text-slate-500 capitalize">{userType}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-4 lg:p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>

      {/* Notifications Panel */}
      <NotificationsPanel
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        userType={userType}
      />
    </div>
  );
}
