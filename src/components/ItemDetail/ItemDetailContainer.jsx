import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { data } from '../mock/Api';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';

export default function ItemDetailContainer() {
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(true);

  const {id} = useParams()


  useEffect(() => {
    const productCollection = collection(db, "products")
    const referenceDoc = doc(productCollection, id)

    getDoc(referenceDoc)
      .then((res) => {
        setProductDetail({
          id:res.id,
          ...res.data()
        })
    })


      .catch(() => console.log("error"))
      .finally(() => setLoading(false))
  }, [id])




  // useEffect(() => {
  //   data
  //     .then((res) => setProductDetail(res.find((item) => item.id === id)))
  //     .catch(() => console.log("error"))
  //     .finally(() => setLoading(false))
  // }, [id])


  return (
    <>
      <div>
        <ItemDetail productDetail={productDetail} loading={loading} />

      </div>
    </>
  )
}
