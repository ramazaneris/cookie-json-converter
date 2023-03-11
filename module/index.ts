function scv(req: any) {
  let mynewobj: any = {};
  req.headers.cookie.split(";").map((x: any, i: number) => {
    mynewobj[
      i === 0
        ? x.split("=")[0].split("").join("")
        : x
            .split("=")[0]
            .split("")
            .splice(1, x.split("=")[0].length - 1)
            .join("")
    ] = x.split("=")[1];
  });
  return mynewobj;
}

export { scv };
