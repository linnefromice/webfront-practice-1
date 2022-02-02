import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { ReactText, VFC } from 'react'
import { absoluteFill } from 'src/styles/mixins'
import styled from 'styled-components'

export type ImageInfo = {
  src: string
  alt: string
  title?: string
  objectPosition?: ReactText
}
type ImageProps = ImageInfo & Partial<NextImageProps>

export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`
export const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

const blurData = `data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`

export const Image: VFC<ImageProps> = ({ src, alt, ...props }) => {
  if (!src) return <></>
  if (!src.startsWith('http') && !src.startsWith('/')) {
    return <NextImage src={src} alt={src} {...props} />
  }
  return (
    <NextImage
      layout={props.width && props.height ? 'fixed' : 'fill'}
      objectFit="cover"
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={blurData}
      {...props}
    />
  )
}

export const LoadingImage: VFC = () => (
  <NextImage layout="fill" objectFit="cover" src={blurData} />
)

export const RawImage = styled.img`
  ${absoluteFill}
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;

  object-fit: cover;
`
