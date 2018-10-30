// import Link from 'next/link' se cambia por
import { Link } from '../routes'
import slug from '../helpers/slug'

export default class ChannelGrid extends React.Component {
  render() {
    const { sectionTitle, channels } = this.props
    return (
      <div>
        <h2>{ sectionTitle }</h2>
        <div className="channels">
        {
          channels.map((channel) => (
            <Link route="channel" params={{
              slug: slug(channel.title),
              id: channel.id
            }} prefetch key={channel.id}>
            <a className="channel">
            <img src={ channel.urls.logo_image.original } alt=""/>
            <h3>{ channel.title }</h3>
            </a>
            </Link>
          ))
        }
        </div>
        <style jsx>{`
          .channels {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
          .channel {
            display: block;
            margin-bottom: 0.5em;
            color: #ffffff;
            text-decoration: none;
          }
          .channel img {
            box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
            width: 100%;
            transition-duration: 350ms;
            transition-timing-function: ease;
          }
          .channel img:hover {
            box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
            transform: scale(1.05);          }
          h2 {
            margin: 0;
            color: white;
            padding: 15px 0 15px 15px;
            font-size: 1.4em;
          }
          h3 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }

        `}</style>
      </div>
    )
  }
}
