class EventApplication extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      sort: "name",
      order: "asc",
      page: 1,
      pages: 0
    };
  };

  componentDidMount() {
    this.getDataFromApi(this.state.page);
  };

  getDataFromApi(page) {
    var self = this;
    $.ajax({
      url: '/api/v1/events',
      data: { page: page },
      success: function(data) {
        self.setState({ events: data.events, pages: parseInt(data.pages), page: parseInt(data.page) });
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  };

  handleSearch(events) {
    this.setState({ events: events });
  };

  handleAdd() {
    this.getDataFromApi(this.state.page);
  };

  handleDeleteRecord() {
    this.getDataFromApi(this.state.page);
  };

  handleUpdateRecord(old_event, event) {
    var events = this.state.events.slice();
    var index = events.indexOf(old_event);
    events.splice(index, 1, event);
    this.setState({ events: events });
  };

  handleSortColumn(name, order) {
    if (this.state.sort != name) {
      order = 'asc';
    }
    $.ajax({
      url: '/api/v1/events',
      data: { sort_by: name, order: order, page: this.state.page },
      method: 'GET',
      success: function(data) {
        this.setState({ events: data.events, sort: name, order: order });
      }.bind(this),
      error: function(xhr, status, error) {
        alert('Cannot sort events: ', error);
      }
    });
  };

  handleChangePage(page) {
    this.getDataFromApi(page);
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>ReactJS Tutorial</h1>
          <p>by Piotr Jaworski</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <SearchForm handleSearch={this.handleSearch.bind(this)} />
          </div>
          <div className="col-md-8">
            <NewForm handleAdd={this.handleAdd.bind(this)} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <EventTable events={this.state.events}
                        sort={this.state.sort}
                        order={this.state.order}
                        handleDeleteRecord={this.handleDeleteRecord.bind(this)}
                        handleUpdateRecord={this.handleUpdateRecord.bind(this)}
                        handleSortColumn={this.handleSortColumn.bind(this)} />
            <Pagination page={this.state.page}
                        pages={this.state.pages}
                        handleChangePage={this.handleChangePage.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}
