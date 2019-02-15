const http = require('http') 
var cheerio = require('cheerio');

var url='http://www.clantrip.com/index.php?m=content&c=index&a=lists&catid=9'
http.get(url,function(res){
	var chunks=[];
	var size=0;
	res.on('data',function(chunk){
		chunks.push(chunk);
		size += chunk.length;
	})
	res.on('end',function(){
		 var data = Buffer.concat(chunks,size);  
		 var html = data.toString();
		 var $ = cheerio.load(html); //cheerio模块开始处理 DOM处理
		 var mosdata=[];
		 var moslist=$('.service-item>dd');
		 console.log(moslist.length)
		 $('.items-wrapper>ul>li').each(function(){
		 	 var mo={};
		 	 mo.id=$(this).find('a').attr('href').replace('/item/','');
		 	 mo.name=$(this).find('.product-info h1').innerText;
		 	 mo.name_title=$(this).find('.sub_title').innerText;
		 	 mo.price=$(this).find('.price').innerText;
		 	 console.log(mo);
		 	 mosdata.push(mo);
		 })
	})
})
		 	/*  "id": 1000524,
  "name": "坚果 Pro 2S“足迹”系列保护套 本初子午线",
  "name_title": "1884 年 10 月 13 日",
  "price": 79.00,
  "sku_info": [{
    "sku_id": 100052401,
    "title": "坚果 Pro 2S“足迹”系列保护套 本初子午线",
    "sub_title": "1884 年 10 月 13 日",
    "ali_image": "https://resource.smartisan.com/resource/efab7edd482ae475e1d2b91e3a01f6ff.jpg?x-oss-process=image/resize,w_204/format,webp",
    "price": 79.00,
    "limit_num": 5,*/