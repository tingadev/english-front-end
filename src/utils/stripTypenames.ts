const stripTypenames = <T>(obj: T, propToDelete = '__typename'): T => {
  for (const property in obj) {
    if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (obj as any).property;
      const newData = stripTypenames(obj[property], propToDelete);
      obj[property] = newData;
    } else {
      if (property === propToDelete) {
        delete obj[property];
      }
    }
  }
  return obj;
};

export default stripTypenames;
