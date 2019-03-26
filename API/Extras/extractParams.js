function objectPicker(promiseObj, paramsString) {
  const params = paramsString.split(',');
  return promiseObj.then((arr) => {
    const newArray = arr.map((arrItem) => {
      const mirrorObj = {};
      params.forEach((key) => {
        if (key in arrItem) {
          mirrorObj[key] = arrItem[key]  
        }
      });
      return mirrorObj;
    });
    return newArray;
  });
}

export default objectPicker;
