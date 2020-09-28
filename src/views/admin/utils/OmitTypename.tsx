
const omitTypenameFn = (val: any) => {
    const omitTypename = (key: string, value: any) => (key === '__typename' ? undefined : value)
    const newPayload = JSON.parse(JSON.stringify(val), omitTypename)
    return newPayload;
}
export default omitTypenameFn;

