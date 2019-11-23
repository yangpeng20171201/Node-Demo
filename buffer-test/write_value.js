buf = Buffer.alloc(256);
// length 参数是写入的字节数。 如果 buf 没有足够的空间保存整个字符串，则只会写入 string 的一部分。 只部分解码的字符不会被写入。
len = buf.write("www.runoob.com");

console.log("写入字节数 : "+  len);