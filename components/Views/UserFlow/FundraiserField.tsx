import  React, {useState, useRef} from 'react';
import Amount from './Amount';

const FundraiserField = () => {
  const uploadRef = useRef<any>(null);
  const [fields, setFields]  = useState<any>({
    firstName: "",
    lastName: "",
    fundraiserName: "",
    reason: ""
  });

  const [displayCurrentView, setDisplayCurrentView] = useState<boolean>(true)
  const [displaySuccess, setDisplaySuccess] = useState<boolean>(false);
  const [displayAmount, setDisplayAmount] = useState<boolean>(false);


  const handleUploadClick = (event:any) => {
    if(uploadRef.current !== null) {
      uploadRef.current.click();
      console.log(uploadRef.current)
    }
  }

  const change = (event:any) => {
    if(uploadRef.current !== null) {
      console.log(uploadRef.current)
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
    console.log(fields)
  }

  const {firstName, lastName, fundraiserName, reason} = fields

  return(
    <div>
      {displayAmount && <Amount/>}
      {displayCurrentView && <article className="field_container md:max-w-[70%] md:mx-auto lg:mx-0">
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
            name = "reason"
            value = {reason}
            required
            />
            <div className="file_upload my-9">
            <input
            ref = {uploadRef}
            onChange = {change}
              className='hidden'
              type={'file'} name = "myFile" id='myFile'
              required
              />
            <button 
            onClick={handleUploadClick}
            type='button'
              className='file_upload_button py-2 px-4 rounded-md font-medium bg-[#1F1F1F] text-white'>Upload Image</button><br/>
              <small className='text-red-600'>No file selected.Select a file before you proceed</small>
            {/* <span className='file_upload_label'>No file</span> */}
            </div>
          <div className="buttons flex justify-between">
            <button type='button' className="back border-2 py-2 px-4 rounded-md font-medium hover:bg-gray-400 hover:text-white">
              Back
            </button>
            <button type='submit' className="confirm py-2 px-4 rounded-md font-medium bg-[#0F8E4B] text-white hover:text-green-100">
              Confirm
            </button>
          </div>
        </form> 
      </div>
     </article>}
      {}
    </div>

   )
 }
   
 export default FundraiserField;