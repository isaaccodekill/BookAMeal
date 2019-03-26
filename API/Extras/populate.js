function pickFrom(promiseObj, paramsString) {
  if (!paramsString) return promiseObj;
  const params = paramsString.split(',');
  return promiseObj.then((obj) => {
    let extractedObj = {};
    params.forEach((param) => {
      if (obj !== null) {
        if (param in obj) {
          extractedObj[param] = obj.dataValues[param];
        }
      } else {
        extractedObj = null;
      }
    });
    return extractedObj;
  });
}

const populate = (model, array, params) => {
  const populatedArray = array.map(id => pickFrom(model.findByPk(id), params));
  return Promise.all(populatedArray);
};

export default populate;
