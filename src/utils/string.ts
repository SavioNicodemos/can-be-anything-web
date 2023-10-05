//Force a string start with "/"
export function startWithSlash(str: string) {
  return str.startsWith('/') ? str : '/' + str;
}
