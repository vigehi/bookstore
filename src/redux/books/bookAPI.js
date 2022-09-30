export const getBook = async () => {
  const res = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0RZZEomj84t07BwtOyZA/books');
  console.log(res);
  const data = await res.json();
  return data;
};

export const postBook = async (books) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0RZZEomj84t07BwtOyZA/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(books),
  });
};

export const deleteBook = async (id) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0RZZEomj84t07BwtOyZA/books/${id}`,
    {
      method: 'DELETE',
    });
};
