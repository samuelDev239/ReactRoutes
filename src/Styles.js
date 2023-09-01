import styled from 'styled-components/native'
export const DivHeader = styled.View`
width: 100%;
min-height: 100%;
max-height: auto;
background: #F5F5F5;
display: flex;
flex-direction: column;
`;
export const HeaderNav = styled.View`
width: 100%;
height: 100px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
gap: 0.5rem;
padding: 0.5rem;
`
export const TituloUsuario = styled.Text`
font-size: 1rem;
font-weight: 700;
font-family: arial;
color: #1d1d1d;
`;
export const IconeHeader = styled.Image`
width: 34px;
height: 34px;
`
export const Input = styled.TextInput`
background: #4DBCA7 ;
padding: 1rem;
width: 70%;
height: 42px;
border-radius: 50px;
color: #ffff;

`;
export const Filtro = styled.TouchableOpacity`
width: 44px;
height: 44px;
border-radius: 100px;
background: #786CAC;
background-image: url('./img/Union.png');
display: flex;
justify-content: center;
align-items: center;
`
export const ConteudoBusca = styled.View`
display: flex;
margin: 0rem 2rem;
justify-content: space-between;
flex-direction: row;
`
export const ImagemFiltro = styled.Image`
width: 22px;
height: 22px;
object-fit: cover;


`

export const DivInput = styled.View`
background: #4DBCA7 ;
padding: 1rem;
width: 75%;
height: 42px;
border-radius: 50px;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
gap: 2rem;


`

export const DivCarrousel = styled.View`
width: 100%;
height: auto;
gap: 2rem;
object-fit: cover;
display: flex;

`
export const DivNav = styled.View`
width: 100%;
height: auto;
gap: 2rem;
flex-direction: column;
display: flex;

`


export const DivCard = styled.View`
width: 40%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const ImagemCard = styled.Image`
width: 250;
height: 200px;
border-radius: 20px;
resize: center;
`

export const FlatCarrousel = styled.FlatList`
display: flex;
flex-direction: row;
margin: 0 1rem;
padding-left: 5rem;
`
export const TextCarrosel = styled.Text`
color: black;
font-weight: 600;
font-size: 16px;
margin-left: 1.5rem;
`
export const CaixaTitulo = styled.TouchableOpacity`
width: 185px;
height: 88px;
flex-shrink: 0;
border-radius: 10px;
background-color: linear-gradient(0deg, rgba(75,173,172,0.4962359943977591) 70%, rgba(75,173,172,1) 100%);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
backdrop-filter: blur(1px);
position: relative;
bottom: 30px
`
export const TextoCard = styled.Text`
font-size: 18px;
color: #fff;
font-weight: 500;
`
export const TextoCardMin = styled.Text`
font-size: 16px;
color: #fff;
font-weight: 400;
`