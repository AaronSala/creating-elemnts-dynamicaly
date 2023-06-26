let people =[
    {
        name:"john",
        age:34,
        id:33223
    },
    {
        name:"dorcas",
        age:23,
        id:3334413
    },
    {
        name:"melvin",
        age:31,
        id:99833
    }
]

const age=people.map((people)=>{
    console.log(people)
    return people.age
})
console.log(age)

const result=document.querySelector('.names')
const names =people.map((people)=> `<h2>${people.name}</h2>
 <h3>${people.age}</h3><h3>${people.id}</h3>`)
result.innerHTML=names.join(" ");

