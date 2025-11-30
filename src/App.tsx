import { MessageCircle, Phone } from 'lucide-react';

function App() {
  const whatsappNumber = '5511946697518';
  const whatsappMessage = 'Olá! Gostaria de mais informações.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-slate-900">NIO</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Bem-vindo à NIO
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Estamos aqui para atender você. Entre em contato conosco através do WhatsApp.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg font-semibold">Fale Conosco</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Phone className="w-6 h-6" />
            <span className="text-lg font-semibold">WhatsApp</span>
          </a>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Entre em Contato
            </h3>
            <p className="text-slate-600 mb-6">
              Nossa equipe está pronta para atender você. Clique em qualquer um dos botões acima para iniciar uma conversa no WhatsApp.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-700">
              <Phone className="w-5 h-5 text-green-500" />
              <span className="font-semibold">(11) 95356-6697</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-slate-600">
            © 2025 NIO. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
