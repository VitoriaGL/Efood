import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  HomeContainer,
  HeroBanner,
  HeroContent,
  HeroLogo,
  HeroText,
  RestaurantList,
  RestaurantCard,
  RestaurantImageWrapper,
  RestaurantImage,
  CategoryBadge,
  CategoryText,
  RestaurantInfo,
  RestaurantHeader,
  RestaurantTitle,
  RatingContainer,
  StarIcon,
  RestaurantRating,
  RestaurantDescription,
  LearnMoreButton
} from '../styles/HomeStyles'

const Home = () => {
  const navigate = useNavigate()

  const handleRestaurantClick = (restaurantId) => {
    navigate(`/perfil?id=${restaurantId}`)
  }

  const restaurants = [
    {
      id: 1,
      name: 'Hioki Sushi',
      rating: 4.9,
      category: 'Japonesa',
      isHighlight: true,
      highlightText: 'Destaque da semana',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=472&h=217',
      description: 'Aproveite, Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis delicados e pratos quentes irresistíveis. Entregamos com qualidade e rapidez.'
    },
    {
      id: 2,
      name: 'La Dolce Vita Trattoria',
      rating: 4.6,
      category: 'Italiana',
      isHighlight: false,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=472&h=217',
      description: 'A melhor comida italiana da cidade! A La Dolce Vita traz para sua mesa as mais autênticas receitas italianas. Massas artesanais, molhos especiais e ingredientes importados diretamente da Itália.'
    },
    {
      id: 3,
      name: 'La Dolce Vita Trattoria',
      rating: 4.6,
      category: 'Italiana',
      isHighlight: false,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=472&h=217',
      description: 'A La Dolce Vita traz para sua mesa as mais autênticas receitas italianas. Massas artesanais, molhos especiais e ingredientes importados diretamente da Itália.'
    },
    {
      id: 4,
      name: 'La Dolce Vita Trattoria',
      rating: 4.6,
      category: 'Italiana',
      isHighlight: false,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=472&h=217',
      description: 'A La Dolce Vita traz para sua mesa as mais autênticas receitas italianas. Massas artesanais, molhos especiais e ingredientes importados diretamente da Itália.'
    },
    {
      id: 5,
      name: 'La Dolce Vita Trattoria',
      rating: 4.6,
      category: 'Italiana',
      isHighlight: false,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=472&h=217',
      description: 'A La Dolce Vita traz para sua mesa as mais autênticas receitas italianas. Massas artesanais, molhos especiais e ingredientes importados diretamente da Itália.'
    },
    {
      id: 6,
      name: 'La Dolce Vita Trattoria',
      rating: 4.6,
      category: 'Italiana',
      isHighlight: false,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=472&h=217',
      description: 'A La Dolce Vita traz para sua mesa as mais autênticas receitas italianas. Massas artesanais, molhos especiais e ingredientes importados diretamente da Itália.'
    }
  ]

  return (
    <HomeContainer>
      <HeroBanner>
        <HeroContent>
          <HeroLogo>efood!!</HeroLogo>
          <HeroText>
            Viva experiências gastronômicas no conforto da sua casa
          </HeroText>
        </HeroContent>
      </HeroBanner>

      <RestaurantList>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard 
            key={restaurant.id} 
            $index={index}
            onClick={() => handleRestaurantClick(restaurant.id)}
          >
            <RestaurantImageWrapper>
              <RestaurantImage src={restaurant.image} alt={restaurant.name} />
              {restaurant.isHighlight && (
                <CategoryBadge $isHighlight={true} $position="left">
                  <CategoryText>{restaurant.highlightText}</CategoryText>
                </CategoryBadge>
              )}
              <CategoryBadge $isHighlight={false} $position="right">
                <CategoryText>{restaurant.category}</CategoryText>
              </CategoryBadge>
            </RestaurantImageWrapper>
            <RestaurantInfo>
              <RestaurantHeader>
                <RestaurantTitle>{restaurant.name}</RestaurantTitle>
                <RatingContainer>
                  <StarIcon />
                  <RestaurantRating>{restaurant.rating}</RestaurantRating>
                </RatingContainer>
              </RestaurantHeader>
              <RestaurantDescription>{restaurant.description}</RestaurantDescription>
              <LearnMoreButton>Saiba mais</LearnMoreButton>
            </RestaurantInfo>
          </RestaurantCard>
        ))}
      </RestaurantList>
    </HomeContainer>
  )
}

export default Home

