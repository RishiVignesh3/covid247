const db={
    hospitalData:[
        {id:1,name:"Chennai Hospitals",rating:5},
        {id:2,name:"Dr.Raja Hospital",rating:5},
        {id:3,name:"Humber Hospital",rating:5},
        {id:4,name:"Medicover Hospital",rating:5},
        {id:5,name:"Apollo Speciality",rating:5},
        {id:6,name:"V.S Hospital",rating:3},
        {id:7,name:"Vijaya Hospital",rating:4},
        {id:8,name:"Kauvery Hospital",rating:4},
        {id:9,name:"Crescent Hospital",rating:4},
        {id:10,name:"Miot Hospital",rating:3}
    ],
    ratings:[
        {id:1,custRatings:[5,5,5,5,5]},
        {id:2,custRatings:[5,5,5,5,5]},
        {id:3,custRatings:[5,5,5,5,5]},
        {id:4,custRatings:[5,5,5,5,5]},
        {id:5,custRatings:[5,5,5,5,5]},
        {id:6,custRatings:[3,3,3,3,3]},
        {id:7,custRatings:[4,4,4,4,4]},
        {id:8,custRatings:[4,4,4,4,4]},
        {id:9,custRatings:[4,4,4,4,4]},
        {id:10,custRatings:[3,3,3,3,3]},
    ]
}

// const avgCal=(id)=>{
//     let total,count=0;
//     const index = db.ratings.findIndex(item=>item.id===id)
//     console.log(index)
//     if(index!==-1){
//         total=db.ratings[index].custRatings.reduce((accumlator,currentVal)=>{
//             accumlator+currentVal;
//             count+=1
//         })
//         const avg=total/count;
//         console.log(avg)
//         return avg
//     }
// }

export default db;
