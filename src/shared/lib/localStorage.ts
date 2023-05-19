export const setLocalStorage = (item: string, value: any) => {
   localStorage.setItem(item, JSON.stringify(value));
};

export const getLocalStorage = (item: string) => {
   const string = localStorage.getItem(item);
   return string && JSON.parse(string)
};

