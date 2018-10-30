import Link from 'next/link'

export default class extends React.Component {
  render() {
    const { sectionTitle, podcasts } = this.props
    return (
      <div>
        <h2>{ sectionTitle }</h2>
        <ul className="podcasts">
        {
          podcasts.map((podcast) => (
            <li className="podcast" key={podcast.id}>
              <Link href={`/podcast?id=${podcast.id}`} prefetch >
                <a>
                  <img src={ "/static/play.png" } alt=""/>
                  <h3>{ podcast.title }</h3>
                  <p>{ podcast.description.substr(0, 100) }</p>
                  <div>
                    <div className="duration">
                      <span>{ Math.ceil(podcast.duration / 60) } minutes</span>
                    </div>
                    <div className="plays">
                      <span>{ podcast.counts.plays }</span> plays
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))
        }
        </ul>
        <style jsx>{`
          div {
            background: #eeeeee;
          }
          div h2 {
            margin: 0;
            color: #1e1e1e;
            padding: 20px 0 15px 15px;
            font-size: 1.4em;
          }
          .podcasts{
            margin: 0;
            padding: 25px;
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
          .podcast {
            background: white;
            list-style: none;
            border-bottom: 1px solid rgba(0,0,0,0.2);
            cursor: pointer;
            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.06);

          }
          .podcast img {
            width: 100px;
            margin: 10px;
          }
          .podcast: hover {
            list-style: none;
            border-bottom: 1px solid rgba(0,0,0,0.2);
            cursor: pointer;
            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.06);

          }
          .podcast a {
            display: block;
            text-decoration: none;
            color: #585858;
          }
          .podcast a h3 {
            margin: 10px 7px;
            font-size: 1.2em;
          }
          .podcast a h3:hover{
            color: #000;
          }
          .podcast a p {
            margin: 10px;
          }
          .podcast .duration, .podcast .plays {
            padding: 20px 10px 20px 10px;
            background: white;
            color: #8756ca;
            font-size: 0.9em;
          }
          .podcast .plays{
            text-align: right;
            padding: 0 10px 5px 0;
          }
          .podcast .duration span {
            text-transform: uppercase;
            font-weight: bold;
          }
          .podcast .plays span {
            font-weight: bold;
          }
        `}</style>
      </div>
    )
  }
}
