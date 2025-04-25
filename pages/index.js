import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const gastos = [{'descricao': 'COMPRAS CARTÃO JENNIFER (PARCELA)', 'valor': 470}, {'descricao': 'MACA - VENCE DIA 20 (PARCELA)', 'valor': 150}, {'descricao': 'JENNIFER COMPRAS (PARCELA)', 'valor': 250}, {'descricao': 'UNHA (RECORRENTE)', 'valor': 200}, {'descricao': 'SOBRANCELHA (RECORRENTE)', 'valor': 105}, {'descricao': 'ACADEMIA (RECORRENTE)', 'valor': 150}, {'descricao': 'DEPILAÇÃO (RECORRENTE)', 'valor': 345}];

  const total = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Painel de Gastos da Gabi 💖</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Painel de Gastos da Gabi 💸</h1>
        <div className={styles.card}>
          <ul>
            {gastos.map((gasto, index) => (
              <li key={index}>
                <span>💗 {gasto.descricao}</span> <strong>R${gasto.valor}</strong>
              </li>
            ))}
          </ul>
          <p className={styles.total}>Total: R${total}</p>
        </div>
      </main>
    </div>
  )
}
