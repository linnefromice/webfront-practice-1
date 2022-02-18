import { VFC } from 'react'
import { Footer } from 'src/components/parts/Footer'
import { Header } from 'src/components/parts/Header'
import { Products } from 'src/components/parts/Products'
import styled from 'styled-components'

export const PRODUCTS = [
  {
    id: '1',
    image:
      'https://raw.githubusercontent.com/linnefromice/portfolio_one/master/public/contents/ff_quiz_ver1.png',
    title: 'ff_quiz_app',
    description: '4-Choice Quiz Application about Final Fantasy IX.',
  },
  {
    id: '2',
    image:
      'https://raw.githubusercontent.com/linnefromice/portfolio_one/master/public/contents/app_tweet_ver1.gif',
    title: 'app_tweet',
    description: 'client/server app like twitter.',
  },
  {
    id: '3',
    image:
      'https://raw.githubusercontent.com/linnefromice/portfolio_one/master/public/contents/study_record_app_one.gif',
    title: 'study_record_app',
    description:
      'We can save study record.Record summary is displayed with graph.Mobile Application / ios & android',
  },
  {
    id: '4',
    title: 'zenn_rss_feeder',
    description:
      'Rss feeder for zenn.dev.Select topic (techonology & theme) & display articles.Also, you can save favorite articles.',
  },
]

export const Top: VFC = () => (
  <>
    <Header />
    <Main>
      <Products products={PRODUCTS} />
    </Main>
    <Footer />
  </>
)

const Main = styled.main`
  padding-bottom: 92px;
  ${Products} {
    margin-top: 92px;
  }
`
