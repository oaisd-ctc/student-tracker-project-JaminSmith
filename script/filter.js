class FilterList extends React.Component {
  constructor (props) {
    this.state = {
      viewableEls: props.elements
    }
  }

  componentWillReceiveProps (nextProps) {
    const { elements } = this.props;
    const { filterStr } = this.state;

    if (elements !== nextProps.elements) {
      this.setState({
        viewableEls: this.getViewableEls(nextProps.elements, filterStr)
      })
    }
  }

  getViewableEls (elements, filterStr) {
    return elements.filter(el => el.includes(filterStr))
  }

  handleFilterChange = e => {
    const { elements } = this.props;

    this.setState({
      filterStr: e.target.value,
      viewableEls: this.getViewableEls(elements, filterStr)
    })
  }
  render () {
    const { viewableEls } = this.state;

    return (
      <div>
        <input
          type="text"
          value={ filterStr }
          onChange={ this.handleFilterChange } />
        <ul>
          { viewableEls.map(e => <li key={ e }>{ e }</li>) }
        </ul>
      </div>
    );
  }
}