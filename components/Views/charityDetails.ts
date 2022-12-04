
export const getCharityDetails = (charity:string) => {
    switch(charity) {
          case "chess-in-slum":
            return {
                name: "Chess in Slums",
                details: `Youth education in Nigeria is in crisis. Of every 5 impoverished children in the world, 1 comes from Nigeria. 30% of them are illiterate. 80% of them never reach their academic potential. The majority of these children will never obtain good paying jobs, and the cycle of poverty will repeat itself. Finding a way to empower children to reach their potential is the only way to break this cycle. Chess in Slums uses the game of chess as a framework to teach academic skills, critical thinking and a lifelong appreciation for learning to these children.
                `,
                imageLink: "/chess-in-slum.png"
            }
          case "lagos-food-bank":
            return {
                name: "Lagos Food Bank",
                details: `Lagos Food Bank is a non-profit, nutrition-focused initiative committed to fighting hunger, reducing food waste and solving the problem of malnutrition through targeted programs that seek to improve the nutrition/food intake of pregnant women and their infants who are not able to get the required nutrient during pregnancy and breastfeeding of their babies.`,
                imageLink: "/lagos-food-bank.png"
            }
            case "nigerian-red-cross":
            return {
                name: "Nigerian Red Cross",
                details: `The mission of the Nigerian Red Cross is to alleviate the situation of the vulnerable people which include those affected by disaster, epidemics, armed conflicts and the poorest communities in both urban and rural areas amongst whom are women, children, aged, displaced and other vulnerable people.`                ,
                imageLink: "/nigerian-red-cross.png"
            }
            case "kokun-foundation":
            return {
                name: "Kokun Foundation",
                details: `Kokun Foundation is a non-profit organisation that strives to ensure the next generation of those living close to poverty have the education and the resources to have upward mobility. Kokun Foundation also contributes directly to food banks, provides medical bills for the less-priviledged and distribution of services for essential needs.
                `,
                imageLink: "/kokun-foundation.png"
            }
          default:
            return
        } 
}