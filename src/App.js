
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function App() {
  const [gastos, setGastos] = useState([
    { id: 1, nome: "Café", valor: 8 },
    { id: 2, nome: "Uber", valor: 20 },
  ]);

  const [novoGasto, setNovoGasto] = useState("");
  const [valor, setValor] = useState("");

  const total = gastos.reduce((acc, g) => acc + g.valor, 0);

  const adicionarGasto = () => {
    if (!novoGasto || !valor) return;
    const novo = {
      id: Date.now(),
      nome: novoGasto,
      valor: parseFloat(valor),
    };
    setGastos([...gastos, novo]);
    setNovoGasto("");
    setValor("");
  };

  const removerGasto = (id) => {
    setGastos(gastos.filter((g) => g.id !== id));
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6 flex flex-col items-center text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-2">
        Painel Financeiro da Gabriela 💖
      </h1>
      <p className="text-pink-600 mb-6">
        Bem-vinda, Gabriela 💖 – Aqui está seu cantinho financeiro com carinho ✨
      </p>

      <Card className="w-full max-w-md bg-white shadow-xl rounded-2xl mb-6">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold text-pink-600 mb-4">Adicionar novo gasto</h2>
          <input
            className="w-full mb-2 p-2 rounded-xl border border-pink-300"
            placeholder="Descrição"
            value={novoGasto}
            onChange={(e) => setNovoGasto(e.target.value)}
          />
          <input
            type="number"
            className="w-full mb-2 p-2 rounded-xl border border-pink-300"
            placeholder="Valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
          <Button className="w-full bg-pink-500 hover:bg-pink-600" onClick={adicionarGasto}>
            <Plus className="w-4 h-4 mr-2" /> Adicionar
          </Button>
        </CardContent>
      </Card>

      <div className="w-full max-w-md space-y-3">
        {gastos.map((g) => (
          <Card key={g.id} className="bg-white shadow-lg rounded-2xl">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-pink-700">{g.nome}</h3>
                <p className="text-sm text-pink-500">R$ {g.valor.toFixed(2)}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-pink-400 hover:text-pink-600"
                onClick={() => removerGasto(g.id)}
              >
                <Minus className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 text-xl text-pink-700 font-bold">
        Total: R$ {total.toFixed(2)} 💰
      </div>
    </div>
  );
}
