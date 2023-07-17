import texts from './en-US';

function t(key: string) {
  // @ts-ignore
  return texts[key];
}

export default t;
