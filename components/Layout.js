import Link from 'next/link'
import Head from 'next/head'

export default class Layout extends React.Component {
  render() {
    const { children, title } = this.props
    return (
      <div>
        <Head>
          <title>{ title }</title>
          <meta name="viewport" content="width=device-width"/>
        </Head>
        <header>
          <Link href="/">
            <a>Podcasts</a>
          </Link>
        </header>

        { children }

        <style jsx>{`
          header {
            background: #8756ca;
            padding: 20px;
            text-align: center;
          }
          header a {
            color: #ffffff;
            text-decoration: none;
            font-size: 1.3em;
            font-weight: normal;
          }
        `}</style>
        <style jsx global>{`
          body {
            margin: 0;
            font-family: system-ui;
            background: #272727;
          }
        `}</style>
      </div>
    )
  }
}
