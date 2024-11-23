const mongoose = require('mongoose');

main().then(()=>{console.log(" database connected")})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/taza-khabar');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const World=require("../models/world.js");

World.insertMany([

    {
        tittle: "UN Calls for Global Action on Climate Change Crisis",
        image: "https://cdnuploads.aa.com.tr/uploads/Contents/2024/06/22/thumbs_b_c_b711418f56cd07f3eb8f30e391163ae2.jpg?v=210121",
        content: "The United Nations has issued a call for urgent global action to tackle the climate change crisis, warning that the world is on the brink of irreversible environmental damage. The UN’s latest report emphasizes the need for countries to reduce carbon emissions and adopt sustainable practices to protect future generations...",
        date: new Date('2024-11-22T07:30:00Z')
      },
      {
        tittle: "EU and US Announce Historic Trade Agreement",
        image: "https://www.brookings.edu/wp-content/uploads/2022/09/us-eu-flags.jpg?quality=75&w=1500",
        content: "In a groundbreaking move, the European Union and the United States have announced a historic trade agreement that promises to boost economic cooperation and reduce tariffs on key goods. The deal is expected to create thousands of jobs and foster stronger diplomatic relations between the two regions...",
        date: new Date('2024-11-21T16:00:00Z')
      },
      {
        tittle: "Global Refugee Crisis Reaches New High, UN Reports",
        image: "https://teachdemocracy.org/images/stories/refugee_crisis.jpg",
        content: "According to a new report from the United Nations, the global refugee crisis has reached unprecedented levels, with millions of people displaced due to conflict, poverty, and climate change. The report urges countries to offer asylum and support to the growing number of refugees fleeing war-torn regions...",
        date: new Date('2024-11-20T14:15:00Z')
      },
      {
        tittle: "World Health Organization Warns of New Pandemic Threat",
        image: "https://static01.nyt.com/images/2023/05/04/multimedia/04virus-WHO-emergency-fmvp/04virus-WHO-emergency-fmvp-superJumbo.jpg",
        content: "The World Health Organization (WHO) has issued a warning about a potential new pandemic threat, citing a rise in infections of a novel virus that could spread rapidly across borders. Health officials are closely monitoring the situation and are urging countries to strengthen public health systems...",
        date: new Date('2024-11-19T12:30:00Z')
      },
      {
        tittle: "Protests Erupt Across Asia Over Government Policies",
        image: "https://www.hrw.org/sites/default/files/styles/16x9_large/public/multimedia_images_2016/2016-05-asia-india-main_1.jpg?itok=cEG8_vRf",
        content: "Massive protests have erupted across several Asian countries, with citizens voicing their dissatisfaction with government policies related to economic inequality, corruption, and political repression. Demonstrations have turned violent in some areas, leading to clashes with security forces...",
        date: new Date('2024-11-18T18:00:00Z')
      },
      {
        tittle: "Peace Talks Begin Between Israel and Palestine",
        image: "https://media.npr.org/assets/img/2023/10/26/gettyimages-1238754440_wide-20544647438a757c5c4a2788aeb8527a435c6a38.jpg?s=1400&c=100&f=jpeg",
        content: "In a historic development, peace talks have officially begun between Israeli and Palestinian leaders, marking the first such negotiations in years. The international community is hopeful that these talks will pave the way for a lasting peace agreement in the region, which has been plagued by conflict for decades...",
        date: new Date('2024-11-17T13:45:00Z')
      },
      {
        tittle: "China Launches New Space Mission to Mars",
        image: "https://s.abcnews.com/images/Business/china-mars-gty-rc-210624_1624546270284_hpMain.jpg",
        content: "China has successfully launched a new space mission aimed at exploring Mars, joining the growing list of countries seeking to unlock the mysteries of the Red Planet. The mission is expected to gather important data on Mars' atmosphere and surface, advancing global scientific knowledge of the planet...",
        date: new Date('2024-11-16T10:00:00Z')
      },
      {
        tittle: "Brazilian Government Faces Corruption Scandal Amid Economic Crisis",
        image: "https://i.guim.co.uk/img/media/a3b1fe0b89f8dbdd48124cac810f492bd8312bc9/0_35_3883_2330/master/3883.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=11da3cb84d794f97dcd34a9b75ea507c",
        content: "The Brazilian government is under intense scrutiny following a major corruption scandal involving high-ranking officials. The scandal has rocked the nation as it grapples with a deepening economic crisis. Public protests have been staged, demanding accountability from those involved...",
        date: new Date('2024-11-15T11:30:00Z')
      },
      {
        tittle: "International Community Condemns Recent Coup in Africa",
        image: "https://gjia.georgetown.edu/wp-content/uploads/sites/20/2024/04/Flintlock_2018_starts_in_Tahoua_Niger_40690251234-2000x1125.jpg",
        content: "The international community has condemned the recent coup in a West African country, where military forces seized control of the government. World leaders have called for the restoration of democratic rule and the protection of human rights. The coup has triggered widespread instability in the region...",
        date: new Date('2024-11-14T14:45:00Z')
      },
      {
        tittle: "Global Food Prices Surge Amid Supply Chain Disruptions",
        image: "https://eng.ruralvoice.in/uploads/images/2024/06/image_750x_666e701b67edf.jpg",
        content: "Global food prices have surged sharply, exacerbating the growing problem of food insecurity in many parts of the world. Supply chain disruptions, caused by a combination of factors including climate change and geopolitical tensions, have led to shortages of key staples like wheat, rice, and corn...",
        date: new Date('2024-11-13T09:00:00Z')
      }

])