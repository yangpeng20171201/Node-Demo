//from参数是要转换的字符串  字符编码
const buf = Buffer.from('brust', 'ascii');

// 输出 6272757373        将ascii 转换成 hex
console.log(buf.toString('hex'));

// 输出 YnJ1c3Q=         将ascii 转换成 base64
console.log(buf.toString('base64'));