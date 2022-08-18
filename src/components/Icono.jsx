import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Icono({cant}) {
  return (
    <Badge badgeContent={cant} color="primary">
      <ShoppingCartIcon color="white" style={{ fontSize:40}} />
    </Badge>
  );
}
//   export default function Icono({cant}) {
//     return (
//       <IconButton aria-label="cart" style={{ fontSize: 80 , alignItems: 'center'}}>
//         <StyledBadge badgeContent={cant} color="primary" anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
//           <ShoppingCartIcon />
//         </StyledBadge>
//       </IconButton>
//     );
//   }
