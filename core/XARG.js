export const XARG = {
  id: "XARG",
  raw: "RAW#XARG",
  mass: true,

  bind(mir, respo, arg, dir) {
    return {
      id: this.id,
      raw: this.raw,
      mass: this.mass,
      mir,
      respo,
      arg,
      dir
    };
  }
};
