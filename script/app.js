class FilterList extends React.Component {
    render () {
      const { elements } = this.props;
      const { filterStr } = this.state;
  
      const filteredElements = elements
        .filter(e => e.includes(filterStr))
        .map(e => <li>{ e }</li>)
  
      return (
        <div>
          <input
            type="text"
            value={ filterStr }
            onChange={ e => this.setState({ filterStr: e.target.value }) } />
          <ul>
            { filteredElements }
          </ul>
        </div>
      );
    }
  }