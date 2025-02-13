import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  push,
  get,
  update,
  remove,
} from "firebase/database";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
  };
  
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const addProduct = (product) => {
  const productRef = ref(database, "products");
  const newProductRef = push(productRef);

  return set(newProductRef, {
    name: product.name,
    price: product.price,
    image: product.image,
    description: product.description,
    createdAt: new Date().toISOString(),
  });
};
