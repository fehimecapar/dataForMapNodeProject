const { PrismaClient } = require('@prisma/client');
const { empty } = require('@prisma/client/runtime');
const prisma = new PrismaClient()
const axios = require('axios');
const unidecode = require('unidecode');


// Get all Address
exports.getCoordinate = async (req, reply) => {
  const data = await prisma.alldata.findMany({})
  reply.send(data);
  }

// we post lat-lng from node to vue
exports.postCoordinate = async (req, reply) => {
    let key = unidecode(req.body.key1).toUpperCase();//key değeri unicode yapılıp upperCase edilerek atanır
    let split_string = key.split(" ");//key değeri aradaki boşluğa göre parçalanır ve diziye atanır
    let split_string_length = split_string.length;//dizinin uzunluğu bulunur
    let city = ""; // il ataması için tanımlanır
    let district = "";//ilçe ataması için tanımlanır
    let town = "";
    let text = '';
    let value = false;
    // for döngüsü içinde gelen key içindeki il ve ilçe değerleri, varsa, belirlenir
    if( split_string.includes("MAHALLESI") == true )
      {
          for(let i=0; i<split_string_length; i++){ 
            //value değeri sayesinde bu if içine sadece 1 kere girer ve MAHALLESI değerini array içerisinden siler.
            if(value == false && split_string[i]=="MAHALLESI"){
              split_string.splice(i, 1);
              value = true;
            }
            //girilen text içinde il olup olmadığı kontrol edilir
            const data = await prisma.alldata.findFirst({
                where: {
                    il_adi: split_string[i]
                },
              })           
            if( data == null){
              const data2 = await prisma.alldata.findFirst({
                where: {
                    ilce_adi: split_string[i]
                },
              })
              if( data2 != null && district == "" ){
                district = split_string[i];
                split_string.splice(i, 1);
                console.log("district ", district);
              }
            }
            else if(data != null && city == ''){
              city = split_string[i];
              split_string.splice(i, 1);
              console.log("city", city);
            }
            //girilen text içinde ilçe olup olmadığı kontrol edilir
            const data2 = await prisma.alldata.findFirst({
                where: {
                    ilce_adi: split_string[i]
                },
              })
              //text içinde ilçe varsa ilçe adı district değerine atanır
            if( data2 == null){
              const data = await prisma.alldata.findFirst({
                where: {
                    il_adi: split_string[i]
                },
              }) 
              if( data != null && city == "" ){
                
                city = split_string[i];
                split_string.splice(i, 1);
                console.log("city ", city);
              }
            }
            else if(data2 != null && district == ''){
              district = split_string[i];
              split_string.splice(i, 1);
              console.log("district ", district);
            }
        }
        //console.log(split_string);
        text = split_string.toString().replace(',', " ");//array içindeki değerleri text'e dönüştürdük array içinde sadece mahalle adının kalmasını sağladık. Aşağıdaki if else içerisinde bu text değerini mahalle değerine atacağız
        console.log(text);
        if(city != "" && district != ""){
          town = text;
          console.log(city, district, town);
          const sonuc = await prisma.alldata.findFirst({
            where: {
                il_adi: city,
                ilce_adi: district,
                mahalle_adi: town + ' MAHALLESI'
            },
          })
          console.log(sonuc);
          reply.send(sonuc);
        }
        else if(city != "" && district == ""){
          key = key.replace(city, '');
          town = key.split(' ').join('');
          const sonuc = await prisma.alldata.findFirst({
            where: {
                il_adi: city,
                mahalle_adi: town + ' MAHALLESI'
            },
          })
          console.log(sonuc);
          reply.send(sonuc);
        }
        else if(city == "" && district != ""){
          key = key.replace(district, '');
          town = key.split(' ').join('');
          const sonuc = await prisma.alldata.findFirst({
            where: {
                ilce_adi: district,
                mahalle_adi: town + ' MAHALLESI'
            },
          })
          console.log(sonuc);
          reply.send(sonuc);
        }
        else{
          town = key.split(' ').join('');
          const sonuc = await prisma.alldata.findFirst({
            where: {
                mahalle_adi: town + ' MAHALLESI'
            },
          })
          console.log(sonuc);
          reply.send(sonuc);
        }       
      }       
      else if( split_string.includes("KOYU") == true )
      {
          for(let i=0; i<split_string_length; i++){ 
            //value değeri sayesinde bu if içine sadece 1 kere girer ve MAHALLESI değerini array içerisinden siler.
            if(value == false && split_string[i]=="KOYU"){
              split_string.splice(i, 1);
              value = true;
            }
            //girilen text içinde il olup olmadığı kontrol edilir
            const data = await prisma.alldata.findFirst({
                where: {
                    il_adi: split_string[i]
                },
              })           
            if( data == null){
              const data2 = await prisma.alldata.findFirst({
                where: {
                    ilce_adi: split_string[i]
                },
              })
              if( data2 != null && district == "" ){
                district = split_string[i];
                split_string.splice(i, 1);
                console.log("district ", district);
              }
            }
            else if(data != null && city == ''){
              city = split_string[i];
              split_string.splice(i, 1);
              console.log("city", city);
            }
            //girilen text içinde ilçe olup olmadığı kontrol edilir
            const data2 = await prisma.alldata.findFirst({
                where: {
                    ilce_adi: split_string[i]
                },
              })
              //text içinde ilçe varsa ilçe adı district değerine atanır
            if( data2 == null){
              const data = await prisma.alldata.findFirst({
                where: {
                    il_adi: split_string[i]
                },
              }) 
              if( data != null && city == "" ){
                
                city = split_string[i];
                split_string.splice(i, 1);
                console.log("city ", city);
              }
            }
            else if(data2 != null && district == ''){
              district = split_string[i];
              split_string.splice(i, 1);
              console.log("district ", district);
            }
        }
        //console.log(split_string);
        text = split_string.toString().replace(',', " ");//array içindeki değerleri text'e dönüştürdük array içinde sadece mahalle adının kalmasını sağladık. Aşağıdaki if else içerisinde bu text değerini mahalle değerine atacağız
        console.log(text);
        if(city != "" && district != ""){
          town = text;
          //console.log(city, district, town);
          const sonuc = await prisma.alldata.findFirst({
            where: {
                il_adi: city,
                ilce_adi: district,
                mahalle_adi: town + ' KOYU'
            },
          })
          console.log(sonuc);
          reply.send(sonuc);
        }
        else if(city != "" && district == ""){
          town = text;
          const sonuc = await prisma.alldata.findFirst({
            where: {
                il_adi: city,
                mahalle_adi: town + ' KOYU'
            },
          })
          console.log(sonuc);
          reply.send(sonuc);
        }
        else if(city == "" && district != ""){
          town = text;
          const sonuc = await prisma.alldata.findFirst({
            where: {
                ilce_adi: district,
                mahalle_adi: town + ' KOYU'
            },
          })
          console.log(sonuc);
          reply.send(sonuc);
        }
        else{
          town = text;
          const sonuc = await prisma.alldata.findFirst({
            where: {
                mahalle_adi: town + ' KOYU'
            },
          })
          console.log(sonuc);
          reply.send(sonuc);
        }
        
      }
      else {
        for(let i=0; i<split_string_length; i++){
          //girilen text içinde il olup olmadığı kontrol edilir
          const data = await prisma.alldata.findFirst({
              where: {
                  il_adi: split_string[i]
              },
            })           
          if( data == null){
            const data2 = await prisma.alldata.findFirst({
              where: {
                  ilce_adi: split_string[i]
              },
            })
            if( data2 != null && district == "" ){
              district = split_string[i];
              split_string.splice(i, 1);
              console.log("district ", district);
            }
          }
          else if(data != null && city == ''){
            city = split_string[i];
            split_string.splice(i, 1);
            console.log("city", city);
          }
          //girilen text içinde ilçe olup olmadığı kontrol edilir
          const data2 = await prisma.alldata.findFirst({
              where: {
                  ilce_adi: split_string[i]
              },
            })
            //text içinde ilçe varsa ilçe adı district değerine atanır
          if( data2 == null){
            const data = await prisma.alldata.findFirst({
              where: {
                  il_adi: split_string[i]
              },
            }) 
            if( data != null && city == "" ){
              
              city = split_string[i];
              split_string.splice(i, 1);
              console.log("city ", city);
            }
          }
          else if(data2 != null && district==''){
            district = split_string[i];
            split_string.splice(i, 1);
            console.log("district ", district);
          }
        }
        text = split_string.toString().replace(',', " ");//array içindeki değerleri text'e dönüştürdük array içinde sadece mahalle adının kalmasını sağladık. Aşağıdaki if else içerisinde bu text değerini mahalle değerine atacağız
        console.log(text);
        if(city != "" && district != ""){   
          //console.log(city, district, town);
          const sonuc = await prisma.alldata.findFirst({
            where: {
                il_adi: city,
                ilce_adi: district,
            },
          })
          console.log(sonuc);
          reply.send(sonuc);
        }
        else if(city != "" && district == ""){
          
          const sonuc = await prisma.alldata.findFirst({
            where: {
                il_adi: city,             
            },
          })
          console.log(sonuc);
          reply.send(sonuc);
        }
        else if(city == "" && district != ""){ 
          const sonuc = await prisma.alldata.findFirst({
            where: {
                ilce_adi: district,
                
            },
          })
          console.log(sonuc);
          reply.send(sonuc);
        }       
  }       
}
exports.getDataSearch = async (req, reply) => { 

    try {
      
      var key_value = req.query.q.toUpperCase();
      console.log(key_value);      
      // const sonuc = await prisma.alldata.findMany({
      //   where: {
      //       il_adi: "+"+key_value ,
      //   },
      // })
      //.distinct( "il_adi" );
      const result = await prisma.alldata.findMany({
        where: {
          OR:[
            {
              ilce_adi: {
                startsWith: key_value,
            }, 
          } ], 
          OR:[
            {
              il_adi: {
                startsWith: key_value,
            }, 
          } ],
          //limit: 10,
        },
        distinct: ['il_adi'],
      })          
      reply.send(result);

    } catch (error) {
      console.log(error);
      reply.send(error);
    }
   
  }

  /* AKOREN diye bir hem mahalle hem ilçe adı varmış bundan dolayı hata veriyo*/