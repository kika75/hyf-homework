
const faveBooks = [
    {
        id: "heidi",
        title: "Heidi",
        author: "Johanna Spyri",
        language: "german",
        cover: "images/Heidi.jpeg",
   

    }, 
    {
        id: "this_much_true",
        title: "I Know This Much It's True",
        author: "Wally Lamb",
        language: "english",
        cover: "images/This Much Is True.jpeg",
  
    },    
    {
        id: "a_prayer_for_owen_meany",
        title: "A Prayer for Owen Meany",
        author: "John Irving",
        language: "english",
        cover: "images/Owen Meany.jpeg",
  
    },  
    {
        id: "anna_karenina",
        title: "Anna Karenina",
        author: "Lav Tolstoy",
        language: "russian",
        cover: "images/Anna Karanina.jpeg",
  
    }, 
    {
        id: "many_lives_many_masters",
        title: "Many Lives Many Masters",
        author: "Brian L. Weiss",
        language: "english",
        cover: "images/Many Lives.jpeg",
  
    },      
    {
        id: "primates_memoir",
        title: "Primates Memoir",
        author: "Robert M. Sapolsky",
        language: "english",
        cover: "images/Primates.jpeg", 
    },
    {
        id: "the_white_tiger",
        title: "The White Tiger",
        author: "Aravind Adiga",
        language: "indian",
        cover: "images/White Tiger.jpeg", 
    },
    {
        id: "the_alchemist",
        title: "The Alchemist",
        author: "Paolo Coelho",
        language: "portuguese",
        cover: "images/The Alchemist.jpeg", 
    },
    {
        id: "the_veteran",
        title: "The Veteran",
        author: "Frederik Forsyth",
        language: "english",
        cover: "images/Veteran.jpeg", 
 
    },
    {
        id: "big_magic",
        title: "Big Magic",
        author: "Elizabeth Gilbert",
        language: "english",
        cover: "images/Big Magic.jpeg", 
    }
        ];
        
 //creating letiables for inputting inside the DOM
 //starting with a header

 let header = document.createElement("header");
    header.setAttribute("id", "pageHeader");                        // giving it an id
    document.body.appendChild(header);                          // and appending it to the body

//then a div that will contain an unordered list of items (books)

let div = document.createElement("div");
    div.setAttribute("id", "bookContainer");
    document.body.appendChild(div);
        
/* use a function to go through all the objects (list of books)
   and create <li> elements before appending them to the div we created above
 */   

function displayBookNames(faveBooks){
    let ul = document.createElement("ul");
        ul.setAttribute("class", "bookList");                   // instead of an Id, this time the element gets a class attribute because there are more than one object on the list(Li's)
        div.appendChild(ul);
 
    for (let i = 0; i < faveBooks.length; i++) {
        let li = document.createElement("li");
            ul.appendChild(li);

        // add the title for the book
        let h2 = document.createElement("h2");                  
            li.appendChild(h2);
            h2.innerHTML = faveBooks[i].title;

        // add the author for the book
        let h3 = document.createElement("h3");
            li.appendChild(h3);
            h3.innerHTML = faveBooks[i].author;

        // add the original language
        let h4 = document.createElement("h4");
            li.appendChild(h4);
            h4.innerHTML = faveBooks[i].language;

        
        // finally adding the covers
        let coverImg = document.createElement("img");
            li.appendChild(coverImg);
            coverImg.src = faveBooks[i].cover;


        // styles
        li.style.listStyle="none";
        li.style.borderColor = "green";
        li.style.cssFloat = "left";
        li.style.width = "30%";
        li.style.marginBottom = "30px";
        div.style.marginLeft = "50px";
        h3.style.color = "blue";
        h2.style.fontFamily = "Montserrat";
        }

    }
    

displayBookNames(faveBooks);