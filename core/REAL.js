export function REAL(dir) {
  return {
    id: "REAL",
    real: dir.state === "OK" ? "REAL-OK" : "REAL-0",
    raw: "RAW#REAL",
    mass: true
  };
}

