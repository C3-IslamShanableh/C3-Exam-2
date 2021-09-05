const book = require("../schema/book");


const addBook =  (req,res)=>{
   const newBook = new book ({
    
        title,
        author,
        pages,
        publisher,
        published_at,
      
   })
   newBook.save().then((res)=>{
       res.josn("book add")
   })

   }


   const gitAllBook = (req,res)=>{
       book.find({}).then((result)=>{
           console.log(result);
       })
   }


   const gitById = (req,res)=>{
       const id = req.params.book_id;
       book.findById({id}).then((result)=>{
           console.log(result);
       })
   }



   const deleteById = (req,res)=>{
    const id = req.params.book_id;
       book.findAndDeleteById({id}).then((result)=>{
           console.log(result);
       })
   }







   module.exports={
       addBook,
       gitAllBook,
       gitById,
       deleteById
   }

