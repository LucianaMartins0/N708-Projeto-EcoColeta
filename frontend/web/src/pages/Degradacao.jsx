import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Leaf, AlertTriangle, ChevronRight, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function DegradacaoPage() {
  const [materiais, setMateriais] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    loadMateriais();
  }, []);

const loadMateriais = async () => {
    try {
      const response = await fetch('https://n708-projeto-ecocoleta.onrender.com/api/materiais');

      const data = await response.json(); 

      setMateriais(data);
    } catch (error) {

      console.error("Erro ao carregar materiais da API:", error);
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
    return icons[categoria] || "♻️";
  };

  const getCategoryColor = (categoria) => {
    const colors = {
      plastico: "from-red-500 to-red-600",
      papel: "from-blue-500 to-blue-600",
      vidro: "from-green-500 to-green-600", 
      metal: "from-yellow-500 to-yellow-600",
      organico: "from-amber-500 to-amber-600"
    };
    return colors[categoria] || "from-gray-500 to-gray-600";
  };

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

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
                  {/* Frase de impacto contextualizada - sempre visível */}
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
                  {expandedCard === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-4"
                    >
                      {/* Dica de descarte */}
                      {material.dica_descarte && (
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                          <div className="flex items-start gap-3">
                            <Lightbulb className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-green-800 text-sm mb-2">
                                Como descartar corretamente:
                              </p>
                              <p className="text-green-700 text-sm leading-relaxed">
                                {material.dica_descarte}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Exemplos */}
                      {material.exemplos && material.exemplos.length > 0 && (
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="font-semibold text-blue-800 text-sm mb-3 flex items-center gap-2">
                            <span>📝</span>
                            Exemplos deste material:
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {material.exemplos.map((exemplo, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="text-xs justify-center py-1 bg-white border-blue-200 text-blue-700"
                              >
                                {exemplo}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Impacto ambiental */}
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
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {materiais.length === 0 && (
        <div className="text-center py-12">
          <Leaf className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">Carregando informações sobre degradação...</p>
        </div>
      )}
    </div>
  );
}