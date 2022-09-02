
export const addStyleWhen = (condition: boolean, style: any) => {
  if(condition) {
    return style;
  }
  else {
    return {};
  }
}