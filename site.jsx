import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Maria Santos</h1>
          <p className="text-lg text-gray-600">
            Estudante de Tecnologia | Desenvolvimento e Soluções Digitais
          </p>
        </div>

        {/* Sobre */}
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">Sobre mim</h2>
            <p>
              Sou estudante da área de tecnologia, com conhecimentos em programação, banco de dados e ferramentas digitais.
              Tenho interesse em desenvolvimento de sistemas e estou sempre buscando aprender novas tecnologias.
            </p>
          </CardContent>
        </Card>

        {/* Habilidades */}
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Habilidades</h2>

            <div>
              <h3 className="font-semibold">Tecnologia e Programação</h3>
              <p>HTML, CSS, PHP, C#, C++, Java, Python, POO, Algoritmos</p>
            </div>

            <div>
              <h3 className="font-semibold">Banco de Dados</h3>
              <p>MySQL, DBeaver</p>
            </div>

            <div>
              <h3 className="font-semibold">Ferramentas</h3>
              <p>Visual Studio Code, VirtualBox, Pacote Office</p>
            </div>
          </CardContent>
        </Card>

        {/* Projetos */}
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Projetos</h2>

            <div>
              <h3 className="font-semibold">Projeto 1 - Página Web</h3>
              <p>Desenvolvimento de página utilizando HTML e CSS.</p>
            </div>

            <div>
              <h3 className="font-semibold">Projeto 2 - Algoritmos</h3>
              <p>Exercícios de lógica de programação em Python.</p>
            </div>
          </CardContent>
        </Card>

        {/* Contato */}
        <Card className="rounded-2xl shadow">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Contato</h2>

            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>seuemail@email.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Linkedin size={18} />
              <span>linkedin.com/in/seuperfil</span>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
