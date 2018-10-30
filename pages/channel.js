import 'isomorphic-fetch'
import Layout from '../components/Layout'
import SectionTitle from '../components/SectionTitle'
import ChannelGrid from '../components/ChannelGrid'
import PodcastList from '../components/PodcastList'
import Error from './_error'

export default class extends React.Component {
  static async getInitialProps({ query, res }) {

    try {
      let idChannel = query.id
      let [reqChannel, reqSeries, reqAudios] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${idChannel}`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
      ])
      if (reqChannel.status >= 400) {
        res.statusCode = reqChannel.status
        return { channel: null, audioClips: null, series: null, statusCode: reqChannel.status }
      }

      let [dataChannel, dataAudios, dataSeries ] = await Promise.all([
        reqChannel.json(),
        reqAudios.json(),
        reqSeries.json()
      ])
      let channel = dataChannel.body.channel
      let audioClips = dataAudios.body.audio_clips
      let series = dataSeries.body.channels

      return { channel, audioClips, series, statusCode: 200 }
    } catch (e) {
      return { channel: null, audioClips: null, series: null, statusCode }
    }

  }

  render() {

    const { channel, audioClips, series, statusCode } = this.props

    if (statusCode !== 200) {
      return (
        <Error statusCode={ statusCode }/>
      )
    }

    return (
      <Layout title={channel.title}>
        { series.length > 0 &&
          <div>
            <ChannelGrid sectionTitle={`Series de ${ channel.title }`} channels={ series } />
          </div>
        }
        <PodcastList sectionTitle={`Ultimos podcasts de ${ channel.title }`} podcasts={ audioClips } />
        <style jsx>{`
          .banner {
            width: 100%;
            padding-bottom: 25%;
            background-position: 50% 50%;
            background-size: cover;
            background-color: #aaa;
          }
        `}</style>
      </Layout>
    )
  }
}
