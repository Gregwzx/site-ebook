// app/sobre/page.tsx
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Award, BookOpen, Heart, Target, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-zinc-900 dark:text-white">
              Minha História com o Emagrecimento
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Como transformei minha frustração em um método que já ajudou milhares de pessoas
            </p>
          </motion.div>
        </div>
      </section>

      {/* História */}
      <section className="py-16 px-4 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center mb-16">
            <div className="md:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-emerald-400 to-sky-400 rounded-2xl shadow-2xl" />
            </div>
            
            <div className="md:col-span-2 space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <p className="text-xl font-semibold text-zinc-900 dark:text-white">
                Eu sei exatamente como você se sente...
              </p>
              
              <p>
                Durante anos, lutei contra o peso. Tentei praticamente todas as dietas que você pode imaginar: 
                low carb, jejum intermitente, dieta da sopa, dieta dos pontos, shakes substitutos... a lista é enorme.
              </p>
              
              <p>
                Algumas até funcionavam no começo. Eu perdia alguns quilos, ficava empolgado, mas logo tudo voltava. 
                E sempre voltava com "juros" - acabava pesando mais do que antes.
              </p>
              
              <p>
                O pior não era nem o peso em si. Era me olhar no espelho e não me reconhecer. Era evitar fotos. 
                Era sentir vergonha de tirar a camisa na praia. Era o cansaço constante e a falta de energia.
              </p>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/10 dark:to-zinc-800 mb-16">
            <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">
              O Momento da Virada
            </h2>
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
              <p>
                Até que um dia, após mais uma dieta fracassada, decidi que era hora de mudar a abordagem. 
                Parei de buscar soluções mágicas e comecei a estudar sério: nutrição, metabolismo, comportamento alimentar, 
                psicologia do hábito.
              </p>
              <p>
                Percebi que o problema não estava em MIM, estava nos MÉTODOS que eu estava usando. 
                Nenhuma dieta restritiva é sustentável a longo prazo. Nosso corpo e nossa mente não foram 
                feitos para viver em privação constante.
              </p>
              <p>
                Foi assim que desenvolvi meu próprio método, baseado em ciência e não em modismos. 
                E funcionou. Perdi 25kg e, mais importante, mantive o resultado por mais de 3 anos.
              </p>
            </div>
          </Card>

          <div className="space-y-6 text-zinc-700 dark:text-zinc-300 mb-16">
            <p className="text-xl font-semibold text-zinc-900 dark:text-white">
              Nasceu o método que mudou tudo
            </p>
            
            <p>
              Quando comecei a compartilhar o que aprendi com amigos e familiares, os resultados foram impressionantes. 
              As pessoas começaram a emagrecer sem sofrimento, sem passar fome, mantendo os resultados.
            </p>
            
            <p>
              Foi então que decidi transformar tudo isso em um ebook completo. Um guia definitivo que ensina 
              exatamente o que fazer, passo a passo, para emagrecer de forma saudável e definitiva.
            </p>
            
            <p>
              Hoje, mais de 5.000 pessoas já transformaram suas vidas com este método. E o melhor: 
              não são transformações temporárias. São mudanças reais e duradouras.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 px-4 bg-zinc-50 dark:bg-zinc-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-white">
            Meus Princípios
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Honestidade",
                description: "Sem promessas milagrosas. Só resultados reais e sustentáveis."
              },
              {
                icon: BookOpen,
                title: "Ciência",
                description: "Tudo baseado em evidências científicas, não em modismos."
              },
              {
                icon: Users,
                title: "Humanidade",
                description: "Cada pessoa é única. O método se adapta a você, não o contrário."
              },
              {
                icon: Target,
                title: "Praticidade",
                description: "Soluções que funcionam na vida real, não só na teoria."
              },
              {
                icon: Zap,
                title: "Resultados",
                description: "Foco total em transformações reais e mensuráveis."
              },
              {
                icon: Award,
                title: "Excelência",
                description: "Compromisso com a qualidade e atualização constante."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full text-center bg-white dark:bg-zinc-800">
                  <div className="w-14 h-14 bg-emerald-600 dark:bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Vamos Juntos Nessa Jornada?
          </h2>
          <p className="text-xl text-emerald-50 mb-8">
            Se eu consegui, você também consegue. Deixa eu te mostrar o caminho.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold rounded-full">
              Conhecer o Método Completo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}