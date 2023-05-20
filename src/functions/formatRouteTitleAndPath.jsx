import { pascalCase } from "./pascalCase";

export const formatRouteTitleAndPath = (child) => {
  if (!child.index && !child.path && !!child.title) {
    child.path = pascalCase(child.title);
    child.title = child.title
      .split(/\s*\n\s*/)
      .reduce((previous, current) => [...previous, <br />, current], [])
      .splice(1);
  }
  return child;
};
