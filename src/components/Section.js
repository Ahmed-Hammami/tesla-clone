import React from 'react';
import styled from 'styled-components';
function Section( {title,description,leftBtntext,rightBtntext,backgroundimg}) {
    return (
    <div>
        <Wrap bgimage={backgroundimg}>
<Itemtext>
    <h1>{title}</h1>
    <p>{description}</p>
</Itemtext>
<Buttons>
<ButtonGroup>
    <LeftButton> {leftBtntext}</LeftButton>
    {rightBtntext && <RightButton> {rightBtntext}</RightButton> }
    
</ButtonGroup>

<DownArrow src="/images/down-arrow.svg"/>
</Buttons>
        </Wrap>
      
    </div>
  );
}

export default Section;
const Wrap=styled.div`
z-index:10;
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image: url('/images/model-s.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image:${props => `url("/images/${props.bgimage}")`}
`

const Itemtext =styled.div`
padding-top:15vh;
text-align:center;

`


const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
@media (max-width:768px) {
    flex-direction: column;
    }
`

const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
 opacity :0.85;
text-transform:uppercase;
cursor:pointer;
margin:8px;
font-size:12px;
`
const RightButton=styled(LeftButton)`
background:white;
color:black;
opacity:0.65;

`

const DownArrow=styled.img`
overflow-x:hidden;
height:40px;
cursor:pointer;
animation:animateDown infinite 1.5s;
`
const Buttons=styled.div`
`