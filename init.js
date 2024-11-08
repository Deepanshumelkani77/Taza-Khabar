const mongoose = require('mongoose');

main().then(()=>{console.log(" database connected")})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/taza-khabar');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const News=require("./models/news.js");

News.insertMany( [
  {
    tittle: 'Breaking News: Local School Wins Championship!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGpXGmY01Nt1wWSIAKMpLF47zU2hkeYp1Wg&s',
    content: 'The local high school team has won the regional championship in a thrilling overtime victory...',
    date: new Date('2024-11-05T09:00:00Z')
  },
  {
    tittle: 'Technology Advances: New AI Innovations',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCyzPaTO4vLNxYz-jLmAI4iEQ7E5m9u3NQCQ&s',
    content: 'In a groundbreaking development, AI technology has reached new heights with several innovative breakthroughs...',
    date: new Date('2024-11-04T14:30:00Z')
  },
  {
    tittle: 'Weather Alert: Heavy Rainfall Expected This Weekend',
    image: 'https://www.hindustantimes.com/ht-img/img/2024/09/12/550x309/Safdarjung--which-is-representative-of-Delhi-s-wea_1726117196696_1726117206646.jpg',
    content: 'The National Weather Service has issued a severe weather warning for this weekend with heavy rainfall expected in the area...',
    date: new Date('2024-11-03T08:15:00Z')
  },
  {
    tittle: 'Sports Update: City Football Team Scores a Stunning Win',
    image: 'https://www.taipeitimes.com/images/2024/10/25/P07-241025-319.jpg',
    content: 'The city’s football team pulled off an incredible win last night, defeating their rivals 3-1...',
    date: new Date('2024-11-02T16:45:00Z')
  },
  {
    tittle: 'Health News: New Guidelines for Nutrition in 2025',
    image: 'https://ars.els-cdn.com/content/image/3-s2.0-B9780123849472005626-f00562-02-9780123849472.jpg',
    content: 'Experts have released new dietary guidelines for 2025, aiming to promote healthier eating habits across the population...',
    date: new Date('2024-11-01T10:00:00Z')
  },

  // New Dummy Data
  {
    tittle: 'Politics: New Election Law Changes in 2025',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfzc2YNkotvdqii_6bADzcEYlTTFvg9R_Ya-m8Eaz0kKUG479dYsdHeXfYa3aVgfbMhY&usqp=CAU',
    content: 'The government has announced new changes to the election law for 2025, which will impact how votes are cast and counted...',
    date: new Date('2024-10-30T12:00:00Z')
  },
  {
    tittle: 'Economy: Global Stocks Surge to Record Highs',
    image: 'https://ddnews.gov.in/wp-content/uploads/2024/06/GettyImages-1213017594-1-1200x800.jpg',
    content: 'Stock markets around the world have reached new record highs, driven by strong corporate earnings and investor optimism...',
    date: new Date('2024-10-29T09:30:00Z')
  },
  {
    tittle: 'Health: Mental Health Awareness Month Kicks Off',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVwoHZsKN4LWjgPnRX7loowzRDMMB6jTiliQ&s',
    content: 'This month is dedicated to raising awareness about mental health issues. Experts encourage open discussions and proper care...',
    date: new Date('2024-10-28T14:00:00Z')
  },
  {
    tittle: 'Entertainment: Major Movie Release Coming This Friday',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSorRnFlR2I6QfrUvUVunfGIhvBU7Qgoo17eA&s',
    content: 'A new blockbuster movie is set to hit theaters this Friday. Fans are excited for the premiere of "The Last Journey" starring top actors...',
    date: new Date('2024-10-27T11:45:00Z')
  },
  {
    tittle: 'Technology: SpaceX Successfully Launches Mars Probe',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiiuVlEU8SDrDmwXEDvInCyU57IMqXaA8GaA&s',
    content: 'SpaceX has successfully launched its Mars probe, aiming to collect data about the Martian atmosphere and potential for life...',
    date: new Date('2024-10-26T15:30:00Z')
  },
  {
    tittle: 'Science: New Fossils Discovered in the Amazon',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2gjpO3BxMtEHRBXWs5TObitENaaqKDLF6_A&s',
    content: 'A team of scientists has discovered new fossils deep in the Amazon rainforest, shedding light on the prehistoric creatures that once roamed the region...',
    date: new Date('2024-10-25T08:30:00Z')
  },
  {
    tittle: 'Sports: Tennis Star Wins Grand Slam Tournament',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_dXul0rEcRqM9EcuodUk-2do_RF-tqpab9g&s',
    content: 'Tennis star Maria Smith has claimed her third Grand Slam title after a stunning victory in the final match against her rival...',
    date: new Date('2024-10-24T17:00:00Z')
  },
  {
    tittle: 'Business: Tech Giant Acquires Startup for $5 Billion',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENF0cTQF5jJP1i4GBWP5g4uVb3OKw3RM4ZiPBFDjVkXRXnhfHXZY4PnrLNQFv0fLQgxs&usqp=CAU',
    content: 'In a surprising move, a major tech company has acquired a small AI startup for $5 billion, a sign of growing investment in artificial intelligence...',
    date: new Date('2024-10-23T13:00:00Z')
  },
  {
    tittle: 'Travel: New Airline Routes Open Between Asia and Europe',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZXj9X4y9pZruCxRYBB4ZFtIOmriFWFgdJUQ&s',
    content: 'Several new international flights are now available between Asia and Europe, making it easier than ever to travel between the two continents...',
    date: new Date('2024-10-22T10:30:00Z')
  },
  {
    tittle: 'Culture: Annual Art Festival Kicks Off in Paris',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1yaxH0EBzp1OLLJq5y7lf8wiuCBiMfMxSbA&s',
    content: 'The prestigious annual art festival in Paris has begun, featuring exhibitions from over 200 artists from around the world...',
    date: new Date('2024-10-21T16:00:00Z')
  },
  {
    tittle: 'Food: New Vegan Restaurant Opens Downtown',
    image: 'https://www.fayobserver.com/gcdn/presto/2022/07/11/NTFO/975b02a0-4676-469e-a701-caa0f2b1add6-FOB_vegan_restaurant__07.jpg?width=700&height=467&fit=crop&format=pjpg&auto=webp',
    content: 'A new vegan restaurant has opened in downtown, offering an innovative menu full of plant-based dishes that are both delicious and sustainable...',
    date: new Date('2024-10-20T14:45:00Z')
  },
  {
    tittle: 'Weather: Record Heatwave in the Southern States',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYijTUFaAjJApfV9n7cIf-rVkEjb9AnM9E1fIbVCcJzIUcNYjzgBaoy0CdKPQ7KnfLkz0&usqp=CAU',
    content: 'The Southern United States is experiencing an unprecedented heatwave with temperatures exceeding 110°F in some areas...',
    date: new Date('2024-10-19T12:15:00Z')
  },
  {
    tittle: 'Automotive: Electric Cars Now Account for 20% of Sales',
    image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240704124000_MG_ZS_EV_showroom_wm.jpg&w=700&c=1',
    content: 'Electric cars now account for 20% of total car sales in the country, as demand for eco-friendly vehicles continues to rise...',
    date: new Date('2024-10-18T09:00:00Z')
  },
  {
    tittle: 'Music: New Album by Indie Band Hits Number One',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2AJS0yHrszlEtEAuEgySeEuNOKz8o-8BeecbTv5uSXOV5CN-3ZK9FIRKNlV7LE_uLFE&usqp=CAU',
    content: 'The latest album by indie band "The Echoes" has hit number one on the charts, with fans praising its innovative sound and emotional depth...',
    date: new Date('2024-10-17T10:45:00Z')
  }

    ]).then((ress)=>{
      console.log("res");
    });

    