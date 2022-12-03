import Layout from '../components/Layout';
import HeroArticle from '../components/Views/UserFlow/HeroArticle';
import Reason from '../components/Views/UserFlow/Reason';
import Owner from '../components/Views/UserFlow/Owner';
import Amount from '../components/Views/UserFlow/Amount';
import FundraiserField from '../components/Views/UserFlow/FundraiserField';
import FundraiserSuccess from '../components/Views/UserFlow/FundraiserSuccess';
import {app, storage, db}  from '../firebase/clientApp';
//import firebase from "firebase/app"
import { getDocs, collection } from "firebase/firestore"; 
import { v4 as uuidv4 } from "uuid";


const  Home = () => {
 // const func  = async () => {
    // try {
    //   const docRef = await addDoc(collection(db, "General"), {
    //     first: "Alan",
    //     middle: "Mathison",
    //     last: "Turing",
    //     born: 1912
    //   });
    
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }  
  //   const querySnapshot = await getDocs(collection(db, "General"));
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.data()}`);
  //   });
  // }

   //func()
   //console.log(uuidv4(), uuidv4())
  return (
    <Layout
    title='Home'
    >
      <div className='hero flex flex-wrap items-center justify-between h-full w-full'>
        <div className="left  my-5 lg:my-3 w-full lg:w-[45%] xl:w-[45%]">
          <HeroArticle/>
          {/* <Reason/> */}
          {/* <Owner/> */}
          {/* <Amount/> */}
          {/* <FundraiserField/> */}
          {/* <FundraiserSuccess/> */}
        </div>
        <div className="right w-full lg:w-[50%]">
          <img
          className='h-full w-full'
          src='/hero.png'
          alt=' Illustration showing fund-raising flow' />
        </div>
      </div>
    </Layout>
  )
}

export default Home;
