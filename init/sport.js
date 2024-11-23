const mongoose = require('mongoose');

main().then(()=>{console.log(" database connected")})

.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/taza-khabar');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const Sport=require("../models/sport.js");

Sport.insertMany([
    {
        tittle: "Cricket: Historic 1000th Match for Legendary Captain",
        image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/95984ddc-2460-464e-b151-7350ce8eddc7/0165ff5f-179a-4737-b1aa-05c413c2fbe5.png",
        content: "In a historic moment for the sport, legendary cricket captain Steve Watson played his 1000th match today, leading his team to a victory against fierce rivals. Fans cheered as Watson, who has been part of the international cricket scene for over 20 years, made history...",
        date: new Date('2024-11-17T09:30:00Z')
      },
      {
        tittle: "Rugby: Unbeaten Season for Global Champions",
        image: "https://m.economictimes.com/thumb/msid-112574973,width-1200,height-900,resizemode-4,imgsize-157072/new-zealand-argentina-rugby-union.jpg",
        content: "The global rugby champions have completed their unbeaten season with a resounding victory in the final match. The team's dominating performance has left fans and analysts alike in awe, as they now prepare for the upcoming World Cup...",
        date: new Date('2024-11-16T13:00:00Z')
      },
      {
        tittle: "Cycling: World Champion Defends Title in Dramatic Race",
        image: "https://r.testifier.nl/Acbs8526SDKI/resizing_type:fill/width:3840/height:2560/plain/https://s3-newsifier.ams3.digitaloceanspaces.com/cyclinguptodatecom/images/2024-11/remcoevenepoel-3-673caaa8b61b5.jpg@webp",
        content: "In an epic showdown, world champion cyclist Alex Ford successfully defended his title in a dramatic race that saw him battle against fierce competitors in the final stretch. His victory has cemented his place as one of the sport's all-time greats...",
        date: new Date('2024-11-15T15:45:00Z')
      },
      {
        tittle: "Baseball: Rookie Breaks Home Run Record in Historic Game",
        image: "https://i.insider.com/59c965e319d2f5d7008b58b0?width=800&format=jpeg&auto=webp",
        content: "Rookie sensation, Tom Roberts, stunned the baseball world by breaking the long-standing home run record in a single game. His three-home run performance led his team to a commanding victory, marking the start of what could be a legendary career...",
        date: new Date('2024-11-14T16:30:00Z')
      },
      {
        tittle: "Swimming: New World Record Set in 200m Freestyle",
        image: "https://vmrw8k5h.tinifycdn.com/news/wp-content/uploads/2023/07/Mollie-Wins-world-200m-title-2.jpg",
        content: "In an astounding display of speed and stamina, swimmer Laura Green set a new world record in the 200m freestyle. Her time of 1:52.3 shattered the previous record by a full second, leaving spectators in awe of her athleticism...",
        date: new Date('2024-11-13T12:15:00Z')
      },
      {
        tittle: "Boxing: Heavyweight Champion Retains Title in Thrilling Match",
        image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-152462,resizemode-75,msid-115379719/news/international/global-trends/will-jake-paul-fight-for-championship-belt-in-coming-years-after-defeating-mike-tyson.jpg",
        content: "In a thrilling battle that went the full 12 rounds, heavyweight champion Daniel Cruz retained his title against the challenger, Jake McFarlane. The fight was marked by powerful punches and incredible stamina from both sides, but Cruz's skill ultimately earned him the victory...",
        date: new Date('2024-11-12T08:00:00Z')
      },
      {
        tittle: "Volleyball: National Team Wins International Tournament",
        image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-63154,resizemode-75,msid-103252642/news/international/us/nebraska-volleyball-game-shatters-record-for-womens-porting-event-details-here.jpg",
        content: "The national volleyball team has emerged victorious in the prestigious international tournament, defeating teams from around the world. This win marks a major milestone in their quest for Olympic gold next year...",
        date: new Date('2024-11-11T10:30:00Z')
      },
      {
        tittle: "Skiing: Unexpected Snowstorm Cancels Winter Games",
        image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/b56cc863-eef3-4177-8cfe-83277939fa50/a012a2dc-2121-4f00-a169-92fc12f9ada7.png",
        content: "In an unforeseen turn of events, the Winter Games have been canceled due to a powerful snowstorm that made the course unfit for competition. Athletes and fans were left disappointed as the event was called off, but officials promise to reschedule soon...",
        date: new Date('2024-11-10T17:00:00Z')
      },
      {
        tittle: "Motorsport: Rally Championship Decided in Final Stage",
        image: "https://motorsport.org.nz/wp-content/uploads/2024MANAWATU_DAYBREAKER_TAYLER_BURKE_-2124-media.jpg",
        content: "The motorsport rally championship came down to the final stage, where veteran driver Carlos Reyes clinched the title with a stunning performance. The last-minute surge in his time proved to be the difference as he narrowly edged out the competition...",
        date: new Date('2024-11-09T19:30:00Z')
      },
      {
        tittle: "Football: New Star Breaks Into National Team After Stunning Debut",
        image: "https://thebusinessdownload.com/wp-content/uploads/2024/02/F60lk4BWEAAJs9C-1.jpeg",
        content: "After a breathtaking debut performance, young football prodigy Liam James has earned a spot in the national team. His two-goal game against Brazil in a friendly match has sent waves of excitement through the football community...",
        date: new Date('2024-11-08T14:00:00Z')
      }
    
])