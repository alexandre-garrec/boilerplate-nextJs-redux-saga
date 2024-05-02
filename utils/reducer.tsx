export const makeAssociativeTable = (data: any, key = "id") => {
  const array = Array.isArray(data) ? data : [data];
  return array.reduce(
    (memo, item) => (item ? { ...memo, [item[key]]: item } : memo),
    {}
  );
};

export const reducer =
  (initialState: any, reducer: any) =>
  (state = initialState, { type, payload }: any) =>
    reducer[type] ? reducer[type](state, payload) : state;
