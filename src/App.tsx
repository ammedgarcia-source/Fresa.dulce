/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
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
  Star
} from 'lucide-react';

const WA_DULCE = '524494939383';
const WA_FRESAS = '524493897519';

const PRODUCTS = [
  // DULCE FRESA — Especialidades
  {id:1,  name:'Vasito fresas con crema 9oz/300ml',        desc:'Fresas con crema altamente premium.',                                                                  price:59,  oldPrice:null, emoji:'🍓', image: 'https://i.postimg.cc/F1yH4tgs/image.jpg', cat:'Especialidades', wa:'dulce'},
  {id:2,  name:'Vaso fresa con crema premium 500ml',        desc:'Fresas de primera calidad con crema de la casa, esponjosa y deliciosa.',                               price:120, oldPrice:null, emoji:'🍓', image: 'https://i.postimg.cc/rz1wk6C8/image.jpg', cat:'Especialidades', wa:'dulce'},
  {id:26, name:'Vaso fresa con crema premium 1 litro/33oz', desc:'Fresas de primera calidad con crema de la casa esponjosa y deliciosa, la mejor que probaras.',         price:220, oldPrice:null, emoji:'🍓', image: 'https://i.postimg.cc/6TrpXsLQ/image.jpg', cat:'Especialidades', wa:'dulce'},
  // DULCE FRESA — Arreglos
  {id:3,  name:'Cajita 6 fresas con chocolate',             desc:'6 fresas cubiertas de chocolate con malvaviscos y decoración.',                                        price:130, oldPrice:null, emoji:'🍫', image: 'https://i.postimg.cc/5XnJtb69/image.jpg', cat:'Arreglos', wa:'dulce'},
  {id:4,  name:'Cajita 9 fresas con chocolate',             desc:'9 fresas cubiertas de chocolate con malvaviscos y chochitos de colores.',                              price:180, oldPrice:null, emoji:'🍫', image: 'https://i.postimg.cc/2qwjpnfv/image.jpg', cat:'Arreglos', wa:'dulce'},
  {id:5,  name:'Cajita 12 fresas con chocolate',            desc:'12 fresas cubiertas de chocolate con malvaviscos y decoración.',                                       price:220, oldPrice:null, emoji:'🍫', image: 'https://i.postimg.cc/xkRjrLS8/image.jpg', cat:'Arreglos', wa:'dulce'},
  {id:7,  name:'Corazón metal',                             desc:'Cajita metal de 8-9 fresas cubiertas de chocolate.',                                                   price:350, oldPrice:null, emoji:'🖤', image: 'https://i.postimg.cc/LqT4djMq/image.jpg', cat:'Arreglos', wa:'dulce'},
  {id:6,  name:'Corazón ventana charola',                   desc:'Charola de plástico con ventana de tapa, 12-13 fresas decoradas.',                                    price:399, oldPrice:null, emoji:'❤️', image: 'https://i.postimg.cc/B8gZW2GH/image.jpg', cat:'Arreglos', wa:'dulce'},
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
      {/* Hero Section */}
      <header className="bg-pink-light rounded-2xl p-6 mb-6 border border-pink-border shadow-sm">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <img 
              className="h-40 md:h-48 w-auto object-contain" 
              src="https://i.postimg.cc/vxgQwNrv/2.gif" 
              alt="Dulce Fresa"
              referrerPolicy="no-referrer"
            />
            <div className="hidden md:block w-px h-20 bg-pink-border opacity-50" />
            <img 
              className="h-28 md:h-32 w-auto object-contain" 
              src="https://i.postimg.cc/7PJCqh9r/Fresas-LOGO(1).png" 
              alt="Fresas AGS"
              referrerPolicy="no-referrer"
            />
            <div className="hidden md:block w-px h-20 bg-pink-border opacity-50" />
            <img 
              className="h-32 md:h-40 w-auto object-contain" 
              src="https://i.postimg.cc/4385Ry5t/HECHO-EN-AGS-color-H.png" 
              alt="Hecho en AGS"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="text-center">
            <p className="text-base md:text-lg font-bold text-[#880e4f] mb-1">Fresas y productos artesanales</p>
            <span className="inline-flex items-center gap-1.5 bg-[#f8bbd0] text-[#880e4f] text-sm px-4 py-1.5 rounded-full font-bold shadow-sm">
              <MapPin className="w-4 h-4" />
              Aguascalientes, AGS
            </span>
          </div>
        </div>
      </header>

      {/* WhatsApp Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white border border-green-200 rounded-2xl p-4 flex flex-col gap-2 shadow-sm">
          <h3 className="text-sm font-bold text-green-800 flex items-center gap-2">
            🍓 Dulce Fresa — Arreglos y postres
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Fresas con chocolate, arreglos, flores y vasos con crema
          </p>
          <a 
            href={`https://wa.me/${WA_DULCE}?text=${encodeURIComponent('¡Hola! Me gustaría pedir de Dulce Fresa 🍓')}`}
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-wa text-white rounded-lg px-4 py-2 text-xs font-bold w-fit hover:bg-green-600 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            449 493 9383
          </a>
        </div>
        <div className="bg-white border border-green-200 rounded-2xl p-4 flex flex-col gap-2 shadow-sm">
          <h3 className="text-sm font-bold text-green-800 flex items-center gap-2">
            🍌 Fresas de AGS — Fruta y congelados
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Fruta fresca, fruta congelada y jugos congelados
          </p>
          <a 
            href={`https://wa.me/${WA_FRESAS}?text=${encodeURIComponent('¡Hola! Me gustaría comprar de Fresas AGS 🍓')}`}
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-wa text-white rounded-lg px-4 py-2 text-xs font-bold w-fit hover:bg-green-600 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            449 389 7519
          </a>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
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

        {/* Cart Panel */}
        <aside className="lg:sticky lg:top-6">
          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
            <h2 className="text-sm font-bold text-gray-900 mb-4 pb-3 border-b border-gray-50 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Mi pedido
            </h2>
            
            <div className="space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar pr-1">
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
      <section className="mt-6 bg-white p-8 rounded-3xl border border-pink-border shadow-sm">
        <h3 className="text-2xl font-bold text-[#880e4f] mb-6 flex items-center gap-3">
          <Truck className="w-6 h-6" /> Así manejamos las entregas
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h4 className="font-bold text-[#c2185b] flex items-center gap-2">
              <Clock className="w-4 h-4" /> El horario
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Andamos repartiendo desde temprano, de <span className="font-bold text-[#880e4f]">8:00 am a 4:00 pm</span>.
            </p>
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
