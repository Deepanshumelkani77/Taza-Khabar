const mongoose = require('mongoose');

main().then(()=>{console.log(" database connected")})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/taza-khabar');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const Goverment=require("../models/goverment.js");

Goverment.insertMany([

    {
        tittle: "Government Announces New Infrastructure Plan",
        image: "https://media.biltrax.com/wp-content/uploads/2024/10/Nitin-Gadkari-1.webp",
        content: "The government has unveiled a new $100 billion infrastructure plan aimed at modernizing the country's roads, bridges, and public transportation systems. The plan, which is set to create thousands of jobs, will prioritize green energy projects and sustainable development...",
        date: new Date('2024-11-22T08:00:00Z')
      },
      {
        tittle: "New Tax Reforms Introduced in Latest Budget Proposal",
        image: "https://www.mstock.com/Content/images/articles/tax-reforms-and-incentives-for-business-in-budget-2024.webp",
        content: "In an effort to stimulate economic growth, the government has introduced sweeping tax reforms in the latest budget proposal. The reforms aim to lower corporate taxes, increase deductions for middle-class families, and invest in small business tax credits...",
        date: new Date('2024-11-21T09:30:00Z')
      },
      {
        tittle: "National Health Care System Receives Major Funding Boost",
        image: "https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg",
        content: "The national health care system will receive a substantial funding boost in the coming fiscal year, with an allocation of $50 billion to improve hospital infrastructure, expand health services, and reduce wait times for medical procedures...",
        date: new Date('2024-11-20T12:45:00Z')
      },
      {
        tittle: "Government to Implement New Climate Change Policies",
        image: "https://img.freepik.com/premium-photo/leading-way-climate-policy-involves-government-actions-combat-climate-change_271410-43661.jpg",
        content: "In response to growing environmental concerns, the government has announced new climate change policies aimed at reducing carbon emissions by 40% over the next decade. The policies include stricter regulations on industrial pollution and greater investment in renewable energy sources...",
        date: new Date('2024-11-19T14:00:00Z')
      },
      {
        tittle: "New Immigration Laws Proposed to Address Labor Shortage",
        image: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22941766/1227586912.jpg?quality=90&strip=all&crop=7.5625,0,86.4375,100",
        content: "In a bid to tackle the ongoing labor shortage in key industries, the government has proposed new immigration laws that would streamline the process for skilled workers to move to the country. The proposal also includes measures to improve the integration of immigrants into the workforce...",
        date: new Date('2024-11-18T10:30:00Z')
      },
      {
        tittle: "Government Increases Military Budget Amid Rising Tensions",
        image: "https://m.economictimes.com/thumb/msid-111986570,width-1200,height-900,resizemode-4,imgsize-99128/indias-nuclear-deterrence.jpg",
        content: "The government has announced a significant increase in the defense budget, citing rising global tensions and the need to modernize the military. The budget will focus on upgrading defense technology, expanding military training programs, and enhancing national security initiatives...",
        date: new Date('2024-11-17T11:15:00Z')
      },
      {
        tittle: "New Educational Reforms Aimed at Reducing Student Debt",
        image: "https://m.economictimes.com/thumb/msid-78249807,width-1200,height-900,resizemode-4,imgsize-121291/eduloan.jpg",
        content: "The government has rolled out new educational reforms designed to address the student debt crisis. The reforms include initiatives to reduce tuition fees, expand scholarship opportunities, and provide income-driven repayment options for graduates facing significant loan burdens...",
        date: new Date('2024-11-16T13:00:00Z')
      },
      {
        tittle: "Government to Launch National Digital ID Program",
        image: "https://www.csm.tech/storage/uploads/images/9045National-Digital-ID-Project-02%20(1).jpg",
        content: "A new national digital ID program will be launched in 2025, aimed at streamlining government services and improving security. The program will allow citizens to access a range of services, from voting to healthcare, using a secure digital identification system...",
        date: new Date('2024-11-15T14:30:00Z')
      },
      {
        tittle: "New International Trade Agreement Signed by Government",
        image: "https://img.freepik.com/premium-photo/international-trade-agreements-might-need-be-renegotiated-reflect-new-economic-realities_10541-14369.jpg",
        content: "The government has signed a new international trade agreement with several major economies, opening up new markets for local businesses and enhancing diplomatic relations. The agreement focuses on reducing tariffs, expanding exports, and fostering global economic cooperation...",
        date: new Date('2024-11-14T16:00:00Z')
      },
      {
        tittle: "Government Launches National Security Awareness Campaign",
        image: "https://rukminim2.flixcart.com/image/850/1000/l15bxjk0/book/q/e/e/cyber-security-awareness-opportunities-challenges-issues-original-imagcsfbugwyxpbe.jpeg?q=20&crop=false",
        content: "In an effort to combat rising cybercrime and ensure the safety of citizens, the government has launched a national security awareness campaign. The campaign will provide resources for individuals and businesses on how to protect themselves from digital threats and ensure privacy...",
        date: new Date('2024-11-13T12:00:00Z')
      }
    
])