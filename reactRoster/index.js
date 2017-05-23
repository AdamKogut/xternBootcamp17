class App extends React.Component {
  constructor() {
    super()
    this.state = {
      acrobats: [],
    }
  }
  
  addAcrobat(ev) {
    ev.preventDefault()
    const acrobats = [...this.state.acrobats]
    acrobats.push(this.acrobatName.value)
    this.setState({ acrobats })
    ev.currentTarget.reset()
  }
  
  renderAcrobat(acrobat) {
    return <li>{acrobat}</li>
  }
  
  render() {
    return (
      <div>
        <div className="row">
          <div className="medium-offset-2 medium-8 columns">
            <h2>League of Acrobats</h2>
            <form onSubmit={this.addAcrobat.bind(this)}>
              <input type="text" placeholder="Acrobat Name" ref={(input) => this.acrobatName = input} />
              <button type="submit" className="expanded success button">
                Sign Me Up
              </button>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="medium-offset-2 medium-8 columns">
            <ul className="no-bullet">
              {this.state.acrobats.map(this.renderAcrobat)}
            </ul>
          </div>
        </div>
       </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('main'))