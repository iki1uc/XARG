import { MIR } from "./MIR.js";
import { RESPO } from "./RESPO.js";
import { ARG } from "./ARG.js";
import { DIR } from "./DIR.js";
import { REAL } from "./REAL.js";
import { SAT } from "./SAT.js";

export function RUN8_PIPE(input) {
  const mir = MIR(input);
  const respo = RESPO(mir);
  const arg = ARG(respo);
  const dir = DIR(arg);
  const real = REAL(dir);
  const sat = SAT(real);

  return { mir, respo, arg, dir, real, sat };
}
