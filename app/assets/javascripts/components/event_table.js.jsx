class EventTable extends React.Component {

  handleDeleteRecord() {
    this.props.handleDeleteRecord();
  };

  handleUpdateRecord(old_event, event) {
    this.props.handleUpdateRecord(old_event, event);
  };

  handleSortColumn(name, order) {
    this.props.handleSortColumn(name, order);
  };

  render() {
    var events = [];
    this.props.events.forEach(function(event) {
      events.push(<Event event={event}
                         key={'event' + event.id}
                         handleDeleteRecord={this.handleDeleteRecord.bind(this)}
                         handleUpdateRecord={this.handleUpdateRecord.bind(this)} />)
    }.bind(this));
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-2 sortable">
              <SortColumn name="name"
                          text="Name"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.handleSortColumn.bind(this)}/>
            </th>
            <th className="col-md-2 sortable">
              <SortColumn name="event_date"
                          text="Date"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.handleSortColumn.bind(this)}/>
            </th>
            <th className="col-md-3 sortable">
              <SortColumn name="place"
                          text="Place"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.handleSortColumn.bind(this)}/>
            </th>
            <th className="col-md-3 sortable">
              <SortColumn name="description"
                          text="Description"
                          sort={this.props.sort}
                          order={this.props.order}
                          handleSortColumn={this.handleSortColumn.bind(this)}/>
            </th>
            <th className="col-md-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events}
        </tbody>
      </table>
    )
  }
}
