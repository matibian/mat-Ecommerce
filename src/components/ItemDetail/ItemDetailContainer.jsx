import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { data } from '../mock/Api';
import { IconButton } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import CloseIcon from '@mui/icons-material/Close';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(true);

  const {id} = useParams()

  useEffect(() => {
    data
      .then((res) => setProductDetail(res.find((item) => item.id === id)))
      .catch(() => console.log("error"))
      .finally(() => setLoading(false))
  }, [id])
  console.log(id);

  return (
    <>
      <div
      style={{marginLeft: "25%"}}
      >
        <ItemDetail productDetail={productDetail} loading={loading} />

      </div>
    </>
  )
}
