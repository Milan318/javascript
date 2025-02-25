let Quotes = document.querySelector('.blockquote p');

let authorName = document.querySelector('.blockquote-footer');

let quotes = [
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      quote: "The purpose of our lives is to be happy.",
      author: "Dalai Lama"
    }
  ];

  let changeQuotes=()=>{
    let index=Math.floor(Math.random()*quotes.length);
    Quotes.textContent=quotes[index].quote;
    authorName.textContent=quotes[index].author;
  }
  changeQuotes();
//   setInterval(()=>{
//     changeQuotes();
//   },2000);

  



  