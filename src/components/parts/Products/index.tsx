import { VFC } from 'react'
import { Image } from 'src/components/elements/Image'
import { gray, white } from 'src/styles/colors'
import styled from 'styled-components'

type Product = {
  id: string
  image?: string
  title: string
  description: string
}

type ProductsProps = {
  products: Product[]
}

export const Products = styled<VFC<ProductsProps & { className?: string }>>(
  ({ className, products }) => (
    <Wrapper className={className}>
      <h2>Products</h2>
      {products.map(({ id, image, title, description }) => (
        <ItemDiv key={id}>
          {!!image && <StyledImage src={image} alt={title} />}
          <h3>{title}</h3>
          <p>{description}</p>
        </ItemDiv>
      ))}
    </Wrapper>
  ),
)``

const StyledImage = styled(Image)`
  position: relative;
  width: 25%;
  height: 100%;
`

const ItemDiv = styled.div`
  position: relative;
  width: 100%;
  background: ${gray};
  border-radius: 24px;
  padding: 12px 12px 20px;
  color: ${white};
  text-align: center;
  h3 {
    margin-top: 12px;
    font-size: 28px;
    line-height: 1.3214;
  }
  p {
    margin-top: 8px;
    font-size: 12px;
    line-height: 2;
  }
`

const Wrapper = styled.section`
  display: flex;
  row-gap: 24px;
  flex-direction: column;
  align-items: center;
  margin: 0 48px;
  max-width: 864px;
  h2 {
    margin-bottom: 42px;
    font-size: 48px;
    line-height: 1.3333;
    text-align: center;
  }
`
