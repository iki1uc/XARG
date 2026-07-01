export function DIR(arg) {
  return {
    id: "DIR",
    state: arg ? "OK" : "0",
    raw: "RAW#DIR",
    mass: true
  };
}

