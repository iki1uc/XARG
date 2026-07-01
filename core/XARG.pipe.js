import { XARG_MASS } from "./XARG.mass.js";
import { MIR } from "./MIR.js";
import { RESPO } from "./RESPO.js";
import { ARG } from "./ARG.js";
import { DIR } from "./DIR.js";
import { REAL } from "./REAL.js";

export function XARG_PIPE(input) {
  const mir = MIR(input);
  const respo = RESPO(mir);
  const arg = ARG(respo);
  const dir = DIR(arg);
  const real = REAL(dir);

  return {
    xarg: XARG_MASS,
    mir,
    respo,
    arg,
    dir,
    real
  };
}
