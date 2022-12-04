import admin from 'firebase-admin';
//import serviceAccount from './serviceAccountKey.json';
import firebaseAccountCredentials from "./serviceAccountKey.json"

console.log(admin);

const serviceAccount = firebaseAccountCredentials as admin.ServiceAccount

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





// Argument of type '{ type: string; project_id: string; private_key_id: string; private_key: string; client_email: string; client_id: string; auth_uri: string; token_uri: string; auth_provider_x509_cert_url: string; client_x509_cert_url: string; }' is not assignable to parameter of type 'string | ServiceAccount'.ts(2345)