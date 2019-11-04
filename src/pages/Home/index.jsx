import React, { Component } from 'react'

// components
import BookTripForm from '../../components/BookTripForm'
import Carousel from '../../components/Carousel'
import Layout from '../../components/Layout'

// images
import HomeImg from '../../images/Home.svg'

class Home extends Component {
  componentDidMount () {
    console.log(this.props.Users)
    setTimeout(() => {
      this.props.handlePageLoader(false)
      console.log(this.props.Users)
    }, 10000)
  }
  render () {
    return (
      <Layout>
        <article className='row p-5'>
          <div className='col-md-6 px-5'>
            <BookTripForm />
          </div>

          <div className='col-md-6 px-5 d-flex justify-content-md-end'>
            <img src={HomeImg} alt='Business Woman' />
          </div>
        </article>

        <article className='row p-5'>
          <Carousel title='Featured Partners' />
        </article>

        <article className='row p-5'>
          <Carousel title='New Partners' />
        </article>
      </Layout>
    )
  }
}

export default Home
