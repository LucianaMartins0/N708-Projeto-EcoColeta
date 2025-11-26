import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Leaf, AlertTriangle, ChevronRight, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner"; 

export default function DegradacaoPage() {
  const [materiais, setMateriais] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadMateriais();
  }, []);

  const loadMateriais = async () => {
    try {
      // 1. Faz o pedido ao servidor na Nuvem (Render)
      const response = await fetch('https://n708-projeto-ecocoleta.onrender.com/api/materiais');

      // 2. Verifica se a resposta foi boa
      if (!response.ok) {
        throw new Error('Falha ao conectar com o servidor');
      }

      const data = await response.json(); 

      // 3. Garante que recebemos uma lista antes de salvar
      if (Array.isArray(data)) {
        setMateriais(data);
      } else {
        console.error("Dados inválidos recebidos:", data);
        setMateriais([]); // Evita a tela branca
      }

    } catch (error) {
      console.error("Erro ao carregar materiais da API:", error);
      toast.error("Erro de conexão: O servidor pode estar hibernando. Tente recarregar em 1 minuto.");
    } finally {
      setIsLoading(false);
    }
  };

  const getCategoryIcon = (categoria) => {
    const icons = {
      plastico: "🍾",
      papel: "📄",
      vidro: "🍷",
      metal: "🥤",
      organico: "🍎"
    };
    // Proteção contra categoria vazia
    return icons[categoria?.toLowerCase()] || "♻️";
  };

  const getCategoryColor = (categoria) => {
    const colors = {
      plastico: "from-red-500 to-red-600",
      papel: "from-blue-500 to-blue-600",
      vidro: "from-green-500 to-green-600", 
      metal: "from-yellow-500 to-yellow-600",
      organico: "from-amber-500 to-amber-600"
    };
    return colors[categoria?.toLowerCase()] || "from-gray-500 to-gray-600";
  };

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <Leaf className="w-8 h-8 animate-pulse mx-auto mb-2 text-green-600" />
          <p className="text-gray-600">Carregando materiais...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 space-y-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-green-800 mb-2">
          Degradação dos Materiais
        </h1>
        <p className="text-green-600 text-sm md:text-base">
          Descubra o impacto ambiental e tempo de decomposição
        </p>
      </div>

      <div className="space-y-4">
        {materiais.map((material, index) => (
          <motion.div
            key={material.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card 
              className="shadow-lg border-0 overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => toggleCard(index)}
            >
              <CardContent className="p-0">
                {/* Header com gradiente */}
                <div className={`bg-gradient-to-r ${getCategoryColor(material.categoria)} p-4 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{getCategoryIcon(material.categoria)}</span>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold">{material.nome}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium bg-white bg-opacity-20 px-2 py-1 rounded">
                            {material.tempo_degradacao}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight 
                      className={`w-6 h-6 transition-transform ${expandedCard === index ? 'rotate-90' : ''}`} 
                    />
                  </div>
                </div>

                {/* Imagem - sempre visível */}
                {material.imagem_url && (
                  <div className="h-48 bg-gray-100 relative">
                    <img
                      src={material.imagem_url}
                      alt={material.nome}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                )}

                {/* Conteúdo principal */}
                <div className="p-4 space-y-4">
                  {/* Frase de impacto / Curiosidade */}
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-orange-800 text-sm mb-2">
                          Você sabia?
                        </p>
                        <p className="text-gray-700 font-medium text-sm leading-relaxed">
                          {material.curiosidade}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo expansível */}
                  <AnimatePresence>
                    {expandedCard === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="space-y-4"
                      >
                        {/* Impacto Ambiental (Baseado na categoria) */}
                         <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <Leaf className="w-5 h-5 text-green-600" />
                              <p className="font-semibold text-gray-800 text-sm">
                                Impacto da reciclagem:
                              </p>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {material.categoria === 'plastico' && 'Reciclar plástico economiza até 80% da energia necessária para produzir plástico novo.'}
                              {material.categoria === 'papel' && 'Cada tonelada de papel reciclado economiza cerca de 22 árvores e 26 mil litros de água.'}
                              {material.categoria === 'vidro' && 'O vidro pode ser reciclado infinitas vezes sem perder qualidade, economizando 30% de energia.'}
                              {material.categoria === 'metal' && 'Reciclar alumínio economiza 95% da energia necessária para produzir alumínio novo.'}
                              {material.categoria === 'organico' && 'Compostar resíduos orgânicos reduz em 30% o volume de lixo doméstico.'}
                            </p>
                          </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {materiais.length === 0 && !isLoading && (
        <div className="text-center py-12">
          <Leaf className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">Nenhum material encontrado.</p>
        </div>
      )}
    </div>
  );
}