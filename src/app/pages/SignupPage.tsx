import React, { useState } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, EyeOff, Lock, Mail, ArrowLeft, Sparkles, Building2, UserCircle, User, Phone, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logoSofia from '../../imports/logoinsta.jpeg';

export function SignupPage() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'candidata' | 'empresa'>(
    (searchParams.get('tab') as 'candidata' | 'empresa') || 'candidata'
  );
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const password = watch('password');

  const onSubmit = (data: any) => {
    console.log('Dados de cadastro:', data);
    // Aqui seria feita a chamada à API
    if (activeTab === 'candidata') {
      navigate('/dashboard/candidata');
    } else {
      navigate('/dashboard/empresa');
    }
  };

  const handleGoogleSignIn = () => {
    // Simula o cadastro e autenticação com a conta Google do usuário
    navigate('/dashboard/candidata');
  };

  return (
    <div className="min-h-screen bg-[#FFFBFC] flex font-sans overflow-y-auto lg:overflow-hidden">
      {/* Esquerda: Formulário */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-16 xl:px-24 py-16 sm:py-12 min-h-screen relative z-10">
        <Link
          to="/"
          className="absolute top-6 left-6 sm:top-8 sm:left-16 xl:left-24 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#5B002C] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar para o início
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
              Crie sua conta grátis
            </h1>
            <p className="text-slate-600 mb-8">
              {activeTab === 'candidata'
                ? 'Comece sua jornada profissional com a gente.'
                : 'Encontre os melhores talentos femininos.'}
            </p>

            {/* Toggle / Tabs */}
            <div className="flex p-1 bg-white rounded-xl shadow-sm border border-[#FDF0F4] mb-8 relative">
              <button
                type="button"
                onClick={() => setActiveTab('candidata')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold rounded-lg transition-all z-10 ${activeTab === 'candidata' ? 'text-[#AC1634]' : 'text-slate-500 hover:text-[#3E0014]'
                  }`}
              >
                <UserCircle className="w-4 h-4" />
                Sou Candidata
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('empresa')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold rounded-lg transition-all z-10 ${activeTab === 'empresa' ? 'text-[#3E0014]' : 'text-slate-500 hover:text-[#3E0014]'
                  }`}
              >
                <Building2 className="w-4 h-4" />
                Sou Empresa
              </button>

              {/* Pill Animado */}
              <motion.div
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-lg bg-[#FFFBFC] border ${activeTab === 'candidata' ? 'border-[#AC1634]/20' : 'border-[#3E0014]/20'
                  } z-0 shadow-sm`}
                initial={false}
                animate={{
                  left: activeTab === 'candidata' ? '4px' : 'calc(50%)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            </div>

            {activeTab === 'candidata' ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <p className="text-center text-sm text-slate-600 mb-2">
                  Preencha seus dados básicos e finalize seu cadastro rápido e seguro usando sua conta do Google.
                </p>

                {/* Nome Completo */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-[#3E0014] block">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      {...register('name', { required: 'Nome é obrigatório' })}
                      type="text"
                      placeholder="Maria da Silva"
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#E77291] rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5B002C]/20 focus:border-[#5B002C] transition-all placeholder:text-slate-400"
                    />
                  </div>
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message as string}</p>}
                </div>

                {/* E-mail */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-[#3E0014] block">
                    E-mail
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      {...register('email', {
                        required: 'E-mail é obrigatório',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'E-mail inválido'
                        }
                      })}
                      type="email"
                      placeholder="seu@email.com.br"
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#E77291] rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5B002C]/20 focus:border-[#5B002C] transition-all placeholder:text-slate-400"
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message as string}</p>}
                </div>

                {/* Telefone */}
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-[#3E0014] block">
                    Telefone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      {...register('phone', { required: 'Telefone é obrigatório' })}
                      type="tel"
                      placeholder="(11) 98765-4321"
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#E77291] rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5B002C]/20 focus:border-[#5B002C] transition-all placeholder:text-slate-400"
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message as string}</p>}
                </div>

                {/* Termos para candidata */}
                <div className="flex items-start gap-2">
                  <input
                    {...register('terms', { required: 'Você deve aceitar os termos' })}
                    type="checkbox"
                    id="terms-candidate"
                    className="mt-1 w-4 h-4 rounded border-[#E77291] text-[#AC1634] focus:ring-[#AC1634] focus:ring-offset-0 cursor-pointer"
                  />
                  <label htmlFor="terms-candidate" className="text-sm text-slate-600 cursor-pointer">
                    Aceito os{' '}
                    <a href="#" className="font-semibold text-[#AC1634] hover:text-[#5B002C] transition-colors">
                      Termos de Uso
                    </a>
                    {' '}e{' '}
                    <a href="#" className="font-semibold text-[#AC1634] hover:text-[#5B002C] transition-colors">
                      Política de Privacidade
                    </a>
                  </label>
                </div>
                {errors.terms && <p className="text-xs text-red-500">{errors.terms.message as string}</p>}

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 flex justify-center items-center gap-3 rounded-xl bg-white border border-[#E77291] text-slate-700 font-bold shadow-md hover:bg-slate-50 transition-all active:scale-[0.98] text-base hover:border-[#AC1634]/30"
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
                  Cadastrar-se com o Google
                </button>

                <p className="text-center text-sm text-slate-600 mt-6">
                  Já tem uma conta?{' '}
                  <Link to="/login" className="font-semibold text-[#AC1634] hover:text-[#5B002C] transition-colors">
                    Fazer login
                  </Link>
                </p>
              </form>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-5"
                  >
                    {/* Nome da Empresa */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-[#3E0014] block">
                        Nome da Empresa
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Building2 className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          {...register('companyName', { required: 'Nome da empresa é obrigatório' })}
                          type="text"
                          placeholder="TechNova Corp"
                          className="w-full pl-10 pr-4 py-3 bg-white border border-[#E77291] rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5B002C]/20 focus:border-[#5B002C] transition-all placeholder:text-slate-400"
                        />
                      </div>
                      {errors.companyName && <p className="text-xs text-red-500 mt-1">{errors.companyName.message as string}</p>}
                    </div>

                    {/* CNPJ */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-[#3E0014] block">
                        CNPJ
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Briefcase className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          {...register('cnpj', { required: 'CNPJ é obrigatório' })}
                          type="text"
                          placeholder="00.000.000/0000-00"
                          className="w-full pl-10 pr-4 py-3 bg-white border border-[#E77291] rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5B002C]/20 focus:border-[#5B002C] transition-all placeholder:text-slate-400"
                        />
                      </div>
                      {errors.cnpj && <p className="text-xs text-red-500 mt-1">{errors.cnpj.message as string}</p>}
                    </div>

                    {/* E-mail Corporativo */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-[#3E0014] block">
                        E-mail Corporativo
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          {...register('email', {
                            required: 'E-mail é obrigatório',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'E-mail inválido'
                            }
                          })}
                          type="email"
                          placeholder="contato@empresa.com.br"
                          className="w-full pl-10 pr-4 py-3 bg-white border border-[#E77291] rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5B002C]/20 focus:border-[#5B002C] transition-all placeholder:text-slate-400"
                        />
                      </div>
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message as string}</p>}
                    </div>

                    {/* Telefone Comercial */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-[#3E0014] block">
                        Telefone Comercial
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          {...register('phone', { required: 'Telefone é obrigatório' })}
                          type="tel"
                          placeholder="(11) 3000-0000"
                          className="w-full pl-10 pr-4 py-3 bg-white border border-[#E77291] rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5B002C]/20 focus:border-[#5B002C] transition-all placeholder:text-slate-400"
                        />
                      </div>
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message as string}</p>}
                    </div>

                    {/* Senha */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-[#3E0014] block">
                        Senha
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          {...register('password', {
                            required: 'Senha é obrigatória',
                            minLength: {
                              value: 6,
                              message: 'A senha deve ter pelo menos 6 caracteres'
                            }
                          })}
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="w-full pl-10 pr-12 py-3 bg-white border border-[#E77291] rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5B002C]/20 focus:border-[#5B002C] transition-all placeholder:text-slate-400"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-[#3E0014] focus:outline-none transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message as string}</p>}
                    </div>

                    {/* Confirmar Senha */}
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-[#3E0014] block">
                        Confirmar Senha
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                          {...register('confirmPassword', {
                            required: 'Confirme sua senha',
                            validate: value => value === password || 'As senhas não correspondem'
                          })}
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="w-full pl-10 pr-12 py-3 bg-white border border-[#E77291] rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5B002C]/20 focus:border-[#5B002C] transition-all placeholder:text-slate-400"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-[#3E0014] focus:outline-none transition-colors"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword.message as string}</p>}
                    </div>

                    {/* Termos para Empresa */}
                    <div className="flex items-start gap-2">
                      <input
                        {...register('terms', { required: 'Você deve aceitar os termos' })}
                        type="checkbox"
                        id="terms-company"
                        className="mt-1 w-4 h-4 rounded border-[#E77291] text-[#AC1634] focus:ring-[#AC1634] focus:ring-offset-0"
                      />
                      <label htmlFor="terms-company" className="text-sm text-slate-600">
                        Aceito os{' '}
                        <a href="#" className="font-semibold text-[#AC1634] hover:text-[#5B002C] transition-colors">
                          Termos de Uso
                        </a>
                        {' '}e{' '}
                        <a href="#" className="font-semibold text-[#AC1634] hover:text-[#5B002C] transition-colors">
                          Política de Privacidade
                        </a>
                      </label>
                    </div>
                    {errors.terms && <p className="text-xs text-red-500">{errors.terms.message as string}</p>}
                  </motion.div>
                </AnimatePresence>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 flex justify-center items-center gap-2 rounded-xl text-white font-semibold shadow-lg transition-all active:scale-[0.98] bg-gradient-to-r from-[#3E0014] to-[#5B002C] hover:shadow-[#3E0014]/25 shadow-[#3E0014]/20"
                >
                  Criar Conta da Empresa
                </button>

                <p className="text-center text-sm text-slate-600 mt-6">
                  Já tem uma conta?{' '}
                  <Link to="/login?tab=empresa" className="font-semibold text-[#AC1634] hover:text-[#5B002C] transition-colors">
                    Fazer login
                  </Link>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Direita: Imagem Decorativa */}
      <div className="hidden lg:block lg:w-1/2 relative bg-[#3E0014]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5B002C]/40 to-[#3E0014]/90 mix-blend-multiply z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxlbXBvd2VyZWQlMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Nzc1NjI3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Empowered professional woman"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Elemento flutuante de social proof / destaque */}
        <div className="absolute bottom-12 left-12 right-12 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl"
          >
            <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
              {activeTab === 'candidata'
                ? "Junte-se a milhares de mulheres transformando suas carreiras."
                : "Mais de 500 empresas já encontraram talentos incríveis aqui."}
            </h2>
            <p className="text-white/80">
              {activeTab === 'candidata'
                ? "Cadastro 100% gratuito e seguro. Comece agora mesmo!"
                : "Processo rápido com ajuda de inteligência artificial para combinações perfeitas."}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
