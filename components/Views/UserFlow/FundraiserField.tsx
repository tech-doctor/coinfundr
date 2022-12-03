import  React, {useState, useRef} from 'react';
import { v4 as uuidv4 } from "uuid";
import { storage } from '../../../firebase/clientApp';
import { ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import { updateImageLink, updateForm } from '../../../Store/slice';
import Amount from './Amount';
import FundraiserSuccess from './FundraiserSuccess';
import { sendUserFlow } from '../../../utils/db/fetchData';
import axios from 'axios';

const BASE_URL =  process.env.NEXT_PUBLIC_SERVER 

const FundraiserField = () => {
  const dispatch = useAppDispatch();
  const uploadRef = useRef<any>(null);
  const imageSrc:any = useAppSelector(state => state.root.imageLink)
  const userFlowData:any = useAppSelector(state => state.root)
  const form = useAppSelector(state => state.root.form.firstName)
  const [fields, setFields]  = useState<any>({
    firstName: "",
    lastName: "",
    fundraiserName: "",
    reasonForFund: "",
  });

  const [displayCurrentView, setDisplayCurrentView] = useState<boolean>(true);
  const [displaySuccess, setDisplaySuccess] = useState<boolean>(false);
  const [displayAmount, setDisplayAmount] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [fileMessage, setFileMessage] = useState<string>("");


  const handleUploadClick = (event:any) => {
    if(uploadRef.current !== null) {
      uploadRef.current.click();
      console.log(uploadRef.current)
    }
  }
  

  const changeFile = (event:any) => {
    if(uploadRef.current !== null) {
      dispatch(updateImageLink('loading'))
      const selectedFile = uploadRef.current.files[0]
      const imageRef = ref(storage, `images/${selectedFile.name + uuidv4()}`);
      uploadBytes(imageRef, selectedFile)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
        .then((url) => {
          dispatch(updateImageLink(url))
        })
      })
    }
  }

  const handleChange:any =  (event:any) => {
    const {name, value} = event.target
    setFields((prevValues:object) => ({
      ...prevValues,
      [name]: value
    }));
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    if(uploadRef.current !== null && uploadRef.current.files.length == 0){
      setFileMessage("No file selected. Select a file before you proceed");
    }
    dispatch(updateForm(fields));
  }

  const sendData = () => {
    setLoading(true)
    axios.post(`${BASE_URL}/api/postUserFlow/${uuidv4()}`, userFlowData)
      .then(function (response) {
        console.log(response);
    setDisplayCurrentView(false)
    setDisplaySuccess(true)
      })
    .catch((error) => {
       console.log(error)
    })
  }


  const {firstName, lastName, fundraiserName, reasonForFund} = fields

  return(
    <div>
      {displayAmount && <Amount/>}
      {displayCurrentView && 
      <article className="field_container md:max-w-[70%] md:mx-auto lg:mx-0">
        <div className="list text-[#5E6364] text-sm">
          <span>4</span> of <span>4</span>
        </div>
        <h1 className="title text-[#1F1F1F] font-medium mt-3">
        Kindly provide the following information
        </h1>
        <div className="feilds my-5 text-sm">
        <form 
        onSubmit={handleSubmit}
        className='info_form'>
            <input 
            onChange={handleChange}
            className='border w-full rounded-md px-1.5 outline-none pb-6 pt-1 placehoder:text-xl mb-3 focus:border-2'
            type={'text'}
            placeholder = {'First Name'}
            name = 'firstName'
            value = {firstName}
            required
            />
            <input 
            onChange={handleChange}
            className='border w-full rounded-md px-1.5 outline-none pb-6 pt-1 placehoder:text-xl mb-3 focus:border-2'
            type={'text'}
            placeholder = {'Last Name'}
            name = 'lastName'
            value = {lastName}
            required
            />
            <input 
            onChange={handleChange}
            className='border w-full rounded-md px-1.5 outline-none pb-6 pt-1 placehoder:text-xl mb-3 focus:border-2'
            type={'text'}
            placeholder = {'Fundraiser Name'}
            name = 'fundraiserName'
            value={fundraiserName}
            required
            />
            <textarea
            onChange={handleChange}
            className='border w-full px-1.5 py-1 rounded-md resize-none outline-none'
            placeholder= 'Why are your creating a fundraiser?'
            cols= {50}
            rows= {4}
            name = "reasonForFund"
            value = {reasonForFund}
            required
            />
            <div className="file_upload my-9">
            <input
            ref = {uploadRef}
            onChange = {changeFile}
              className='hidden'
              type={'file'} 
              name = "myFile" 
              id='myFile'
              required
              />
              {imageSrc === null || imageSrc === "loading" ?  <>
              <button 
            onClick={handleUploadClick}
            type='button'
              className='file_upload_button py-2 px-4 rounded-md font-medium bg-[#1F1F1F] text-white hover:scale-95'>
                {imageSrc === "loading"? `Uploading...` : `Upload Image`}
              </button>
              <br/>
              <small className='text-red-600 my-1'>Please, Kindly upload an image before you submit
              </small>
              </> : ''}
            {imageSrc !== null && imageSrc !== 'loading' &&
             <img 
            className='rounded-md mt-3 w-full'
            src={imageSrc} alt='alt'/> }
            </div>
          <div className="buttons flex justify-between">
            <button 
            onClick={() => {
              setDisplayCurrentView(false);
              setDisplayAmount(true);
            }}
            type='button' className="back border-2 py-2 px-4 rounded-md font-medium hover:bg-gray-400 hover:text-white">
              Back
            </button>
            {form === "" ? <button 
            type='submit' className="confirm py-2 px-4 rounded-md font-medium bg-[#0F8E4B] text-white hover:text-green-100">
             {/* {!loading? 'Confirm': 'Loading...'} */}
             Submit
            </button>:

              <button 
            onClick={sendData}
            type='button' className="confirm py-2 px-4 rounded-md font-medium bg-[#0F8E4B] text-white hover:text-green-100">
             {!loading? 'Confirm': 'Loading...'}
            </button>}
          </div>
        </form> 
      </div>
     </article>}
      {displaySuccess && <FundraiserSuccess/>}
    </div>
   )
 }
   
 export default FundraiserField;