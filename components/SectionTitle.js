export default class SectionTitle extends React.Component {
  render() {
    const { sectionTitle, backColor } = this.props
    return (
      <div>
        <h2>{ sectionTitle }</h2>
        <style jsx>{`
          h2 {
            background: ${backColor};
            color: #ffffff;
            padding-left: 15px;
            font-weight: normal;
            font-size: 1.3em;
          }
        `}</style>
      </div>

    )
  }
}
