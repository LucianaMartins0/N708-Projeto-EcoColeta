import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Leaf, MapPin, ArrowRight, Recycle, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
      <div className="px-4 pt-6 pb-8">
        {/* Logo e Slogan */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Leaf className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-3">
            EcoColeta
          </h1>
          <p className="text-green-600 text-base md:text-lg leading-relaxed px-2">
            "Descubra onde e como descartar seus resíduos corretamente."
          </p>
        </motion.div>

        {/* Cards de recursos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 mb-8"
        >
          <Card className="border-green-200 shadow-md">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Encontre Ecopontos
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Localize pontos de coleta próximos a você no mapa interativo
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 shadow-md">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-amber-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Aprenda sobre Degradação
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Descubra quanto tempo cada material leva para se decompor
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 shadow-md">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Recycle className="w-6 h-6 text-purple-600" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Separação Correta
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Guia completo das cores das lixeiras e como separar
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Botão de ação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <Link to={createPageUrl("Mapa")} className="block">
            <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 text-base md:text-lg font-semibold shadow-lg">
              Começar a Explorar
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          
          <div className="text-center text-sm text-green-600 mt-6">
            Juntos por um mundo mais sustentável 🌱
          </div>
        </motion.div>
      </div>
    </div>
  );
}