import express from 'express';
import data from '../data/data'
import Book from '../types/book';

const app = express()


app.get('/',(req,res)=>{
res.json(data)
});


app.get('/:id', (req, res) => {
    
    const bookId = parseInt(req.params.id);
    const book = data.find((ele) => ele.id === bookId);
  
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  });

  app.post('/',(req,res)=>{
    let id = data[data.length-1].id + 1
    const newBook : Book.contentbook = {
        id: id,
        title: req.body.title,
        author: req.body.author,
        pubYear: req.body.pubYear,
    }
    data.push(newBook)
    res.status(201).send("book added")
})


app.delete('/:id',(req,res)=>{
    let id = Number(req.params.id);
    let item = data.findIndex((element)=> element.id === id)
    if( item !== -1 ){
        data.splice(item,1)
        res.status(202).send("deleted!!!!")
    }else{
        res.status(404).send("book not found")
    }
})

app.put('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
  
    const bookIndex = data.findIndex((book) => book.id === bookId);
  
    if (bookIndex === -1) {
      return res.status(404).json({ error: 'Book not found' });
    }else{
    const updated : Book.contentbook = {
        id: data[bookIndex].id,//id is fixed 
        title: req.body.title || data[bookIndex].title,
        author: req.body.author || data[bookIndex].author,
        pubYear: req.body.pubYear || data[bookIndex].pubYear,
    }
    data[bookIndex] = updated
    res.status(200).send("book updated")

  
    // Save the updated books array back to the JSON file
  
    res.status(200).send("book updated");
}
  });

  app.get('/givebooks', (req, res) => {
    const queryName = req.query.name as string;
  
    if (!queryName) {
      return res.status(400).json({ error: 'Book name parameter is required' });
    }
  
    const matchedBooks = data.filter((book) =>
      book.title.toLowerCase().includes(queryName.toLowerCase())
    );
  
    res.json(matchedBooks);
  });
  

export default app;



