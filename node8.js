/*

GET  www.bunedio.com/register?username=evren
POST  www.bunedio.com/register?
PUT
DELETE

*/

const http = require('http');
const server = http.createServer((request, response) => {
     
     response.writeHead(200,{'content-type' : 'text/html;charset=utf-8'});
        if(request.method === "GET"){
          if(request.url === '/')
          response.write("Index Sayfasındasınız");
           else if(request.url === '/iletisim')
           response.write("Iletişim Sayfasndasınız")
           else if(request.url === '/help')
           response.write("Yardım Sayfsındasınız")
           else if(request.url === '/buy')
           response.write("Satın Alım Sayfasındasınız")
            else
            response.write("Bu Sayfa Bulunamadı");
      }
});
server.listen(3000);