import styled from 'styled-components'

export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  min-width: 1366px;
  height: 298px;
  background: #FFEBD9;
  overflow: hidden;
  margin-top: auto;
  flex-shrink: 0;

  @media (max-width: 1366px) {
    min-width: 100%;
  }
`

export const FooterContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 40px 0;
`

export const FooterLogo = styled.div`
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
  flex-shrink: 0;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 24px;
`

export const SocialIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #E66767;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.3s;
  flex-shrink: 0;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: #FFEBD9;
  }
`

export const Copyright = styled.p`
  width: 480px;
  max-width: 90%;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #E66767;
  margin: 0;
  padding: 0 1rem;
`

