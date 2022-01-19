const isIterate = (entity) => {
  if (
    entity != null &&
    typeof entity === 'object' &&
    !Object.prototype.isPrototypeOf.call(RegExp.prototype, entity)
  )
    return true;
  return false;
};

const rewriteFoundedLoader = (targetEntity, callback) => {
  const recursiveIterator = (item) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const targetEntityKey in item) {
      if (Object.prototype.hasOwnProperty.call(item, targetEntityKey)) {
        const targetEntityItemReference = item[targetEntityKey];
        if (isIterate(targetEntityItemReference)) {
          recursiveIterator(targetEntityItemReference);
        } else {
          callback(item, targetEntityKey);
        }
      }
    }
    return true;
  };
  return recursiveIterator(targetEntity);
};

module.exports = rewriteFoundedLoader;
