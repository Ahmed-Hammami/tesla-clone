import React,{useState} from 'react';
import styled from 'styled-components';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';

function Header() {
const [burgerStatus,setBurgerstatus]=useState(false);
const cars=useSelector(selectCars)
console.log(cars);

  return (
   <Container>
<a>
<img src='/images/logo.svg' alt=""/>
</a>
<Menu>
    {cars && cars.map(((car,index)=>
    (<a key={index} href='#'>{car}</a> )
    ))}

</Menu>
<RightMenu>
<a href='#'>Shop</a>
<a href='#'>Tesla Acount</a>
<svg onClick={()=>{setBurgerstatus(true)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-menu-up" viewBox="0 0 16 16">
  <path d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793l1.853 1.854zM1 9V6h14v3H1zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2h14zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5z"/>
</svg>

</RightMenu>

<BurgerNav show={burgerStatus}>
    <CloseWrapper>
<svg onClick={()=>{setBurgerstatus(false)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>
</CloseWrapper>
{cars && cars.map(((car,index)=>
    (
    <li>
    <a key={index} href='#'>{car}</a>
    </li>
    )
    ))}
    <li><a href=''>Existing inventory</a></li>
    <li><a href=''>Used inventory</a></li>
    <li><a href=''>trade</a></li>
    <li><a href=''>Cybertruck</a></li>
    <li><a href=''>Roadaster</a></li>
    
</BurgerNav>
   </Container>
    
  );
}

export default Header;
const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 20px;
top:0;

left:0;
right:0;
z-index:1;

`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
    font-weight:600;
    text-transfrom:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}
@media (max-width:768px) {
    display:none;   
    }

`
const RightMenu=styled.div`
display:flex;
align-items:center;
a{
    font-weight:600;
    text-transfrom:uppercase;
margin-right:10px;
   
}
svg{
cursor:pointer;
}

`
const BurgerNav=styled.div`
position :fixed;
top :0;
bottom:0;
right:0;
background :white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display :flex;
flex-direction:column;
text-align:start;
transform:${props=>props.show ? 'translateX(0)':'translateX(100%)'};
transition:transform 1s;
li{

padding:15px 0;
border-bottom:1px solid rgba(0,0,0,0.2);
a{
    font-weight:600; 
}

}
`
const CloseWrapper=styled.div`

display:flex;
justify-content:flex-end;
svg{
    cursor:pointer;
}
`