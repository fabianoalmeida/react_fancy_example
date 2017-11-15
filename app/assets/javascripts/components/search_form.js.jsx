class SearchForm extends React.Component {

  constructor(props) {
    super(props);
  };

  handleSearch() {
    var query = ReactDOM.findDOMNode(this.refs.query).value;
    var self = this;
    $.ajax({
      url: '/api/v1/events/search',
      data: { query: query },
      success: function(data) {
        self.props.handleSearch(data);
      },
      error: function(xhr, status, error) {
        alert('Search error: ', error);
      }
    });
  };

  render() {
    return(
      <input onChange={this.handleSearch.bind(this)}
             type="text"
             className="form-control"
             placeholder="Type a search phrase..."
             ref="query" />
    )
  }
}
