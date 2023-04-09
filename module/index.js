function scv(req) {
  let mynewobj = {};
  if (!req.headers.cookie) return {};
  req.headers.cookie.split(";").map((x, i) => {
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

module.exports = { scv };
