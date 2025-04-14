const parseIsFavourite = (isFavourite) => {
    const isString = typeof isFavourite === 'string';
    if (!isString) return;
    const isFavouriteBoolean = isFavourite === 'true';
    return isFavouriteBoolean;
  };

  const parseContactType = (contactType) => {
    const isString = typeof contactType === 'string';
    if (!isString) return;
    return contactType;
  };

  export const parseFilterParams = (query) => {
    const { isFavourite, contactType } = query;
    const parsedIsFavourite = parseIsFavourite(isFavourite);
    const parsedContactType = parseContactType(contactType);
    return {
      isFavourite: parsedIsFavourite,
      contactType: parsedContactType,
    };
  };
