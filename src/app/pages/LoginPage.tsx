import React from 'react';
import { useNavigate, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logoSofia from '../../imports/logoinsta.jpeg';

export function LoginPage() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Aqui futuramente ficará a autenticação real do Google
    navigate('/dashboard/empresa');
  };

  return (
    <div className="min-h-screen bg-[#FFFBFC] flex font-sans overflow-y-auto lg:overflow-hidden">
      {/* Esquerda */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-16 xl:px-24 py-16 sm:py-12 min-h-screen relative z-10">
        <Link
          to="/"
          className="absolute top-6 left-6 sm:top-8 sm:left-16 xl:left-24 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#5B002C] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o início
        </Link>

        <div className="max-w-md w-full mx-auto mt-8 sm:mt-0">
          <div className="flex items-center gap-2 mb-6 sm:mb-12">
            <img
              src={logoSofia}
              alt="Sofia Logo"
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain rounded-full mix-blend-multiply"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-[#3E0014] mb-2 tracking-tight">
              Bem-vinda de volta
            </h1>

            <p className="text-slate-600 mb-8">
              Entre na plataforma utilizando sua conta Google.
            </p>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full py-4 px-4 flex justify-center items-center gap-3 rounded-xl bg-white border border-[#E77291] text-slate-700 font-bold shadow-md hover:bg-slate-50 transition-all active:scale-[0.98] text-base hover:border-[#AC1634]/30"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>

              Entrar com o Google
            </button>

            <p className="text-center text-sm text-slate-600 mt-6">
              Ainda não tem conta?{' '}
              <Link
                to="/cadastro"
                className="font-semibold text-[#AC1634] hover:text-[#5B002C] transition-colors"
              >
                Cadastre-se grátis
              </Link>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Direita */}
      <div className="hidden lg:block lg:w-1/2 relative bg-[#3E0014]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5B002C]/40 to-[#3E0014]/90 mix-blend-multiply z-10" />

        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBvd2VyZWQlMjBjb25maWRlbnQlMjBidXNpbmVzc3dvbWFufGVufDF8fHx8MTc3NzU2Mjc5NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Empowered confident businesswoman"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        <div className="absolute bottom-12 left-12 right-12 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl"
          >
            <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
              Conecte-se e transforme sua jornada profissional.
            </h2>

            <p className="text-white/80">
              Faça login com sua conta Google e tenha acesso a todas as funcionalidades da plataforma.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}