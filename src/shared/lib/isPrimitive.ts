export const isPrimitive = (item: any) => {
    if (typeof item === 'undefined' || typeof item === 'number') {
       return true;
    } else {
       return false;
    }
}