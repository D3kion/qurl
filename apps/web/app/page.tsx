
export default function Page(): JSX.Element {
  return (
    <main style={{height: "100vh",width: "100vw",display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", gap: 12}}>
      <h2>Promo Page</h2>
      <nav style={{display: "flex", gap: 12}}>
      <button style={{padding: 4, minWidth: 80}}>Auth</button>
      <button style={{padding: 4, minWidth: 80}}>Dashboard</button>
      </nav>
    </main>
  );
}
