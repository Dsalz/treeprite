import React, { Component } from 'react'

// components
import Title from '../../components/Title'
import Banner from '../../components/Banner'
// import CardWrapper from '../components/Cards';
import { CardWrapper } from '../../components/Card'
import Layout from '../../components/Layout'

// Generic Style Components
import { Wrapper, Row } from '../../theme/style/styles'
// styles
import { Link } from './styles'

// Styles For styled-components with props styles
const styles = {
  Wrapper: {
    height: '94vh'
  },
  Banner: {
    banner: require('../../assets/images/THANK_YOU.png'),
    width: '100%',
    height: '100%'
  },
  Title: {
    padding: '0',
    altHeader: 'true',
    headerColor: '#053C69'
  },
  Row: {
    padding: '60px 0 0',
    height: '100%'
  },
  CardWrapper: {
    backgroundColor: '#fff',
    width: '662px',
    height: '289px'
  }
}
export default class ForgotPassword extends Component {
  render () {
    return (
      <Layout>
        <Wrapper
          className='fixedheight'
          {...styles.Wrapper}>
          <Banner {...styles.Banner}>
            <Row
              {...styles.Row}
            >
              <CardWrapper
                {...styles.CardWrapper}>
                <Title
                  {...styles.Title}
                  title='Thank you!'
                  subTitle='A link has been sent to your mail'
                />
                <Link onClick={() => this.props.history.push('/')}>
                  click here to return to Home
                </Link>
              </CardWrapper>
            </Row>
          </Banner>
        </Wrapper>
      </Layout>
    )
  }
}
