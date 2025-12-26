"use client";

import { motion } from "framer-motion";
import { 
  Check, 
  Star, 
  TrendingDown, 
  Clock, 
  Shield, 
  Zap, 
  Gift, 
  ChevronRight, 
  Users, 
  PlayCircle,
  Heart,
  Target,
  Award
} from "lucide-react";
import { Button } from "@/components/Button"; 
import { Card } from "@/components/Card";
import { BackgroundDecor } from "@/components/BackgroundDecor";
import { StickyCta } from "@/components/StickyCta";

export default function EbookLanding() {
  const handlePurchase = () => window.open("https://pay.kiwify.com.br/seu-link", "_blank");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-zinc-900 dark:text-zinc-100 overflow-x-hidden selection:bg-emerald-100 dark:selection:bg-emerald-900/30">
      <BackgroundDecor />
      <StickyCta />

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Badge de Oferta */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 dark:from-emerald-900/30 dark:to-emerald-800/20 text-emerald-700 dark:text-emerald-400 text-sm font-bold border border-emerald-200 dark:border-emerald-800 mb-8 shadow-lg"
            >
              <Zap className="w-4 h-4 fill-emerald-500" /> 
              OFERTA DE LANÇAMENTO: 50% OFF
            </motion.div>
            
            {/* Título Principal */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.95] bg-clip-text text-transparent bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-100">
              RECUPERE SUA <br />
              <span className="text-emerald-600 dark:text-emerald-500">AUTOESTIMA.</span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              O método <strong className="text-zinc-900 dark:text-zinc-100">Aura Fit</strong>: um guia prático para queimar gordura visceral e tonificar seu corpo sem dietas restritivas.
            </p>

            {/* CTA Principal */}
            <motion.div 
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button 
                onClick={handlePurchase} 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white h-16 md:h-20 px-8 md:px-12 text-xl md:text-2xl font-black rounded-2xl shadow-[0_20px_60px_rgba(16,185,129,0.4)] hover:shadow-[0_25px_70px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                QUERO MEU ACESSO AGORA
                <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Prova Social */}
              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 border-2 border-white dark:border-zinc-950" />
                  ))}
                </div>
                <span>+5.000 pessoas transformadas</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* POR QUE FUNCIONA */}
      <section className="py-20 md:py-32 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Por Que Funciona?
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Um método baseado em ciência, não em modismos
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { 
                icon: TrendingDown, 
                title: "Termogênese Ativa", 
                desc: "Combine alimentos que fazem seu corpo queimar calorias mesmo dormindo.",
                color: "emerald"
              },
              { 
                icon: Clock, 
                title: "Treinos Express", 
                desc: "Protocolos de 15 minutos que geram alto gasto calórico.",
                color: "sky"
              },
              { 
                icon: Shield, 
                title: "Sem Rebote", 
                desc: "Focado em reeducação metabólica para resultados permanentes.",
                color: "purple"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
              >
                <Card className="group p-8 rounded-3xl bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 dark:from-${item.color}-900/50 dark:to-${item.color}-800/30 text-${item.color}-600 dark:text-${item.color}-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BÔNUS EXCLUSIVOS */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white relative overflow-hidden">
        {/* Decoração de fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black italic mb-4 uppercase">
              Presentes para você
            </h2>
            <p className="text-xl text-emerald-400">
              Acesso imediato garantindo sua vaga hoje.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Guia Sucos Detox", 
                value: "R$ 47", 
                desc: "Desinche em 48 horas com receitas naturais.",
                icon: Heart
              },
              { 
                title: "Treino em Casa", 
                value: "R$ 97", 
                desc: "Vídeos curtos para tonificar sem aparelhos.",
                icon: Target
              },
              { 
                title: "Grupo VIP", 
                value: "Inestimável", 
                desc: "Suporte direto e motivação com outros alunos.",
                icon: Users
              }
            ].map((bonus, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <bonus.icon className="w-12 h-12 text-emerald-400 mb-6" />
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{bonus.title}</h3>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-bold">
                      {bonus.value}
                    </span>
                  </div>
                  <p className="text-zinc-300">{bonus.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-12 md:p-16 rounded-[40px] border-4 border-dashed border-emerald-500 dark:border-emerald-600 bg-white dark:bg-zinc-900 shadow-2xl"
          >
            <Shield className="w-24 h-24 text-emerald-600 dark:text-emerald-500 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase">
              7 DIAS DE GARANTIA
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Teste o método. Se não gostar, devolvemos <strong className="text-zinc-900 dark:text-zinc-100">100% do seu investimento</strong>. O risco é todo meu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 md:py-32 px-4 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              O Que Dizem Nossos Alunos
            </h2>
            <div className="flex items-center justify-center gap-2 text-yellow-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-8 h-8 fill-current" />
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                result: "-12kg em 2 meses",
                text: "Nunca pensei que pudesse emagrecer comendo bem e sem passar fome. Mudou minha vida!"
              },
              {
                name: "João Santos",
                result: "-18kg em 3 meses",
                text: "O método é simples e funciona de verdade. Minha autoestima voltou!"
              },
              {
                name: "Ana Costa",
                result: "-8kg em 1 mês",
                text: "Perdi medidas, ganhei energia e disposição. Recomendo muito!"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
                  <div className="flex items-center gap-2 mb-4 text-yellow-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-zinc-900 dark:text-zinc-100">{testimonial.name}</p>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">{testimonial.result}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award className="w-20 h-20 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Comece Sua Transformação Hoje
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-emerald-50">
              Junte-se a mais de <strong>5.000 pessoas</strong> que já transformaram suas vidas
            </p>
            <Button 
              onClick={handlePurchase}
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50 h-16 md:h-20 px-8 md:px-12 text-xl md:text-2xl font-black rounded-2xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105 active:scale-95"
            >
              GARANTIR MINHA VAGA AGORA
            </Button>
            <p className="mt-6 text-sm text-emerald-50">
              💳 Pagamento 100% seguro • ⚡ Acesso imediato • 🔒 7 dias de garantia
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-zinc-950 text-zinc-400 text-center border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm mb-2">© 2025 Aura Fit - Todos os direitos reservados.</p>
          <p className="text-xs opacity-60">
            Desenvolvido por <a href="https://github.com/Gregwzx" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-500 transition-colors">Jailson Ferreira</a>
          </p>
        </div>
      </footer>
    </div>
  );
}