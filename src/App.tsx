import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  ExternalLink, 
  X,
  Truck,
  Clock,
  Star,
  Facebook,
  Instagram,
  Music2,
  Users,
  Heart,
  ShieldCheck,
  ArrowRight,
  Home
} from 'lucide-react';

const WA_DULCE = '524494939383';
const WA_FRESAS = '524491063636';

const PRODUCTS = [
  // DULCE FRESA — Especialidades
  {id:1,  name:'Vasito fresas con crema 9oz/300ml',        desc:'Fresas con crema altamente premium.',                                                                  price:59,  oldPrice:null, emoji:'🍓', image: 'https://i.postimg.cc/F1yH4tgs/image.jpg', cat:'Especialidades', wa:'dulce'},
  {id:2,  name:'Vaso fresa con crema premium 500ml',        desc:'Fresas de primera calidad con crema de la casa, esponjosa y deliciosa.',                               price:120, oldPrice:null, emoji:'🍓', image: 'https://i.postimg.cc/rz1wk6C8/image.jpg', cat:'Especialidades', wa:'dulce'},
  {id:26, name:'Vaso fresa con crema premium 1 litro/33oz', desc:'Fresas de primera calidad con crema de la casa esponjosa y deliciosa, la mejor que probaras.',         price:220, oldPrice:null, emoji:'🍓', image: 'https://i.postimg.cc/6TrpXsLQ/image.jpg', cat:'Especialidades', wa:'dulce'},
  // DULCE FRESA — Arreglos
  {id:3,  name:'Cajita 6 fresas con chocolate',             desc:'6 fresas cubiertas de chocolate con malvaviscos y decoración.',                                        price:130, oldPrice:null, emoji:'🍫', image: 'https://i.postimg.cc/vmdZ3myn/IMG_20260409_WA0011.jpg', cat:'Arreglos', wa:'dulce'},
  {id:4,  name:'Cajita 9 fresas con chocolate',             desc:'9 fresas cubiertas de chocolate con malvaviscos y chochitos de colores.',                              price:180, oldPrice:null, emoji:'🍫', image: 'https://i.postimg.cc/2qwjpnfv/image.jpg', cat:'Arreglos', wa:'dulce'},
  {id:5,  name:'Cajita 12 fresas con chocolate',            desc:'12 fresas cubiertas de chocolate con malvaviscos y decoración.',                                       price:220, oldPrice:null, emoji:'🍫', image: 'https://i.postimg.cc/xkRjrLS8/image.jpg', cat:'Arreglos', wa:'dulce'},
  {id:7,  name:'Corazón metal',                             desc:'Cajita metal de 8-9 fresas cubiertas de chocolate.',                                                   price:350, oldPrice:null, emoji:'🖤', image: 'https://i.postimg.cc/LqT4djMq/image.jpg', cat:'Arreglos', wa:'dulce'},
  {id:6,  name:'Corazón ventana charola',                   desc:'Charola de plástico con ventana de tapa, 12-13 fresas decoradas.',                                    price:399, oldPrice:null, emoji:'❤️', image: 'https://i.postimg.cc/9M3D7B88/Whats_App_Image_2026_04_09_at_9_42_19_PM.jpg', cat:'Arreglos', wa:'dulce'},
  {id:9,  name:'Madera pequeña',                            desc:'Arreglo en caja de madera con fresas cubiertas y vino.',                                               price:420, oldPrice:null, emoji:'🍷', image: 'https://i.postimg.cc/R3RCrwzn/image.jpg', cat:'Arreglos', wa:'dulce'},
  {id:10, name:'Baúl madera 16 pzas fresa',                 desc:'Baúl de madera que contiene 16 piezas de fresas cubiertas.',                                          price:480, oldPrice:null, emoji:'🎁', image: 'https://i.postimg.cc/gwDc93Pp/image.jpg', cat:'Arreglos', wa:'dulce'},
  {id:8,  name:'Corazón chocolate sorpresa',                desc:'Caparazón de chocolate sorpresa con mensaje personalizado dentro.',                                    price:550, oldPrice:null, emoji:'💝', image: 'https://i.postimg.cc/mcwZx7G1/image.jpg', cat:'Arreglos', wa:'dulce'},
  // DULCE FRESA — Paquetes
  {id:11, name:'Paquete modesto',                           desc:'Cajita osito con 4 pzas de fresas cubiertas + ramo de 3 rosas.',                                      price:320, oldPrice:399,  emoji:'🧸', image: 'https://i.postimg.cc/QMwG04cD/Gemini_Generated_Image_mfo7nlmfo7nlmfo7.png', cat:'Paquetes', wa:'dulce'},
  {id:12, name:'Paquete media',                             desc:'Caja madera + ramo de 6 rosas + 6 fresas cubiertas.',                                                 price:650, oldPrice:699,  emoji:'🌹', image: 'https://i.postimg.cc/JnwskQ6G/Gemini_Generated_Image_81y6gz81y6gz81y6.png', cat:'Paquetes', wa:'dulce'},
  {id:13, name:'Paquete docena',                            desc:'Cajita 9 fresas cubiertas + docena de rosas en ramo.',                                                price:680, oldPrice:750,  emoji:'💐', image: 'https://i.postimg.cc/9M3D7B87/Whats_App_Image_2026_04_09_at_10_02_16_PM.jpg', cat:'Paquetes', wa:'dulce'},
  // DULCE FRESA — Flores
  {id:14, name:'Media docena rosas',                        desc:'Media docena de rosas variadas arregladas en ramo.',                                                  price:250, oldPrice:null, emoji:'🌸', image: 'https://i.postimg.cc/RhWZFsKG/images-(3).jpg', cat:'Flores', wa:'dulce'},
  {id:15, name:'Docena flores',                             desc:'Docena de flores arreglada en ramo.',                                                                 price:450, oldPrice:null, emoji:'💐', image: 'https://i.postimg.cc/d7BQMGKV/image.jpg', cat:'Flores', wa:'dulce'},
  // FRESAS DE AGS — Fruta fresca
  {id:16, name:'Paquete berry fresco',                      desc:'1 charola fresa 450-500g + blueberry, zarzamora y frambuesa 170g c/u. Todo fresco.',                  price:290, oldPrice:null, emoji:'🫐', image: 'https://i.postimg.cc/tTwHrXn3/Gemini_Generated_Image_nn34utnn34utnn34.png', cat:'Fruta fresca',    wa:'fresas'},
  // FRESAS DE AGS — Fruta congelada
  {id:17, name:'Paquete 2kg fresa congelada',               desc:'2 bolsas de 1kg de fresa congelada selladas. Envío gratis al comprar 1 paquete.',                     price:220, oldPrice:null, emoji:'🍓', image: 'https://i.postimg.cc/6qZxgDCj/Gemini_Generated_Image_eqrj7eeqrj7eeqrj.png', cat:'Fruta congelada', wa:'fresas'},
  {id:18, name:'Paquete mango congelado 2kg',               desc:'2 bolsas de 1kg de mango congelado selladas. Envío gratis al comprar 1 paquete.',                     price:220, oldPrice:null, emoji:'🥭', image: 'https://i.postimg.cc/76Dz5kZn/Gemini-Generated-Image-5snkhi5snkhi5snk-(1).png', cat:'Fruta congelada', wa:'fresas'},
  {id:19, name:'Paquete fresa mango',                       desc:'1 bolsa 1kg fresa + 1 bolsa 1kg mango congeladas. Envío gratis al comprar 1 paquete.',                price:220, oldPrice:null, emoji:'🍓', image: 'https://i.postimg.cc/cC3G2VfD/Gemini_Generated_Image_7f18ag7f18ag7f18.png', cat:'Fruta congelada', wa:'fresas'},
  {id:20, name:'Paquete mix congelado 2kg',                 desc:'2 bolsas de 1kg de mix de fresa, zarzamora, frambuesa y blueberry. Envío gratis.',                    price:230, oldPrice:null, emoji:'🫐', image: 'https://i.postimg.cc/gXBqcXP8/image.jpg', cat:'Fruta congelada', wa:'fresas'},
  {id:21, name:'Paquete berry congelado',                   desc:'500g fresa + 500g zarzamora + 500g blueberry + 500g frambuesa. Todo congelado.',                      price:250, oldPrice:null, emoji:'❄️', image: 'https://i.postimg.cc/76dyBxJd/Gemini_Generated_Image_hf2nzkhf2nzkhf2n.png', cat:'Fruta congelada', wa:'fresas'},
  // FRESAS DE AGS — Jugos congelados
  {id:22, name:'Jugos verdes 7 porciones',                  desc:'7 bolsitas de apio, nopal, piña, pepino y jengibre. Solo se envía por paquete. Envío gratis.',        price:180, oldPrice:null, emoji:'🥬', image: 'https://i.postimg.cc/NMSwNg28/Gemini_Generated_Image_u3fex9u3fex9u3fe.png', cat:'Jugos congelados', wa:'fresas'},
  {id:23, name:'Jugos verdes 14 porciones',                 desc:'14 bolsitas de apio, nopal, piña, pepino y jengibre. Envío gratis al comprar 1 paquete.',             price:265, oldPrice:null, emoji:'🥬', image: 'https://i.postimg.cc/NMSwNg28/Gemini_Generated_Image_u3fex9u3fex9u3fe.png', cat:'Jugos congelados', wa:'fresas'},
  {id:24, name:'Jugos morados 7 porciones',                 desc:'7 bolsitas de zanahoria, betabel, piña, pepino y jengibre. Solo se envía por paquete. Envío gratis.', price:180, oldPrice:null, emoji:'🟣', image: 'https://i.postimg.cc/Ss3pZyY7/Gemini_Generated_Image_x1daxgx1daxgx1da.png', cat:'Jugos congelados', wa:'fresas'},
  {id:25, name:'Jugos morados 14 porciones',                desc:'14 bolsitas de zanahoria, betabel, piña, pepino y jengibre. Envío gratis al comprar 1 paquete.',      price:265, oldPrice:null, emoji:'🟣', image: 'https://i.postimg.cc/Ss3pZyY7/Gemini_Generated_Image_x1daxgx1daxgx1da.png', cat:'Jugos congelados', wa:'fresas'},
];

const CATS = ['Todos','Especialidades','Arreglos','Paquetes','Flores','Fruta fresca','Fruta congelada','Jugos congelados'];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.126 1.535 5.862L.057 23.428a.75.75 0 0 0 .916.916l5.566-1.478A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.187-1.435l-.372-.22-3.853 1.023 1.023-3.744-.241-.386A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

export default function App() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [activeCat, setActiveCat] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [isCartMobileOpen, setIsCartMobileOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return activeCat === 'Todos' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCat);
  }, [activeCat]);

  const addToCart = (id: number) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const changeQty = (id: number, delta: number) => {
    setCart(prev => {
      const newQty = (prev[id] || 0) + delta;
      if (newQty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  const cartItems = useMemo(() => {
    return Object.keys(cart).map(idStr => {
      const id = Number(idStr);
      const product = PRODUCTS.find(p => p.id === id)!;
      const qty = cart[id];
      return { ...product, qty, subtotal: product.price * qty };
    });
  }, [cart]);

  const total = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.subtotal, 0);
  }, [cartItems]);

  const hasDulce = cartItems.some(item => item.wa === 'dulce');
  const hasFresas = cartItems.some(item => item.wa === 'fresas');

  const sendWA = (type: 'dulce' | 'fresas') => {
    const items = cartItems.filter(item => item.wa === type);
    if (items.length === 0) return;

    let msg = '¡Hola! Quiero hacer un pedido 🍓\n\n';
    items.forEach(item => {
      msg += `• ${item.name} x${item.qty} — $${item.subtotal}\n`;
    });
    const sub = items.reduce((s, item) => s + item.subtotal, 0);
    msg += `\nSubtotal: $${sub} MXN\n\n¿Pueden confirmar disponibilidad?`;
    
    const phone = type === 'dulce' ? WA_DULCE : WA_FRESAS;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Sticky Navigation Menu */}
      <nav className="sticky top-4 z-40 mb-6 bg-white/80 backdrop-blur-md border border-pink-border/30 rounded-2xl p-2 shadow-lg">
        <div className="flex items-center justify-around md:justify-center md:gap-12">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-[#880e4f] hover:scale-105 transition-transform"
          >
            <Home className="w-4 h-4" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Inicio</span>
          </button>
          <button 
            onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-[#880e4f] hover:scale-105 transition-transform"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Productos</span>
          </button>
          <button 
            onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-[#880e4f] hover:scale-105 transition-transform"
          >
            <Users className="w-4 h-4" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Nosotros</span>
          </button>
          <button 
            onClick={() => document.getElementById('entregas')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-[#880e4f] hover:scale-105 transition-transform"
          >
            <Truck className="w-4 h-4" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Entregas</span>
          </button>
        </div>
      </nav>

      {/* Visual Introduction / Hero Section */}
      <section className="mb-12 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#880e4f] to-[#c2185b] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/30">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>Calidad Premium desde 2019</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
              Frescura que <br />
              <span className="text-pink-200 underline decoration-pink-400/50">enamora</span> tu paladar
            </h1>
            <p className="text-lg text-pink-50 leading-relaxed max-w-md">
              Llevamos lo mejor de Aguascalientes directo a tu puerta. Postres artesanales, arreglos inolvidables y la fruta más fresca.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[#880e4f] px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:scale-105 transition-transform shadow-xl"
              >
                Ver Catálogo <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 relative">
            {/* Floating Images Grid */}
            <div className="space-y-4 pt-8">
              <div className="group relative overflow-hidden rounded-2xl aspect-square shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500">
                <img src="https://i.postimg.cc/F1yH4tgs/image.jpg" className="w-full h-full object-cover" alt="Fresas con crema" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-xs font-bold">Especialidades</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-square shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                <img src="https://i.postimg.cc/vmdZ3myn/IMG_20260409_WA0011.jpg" className="w-full h-full object-cover" alt="Fresas con chocolate" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-xs font-bold">Arreglos</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="group relative overflow-hidden rounded-2xl aspect-square shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                <img src="https://i.postimg.cc/RhWZFsKG/images-(3).jpg" className="w-full h-full object-cover" alt="Rosas" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-xs font-bold">Flores</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-square shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500">
                <img src="https://i.postimg.cc/gXBqcXP8/image.jpg" className="w-full h-full object-cover" alt="Fruta" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-xs font-bold">Fruta Congelada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <header className="flex flex-col items-center mb-10">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-6">
          <img src="https://i.postimg.cc/fWf59n4v/image.jpg" alt="Dulce Fresa Logo" className="h-20 md:h-28 w-auto object-contain" referrerPolicy="no-referrer" />
          <img src="https://i.postimg.cc/3R91f93Z/image.jpg" alt="Fresas AGS Logo" className="h-20 md:h-28 w-auto object-contain" referrerPolicy="no-referrer" />
          <img src="https://i.postimg.cc/0jWj6m9Z/image.jpg" alt="Hecho en AGS Logo" className="h-24 md:h-32 w-auto object-contain" referrerPolicy="no-referrer" />
        </div>
        <div className="text-center">
          <p className="text-gray-text font-bold text-sm md:text-base uppercase tracking-widest mb-1">Fresas y productos artesanales</p>
          <div className="flex items-center justify-center gap-2 text-pink font-bold">
            <MapPin className="w-4 h-4" />
            <span>Aguascalientes, AGS</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="bg-green-wa/10 border border-green-wa/20 rounded-3xl p-6 flex flex-col items-center text-center group hover:bg-green-wa/20 transition-all">
          <WhatsAppIcon className="w-10 h-10 fill-green-wa mb-3" />
          <h3 className="font-black text-green-wa text-lg mb-1">Dulce Fresa</h3>
          <p className="text-xs text-gray-text mb-4">Postres, arreglos y detalles</p>
          <div className="flex gap-3 mb-4">
            <a href="https://www.facebook.com/Dulce.Fresa.Ags/followers" target="_blank" className="p-2 bg-white rounded-full text-blue-600 shadow-sm hover:scale-110 transition-transform"><Facebook className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/dulce.fresa.deli/" target="_blank" className="p-2 bg-white rounded-full text-pink-600 shadow-sm hover:scale-110 transition-transform"><Instagram className="w-4 h-4" /></a>
            <a href="https://www.tiktok.com/@dulce.fresa.ags2" target="_blank" className="p-2 bg-white rounded-full text-black shadow-sm hover:scale-110 transition-transform"><Music2 className="w-4 h-4" /></a>
          </div>
          <a href={`https://wa.me/${WA_DULCE}`} target="_blank" className="bg-green-wa text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-green-200">
            WhatsApp <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 flex flex-col items-center text-center group hover:bg-blue-100 transition-all">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-blue-200">
            <Truck className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-black text-blue-800 text-lg mb-1">Fresas AGS</h3>
          <p className="text-xs text-gray-text mb-4">Fruta fresca y congelada</p>
          <div className="flex gap-3 mb-4">
            <a href="https://www.facebook.com/fresas.para.todos" target="_blank" className="p-2 bg-white rounded-full text-blue-700 shadow-sm hover:scale-110 transition-transform"><Facebook className="w-4 h-4" /></a>
          </div>
          <a href={`https://wa.me/${WA_FRESAS}`} target="_blank" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-200">
            WhatsApp <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Content Layout */}
      <div id="productos" className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
        {/* Products Section */}
        <section>
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 custom-scrollbar no-scrollbar">
            {CATS.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs transition-all border ${
                  activeCat === cat 
                    ? 'bg-pink-light border-pink-border text-[#880e4f] font-bold' 
                    : 'bg-white border-gray-200 text-gray-600 hover:border-pink-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:border-pink-border transition-colors flex flex-col group">
                <div 
                  className="relative h-32 bg-pink-light flex items-center justify-center text-4xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    product.emoji
                  )}
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <div 
                    className="mb-1 cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <h4 className="text-xs font-bold text-gray-900 leading-tight group-hover:text-[#880e4f] transition-colors">
                      {product.name}
                    </h4>
                    <span className={`inline-block text-[9px] px-2 py-0.5 rounded-full font-bold mt-1 ${
                      product.wa === 'dulce' ? 'bg-pink-light text-[#880e4f]' : 'bg-blue-50 text-blue-800'
                    }`}>
                      {product.wa === 'dulce' ? 'Dulce Fresa' : 'Fresas AGS'}
                    </span>
                  </div>
                  <p 
                    className="text-[10px] text-gray-500 line-clamp-2 mb-3 leading-relaxed cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {product.desc}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-2">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-red-price">${product.price}</span>
                      {product.oldPrice && (
                        <span className="text-[10px] text-gray-400 line-through">${product.oldPrice}</span>
                      )}
                    </div>
                    <button 
                      onClick={() => addToCart(product.id)}
                      className="bg-pink-light border border-pink-border text-[#880e4f] rounded-lg px-3 py-1.5 text-[11px] font-bold hover:bg-[#f8bbd0] transition-colors"
                    >
                      + Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cart Panel (Desktop) */}
        <aside className="hidden lg:block sticky top-24 self-start">
          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
            <h2 className="text-sm font-bold text-gray-900 mb-4 pb-3 border-b border-gray-50 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Mi pedido
            </h2>
            
            <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto custom-scrollbar pr-1">
              {cartItems.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <ShoppingCart className="w-8 h-8 mx-auto mb-2 opacity-20" />
                  <p className="text-xs">Tu carrito está vacío</p>
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                    <div className="w-10 h-10 bg-pink-light rounded-lg flex items-center justify-center text-xl overflow-hidden shrink-0">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        item.emoji
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-[11px] font-bold text-gray-900 truncate">{item.name}</h5>
                      <span className="text-[10px] text-red-price font-bold">${item.subtotal}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                      <button 
                        onClick={() => changeQty(item.id, -1)}
                        className="w-5 h-5 flex items-center justify-center bg-white border border-gray-200 rounded text-gray-600 hover:bg-gray-50"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold min-w-[12px] text-center">{item.qty}</span>
                      <button 
                        onClick={() => changeQty(item.id, 1)}
                        className="w-5 h-5 flex items-center justify-center bg-white border border-gray-200 rounded text-gray-600 hover:bg-gray-50"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold text-gray-900">Total</span>
                  <span className="text-lg font-bold text-red-price">${total} MXN</span>
                </div>
                
                <div className="space-y-2">
                  {hasDulce && (
                    <button 
                      onClick={() => sendWA('dulce')}
                      className="w-full bg-green-wa text-white rounded-xl py-3 text-xs font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-all shadow-sm"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
                      Pedir — Dulce Fresa
                    </button>
                  )}
                  {hasFresas && (
                    <button 
                      onClick={() => sendWA('fresas')}
                      className="w-full bg-blue-600 text-white rounded-xl py-3 text-xs font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-sm"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
                      Pedir — Fresas AGS
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* Floating Cart Button (Mobile) */}
      {cartItems.length > 0 && (
        <div className="lg:hidden fixed bottom-6 right-6 z-50">
          <button 
            onClick={() => setIsCartMobileOpen(true)}
            className="bg-[#880e4f] text-white p-4 rounded-full shadow-2xl flex items-center gap-3 hover:scale-110 active:scale-95 transition-all"
          >
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-white text-[#880e4f] text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {cartItems.reduce((acc, item) => acc + item.qty, 0)}
              </span>
            </div>
            <span className="font-bold text-sm pr-2">${total}</span>
          </button>
        </div>
      )}

      {/* Mobile Cart Drawer Overlay */}
      {isCartMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[2.5rem] p-6 shadow-2xl animate-in slide-in-from-bottom duration-500 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-gray-900 flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-[#880e4f]" />
                Tu Pedido
              </h2>
              <button 
                onClick={() => setIsCartMobileOpen(false)}
                className="p-2 bg-gray-100 rounded-full text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 mb-6 pr-2 custom-scrollbar">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-2xl overflow-hidden shrink-0 shadow-sm">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    ) : (
                      item.emoji
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-bold text-gray-900 leading-tight mb-1">{item.name}</h5>
                    <span className="text-xs text-red-price font-black">${item.subtotal}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white rounded-xl p-2 shadow-sm">
                    <button 
                      onClick={() => changeQty(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center text-[#880e4f] hover:bg-pink-50 rounded-lg transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-black min-w-[20px] text-center">{item.qty}</span>
                    <button 
                      onClick={() => changeQty(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center text-[#880e4f] hover:bg-pink-50 rounded-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-500 font-bold">Total del pedido</span>
                <span className="text-2xl font-black text-[#880e4f]">${total} MXN</span>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {hasDulce && (
                  <button 
                    onClick={() => sendWA('dulce')}
                    className="w-full bg-green-wa text-white rounded-2xl py-4 font-black flex items-center justify-center gap-3 shadow-lg shadow-green-200"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white" />
                    Pedir Dulce Fresa
                  </button>
                )}
                {hasFresas && (
                  <button 
                    onClick={() => sendWA('fresas')}
                    className="w-full bg-blue-600 text-white rounded-2xl py-4 font-black flex items-center justify-center gap-3 shadow-lg shadow-blue-200"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white" />
                    Pedir Fresas AGS
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quienes Somos */}
      <section id="nosotros" className="mt-12 bg-white p-8 rounded-3xl border border-pink-border shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-[#880e4f] mb-4">Tu tiempo es nuestro compromiso</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Desde 2019, somos una pareja de esposos dedicada a llevar lo mejor del mercado hasta tu puerta. 
              Surgimos como una solución de apoyo en tiempos difíciles y hoy nos hemos consolidado como los 
              aliados estratégicos de familias y empresas en Aguascalientes.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#c2185b] flex items-center gap-2">
                ¿Qué hacemos por ti?
              </h3>
              
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-pink-light rounded-full flex items-center justify-center text-[#880e4f]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Ahorro de tiempo</h4>
                    <p className="text-sm text-gray-500">Olvídate de las filas y el tráfico; nosotros hacemos el súper por ti.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-pink-light rounded-full flex items-center justify-center text-[#880e4f]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Experiencia</h4>
                    <p className="text-sm text-gray-500">Más de 6 años atendiendo al sector privado y comercial.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-pink-light rounded-full flex items-center justify-center text-[#880e4f]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Confianza</h4>
                    <p className="text-sm text-gray-500">Calidad seleccionada personalmente, como si fuera para nuestra propia casa.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-[#fce4ec] rounded-2xl border-l-4 border-[#880e4f]">
              <p className="text-lg font-bold text-[#880e4f] italic">
                "Nacimos para cuidarte, crecimos para servirte"
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-pink-light rounded-[2rem] -rotate-2 z-0"></div>
              <img 
                src="https://i.postimg.cc/HWb7sMkS/Whats-App-Image-2026-04-12-at-12-13-00.jpg" 
                alt="Nosotros" 
                className="relative z-10 w-full h-auto rounded-3xl shadow-xl object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg z-20 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                <span className="font-bold text-gray-900">Desde 2019</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <footer className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-pink-border pt-10 pb-10">
        <div className="bg-white p-6 rounded-3xl border border-pink-border shadow-sm">
          <h3 className="text-xl font-bold text-[#880e4f] mb-3 flex items-center gap-2">
            <span className="text-2xl">🎯</span> Misión
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed italic">
            "Mira, lo que buscamos en Fresas de Ags es bien simple pero bien cuidado: llevarle a la gente las mejores fresas, las de aquí, las de Aguascalientes. Queremos que cuando prueben algo de Dulce Fresa sientan que no es cualquier postre, ¿sabes? Es frescura de verdad, seleccionada a mano... con ese toque artesanal y un trato que te haga sentir en confianza, como en casa."
          </p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-pink-border shadow-sm">
          <h3 className="text-xl font-bold text-[#880e4f] mb-3 flex items-center gap-2">
            <span className="text-2xl">🚀</span> Visión
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed italic">
            "La idea es que, cuando alguien piense en fresas, lo primero que se le venga a la mente sea Fresas de Ags y nuestra marca Dulce Fresa. Queremos crecer, sí, pero sin perder esa esencia de Aguascalientes que nos hizo empezar. Vernos en más lugares, que la gente nos reconozca por ser los que mejor hacen las cosas y, no sé, poner la vara alta en lo que a postres de calidad se refiere."
          </p>
        </div>
      </footer>

      {/* Mecánica de Entregas */}
      <section id="entregas" className="mt-6 bg-white p-8 rounded-3xl border border-pink-border shadow-sm">
        <h3 className="text-2xl font-bold text-[#880e4f] mb-6 flex items-center gap-3">
          <Truck className="w-6 h-6" /> Así manejamos las entregas
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h4 className="font-bold text-[#c2185b] flex items-center gap-2">
              <Clock className="w-4 h-4" /> El horario
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Rutas estándar</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Repartimos de <span className="font-bold text-[#880e4f]">8:00 am a 4:00 pm</span>.
                </p>
              </div>
              <div className="pt-3 border-t border-pink-100">
                <p className="text-[10px] font-bold uppercase tracking-wider text-pink-600 mb-1">Envíos personalizados</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  ¿Lo necesitas a una hora específica? Enviamos <span className="font-bold text-[#880e4f]">todos los días</span> de <span className="font-bold text-[#880e4f]">7:00 am a 10:00 pm</span> (intervalo de entrega de 1 hora, sujeto a agenda y disponibilidad).
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-[#c2185b] flex items-center gap-2">
              <Star className="w-4 h-4" /> Envíos gratis
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-pink-600 mb-1">🍓 Dulce Fresa</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pide para <span className="font-bold text-[#880e4f]">martes, miércoles o viernes</span>. Mínimo <span className="font-bold text-[#880e4f]">$180</span> y liquidar un día antes.
                </p>
              </div>
              <div className="pt-3 border-t border-pink-100">
                <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">📦 Fresas AGS</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Envío gratis desde <span className="font-bold text-blue-800">1 paquete</span>. Se paga <span className="font-bold text-blue-800">contra entrega</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-[#c2185b] flex items-center gap-2">
              <MapPin className="w-4 h-4" /> La logística
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Como seguimos una ruta armada para alcanzar a llegar con todos, te caemos en ese transcurso del día. Así nos aseguramos de que todo te llegue bien y a tiempo.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-pink-light rounded-2xl border border-pink-border/30 text-center">
          <p className="text-sm text-[#880e4f] font-medium italic">
            "Básicamente es planearlo un poquito un día antes y listo, te olvidas del costo de envío."
          </p>
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-pink-light relative">
              {selectedProduct.image ? (
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  {selectedProduct.emoji}
                </div>
              )}
              <button 
                className="absolute top-4 right-4 md:hidden text-white p-2 bg-black/40 rounded-full"
                onClick={() => setSelectedProduct(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-1/2 p-6 flex flex-col relative">
              <button 
                className="hidden md:flex absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setSelectedProduct(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-4">
                <span className={`inline-block text-[10px] px-3 py-1 rounded-full font-bold mb-2 ${
                  selectedProduct.wa === 'dulce' ? 'bg-pink-light text-[#880e4f]' : 'bg-blue-50 text-blue-800'
                }`}>
                  {selectedProduct.wa === 'dulce' ? 'Dulce Fresa' : 'Fresas AGS'}
                </span>
                <h2 className="text-xl font-bold text-gray-900 leading-tight">
                  {selectedProduct.name}
                </h2>
                <p className="text-xs text-pink-border font-medium mt-1">
                  Categoría: {selectedProduct.cat}
                </p>
              </div>

              <div className="flex-1">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Descripción</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedProduct.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-red-price">${selectedProduct.price}</span>
                  {selectedProduct.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">${selectedProduct.oldPrice}</span>
                  )}
                </div>
                <button 
                  onClick={() => {
                    addToCart(selectedProduct.id);
                    setSelectedProduct(null);
                  }}
                  className="bg-pink-light border border-pink-border text-[#880e4f] rounded-xl px-6 py-3 text-sm font-bold hover:bg-[#f8bbd0] transition-colors shadow-sm"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
