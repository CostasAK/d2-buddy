export const getGid = (gidSheet, sheet) =>
  gidSheet?.find((x) => x.name === sheet)?.gid;
