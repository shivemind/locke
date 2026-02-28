export const serialize = (data: any): string => {
    return JSON.stringify(data);
};

export const deserialize = (jsonString: string): any => {
    return JSON.parse(jsonString);
};