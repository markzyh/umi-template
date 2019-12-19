// 判断数组长度
export function isArrayLength(array) {
  return Array.isArray(array) && array.length;
}

// rc-form 表单校验
export function fieldsError(fields) {
  if (!fields) return Promise.resolve();
  Object.entries(fields).forEach(field => {
    const [, { errors }] = field || [null, {}];
    isArrayLength(errors) &&
      errors.forEach(error => {
        throw new Error(error.message);
      });
  });
  return Promise.resolve();
}
