import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ReactNode} from 'react'
import Container from '@material-ui/core/Container';
import Head from 'next/head'
import Header from './layout/Header'

type Props = {
  children?: ReactNode,
  title?: string
}

class Layout extends Component {

  static propTypes = {
    children: PropTypes.element,
    title: PropTypes.string,
  }

  render () {
    const { children, title = 'Protests.in' }: Props = this.props;
    return (
      <div>
        <Head>
          <title>{ title }</title>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>

        <Container maxWidth="md">
          <Header/>
          { children }
        </Container>
      </div>
    )
  }
}

export default Layout;
