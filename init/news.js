const mongoose = require('mongoose');

main().then(()=>{console.log(" database connected")})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/taza-khabar');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const News=require("../models/news.js");

News.insertMany( [
  {
    tittle: 'Breaking News: Local School Wins Championship!',
    image: 'https://www.oregonlive.com/resizer/v2/NP26VZVY4ZFXLNESMJQZAGMFRQ.jpg?auth=489f4f0a2ffc5f3aa77e1394d4d3b3c8633b57e007a17a61e591ab2c83b29e09&width=1280&quality=90',
    content: 'The local high school team has won the regional championship in a thrilling overtime victory...',
    date: new Date()
  },
  {
    tittle: 'Technology Advances: New AI Innovations',
    image: 'https://appsgeyser.com/blog/wp-content/uploads/2023/10/AI.jpg',
    content: 'In a groundbreaking development, AI technology has reached new heights with several innovative breakthroughs...',
    date: new Date()
  },
  {
    tittle: 'Weather Alert: Heavy Rainfall Expected This Weekend',
    image: 'https://www.hindustantimes.com/ht-img/img/2024/09/12/550x309/Safdarjung--which-is-representative-of-Delhi-s-wea_1726117196696_1726117206646.jpg',
    content: 'The National Weather Service has issued a severe weather warning for this weekend with heavy rainfall expected in the area...',
    date: new Date()
  },
  {
    tittle: 'Sports Update: City Football Team Scores a Stunning Win',
    image: 'https://www.taipeitimes.com/images/2024/10/25/P07-241025-319.jpg',
    content: 'The city’s football team pulled off an incredible win last night, defeating their rivals 3-1...',
    date: new Date()
  },
  {
    tittle: 'Health News: New Guidelines for Nutrition in 2025',
    image: 'https://ars.els-cdn.com/content/image/3-s2.0-B9780123849472005626-f00562-02-9780123849472.jpg',
    content: 'Experts have released new dietary guidelines for 2025, aiming to promote healthier eating habits across the population...',
    date: new Date()
  },

  // New Dummy Data
  {
    tittle: 'Politics: New Election Law Changes in 2025',
    image: 'https://img.etimg.com/thumb/height-450,width-600,resizemode-4,imgsize-84648,msid-114926203/us-election-2024-highlights-kamala-harris-donald-trump-make-final-all-out-campaign-push-ahead-of-election-day.jpg',
    content: 'The government has announced new changes to the election law for 2025, which will impact how votes are cast and counted...',
    date: new Date()
  },
  {
    tittle: 'Economy: Global Stocks Surge to Record Highs',
    image: 'https://www.investopedia.com/thmb/J2o3SOKhRnp2ROlUd3cT2RSrRNw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-18219207341-8454c86dba7b461e8e49635500728896.jpg',
    content: 'Stock markets around the world have reached new record highs, driven by strong corporate earnings and investor optimism...',
    date: new Date()
  },
  {
    tittle: 'Health: Mental Health Awareness Month Kicks Off',
    image: 'https://media.istockphoto.com/id/1480823608/vector/mental-health-awareness-month-vector-illustration-with-green-ribbon-and-flowers-human.jpg?s=612x612&w=0&k=20&c=rWc5-XEPGWfa95lK4Xfbalfjew3TXRJ-oVBcgrpJCUo=',
    content: 'This month is dedicated to raising awareness about mental health issues. Experts encourage open discussions and proper care...',
    date: new Date()
  },
  {
    tittle: 'Entertainment: Major Movie Release Coming This Friday',
    image: 'https://static.toiimg.com/photo/msid-91973367/91973367.jpg',
    content: 'A new blockbuster movie is set to hit theaters this Friday. Fans are excited for the premiere of "The Last Journey" starring top actors...',
    date: new Date()
  },
  {
    tittle: 'Technology: SpaceX Successfully Launches Mars Probe',
    image: 'https://ca-times.brightspotcdn.com/dims4/default/02274fc/2147483647/strip/true/crop/6260x3848+0+0/resize/1200x738!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F22%2F1a%2F26c12dfa4422a849439546277d3b%2Fspacex-starship-67974.jpg',
    content: 'SpaceX has successfully launched its Mars probe, aiming to collect data about the Martian atmosphere and potential for life...',
    date: new Date()
  },
  {
    tittle: 'Science: New Fossils Discovered in the Amazon',
    image: 'https://images.nationalgeographic.org/image/upload/v1638890342/EducationHub/photos/protoceratops.jpg',
    content: 'A team of scientists has discovered new fossils deep in the Amazon rainforest, shedding light on the prehistoric creatures that once roamed the region...',
    date: new Date()
  },
  {
    tittle: 'Sports: Tennis Star Wins Grand Slam Tournament',
    image: 'https://media.nbclosangeles.com/2024/06/GettyImages-2155945299.jpg?quality=85&strip=all',
    content: 'Tennis star Maria Smith has claimed her third Grand Slam title after a stunning victory in the final match against her rival...',
    date: new Date()
  },
  {
    tittle: 'Business: Tech Giant Acquires Startup for $5 Billion',
    image: 'https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24390971/524412020.jpg?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100',
    content: 'In a surprising move, a major tech company has acquired a small AI startup for $5 billion, a sign of growing investment in artificial intelligence...',
    date: new Date()
  },
  {
    tittle: 'Travel: New Airline Routes Open Between Asia and Europe',
    image: 'https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2024/07/shutterstock_1722481489-1.jpg',
    content: 'Several new international flights are now available between Asia and Europe, making it easier than ever to travel between the two continents...',
    date: new Date()
  },
  {
    tittle: 'Culture: Annual Art Festival Kicks Off in Paris',
    image: 'https://www.parisdiscoveryguide.com/image-files/800-fnac-concert-olivier-ortelpa.jpg',
    content: 'The prestigious annual art festival in Paris has begun, featuring exhibitions from over 200 artists from around the world...',
    date: new Date('2024-10-21T16:00:00Z')
  },
  {
    tittle: 'Food: New Vegan Restaurant Opens Downtown',
    image: 'https://www.fayobserver.com/gcdn/presto/2022/07/11/NTFO/975b02a0-4676-469e-a701-caa0f2b1add6-FOB_vegan_restaurant__07.jpg?width=700&height=467&fit=crop&format=pjpg&auto=webp',
    content: 'A new vegan restaurant has opened in downtown, offering an innovative menu full of plant-based dishes that are both delicious and sustainable...',
    date: new Date()
  },
  {
    tittle: 'Weather: Record Heatwave in the Southern States',
    image: 'https://cdn.zeebiz.com/sites/default/files/2024/06/20/300542-high-temp.jpg?im=FitAndFill=(1200,900)',
    content: 'The Southern United States is experiencing an unprecedented heatwave with temperatures exceeding 110°F in some areas...',
    date: new Date()
  },
  {
    tittle: 'Automotive: Electric Cars Now Account for 20% of Sales',
    image: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20240704124000_MG_ZS_EV_showroom_wm.jpg&w=700&c=1',
    content: 'Electric cars now account for 20% of total car sales in the country, as demand for eco-friendly vehicles continues to rise...',
    date: new Date()
  },
  {
    tittle: 'Music: New Album by Indie Band Hits Number One',
    image: 'https://a10.gaanacdn.com/gn_img/albums/VdNW0JMKo5/NW0l6NgEWo/size_m.jpg',
    content: 'The latest album by indie band "The Echoes" has hit number one on the charts, with fans praising its innovative sound and emotional depth...',
    date: new Date()
  }

    ]).then((ress)=>{
      console.log("res");
    });

    