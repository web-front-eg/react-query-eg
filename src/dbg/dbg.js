export const useDbg = true;

export const lg = anything => useDbg && console.log(anything);
export const er = anything => useDbg && console.error(anything);
