import Head from 'next/head'

const expenses = [
  { name: "Internet (Gabi)", value: 50 },
  { name: "Internet (Luan)", value: 50 },
  { name: "iCloud (Gabi)", value: 10.9 },
  { name: "iCloud (Luan)", value: 10.9 },
  { name: "Spotify", value: 21.9 },
  { name: "Amazon Prime", value: 19.9 },
  { name: "Apple Music", value: 21.9 },
  { name: "Faculdade", value: 375 },
  { name: "Disney+", value: 14.9 },
  { name: "Star+", value: 40.9 },
  { name: "Globoplay", value: 25.9 },
  { name: "PS Plus", value: 35.9 }
];

export default function Home() {
  const total = expenses.reduce((sum, e) => sum + e.value, 0);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4">
      <Head>
        <title>Painel de Gastos da Gabi 💖</title>
      </Head>
      <div className="bg-white shadow-xl rounded-3xl p-6 max-w-md w-full">
        <h1 className="text-3xl font-bold text-pink-700 text-center mb-4">Painel de Gastos da Gabi 💖</h1>
        <ul className="space-y-3">
          {expenses.map((expense, index) => (
            <li key={index} className="flex justify-between bg-pink-50 rounded-xl p-3 shadow-sm">
              <span className="font-medium">{expense.name}</span>
              <span className="font-semibold text-pink-700">R$ {expense.value.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-center bg-pink-200 p-4 rounded-xl">
          <p className="text-lg font-bold text-pink-800">Total: R$ {total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}