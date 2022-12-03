import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

console.log(admin)

if(!admin.apps.length){
  try{
    admin.initializeApp({
      credential:admin.credential.cert(serviceAccount)
    });
  } 
  catch(error:any) {
    console.log(error.stack)
  }
}

export default admin.firestore();