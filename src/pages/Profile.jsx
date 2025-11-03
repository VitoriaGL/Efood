import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ProfileContainer,
  ProfileHeader,
  HeaderContent,
  HeaderLink,
  HeaderLogo,
  CartInfo,
  PresentationSection,
  PresentationOverlay,
  PresentationContent,
  CategoryLabel,
  RestaurantName,
  ProductList,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductDescription,
  AddToCartButton
} from '../styles/ProfileStyles'

const Profile = () => {
  const navigate = useNavigate()

  const products = [
    {
      id: 1,
      name: 'Pizza Marguerita',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=304&h=167',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 2,
      name: 'Pizza Marguerita',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=304&h=167',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 3,
      name: 'Pizza Marguerita',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=304&h=167',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 4,
      name: 'Pizza Marguerita',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=304&h=167',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 5,
      name: 'Pizza Marguerita',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=304&h=167',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    },
    {
      id: 6,
      name: 'Pizza Marguerita',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=304&h=167',
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    }
  ]

  return (
    <ProfileContainer>
      <ProfileHeader>
        <HeaderContent>
          <HeaderLink onClick={() => navigate('/')}>Restaurantes</HeaderLink>
          <HeaderLogo>efood!!</HeaderLogo>
          <CartInfo>0 produto(s) no carrinho</CartInfo>
        </HeaderContent>
      </ProfileHeader>

      <PresentationSection>
        <PresentationOverlay />
        <PresentationContent>
          <CategoryLabel>Italiana</CategoryLabel>
          <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
        </PresentationContent>
      </PresentationSection>

      <ProductList>
        {products.map((product, index) => (
          <ProductCard key={product.id} $index={index}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
          </ProductCard>
        ))}
      </ProductList>
    </ProfileContainer>
  )
}

export default Profile
