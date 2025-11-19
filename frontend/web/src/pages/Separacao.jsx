import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const lixeiras = [
  {
    cor: "Vermelha",
    categoria: "Plástico",
    emoji: "🔴",
    bgColor: "bg-red-500",
    textColor: "text-red-700",
    bgLight: "bg-red-50",
    borderColor: "border-red-200",
    exemplos: [
      "Garrafas PET",
      "Embalagens de limpeza",
      "Potes de iogurte",
      "Sacos plásticos",
      "Copos descartáveis",
      "Canudos plásticos"
    ],
    tempo: "200 a 400 anos",
    dica: "Enxágue as embalagens para remover restos de produtos. Retire tampas e rótulos. Amasse para economizar espaço.",
    curiosidade: "Uma garrafa PET pode levar até 400 anos para se decompor completamente",
    imagens: [
      {
        url: "/plasticos.jpg",
        alt: "Garrafa PET"
      },
      {
        url: "/embalagensplasticas.jpg",
        alt: "Embalagens plásticas"
      }
    ]
  },
  {
    cor: "Azul",
    categoria: "Papel",
    emoji: "🔵",
    bgColor: "bg-blue-500",
    textColor: "text-blue-700",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-200",
    exemplos: [
      "Jornais e revistas",
      "Caixas de papelão",
      "Folhas de caderno",
      "Envelopes",
      "Embalagens de papel",
      "Cartolinas"
    ],
    tempo: "3 a 6 meses",
    dica: "Remova fitas adesivas, grampos e outros materiais. Papéis sujos de gordura não são recicláveis.",
    curiosidade: "Cada tonelada de papel reciclado economiza cerca de 22 árvores",
    imagens: [
      {
        url: "/papel.jpg",
        alt: "Papel reciclável"
      },
      {
        url: "/caixasdepapelao.jpg",
        alt: "Caixas de papelão"
      }
    ]
  },
  {
    cor: "Verde",
    categoria: "Vidro",
    emoji: "🟢",
    bgColor: "bg-green-500",
    textColor: "text-green-700",
    bgLight: "bg-green-50",
    borderColor: "border-green-200",
    exemplos: [
      "Garrafas de bebidas",
      "Potes de conserva",
      "Frascos de perfume",
      "Vidros de remédio",
      "Copos de vidro",
      "Embalagens de vidro"
    ],
    tempo: "Mais de 1 milhão de anos",
    dica: "Retire tampas e rótulos. Se quebrado, envolva em papel antes de descartar com cuidado.",
    curiosidade: "O vidro é 100% reciclável e pode ser reciclado infinitas vezes",
    imagens: [
      {
        url: "/garrafadevidro.jpg",
        alt: "Garrafas de vidro"
      },
      {
        url: "/potesdevidro.jpg",
        alt: "Potes de vidro"
      }
    ]
  },
  {
    cor: "Amarela",
    categoria: "Metal",
    emoji: "🟡",
    bgColor: "bg-yellow-500",
    textColor: "text-yellow-700",
    bgLight: "bg-yellow-50",
    borderColor: "border-yellow-200",
    exemplos: [
      "Latas de refrigerante",
      "Latas de conserva",
      "Tampas de garrafa",
      "Panelas velhas",
      "Fios de cobre",
      "Parafusos e pregos"
    ],
    tempo: "200 anos",
    dica: "Amasse as latas para economizar espaço. Retire rótulos quando possível. Uma lata pode virar outra em 60 dias.",
    curiosidade: "O alumínio pode ser reciclado infinitas vezes sem perder qualidade",
    imagens: [
      {
        url: "/latasdealuminio.jpg",
        alt: "Latas de alumínio"
      },
      {
        url: "/materiaisdealuminio.jpg",
        alt: "Materiais de metal"
      }
    ]
  },
  {
    cor: "Marrom",
    categoria: "Orgânico",
    emoji: "🟤",
    bgColor: "bg-amber-600",
    textColor: "text-amber-700",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-200",
    exemplos: [
      "Cascas de frutas",
      "Restos de verduras",
      "Borra de café",
      "Folhas secas",
      "Cascas de ovo",
      "Restos de comida"
    ],
    tempo: "2 semanas a 2 anos",
    dica: "Separe em composteira doméstica ou deposite na lixeira marrom. Evite misturar com outros resíduos.",
    curiosidade: "Resíduos orgânicos representam cerca de 50% do lixo doméstico",
    imagens: [
      {
        url: "/residuos.jpg",
        alt: "Resíduos orgânicos"
      },
      {
        url: "/residuosdecomida.jpg",
        alt: "Cascas de frutas"
      }
    ]
  }
];

export default function SeparacaoPage() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="px-4 py-6 space-y-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-green-800 mb-2">
          Separação Correta do Lixo
        </h1>
        <p className="text-green-600 text-sm md:text-base">
          Guia completo das cores padronizadas das lixeiras
        </p>
      </div>

      <div className="space-y-4">
        {lixeiras.map((lixeira, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className={`shadow-lg border-2 ${lixeira.borderColor} overflow-hidden`}>
              <CardContent className="p-0">
                {/* Header */}
                <div
                  className={`${lixeira.bgColor} text-white p-4 cursor-pointer hover:opacity-90 transition-opacity`}
                  onClick={() => toggleCard(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{lixeira.emoji}</span>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold">
                          Lixeira {lixeira.cor}
                        </h3>
                        <p className="text-sm md:text-base opacity-90 font-medium">
                          {lixeira.categoria}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-xs md:text-sm opacity-80">
                            Degradação: {lixeira.tempo}
                          </span>
                        </div>
                      </div>
                    </div>
                    {expandedCard === index ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </div>

                {/* Imagens representativas - sempre visíveis */}
                {lixeira.imagens && lixeira.imagens.length > 0 && (
                  <div className="grid grid-cols-2 gap-1 p-2 bg-gray-50">
                    {lixeira.imagens.map((imagem, idx) => (
                      <div key={idx} className="aspect-video bg-gray-200 rounded overflow-hidden">
                        <img
                          src={imagem.url}
                          alt={imagem.alt}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Conteúdo básico sempre visível */}
                <div className="p-4">
                  {/* Curiosidade */}
                  <div className={`${lixeira.bgLight} p-4 rounded-lg border-l-4 ${lixeira.bgColor.replace('bg-', 'border-')} mb-4`}>
                    <p className={`${lixeira.textColor} font-semibold text-sm mb-2`}>
                      💡 Curiosidade:
                    </p>
                    <p className={`${lixeira.textColor} text-sm leading-relaxed`}>
                      {lixeira.curiosidade}
                    </p>
                  </div>

                  {/* Alguns exemplos principais */}
                  <div className="mb-4">
                    <p className="font-semibold text-gray-800 text-sm mb-3 flex items-center gap-2">
                      <span>📝</span>
                      O que vai na lixeira {lixeira.cor.toLowerCase()}:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {lixeira.exemplos.slice(0, 4).map((exemplo, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className={`${lixeira.textColor} border-current text-xs py-1 justify-center`}
                        >
                          {exemplo}
                        </Badge>
                      ))}
                    </div>
                    {lixeira.exemplos.length > 4 && expandedCard !== index && (
                      <p className="text-xs text-gray-500 text-center mt-2">
                        +{lixeira.exemplos.length - 4} exemplos a mais - clique para ver todos
                      </p>
                    )}
                  </div>
                </div>

                {/* Conteúdo expandido */}
                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-gray-100"
                    >
                      <div className="p-4 space-y-4">
                        {/* Todos os exemplos */}
                        {lixeira.exemplos.length > 4 && (
                          <div>
                            <p className="font-semibold text-gray-800 text-sm mb-3">
                              Todos os exemplos desta categoria:
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                              {lixeira.exemplos.map((exemplo, idx) => (
                                <Badge
                                  key={idx}
                                  variant="outline"
                                  className={`${lixeira.textColor} border-current text-xs py-1 justify-center`}
                                >
                                  {exemplo}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Dica detalhada de descarte */}
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                          <div className="flex items-start gap-3">
                            <Lightbulb className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-green-800 text-sm mb-2">
                                Como descartar corretamente:
                              </p>
                              <p className="text-green-700 text-sm leading-relaxed">
                                {lixeira.dica}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Mensagem final */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="p-6">
          <div className="text-center">
            <span className="text-3xl mb-3 block">🌱</span>
            <h3 className="font-bold text-green-800 mb-2">Parabéns por fazer a diferença!</h3>
            <p className="text-green-700 text-sm leading-relaxed">
              A separação correta é o primeiro passo para um mundo mais sustentável.
              Cada resíduo descartado adequadamente ajuda a preservar nosso planeta para as futuras gerações.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}