import {
  createTypescriptContext,
  replaceResources,
  transformTypescript,
} from '@ngtools/webpack/src/transformers';

export default function(source: string) {
  const { program, compilerHost } = createTypescriptContext(source, undefined, undefined, false);
  const getTypeChecker = () => program.getTypeChecker();
  const transformer = replaceResources(() => true, getTypeChecker, false);

  return transformTypescript(source, [transformer], program, compilerHost);
}
