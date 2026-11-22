const firstTitle = document.getElementById("firstTitle");
const secondAuthor = document.getElementById("secondAuthor");
const genreList = document.getElementById("genreList");
const errorP = document.getElementById("error");

const displayBooks = (books) => {
  firstTitle.textContent = books[0].title;
  secondAuthor.textContent = books[1].author;

  genreList.replaceChildren();
  for (const book of books) {
    const li = document.createElement("li");
    li.textContent = `${book.title} — ${book.genres.join(", ")}`;
    genreList.append(li);
  }
}

const loadBooks = async () => {
  try {
    const res = await fetch("books.json");
    if (!res.ok) {
      throw new Error(`Request failed (${res.status})`);
    }
    const data = await res.json();
    displayBooks(data.books);
  } catch (err) {
    errorP.textContent = "Sorry, the book data could not be loaded. Please try again later.";
    console.error(err);
  }
}

loadBooks();
