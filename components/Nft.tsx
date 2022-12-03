import React, {useState} from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'

interface Props {
  img:string;
  name: string;
}

const Nft:React.FC<Props> =  ({img, name}) => {

    const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 1/2,
      height: 1/2,
      bgcolor: 'white',
      borderRadius: '15px',
      boxShadow: 24,
      p: 4,
  };


    return (
        <div>
        <div className="flex justify-between mr-4 cursor-pointer">
          <img onClick={handleOpen} className="h-[9rem] w-[9rem] md:h-[10em] md:w-[10em] xl:h-[12em] xl:w-[12em] my-2 rounded-full " src={img}/>
        </div>

        <div>
          <Modal
          open={isOpen}
          onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="flex justify-around">
                <img className="h-[12.5rem] w-[12.5rem] my-2 rounded-full " src={img}/>
              </div>
              <Typography id="modal-modal-title" variant="h6" component="h2" className="font-[Circular] text-center" sx={{ mt: 4 }}>
                {name}
              </Typography>
              <div className="flex justify-around mt-8">
                <button className="text-[1rem] font-semibold bg-[#0F8E4B] text-white px-[1rem] py-[.5rem] rounded-[5px] self-start">Mint Nft</button>
              </div>
            </Box>
          </Modal>
        </div> 
      </div>
    )
}

export default Nft