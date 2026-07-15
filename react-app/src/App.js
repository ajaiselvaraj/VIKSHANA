function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f7fc",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h1>🚔 VIKSHANA</h1>
        <h2>Crime Analytics Platform</h2>
        <p>Frontend is running successfully.</p>

        <button
          onClick={() => alert("Catalyst React App is Working!")}
          style={{
            padding: "12px 25px",
            border: "none",
            background: "#0066ff",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Test Button
        </button>
      </div>
    </div>
  );
}

export default App;