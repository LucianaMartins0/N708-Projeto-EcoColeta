import React, { useState, useEffect } from "react";
import { toast } from "sonner"; //new
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, Clock, Phone, Navigation, Locate } from "lucide-react";
import "leaflet/dist/leaflet.css";


import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;

// Ícone cinza personalizado para os ecopontos
const grayIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function MapaPage() {
  const [ecopontos, setEcopontos] = useState([]);
  const [filteredEcopontos, setFilteredEcopontos] = useState([]);
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    loadEcopontos();
    getUserLocation();
  }, []);

  const loadEcopontos = async () => {
    try {

      const response = await fetch('http://localhost:3000/api/ecopontos');
      if (!response.ok) {
        throw new Error('Falha na rede ou servidor backend desligado');
      }
      const data = await response.json(); 


      const ecopontosFatiados = data.map(ecoponto => {
        const fatias = (ecoponto.materiais_aceitos && typeof ecoponto.materiais_aceitos === 'string')
          ? ecoponto.materiais_aceitos.split(', ')
          : []; 
        
        return { ...ecoponto, materiais_aceitos: fatias };
      });

      setEcopontos(ecopontosFatiados);
      setFilteredEcopontos(ecopontosFatiados);

    } catch (error) {
      console.error("Erro ao carregar ecopontos da API:", error);
      toast({
        variant: "destructive",
        title: "Erro de Conexão",
        description: "Não foi possível buscar os ecopontos. Verifique se o servidor (backend) está ligado.",
      });
    }
    setIsLoading(false);
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.log("Erro ao obter localização:", error);
          setUserLocation([-3.743587, -38.533267]); // Localização padrão (Fortaleza)
        }
      );
    } else {
      setUserLocation([-3.743587, -38.533267]); // Localização padrão (Fortaleza)
    }
  };

  const handleSearch = () => {
    let filtered = ecopontos;
    if (cidade) {
      filtered = filtered.filter(ecoponto => 
        ecoponto.cidade && ecoponto.cidade.toLowerCase().includes(cidade.toLowerCase())
      );
    }
    if (cep) {
      filtered = filtered.filter(ecoponto => 
        ecoponto.cep && ecoponto.cep.includes(cep.replace(/\D/g, ''))
      );
    }
    
    setFilteredEcopontos(filtered);

if (filtered.length === 0 && (cidade || cep)) {
toast.error("Nenhum ecoponto encontrado para esta busca.", {
duration: 4000, // Tempo que ele fica na tela
position: 'bottom-right' 
});
}
  };

  const clearFilters = () => {
    setCidade("");
    setCep("");
    setFilteredEcopontos(ecopontos);
  };

  const getMaterialColor = (material) => {
    const colors = {
      plastico: "bg-red-100 text-red-700 border-red-300",
      papel: "bg-blue-100 text-blue-700 border-blue-300",
      vidro: "bg-green-100 text-green-700 border-green-300",
      metal: "bg-yellow-100 text-yellow-700 border-yellow-300",
      organico: "bg-amber-100 text-amber-700 border-amber-300",
      eletronicos: "bg-purple-100 text-purple-700 border-purple-300",
      oleo: "bg-orange-100 text-orange-700 border-orange-300",
      pilhas: "bg-gray-100 text-gray-700 border-gray-300"
    };
    
    if (!material) {
      return "bg-gray-100 text-gray-700 border-gray-300"; 
    }
    
    return colors[material.toLowerCase()] || "bg-gray-100 text-gray-700 border-gray-300";
  };

  const getMaterialIcon = (material) => {
    const icons = {
      plastico: "🍾",
      papel: "📄",
      vidro: "🍷",
      metal: "🥤",
      organico: "🍎",
      eletronicos: "💻",
      oleo: "🛢️",
      pilhas: "🔋"
    };
    
    if (!material) {
      return "♻️"; 
    }

    return icons[material.toLowerCase()] || "♻️";
  };

  if (isLoading || !userLocation) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <Navigation className="w-8 h-8 animate-pulse mx-auto mb-2 text-green-600" />
          <p className="text-gray-600">Localizando você e carregando ecopontos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      {/* Título */}
      <div className="p-4 pb-2">
        <h1 className="text-2xl font-bold text-green-800 mb-1">Mapa de Ecopontos</h1>
        <p className="text-green-600 text-sm">Encontre pontos de coleta próximos a você</p>
      </div>

      {/* Filtros */}
      <Card className="mx-4 mb-4 shadow-md">
        <CardContent className="p-4">
          <div className="space-y-3">
            <div className="grid grid-cols-5 gap-2">
              <Input
                placeholder="Digite sua cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                className="col-span-3 text-sm"
              />
              <Input
                placeholder="CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
                className="col-span-2 text-sm"
                maxLength={8}
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleSearch}
                size="sm"
                className="bg-green-600 hover:bg-green-700 flex-1"
              >
                <Search className="w-4 h-4 mr-2" />
                Buscar Ecopontos
              </Button>
              <Button
                onClick={clearFilters}
                variant="outline"
                size="sm"
                className="px-3"
              >
                Limpar
              </Button>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{filteredEcopontos.length} ecopontos encontrados</span>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span>pins cinzas no mapa</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mapa */}
      <div className="mx-4 mb-4 h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={userLocation}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
          className="rounded-lg"
          zoomControl={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />

          {filteredEcopontos.map((ecoponto) => (
            <Marker
              key={ecoponto.id}
              position={[ecoponto.latitude, ecoponto.longitude]}
              icon={grayIcon}
            >
              <Popup className="custom-popup" maxWidth={280}>
                <div className="p-3">
                  <h3 className="font-bold text-green-800 mb-3 text-lg flex items-center gap-2">
                    <Locate className="w-5 h-5" />
                    {ecoponto.nome}
                  </h3>

                  <div className="space-y-3 text-sm">
                    {/* Endereço */}
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-800">Endereço:</p>
                          <p className="text-gray-700">{ecoponto.endereco}</p>
                          <p className="text-gray-600 text-xs mt-1">CEP: {ecoponto.cep}</p>
                        </div>
                      </div>
                    </div>

                    {/* Materiais Aceitos */}
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="font-medium text-green-800 mb-2 flex items-center gap-2">
                        <span>♻️</span>
                        Materiais aceitos neste ecoponto:
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {ecoponto.materiais_aceitos.map((material) => (
                          <div
                            key={material}
                            className={`${getMaterialColor(material)} px-2 py-1 rounded border text-xs font-medium flex items-center gap-1`}
                          >
                            <span className="text-sm">{getMaterialIcon(material)}</span>
                            {material.charAt(0).toUpperCase() + material.slice(1)}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Informações adicionais */}
                    {(ecoponto.horario_funcionamento || ecoponto.telefone) && (
                      <div className="bg-blue-50 p-3 rounded-lg space-y-2">
                        {ecoponto.horario_funcionamento && (
                          <div className="flex items-start gap-2">
                            <Clock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-blue-800">Horário:</p>
                              <p className="text-blue-700">{ecoponto.horario_funcionamento}</p>
                            </div>
                          </div>
                        )}

                        {ecoponto.telefone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-blue-800">Contato:</p>
                              <p className="text-blue-700">{ecoponto.telefone}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Lista resumida para mobile */}
      <div className="mx-4 mb-4">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-green-600" />
          Ecopontos na região:
        </h3>
        <div className="space-y-3 max-h-60 overflow-y-auto">
          {filteredEcopontos.slice(0, 3).map((ecoponto) => (
            <Card key={ecoponto.id} className="shadow-sm border-l-4 border-green-500">
              <CardContent className="p-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-green-800">{ecoponto.nome}</h4>
                  <Badge variant="outline" className="text-xs">
                    {ecoponto.materiais_aceitos.length} materiais
                  </Badge>
                </div>
                <p className="text-xs text-gray-600 mb-2">{ecoponto.endereco}</p>
                <div className="flex flex-wrap gap-1">
                  {ecoponto.materiais_aceitos.slice(0, 4).map((material) => (
                    <span key={material} className="text-xs">
                      {getMaterialIcon(material)}
                    </span>
                  ))}
                  {ecoponto.materiais_aceitos.length > 4 && (
                    <span className="text-xs text-gray-500">
                      +{ecoponto.materiais_aceitos.length - 4}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
          {filteredEcopontos.length > 3 && (
            <div className="text-center">
              <p className="text-sm text-gray-500">
                E mais {filteredEcopontos.length - 3} ecopontos no mapa acima
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}