import styled from 'styled-components'

export const ProfileContainer = styled.div`
  flex: 1;
  width: 100%;
  min-width: 1366px;
  margin: 0 auto;
  padding: 0;
  background: #FFF8F2;
  position: relative;
  min-height: 1624px;
  padding-bottom: 350px;

  @media (max-width: 1366px) {
    min-width: 100%;
    min-height: auto;
    padding-bottom: 320px;
  }
`

export const ProfileHeader = styled.header`
  position: absolute;
  width: 100%;
  min-width: 2031.81px;
  height: 186px;
  left: 0px;
  top: -23px;
  background: rgba(230, 103, 103, 0.05);

  @media (max-width: 1366px) {
    min-width: 100%;
    position: relative;
    top: 0;
    height: auto;
    padding: 1rem 0;
  }
`

export const HeaderContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`

export const HeaderLink = styled.a`
  position: absolute;
  left: 171px;
  top: 59px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #E66767;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1366px) {
    position: relative;
    left: auto;
    top: auto;
  }
`

export const HeaderLogo = styled.div`
  position: absolute;
  width: 125px;
  height: 57.5px;
  left: 621px;
  top: 40px;
  background: #E66767;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 24px;
  color: #FFEBD9;

  @media (max-width: 1366px) {
    position: relative;
    left: auto;
    top: auto;
    margin: 0 auto;
  }
`

export const CartInfo = styled.span`
  position: absolute;
  width: 256px;
  height: 21px;
  right: 171px;
  top: 59px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-align: right;
  color: #E66767;

  @media (max-width: 1366px) {
    position: relative;
    right: auto;
    top: auto;
    text-align: center;
  }
`

export const PresentationSection = styled.section`
  position: absolute;
  width: 100%;
  min-width: 1366px;
  height: 280px;
  left: 0px;
  top: 162px;
  background-image: url('https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1366&h=280');
  background-size: cover;
  background-position: center;
  overflow: hidden;

  @media (max-width: 1366px) {
    min-width: 100%;
    position: relative;
    left: 0;
    top: 0;
    margin-top: 163px;
  }
`

export const PresentationOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
`

export const PresentationContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  height: 100%;
  padding: 0 170px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 32px;
  z-index: 1;
`

export const CategoryLabel = styled.h2`
  position: absolute;
  left: 170px;
  top: 25px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 32px;
  line-height: 38px;
  color: #FFFFFF;

  @media (max-width: 1366px) {
    position: relative;
    left: auto;
    top: auto;
  }
`

export const RestaurantName = styled.h1`
  position: absolute;
  width: 676px;
  height: 33.25px;
  left: 170px;
  bottom: 32px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  color: #FFFFFF;

  @media (max-width: 1366px) {
    position: relative;
    left: auto;
    bottom: auto;
    width: auto;
  }
`

export const ProductList = styled.div`
  position: absolute;
  width: 1024px;
  height: 708px;
  left: 171px;
  top: 498px;

  @media (max-width: 1400px) {
    left: auto;
    right: auto;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 100%;
    max-width: 1024px;
    height: auto;
    top: 0;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 320px);
    gap: 32px;
    justify-content: center;
    padding-bottom: 320px;
  }

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 320px);
  }

  @media (max-width: 700px) {
    grid-template-columns: 320px;
  }
`

export const ProductCard = styled.div`
  position: absolute;
  width: 320px;
  height: 338px;
  background: #E66767;
  padding: 8px;
  display: flex;
  flex-direction: column;
  left: ${props => {
    if (props.$index === 0 || props.$index === 3) return '0px';
    if (props.$index === 1 || props.$index === 4) return '352px';
    if (props.$index === 2 || props.$index === 5) return '704px';
    return '0px';
  }};
  top: ${props => {
    if (props.$index < 3) return '0px';
    return '370px';
  }};

  @media (max-width: 1400px) {
    position: relative;
    left: auto;
    top: auto;
  }
`

export const ProductImage = styled.img`
  width: 304px;
  height: 167px;
  object-fit: cover;
  flex-shrink: 0;
`

export const ProductTitle = styled.h3`
  width: 124px;
  height: 19px;
  margin: 8px 0 3px 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: #FFEBD9;

  @media (max-width: 1400px) {
    width: auto;
    height: auto;
  }
`

export const ProductDescription = styled.p`
  width: 304px;
  height: 88px;
  margin: 0 0 8px 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #FFEBD9;
  flex: 1;

  @media (max-width: 1400px) {
    width: auto;
    height: auto;
    margin-bottom: 8px;
  }
`

export const AddToCartButton = styled.button`
  width: 304px;
  height: 24px;
  background: #FFEBD9;
  border: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #E66767;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: auto;

  &:hover {
    opacity: 0.9;
    background: #ffe5cc;
  }

  @media (max-width: 1400px) {
    width: 100%;
  }
`
