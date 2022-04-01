let userData = [{
    id:1,username:"testUser1",password:"test",habits:[{habitName:"Drink water",habitFrequency:8,habitUnit:"Cups",habitCompletion:8},{habitName:"Exercise",habitFrequency:60,habitUnit:"Minutes",habitCompletion:45}]
},{
        id:2,username:"testUser2",password:"test",habits:{habitName:"Meditate",habitFrequency:30,habitUnit:"Minutes",habitCompletion:20}
    }
]

module.exports = userData;



// static async create(bookData){
//     return new Promise (async (resolve, reject) => {
//         try {
            
//             let { title, yearOfPublication, abstract, authorName} = bookData;
//             let author = await Author.findOrCreateByName(authorName);
//             let newAuthor = await db.query('INSERT INTO books (title, year_of_publication, abstract, author_id) VALUES ($1,$2,$3,$4) RETURNING*;',[bookData.title,bookData.yearOfPublication,bookData.abstract,author.id]);
//             let result = new Post(newPost.rows[0])
//             resolve (result.rows[0]);
//         } catch (err) {
//             reject('Book could not be created');
//         }
//     });
// };
