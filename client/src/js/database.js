import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  //console.error('putDb not implemented');
  console.log("PUT to the database");

  // Created a connection to the database database and version we want to use.
  const textDB=await openDB ("Josh", 1);

  
  // Created a new transaction and specify the database and data privileges.
  const tx = textDB.transaction("Josh", "readwrite");

  // Open up the desired object store.
  const store = tx.objectStore("Josh");

  // Use the .put() method on the store and pass in the content.
  const request = store.put({id: id, Josh:content});

  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  //console.error('getDb not implemented');
  console.log("GET from the database");

  //creating connection to datav=base and version we want to use
  const textDB = await openDB ("Josh", 1);

  //creating a new transaction and specify the db and data privileges
  const tx = textDB.transaction("Josh", "readonly");

  //open up the desired object store
  const store = tx.objectStore("Josh");

 // Used the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
