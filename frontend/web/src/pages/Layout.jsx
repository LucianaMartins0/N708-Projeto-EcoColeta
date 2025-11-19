

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { MapPin, Leaf, Trash2, Info, Menu, X, Recycle } from "lucide-react";

const navigationItems = [
  {
    title: "Mapa de Ecopontos",
    url: createPageUrl("Mapa"),
    icon: MapPin,
    description: "Encontre pontos de coleta próximos"
  },
  {
    title: "Degradação dos Materiais",
    url: createPageUrl("Degradacao"),
    icon: Leaf,
    description: "Tempo de decomposição dos resíduos"
  },
  {
    title: "Separação Correta",
    url: createPageUrl("Separacao"),
    icon: Trash2,
    description: "Guia das cores das lixeiras"
  },
  {
    title: "Sobre o EcoColeta", // Changed from "Sobre o App"
    url: createPageUrl("Sobre"),
    icon: Info,
    description: "Conheça mais sobre o EcoColeta"
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isWelcomePage = location.pathname === createPageUrl("Welcome") || location.pathname === "/";

  const toggleDrawer = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  // Se for a página de boas-vindas, não mostrar o layout com menu
  if (isWelcomePage) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex relative">
      {/* Overlay para mobile e desktop quando o drawer está aberto */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40" // Removed lg:hidden
          onClick={closeDrawer}
        />
      )}

      {/* Sidebar/Drawer */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300  ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`} // Removed lg:translate-x-0 lg:static lg:shadow-lg
      >
        <div className="flex flex-col h-full">
          {/* Header do Sidebar */}
          <div className="p-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <div className="flex items-center justify-between">
              <Link to={createPageUrl("Welcome")} onClick={closeDrawer} className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                  <Recycle className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">EcoColeta</h1>
                  <p className="text-sm opacity-90">Descarte consciente</p>
                </div>
              </Link>
              <button
                onClick={closeDrawer}
                className="p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all" // Removed lg:hidden
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <li key={item.title}>
                    <Link
                      to={item.url}
                      onClick={closeDrawer}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-200 group ${
                        isActive 
                          ? 'bg-green-100 text-green-700 shadow-sm' 
                          : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
                      }`}
                    >
                      <item.icon className={`w-5 h-5 ${isActive ? 'text-green-700' : 'text-gray-400 group-hover:text-green-600'}`} />
                      <div className="flex-1">
                        <div className={`font-medium ${isActive ? 'text-green-700' : 'text-gray-700'}`}>
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Juntos por um mundo mais sustentável 🌱
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col"> {/* Removed lg:ml-0 */}
        {/* Top header com botão do menu */}
        <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-30">
          <div className="relative flex items-center justify-center px-4 py-3 h-16">
            {/* Botão do menu à esquerda */}
            <div className="absolute left-4">
              <button
                onClick={toggleDrawer}
                className="p-2 rounded-lg hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label={isDrawerOpen ? "Fechar menu" : "Abrir menu"}
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            {/* Logo Centralizado */}
            <Link to={createPageUrl("Welcome")} className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:opacity-90 transition-opacity">
                <Recycle className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-lg font-bold text-green-800">EcoColeta</h1>
            </Link>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

