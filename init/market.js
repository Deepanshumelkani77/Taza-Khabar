const mongoose = require('mongoose');

main().then(()=>{console.log(" database connected")})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/taza-khabar');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const Market=require("../models/market.js");

Market.insertMany([
    
    {
        tittle: "Stock Market Soars: Tech Stocks Lead the Way",
        image: "https://i.ytimg.com/vi/1oOH32t4UWk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCUuWjUSke6tilx31uI_EwAR-V-Jg",
        content: "The stock market experienced a significant rally today, with tech stocks leading the charge. Companies like Apple, Microsoft, and Tesla saw a sharp increase in their share prices, fueled by strong quarterly earnings reports. Investors are optimistic about the future of the tech industry...",
        date: new Date('2024-11-22T09:00:00Z')
      },
      {
        tittle: "Oil Prices Surge Amid Global Supply Concerns",
        image: "https://m.economictimes.com/thumb/msid-115108361,width-1600,height-900,resizemode-4,imgsize-51298/weakness-continues-in-crude-oil-prices-key-factors-to-watch-out-for.jpg",
        content: "Oil prices surged today due to concerns over global supply shortages. The price of crude oil jumped by over 5%, reaching a four-month high. Analysts are attributing the rise to geopolitical tensions in key oil-producing regions and disruptions in global shipping...",
        date: new Date('2024-11-21T13:30:00Z')
      },
      {
        tittle: "Gold Hits New High as Investors Seek Safe Haven",
        image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-134238,resizemode-75,msid-91561264/markets/commodities/views/us-feds-persistence-challenges-golds-safe-haven-status-bullion-falls-3-5-this-week.jpg",
        content: "Gold prices have hit an all-time high as investors flock to the precious metal amidst uncertainty in the global markets. Fears of inflation and ongoing trade tensions have led many to view gold as a safer investment, pushing its price to new levels...",
        date: new Date('2024-11-20T15:45:00Z')
      },
      {
        tittle: "Bitcoin Surges to Record High, Cryptocurrency Market Booms",
        image: "https://m.economictimes.com/thumb/height-450,width-600,imgsize-125308,msid-115160418/bitcoin.jpg",
        content: "Bitcoin has surged to a new record high, surpassing $75,000 for the first time in history. The cryptocurrency market has been booming, with investors increasingly looking at digital assets as a hedge against inflation. The surge comes amid rising institutional interest in Bitcoin...",
        date: new Date('2024-11-19T11:00:00Z')
      },
      {
        tittle: "U.S. Dollar Strengthens Against Major Currencies",
        image: "https://m.economictimes.com/thumb/msid-94286612,width-1200,height-900,resizemode-4,imgsize-42116/istock-1043657526-1.jpg",
        content: "The U.S. dollar strengthened today against several major currencies, including the euro and the Japanese yen. Analysts believe the dollar’s rise is linked to strong economic data out of the U.S., including better-than-expected employment figures and consumer spending reports...",
        date: new Date('2024-11-18T10:15:00Z')
      },
      {
        tittle: "Retail Stocks Drop After Poor Holiday Sales Forecast",
        image: "https://media.istockphoto.com/id/1167797024/vector/economic-crisis-stock-chart-falling-down-business-global-money-bankruptcy-concept.jpg?s=612x612&w=0&k=20&c=NTERB_PPHRPzVSVr4wQPl9ahEXLoQFzmdfRaXRVM91U=",
        content: "Retail stocks took a hit today after companies issued poor holiday sales forecasts. Leading retailers like Walmart and Target saw their stock prices drop by nearly 3%, as analysts warn that consumer spending might be weaker than expected in the upcoming holiday season...",
        date: new Date('2024-11-17T14:00:00Z')
      },
      {
        tittle: "Federal Reserve Announces Interest Rate Hike",
        image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-108270,resizemode-75,msid-104563238/news/international/us/us-inflation-still-high-interest-rate-hike-possible-federal-reserve-chair-powell.jpg",
        content: "The Federal Reserve announced a significant interest rate hike today, raising rates by 0.5%. The move comes as the central bank seeks to combat rising inflation and cool down the overheating economy. The decision sent shockwaves through global markets, with stocks dipping sharply...",
        date: new Date('2024-11-16T08:30:00Z')
      },
      {
        tittle: "Tech Giants Dominate Earnings Season with Record Profits",
        image: "https://cdn.statcdn.com/Infographic/images/normal/29979.jpeg",
        content: "The earnings season has been marked by record profits from the world's leading tech companies. Google, Amazon, and Facebook posted impressive quarterly results, exceeding analysts' expectations. Investors are betting on the continued growth of the tech sector, despite broader market volatility...",
        date: new Date('2024-11-15T12:45:00Z')
      },
      {
        tittle: "China's Economic Slowdown Worries Global Markets",
        image: "https://www.shutterstock.com/image-illustration/economy-china-wind-sways-flag-600nw-2416503295.jpg",
        content: "China’s economic slowdown has raised concerns in global markets. Recent data revealed lower-than-expected GDP growth and declining manufacturing activity, leading to fears of a broader economic slowdown. Investors are closely monitoring how this will impact global trade and supply chains...",
        date: new Date('2024-11-14T16:00:00Z')
      },
      {
        tittle: "Tech IPOs Soar: Startups Going Public in Record Numbers",
        image: "https://m.economictimes.com/thumb/msid-96522636,width-1200,height-900,resizemode-4,imgsize-1539037/vanishing-ipos_ipo_thumb-image_ettech_2.jpg",
        content: "Tech IPOs have been on the rise, with a record number of startups going public this year. Companies like XYZ Tech and ABC Innovations saw their IPOs oversubscribed by multiple times, reflecting investor confidence in the technology sector. The trend is expected to continue as more startups look to tap into public capital...",
        date: new Date('2024-11-13T13:30:00Z')
      }

])