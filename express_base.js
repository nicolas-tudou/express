const express = require('express');
const app = express();
const admin = express();
app.use('/statics', express.static('src'));
app.get('/', (req, res) => {
    console.log(req.is())
    res.send('HELLO WORLD.')
}).listen(3000, () => {
    console.log('server is start.')
});

//res����������
// res.app��ͬreq.appһ��
// res.append()��׷��ָ��HTTPͷ
// res.set()��res.append()������֮ǰ���õ�ͷ
// res.cookie(name��value [��option])������Cookie
// opition: domain / expires / httpOnly / maxAge / path / secure / signed
// res.clearCookie()�����Cookie
// res.download()������ָ��·�����ļ�
// res.get()������ָ����HTTPͷ
// res.json()������JSON��Ӧ
// res.jsonp()������JSONP��Ӧ
// res.location()��ֻ������Ӧ��Location HTTPͷ��������״̬�����close response
// res.redirect()��������Ӧ��Location HTTPͷ����������״̬��302
// res.render(view,[locals],callback)����Ⱦһ��view��ͬʱ��callback������Ⱦ����ַ������������Ⱦ�������д�����next(err)���ᱻ�Զ����á�callback���ᱻ����һ�����ܷ����Ĵ����Լ���Ⱦ���ҳ�棬�����Ͳ����Զ�����ˡ�
// res.send()������HTTP��Ӧ
// res.sendFile(path [��options] [��fn])������ָ��·�����ļ� -���Զ������ļ�extension�趨Content-Type
// res.set()������HTTPͷ������object����һ�����ö��ͷ
// res.status()������HTTP״̬��
// res.type()������Content-Type��MIME����


//req����������
// req.app����callbackΪ�ⲿ�ļ�ʱ����req.app����express��ʵ��
// req.baseUrl����ȡ·�ɵ�ǰ��װ��URL·��
// req.body / req.cookies����á��������塹/ Cookies
// req.fresh / req.stale���ж������Ƿ񻹡����ʡ�
// req.hostname / req.ip����ȡ��������IP��ַ
// req.originalUrl����ȡԭʼ����URL
// req.params����ȡ·�ɵ�parameters
// req.path����ȡ����·��
// req.protocol����ȡЭ������
// req.query����ȡURL�Ĳ�ѯ������
// req.route����ȡ��ǰƥ���·��
// req.subdomains����ȡ������
// req.accepts()�����ɽ��ܵ�������ĵ�����
// req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages������ָ���ַ����ĵ�һ���ɽ����ַ�����
// req.get()����ȡָ����HTTP����ͷ
// req.is()���ж�����ͷContent-Type��MIME����

//����app��ת��admin�Ǵ���mount���� ���һὫapp��Ϊ���������ص�������
// admin.on('mount', (parent) => {
//     console.log(parent);
//     console.log('admin is being mounted.')
// })
// app.use('/admin', admin);
// // admin�൱��һ���Է����� ͨ��/admin����
// admin.get('/', (req, res) => {
//     res.send('i am admin.')
// })
