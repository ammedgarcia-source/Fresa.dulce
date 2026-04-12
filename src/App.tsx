     import { useState, useMemo } from 'react';
import { 
  MapPin, ShoppingCart, Plus, Minus, Trash2, ExternalLink, X, Truck, Clock, 
  Star, Facebook, Instagram, Music2, Users, Heart, ShieldCheck, ArrowRight, Home 
} from 'lucide-react';

const WA_DULCE = '524494939383';
const WA_FRESAS = '524493897519';

const PRODUCTS = [
  {id:1,  name:'Vasito fresas con crema 9oz/300ml', desc:'Fresas con crema altamente premium.', price:59, oldPrice:null, emoji:'🍓', image: 'https://i.postimg.cc/F1yH4tgs/image.jpg', cat:'Especialidades', wa:'dulce'},
  {id:2,  name:'Vaso fresa con crema premium 500ml', desc:'Fresas de primera calidad con crema de la casa.', price:120, oldPrice:null, emoji:'🍓', image: 'https://i.postimg.cc/rz1wk6C8/image.jpg', cat:'Especialidades', wa:'dulce'},
  {id:26, name:'Vaso fresa con crema premium 1 litro', desc:'La mejor crema que probarás.', price:220, oldPrice:null, emoji:'🍓', image: 'https://i.postimg.cc/6TrpXsLQ/image.jpg', cat:'Especialidades', wa:'dulce'},
  {id:3,  name:'Cajita 6 fresas con chocolate', desc:'6 fresas decoradas con malvaviscos.', price:130, oldPrice:null, emoji:'🍫', image: 'https://i.postimg.cc/vmdZ3myn/IMG_20260409_WA0011.jpg', cat:'Arreglos', wa:'dulce'},
  {id:4,  name:'Cajita 9 fresas con chocolate', desc:'9 fresas decoradas.', price:180, oldPrice:null, emoji:'🍫', image: 'https://i.postimg.cc/2qwjpnfv/image.jpg', cat:'Arreglos', wa:'dulce'},
  {id:5,  name:'Cajita 12 fresas con chocolate', desc:'12 fresas decoradas.', price:220, oldPrice:null, emoji:'🍫', image: 'https://i.postimg.cc/xkRjrLS8/image.jpg', cat:'Arreglos', wa:'dulce'},
  {id:7,  name:'Corazón metal', desc:'Cajita metal de 8-9 fresas.', price:350, oldPrice:null, emoji:'🖤', image: 'https://i.postimg.cc/LqT4djMq/image.jpg', cat:'Arreglos', wa:'dulce'},
  {id:6,  name:'Corazón ventana charola', desc:'12-13 fresas decoradas.', price:399, oldPrice:null, emoji:'❤️', image: 'https://i.postimg.cc/9M3D7B88/Whats_App_Image_2026_04_09_at_9_42_19_PM.jpg', cat:'Arreglos', wa:'dulce'},
  {id:9,  name:'Madera pequeña', desc:'Arreglo en caja de madera con vino.', price:420, oldPrice:null, emoji:'🍷', image: 'https://i.postimg.cc/R3RCrwzn/image.jpg', cat:'Arreglos', wa:'dulce'},
  {id:10, name:'Baúl madera 16 pzas fresa', desc:'Baúl con 16 piezas.', price:480, oldPrice:null, emoji:'🎁', image: 'https://i.postimg.cc/gwDc93Pp/image.jpg', cat:'Arreglos', wa:'dulce'},
  {id:8,  name:'Corazón chocolate sorpresa', desc:'Caparazón de chocolate con mensaje.', price:550, oldPrice:null, emoji:'💝', image: 'https://i.postimg.cc/mcwZx7G1/image.jpg', cat:'Arreglos', wa:'dulce'},
  {id:11, name:'Paquete modesto', desc:'4 fresas + 3 rosas.', price:320, oldPrice:399, emoji:'🧸', image: 'https://i.postimg.cc/QMwG04cD/Gemini_Generated_Image_mfo7nlmfo7nlmfo7.png', cat:'Paquetes', wa:'dulce'},
  {id:12, name:'Paquete media', desc:'6 rosas + 6 fresas.', price:650, oldPrice:699, emoji:'🌹', image: 'https://i.postimg.cc/JnwskQ6G/Gemini_Generated_Image_81y6gz81y6gz81y6.png', cat:'Paquetes', wa:'dulce'},
  {id:13, name:'Paquete docena', desc:'9 fresas + docena de rosas.', price:680, oldPrice:750, emoji:'💐', image: 'https://i.postimg.cc/9M3D7B87/Whats_App_Image_2026_04_09_at_10_02_16_PM.jpg', cat:'Paquetes', wa:'dulce'},
  {id:14, name:'Media docena rosas', desc:'Ramo de 6 rosas.', price:250, oldPrice:null, emoji:'🌸', image: 'https://i.postimg.cc/RhWZFsKG/images-(3).jpg', cat:'Flores', wa:'dulce'},
  {id:15, name:'Docena flores', desc:'Ramo de 12 flores.', price:450, oldPrice:null, emoji:'💐', image: 'https://i.postimg.cc/d7BQMGKV/image.jpg', cat:'Flores', wa:'dulce'},
  {id:16, name:'Paquete berry fresco', desc:'Fresa + blueberry + zarzamora + frambuesa.', price:290, oldPrice:null, emoji:'🫐', image: 'https://i.postimg.cc/tTwHrXn3/Gemini_Generated_Image_nn34utnn34utnn34.png', cat:'Fruta fresca', wa:'fresas'},
  {id:17, name:'Paquete 2kg fresa congelada', desc:'2 bolsas de 1kg.', price:220, oldPrice:null, emoji:'🍓', image: 'https://i.postimg.cc/6qZxgDCj/Gemini_Generated_Image_eqrj7eeqrj7eeqrj.png', cat:'Fruta congelada', wa:'fresas'},
  {id:18, name:'Paquete mango congelado 2kg', desc:'2 bolsas de 1kg.', price:220, oldPrice:null, emoji:'🥭', image: 'https://i.postimg.cc/76Dz5kZn/Gemini-Generated-Image-5snkhi5snkhi5snk-(1).png', cat:'Fruta congelada', wa:'fresas'},
  {id:19, name:'Paquete fresa mango', desc:'1kg fresa + 1kg mango.', price:220, oldPrice:null, emoji:'🍓', image: 'https://i.postimg.cc/cC3G2VD/Gemini_Generated_Image_7f18ag7f18ag7f18.png', cat:'Fruta congelada', wa:'fresas'},
  {id:20, name:'Paquete mix congelado 2kg', desc:'2kg de mix de berries.', price:230, oldPrice:null, emoji:'🫐', image: 'https://i.postimg.cc/gXBqcXP8/image.jpg', cat:'Fruta congelada', wa:'fresas'},
  {id:21, name:'Paquete berry congelado', desc:'Mix de 2kg congelado.', price:250, oldPrice:null, emoji:'❄️', image: 'https://i.postimg.cc/76dyBxJd/Gemini_Generated_Image_hf2nzkhf2nzkhf2n.png', cat:'Fruta congelada', wa:'fresas'},
  {id:22, name:'Jugos verdes 7 porciones', desc:'7 bolsitas listas para licuar.', price:180, oldPrice:null, emoji:'🥬', image: 'https://i.postimg.cc/NMSwNg28/Gemini_Generated_Image_u3fex9u3fex9u3fe.png', cat:'Jugos congelados', wa:'fresas'},
  {id:23, name:'Jugos verdes 14 porciones', desc:'14 bolsitas listas.', price:265, oldPrice:null, emoji:'🥬', image: 'https://i.postimg.cc/NMSwNg28/Gemini_Generated_Image_u3fex9u3fex9u3fe.png', cat:'Jugos congelados', wa:'fresas'},
  {id:24, name:'Jugos morados 7 porciones', desc:'7 bolsitas listas.', price:180, oldPrice:null, emoji:'🟣', image: 'https://i.postimg.cc/Ss3pZyY7/Gemini_Generated_Image_x1daxgx1daxgx1da.png', cat:'Jugos congelados', wa:'fresas'},
  {id:25, name:'Jugos morados 14 porciones', desc:'14 bolsitas listas.', price:265, oldPrice:null, emoji:'🟣', image: 'https://i.postimg.cc/Ss3pZyY7/Gemini_Generated_Image_x1daxgx1daxgx1da.png', cat:'Jugos congelados', wa:'fresas'},
];

const CATS = ['Todos','Especialidades','Arreglos','Paquetes','Flores','Fruta fresca','Fruta congelada','Jugos congelados'];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.126 1.535 5.862L.057 23.428a.75.75 0 0 0 .916.916l5.566-1.478A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.187-1.435l-.372-.22-3.853 1.023 1.023-3.744-.241-.386A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
);

export default function App() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [activeCat, setActiveCat] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [isCartMobileOpen, setIsCartMobileOpen] = useState(false);

  const filteredProducts = useMemo(() => activeCat === 'Todos' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activeCat), [activeCat]);
  const addToCart = (id: number) => setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  const changeQty = (id: number, delta: number) => setCart(prev => {
    const newQty = (prev[id] || 0) + delta;
    if (newQty <= 0) { const { [id]: _, ...rest } = prev; return rest; }
    return { ...prev, [id]: newQty };
  });

  const cartItems = useMemo(() => Object.keys(cart).map(idStr => {
    const id = Number(idStr);
    const product = PRODUCTS.find(p => p.id === id)!;
    return { ...product, qty: cart[id], subtotal: product.price * cart[id] };
  }), [cart]);

  const total = useMemo(() => cartItems.reduce((acc, item) => acc + item.subtotal, 0), [cartItems]);
  const hasDulce = cartItems.some(item => item.wa === 'dulce');
  const hasFresas = cartItems.some(item => item.wa === 'fresas');

  const sendWA = (type: 'dulce' | 'fresas') => {
    const items = cartItems.filter(item => item.wa === type);
    if (items.length === 0) return;
    let msg = '¡Hola! Quiero hacer un pedido 🍓\n\n';
    items.forEach(item => msg += `• ${item.name} x${item.qty} — $${item.subtotal}\n`);
    msg += `\nSubtotal: $${items.reduce((s, i) => s + i.subtotal, 0)} MXN\n\n¿Confirman disponibilidad?`;
    window.open(`https://wa.me/${type === 'dulce' ? WA_DULCE : WA_FRESAS}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <nav className="sticky top-4 z-40 mb-6 bg-white/80 backdrop-blur-md border border-pink-border/30 rounded-2xl p-2 shadow-lg flex justify-around md:justify-center md:gap-12">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col md:flex-row items-center gap-1 text-[#880e4f] font-bold uppercase tracking-wider text-[10px] md:text-xs"><Home className="w-4 h-4" /> Inicio</button>
        <button onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })} className="flex flex-col md:flex-row items-center gap-1 text-[#880e4f] font-bold uppercase tracking-wider text-[10px] md:text-xs"><ShoppingCart className="w-4 h-4" /> Productos</button>
        <button onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })} className="flex flex-col md:flex-row items-center gap-1 text-[#880e4f] font-bold uppercase tracking-wider text-[10px] md:text-xs"><Users className="w-4 h-4" /> Nosotros</button>
        <button onClick={() => document.getElementById('entregas')?.scrollIntoView({ behavior: 'smooth' })} className="flex flex-col md:flex-row items-center gap-1 text-[#880e4f] font-bold uppercase tracking-wider text-[10px] md:text-xs"><Truck className="w-4 h-4" /> Entregas</button>
      </nav>

      <section className="mb-12 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#880e4f] to-[#c2185b] text-white p-8 md:p-12 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/30"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400" /> Calidad Premium desde 2019</div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">Frescura que <br /><span className="text-pink-200 underline decoration-pink-400/50">enamora</span> tu paladar</h1>
          <p className="text-lg text-pink-50 max-w-md">Llevamos lo mejor de Aguascalientes directo a tu puerta. Postres artesanales y la fruta más fresca.</p>
          <button onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-[#880e4f] px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:scale-105 transition-transform shadow-xl">Ver Catálogo <ArrowRight className="w-5 h-5" /></button>
        </div>
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="space-y-4 pt-8">
            <div className="rounded-2xl aspect-square shadow-2xl transform -rotate-3 overflow-hidden"><img src="https://i.postimg.cc/F1yH4tgs/image.jpg" className="w-full h-full object-cover" referrerPolicy="no-referrer" /></div>
            <div className="rounded-2xl aspect-square shadow-2xl transform rotate-2 overflow-hidden"><img src="https://i.postimg.cc/vmdZ3myn/IMG_20260409_WA0011.jpg" className="w-full h-full object-cover" referrerPolicy="no-referrer" /></div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl aspect-square shadow-2xl transform rotate-3 overflow-hidden"><img src="https://i.postimg.cc/RhWZFsKG/images-(3).jpg" className="w-full h-full object-cover" referrerPolicy="no-referrer" /></div>
            <div className="rounded-2xl aspect-square shadow-2xl transform -rotate-2 overflow-hidden"><img src="https://i.postimg.cc/cC3G2VD/Gemini_Generated_Image_7f18ag7f18ag7f18.png" className="w-full h-full object-cover" referrerPolicy="no-referrer" /></div>
          </div>
        </div>
      </section>

      <header className="bg-pink-light rounded-2xl p-6 mb-6 border border-pink-border shadow-sm flex flex-col items-center gap-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <img className="h-40 md:h-48 w-auto object-contain" src="https://i.postimg.cc/KjQ4BX4C/2.gif" alt="Dulce Fresa" referrerPolicy="no-referrer" />
          <div className="hidden md:block w-px h-20 bg-pink-border opacity-50" />
          <img className="h-28 md:h-32 w-auto object-contain" src="https://i.postimg.cc/7PJCqh9r/Fresas_LOGO(1).png" alt="Fresas AGS" referrerPolicy="no-referrer" />
          <div className="hidden md:block w-px h-20 bg-pink-border opacity-50" />
          <img className="h-32 md:h-40 w-auto object-contain" src="https://i.postimg.cc/4385Ry5t/HECHO_EN_AGS_color_H.png" alt="Hecho en AGS" referrerPolicy="no-referrer" />
        </div>
        <div className="text-center">
          <p className="text-base md:text-lg font-bold text-[#880e4f] mb-1">Fresas y productos artesanales</p>
          <span className="inline-flex items-center gap-1.5 bg-[#f8bbd0] text-[#880e4f] text-sm px-4 py-1.5 rounded-full font-bold shadow-sm"><MapPin className="w-4 h-4" /> Aguascalientes, AGS</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white border border-green-200 rounded-2xl p-4 flex flex-col gap-2 shadow-sm">
          <h3 className="text-sm font-bold text-green-800">🍓 Dulce Fresa — Arreglos y postres</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <a href={`https://wa.me/${WA_DULCE}`} target="_blank" className="bg-green-wa text-white rounded-lg px-4 py-2 text-xs font-bold flex items-center gap-2"><WhatsAppIcon className="w-4 h-4 fill-white" /> WhatsApp</a>
            <a href="https://www.facebook.com/Dulce.Fresa.Ags/followers" target="_blank" className="bg-[#1877F2] text-white rounded-lg px-4 py-2 text-xs font-bold flex items-center gap-2"><Facebook className="w-4 h-4" /> Facebook</a>
            <a href="https://www.instagram.com/dulce.fresa.deli/" target="_blank" className="bg-[#E4405F] text-white rounded-lg px-4 py-2 text-xs font-bold flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a>
          </div>
        </div>
        <div className="bg-white border border-green-200 rounded-2xl p-4 flex flex-col gap-2 shadow-sm">
          <h3 className="text-sm font-bold text-green-800">🍌 Fresas de AGS — Fruta y congelados</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <a href={`https://wa.me/${WA_FRESAS}`} target="_blank" className="bg-green-wa text-white rounded-lg px-4 py-2 text-xs font-bold flex items-center gap-2"><WhatsAppIcon className="w-4 h-4 fill-white" /> WhatsApp</a>
            <a href="https://www.facebook.com/fresas.para.todos" target="_blank" className="bg-[#1877F2] text-white rounded-lg px-4 py-2 text-xs font-bold flex items-center gap-2"><Facebook className="w-4 h-4" /> Facebook</a>
          </div>
        </div>
      </div>

      <div id="productos" className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
        <section>
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 no-scrollbar">
            {CATS.map(cat => (
              <button key={cat} onClick={() => setActiveCat(cat)} className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs transition-all border ${activeCat === cat ? 'bg-pink-light border-pink-border text-[#880e4f] font-bold' : 'bg-white border-gray-200 text-gray-600'}`}>{cat}</button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:border-pink-border flex flex-col group">
                <div className="relative h-32 bg-pink-light flex items-center justify-center text-4xl overflow-hidden cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  {product.image ? <img src={product.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" /> : product.emoji}
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <h4 className="text-xs font-bold text-gray-900 leading-tight mb-1">{product.name}</h4>
                  <span className={`inline-block text-[9px] px-2 py-0.5 rounded-full font-bold mb-2 ${product.wa === 'dulce' ? 'bg-pink-light text-[#880e4f]' : 'bg-blue-50 text-blue-800'}`}>{product.wa === 'dulce' ? 'Dulce Fresa' : 'Fresas AGS'}</span>
                  <div className="mt-auto flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-red-price">${product.price}</span>
                    <button onClick={() => addToCart(product.id)} className="bg-pink-light border border-pink-border text-[#880e4f] rounded-lg px-3 py-1.5 text-[11px] font-bold">+ Agregar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="hidden lg:block sticky top-24 self-start bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
          <h2 className="text-sm font-bold text-gray-900 mb-4 pb-3 border-b flex items-center gap-2"><ShoppingCart className="w-4 h-4" /> Mi pedido</h2>
          <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto pr-1">
            {cartItems.length === 0 ? <p className="text-center py-8 text-gray-400 text-xs">Tu carrito está vacío</p> : cartItems.map(item => (
              <div key={item.id} className="flex items-center gap-3 py-2 border-b last:border-0">
                <div className="w-10 h-10 bg-pink-light rounded-lg overflow-hidden shrink-0">{item.image ? <img src={item.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" /> : item.emoji}</div>
                <div className="flex-1 min-w-0"><h5 className="text-[11px] font-bold truncate">{item.name}</h5><span className="text-[10px] text-red-price font-bold">${item.subtotal}</span></div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                  <button onClick={() => changeQty(item.id, -1)} className="w-5 h-5 bg-white border rounded"><Minus className="w-3 h-3" /></button>
                  <span className="text-xs font-bold">{item.qty}</span>
                  <button onClick={() => changeQty(item.id, 1)} className="w-5 h-5 bg-white border rounded"><Plus className="w-3 h-3" /></button>
                </div>
              </div>
            ))}
          </div>
          {cartItems.length > 0 && (
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center mb-4"><span className="text-sm font-bold">Total</span><span className="text-lg font-bold text-red-price">${total} MXN</span></div>
              <div className="space-y-2">
                {hasDulce && <button onClick={() => sendWA('dulce')} className="w-full bg-green-wa text-white rounded-xl py-3 text-xs font-bold flex items-center justify-center gap-2">Pedir Dulce Fresa</button>}
                {hasFresas && <button onClick={() => sendWA('fresas')} className="w-full bg-blue-600 text-white rounded-xl py-3 text-xs font-bold flex items-center justify-center gap-2">Pedir Fresas AGS</button>}
              </div>
            </div>
          )}
        </aside>
      </div>

      {cartItems.length > 0 && (
        <div className="lg:hidden fixed bottom-6 right-6 z-50">
          <button onClick={() => setIsCartMobileOpen(true)} className="bg-[#880e4f] text-white p-4 rounded-full shadow-2xl flex items-center gap-3"><ShoppingCart className="w-6 h-6" /><span className="font-bold text-sm">${total}</span></button>
        </div>
      )}

      {isCartMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-end" onClick={() => setIsCartMobileOpen(false)}>
          <div className="bg-white rounded-t-[2.5rem] p-6 w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between mb-6"><h2 className="text-xl font-black">Tu Pedido</h2><button onClick={() => setIsCartMobileOpen(false)}><X className="w-6 h-6" /></button></div>
            <div className="space-y-4 mb-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl">
                  <div className="w-14 h-14 bg-white rounded-xl overflow-hidden shrink-0">{item.image ? <img src={item.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" /> : item.emoji}</div>
                  <div className="flex-1"><h5 className="text-sm font-bold">{item.name}</h5><span className="text-xs text-red-price font-black">${item.subtotal}</span></div>
                  <div className="flex items-center gap-3 bg-white rounded-xl p-2"><button onClick={() => changeQty(item.id, -1)}><Minus className="w-4 h-4" /></button><span className="font-black">{item.qty}</span><button onClick={() => changeQty(item.id, 1)}><Plus className="w-4 h-4" /></button></div>
                </div>
              ))}
            </div>
            <div className="border-t pt-6"><div className="flex justify-between mb-6"><span className="font-bold">Total</span><span className="text-2xl font-black text-[#880e4f]">${total} MXN</span></div>
              <div className="grid gap-3">
                {hasDulce && <button onClick={() => sendWA('dulce')} className="w-full bg-green-wa text-white rounded-2xl py-4 font-black">Pedir Dulce Fresa</button>}
                {hasFresas && <button onClick={() => sendWA('fresas')} className="w-full bg-blue-600 text-white rounded-2xl py-4 font-black">Pedir Fresas AGS</button>}
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="nosotros" className="mt-12 bg-white p-8 rounded-3xl border border-pink-border shadow-sm grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#880e4f]">Tu tiempo es nuestro compromiso</h2>
          <p className="text-gray-600">Desde 2019, somos una pareja de esposos dedicada a llevar lo mejor del mercado hasta tu puerta en Aguascalientes.</p>
          <div className="grid gap-6">
            <div className="flex gap-4"><Clock className="w-5 h-5 text-[#880e4f]" /><div><h4 className="font-bold">Ahorro de tiempo</h4><p className="text-sm text-gray-500">Nosotros hacemos el súper por ti.</p></div></div>
            <div className="flex gap-4"><Users className="w-5 h-5 text-[#880e4f]" /><div><h4 className="font-bold">Experiencia</h4><p className="text-sm text-gray-500">Más de 6 años atendiendo al sector comercial.</p></div></div>
          </div>
          <div className="p-6 bg-[#fce4ec] rounded-2xl border-l-4 border-[#880e4f] font-bold italic text-[#880e4f]">"Nacimos para cuidarte, crecimos para servirte"</div>
        </div>
        <div className="relative"><img src="https://i.postimg.cc/HWb7sMkS/Whats-App-Image-2026-04-12-at-12-13-00.jpg" className="w-full rounded-3xl shadow-xl" referrerPolicy="no-referrer" /><div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg font-bold flex items-center gap-2"><Heart className="w-5 h-5 text-red-500 fill-red-500" /> Desde 2019</div></div>
      </section>

      <section id="entregas" className="mt-6 bg-white p-8 rounded-3xl border border-pink-border shadow-sm">
        <h3 className="text-2xl font-bold text-[#880e4f] mb-6 flex items-center gap-3"><Truck className="w-6 h-6" /> Entregas</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-3"><h4 className="font-bold text-[#c2185b]">Horarios</h4><p className="text-sm text-gray-600">Rutas estándar: 8am-4pm. Personalizados: 7am-10pm (intervalo 1h).</p></div>
          <div className="space-y-3"><h4 className="font-bold text-[#c2185b]">Envíos Gratis</h4><p className="text-sm text-gray-600">Dulce Fresa: Martes/Miércoles/Viernes (min $180). Fresas AGS: Desde 1 paquete.</p></div>
          <div className="space-y-3"><h4 className="font-bold text-[#c2185b]">Logística</h4><p className="text-sm text-gray-600">Seguimos una ruta armada para llegar con todos a tiempo.</p></div>
        </div>
      </section>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row" onClick={e => e.stopPropagation()}>
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-pink-light">{selectedProduct.image ? <img src={selectedProduct.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" /> : <div className="w-full h-full flex items-center justify-center text-6xl">{selectedProduct.emoji}</div>}</div>
            <div className="w-full md:w-1/2 p-6 flex flex-col"><button className="absolute top-4 right-4 text-gray-400" onClick={() => setSelectedProduct(null)}><X className="w-6 h-6" /></button>
              <h2 className="text-xl font-bold mb-2">{selectedProduct.name}</h2>
              <p className="text-sm text-gray-600 flex-1">{selectedProduct.desc}</p>
              <div className="mt-8 pt-6 border-t flex items-center justify-between"><span className="text-2xl font-bold text-red-price">${selectedProduct.price}</span><button onClick={() => { addToCart(selectedProduct.id); setSelectedProduct(null); }} className="bg-pink-light border border-pink-border text-[#880e4f] rounded-xl px-6 py-3 font-bold">Agregar</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
