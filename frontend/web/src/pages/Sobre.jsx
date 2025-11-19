import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Recycle, Heart, Globe, Users, Target, Lightbulb } from "lucide-react";

export default function SobrePage() {
  const features = [
    {
      icon: Globe,
      title: "Impacto Ambiental",
      description: "Contribua para a redução da poluição e preservação do meio ambiente através do descarte correto de resíduos."
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Conecte-se com outros cidadãos conscientes e faça parte da mudança em sua cidade."
    },
    {
      icon: Target,
      title: "Localização Precisa",
      description: "Encontre facilmente os ecopontos mais próximos da sua localização com nosso sistema de busca."
    },
    {
      icon: Lightbulb,
      title: "Educação",
      description: "Aprenda sobre o tempo de degradação dos materiais e como separar corretamente seus resíduos."
    }
  ];

  return (
    <div className="px-4 py-6 space-y-6">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Recycle className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-green-800 mb-2">
          Sobre o EcoColeta
        </h1>
        <p className="text-green-600 text-sm md:text-base">
          Conectando pessoas ao descarte consciente
        </p>
      </div>

      {/* Missão */}
      <Card className="shadow-lg border-green-200">
        <CardContent className="p-6">
          <div className="text-center">
            <Heart className="w-8 h-8 text-green-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-3">Nossa Missão</h2>
            <p className="text-gray-600 leading-relaxed">
              O EcoColeta foi criado para facilitar a vida do cidadão consciente, 
              oferecendo uma forma simples e eficaz de encontrar pontos de coleta seletiva 
              e aprender sobre o descarte correto de resíduos. Acreditamos que pequenas 
              ações individuais podem gerar grandes mudanças ambientais.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Funcionalidades */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
          Como Ajudamos Você
        </h2>
        
        {features.map((feature, index) => (
          <Card key={index} className="shadow-md">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <CardContent className="p-6 text-center">
          <Recycle className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h3 className="font-bold mb-2">Faça Parte da Mudança</h3>
          <p className="text-sm opacity-90 leading-relaxed">
            Cada resíduo descartado corretamente é um passo em direção a um planeta mais limpo e sustentável.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}