
export const addStyleWhen = (condition: boolean, style: any) => {
  if(condition) {
    return style;
  }
  else {
    return {};
  }
}

export const addElevation = (elevation: number) => {
  return {
    zIndex: elevation,
    elevation
  }
}

export const normalizeMeasure = (measure: number) => {
  return measure * 8;
}