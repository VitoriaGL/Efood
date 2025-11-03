import styled from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;
  width: 100%;
  min-width: 1366px;
  margin: 0 auto;
  padding: 0;
  background: #FFF8F2;
  position: relative;
  min-height: 1850px;
  padding-bottom: 350px;

  @media (max-width: 1366px) {
    min-width: 100%;
    min-height: auto;
    padding-bottom: 320px;
  }
`

export const HeroBanner = styled.section`
  position: relative;
  width: 100%;
  height: 384px;
  background: rgba(230, 103, 103, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  @media (max-width: 968px) {
    height: auto;
    padding: 2rem;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const HeroLogo = styled.div`
  width: 125px;
  height: 57.5px;
  background: #E66767;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 24px;
  color: #FFEBD9;
  margin-bottom: 2rem;
`

export const HeroText = styled.h1`
  width: 539px;
  height: 84px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: #E66767;

  @media (max-width: 600px) {
    width: 90%;
    font-size: 28px;
    line-height: 34px;
  }
`

export const HeroImage = styled.div`
  display: none;
`

export const RestaurantList = styled.div`
  position: absolute;
  width: 1024px;
  height: 1290px;
  left: 171px;
  top: 440px;
  margin-bottom: 350px;

  @media (max-width: 1400px) {
    left: auto;
    right: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    position: relative;
    width: 100%;
    max-width: 1024px;
    height: auto;
    display: grid;
    grid-template-columns: 472px 472px;
    grid-auto-rows: 398px;
    gap: 48px 80px;
    padding: 0 2rem 320px 2rem;
  }

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

export const RestaurantCard = styled.div`
  position: absolute;
  width: 472px;
  height: 398px;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;
  left: ${props => {
    if (props.$index === 0 || props.$index === 2 || props.$index === 4) return '0px';
    if (props.$index === 1 || props.$index === 3 || props.$index === 5) return '552px';
    return '0px';
  }};
  top: ${props => {
    if (props.$index === 0 || props.$index === 1) return '0px';
    if (props.$index === 2 || props.$index === 3) return '446px';
    if (props.$index === 4 || props.$index === 5) return '892px';
    return '0px';
  }};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }

  @media (max-width: 1400px) {
    position: relative;
    left: auto;
    top: auto;
    width: 472px;
    margin: 0 auto;
  }

  @media (max-width: 1120px) {
    width: 100%;
    max-width: 472px;
  }
`

export const RestaurantImageWrapper = styled.div`
  position: absolute;
  width: 472px;
  height: 217px;
  top: 0;
  left: 0;
  overflow: hidden;

  @media (max-width: 1400px) {
    position: relative;
  }

  @media (max-width: 1120px) {
    width: 100%;
  }
`

export const RestaurantImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CategoryBadge = styled.div`
  position: absolute;
  width: ${props => props.$isHighlight ? '121px' : '61px'};
  height: 26px;
  top: 16px;
  ${props => {
    if (props.$position === 'left') {
      // Destaque: left 437px (viewport) - 171px (card left) = 266px do card
      return 'left: 266px;';
    } else {
      // Categoria: sempre a 395px da esquerda do card (baseado no CSS do Figma)
      // Restaurante 1: left 566px (viewport) - 171px (card) = 395px
      // Restaurante 2: left 1118px (viewport) - 723px (card) = 395px
      return 'left: 395px;';
    }
  }}
  background: #E66767;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

export const CategoryText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #FFEBD9;
`

export const RestaurantInfo = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 472px;
  height: 181px;
  top: 217px;
  left: 0;
  background: #FFFFFF;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: #E66767;
  padding: 0;

  @media (max-width: 1400px) {
    position: relative;
    top: 0;
  }

  @media (max-width: 1120px) {
    width: 100%;
  }
`

export const RestaurantHeader = styled.div`
  position: absolute;
  width: 100%;
  top: 8px;
  left: 9px;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 9px;

  @media (max-width: 1400px) {
    position: relative;
    top: auto;
    left: auto;
    padding: 8px 16px 0 16px;
    margin-bottom: 8px;
  }
`

export const RestaurantTitle = styled.h2`
  position: absolute;
  width: 180px;
  height: 21px;
  top: 0;
  left: 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #E66767;

  @media (max-width: 1400px) {
    position: relative;
    width: auto;
    height: auto;
  }
`

export const RatingContainer = styled.div`
  position: absolute;
  width: 55px;
  height: 21px;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 1400px) {
    position: relative;
    width: auto;
    height: auto;
    top: auto;
    right: auto;
  }
`

export const StarIcon = styled.span`
  position: absolute;
  width: 21px;
  height: 21px;
  right: 34px;
  top: 0;
  background: #FFB930;
  display: inline-block;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

  @media (max-width: 1400px) {
    position: relative;
    right: auto;
    top: auto;
  }
`

export const RestaurantRating = styled.span`
  position: absolute;
  width: 26px;
  height: 21px;
  right: 0;
  top: 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #E66767;

  @media (max-width: 1400px) {
    position: relative;
    width: auto;
    height: auto;
    right: auto;
    top: auto;
  }
`

export const RestaurantDescription = styled.p`
  position: absolute;
  width: 456px;
  height: 88px;
  top: 37px;
  left: 9px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #E66767;

  @media (max-width: 1400px) {
    position: relative;
    top: auto;
    left: auto;
    width: 456px;
    height: auto;
    margin: 8px 16px;
  }

  @media (max-width: 1120px) {
    width: calc(100% - 32px);
    margin: 8px 16px;
  }
`

export const LearnMoreButton = styled.button`
  position: absolute;
  width: 82px;
  height: 24px;
  left: 9px;
  top: 141px;
  background: #E66767;
  border: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #FFEBD9;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;

  &:hover {
    opacity: 0.9;
    background: #D15555;
  }

  @media (max-width: 1400px) {
    position: relative;
    top: auto;
    left: auto;
    margin: 16px;
  }
`

