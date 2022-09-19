import React from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import { useCart } from '../../context/CartContext';



export default function CartItem({item}) {

const {img, category, name, quantity, price, id} = item 
const { removeItem } = useCart();

console.log(item)

return (
    <>

        <hr className="my-4" />
        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
            <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage
                    src={img}
                    fluid className="rounded-3" alt="Cotton T-shirt" />
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3">
                <MDBTypography tag="h6" className="text-muted">
                    {category}
                </MDBTypography>
                <MDBTypography tag="h6" className="text-black mb-0">
                    {name}
                </MDBTypography>
            </MDBCol>
            <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                <MDBBtn color="link" className="px-2">
                    <MDBIcon fas icon="minus" />
                </MDBBtn>

                <MDBInput type="number" min="0" defaultValue={quantity} size="sm" />

                <MDBBtn color="link" className="px-2"
                    onClick={() => quantity += 1}
                >
                    <MDBIcon fas icon="plus" />
                </MDBBtn>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="text-end">
                <MDBTypography tag="h6" className="mb-0">
                    ${price.toLocaleString()}
                </MDBTypography>
            </MDBCol>
            <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-muted">
                    <MDBIcon 
                    fas icon="times"
                    onClick={removeItem(id)} />
                </a>
            </MDBCol>
        </MDBRow>


    </>
)
}





