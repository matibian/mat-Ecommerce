import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { data } from '../mock/Api';
import { IconButton } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import CloseIcon from '@mui/icons-material/Close';

export default function ItemDetailContainerModal(props) {
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    data
      .then((res) => setProductDetail(res.find((item) => item.id === 4)))
      .catch(() => console.log("error"))
      .finally(() => setLoading(false))
  }, [])


  return (props.trigger) ? (
    <div className='popup'>
      <div className="popup-inner">
        <IconButton
          onClick={()=> props.setTrigger(false)}
          className="close-btn">
          <CloseIcon />
        </IconButton>
        {loading ?
          // <Card>
            <LoadingButton loading  sx={{ width: 200, height:290}}/>
          // </Card>
          :
          <ItemDetail productDetail={productDetail} />}
        {props.children}
          
      </div>
    </div>
  ) : "";
}
