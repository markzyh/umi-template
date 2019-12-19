// 手机号
export const REG_PHONE_NUMBER = /^1[345678]\d{9}$/;
// 身份证号
export const REG_ID_NUMBER = /(^\d{18}$)|(^\d{17}(\d|x)$)/i;
// 身份证号去空格
export const REG_ID_NUMBER_TRIM = /[^0-9|^x]/gi;
// 营业执照
export const REG_BUSINESS_LICENCE = /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/;
// 邮箱
export const REG_EMAIL = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
// 银行卡号
export const REG_BANK_NUMBER = /^(\d{16}|\d{19})$/;
//密码8-16位,数字加字母
// export const REG_PASSWORD = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;

//密码8-20位,数字或字母
export const REG_PASSWORD = /^(\d{8,20}|\w{8,20})$/;
//验证码6位
export const REG_CAPTCHA = /^[0-9]{6}$/;
