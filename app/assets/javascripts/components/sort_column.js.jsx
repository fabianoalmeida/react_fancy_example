class SortColumn extends React.Component {

  constructor(props) {
    super(props);
  };

  handleSort(e) {
    e.preventDefault();
    var order = this.props.order == 'desc' ? 'asc' : 'desc';
    this.props.handleSortColumn(this.props.name, order);
  };

  render() {
    var active = this.props.sort == this.props.name;
    var display_name = active ? <u>{this.props.text}</u> : this.props.text;
    var direction;
    if (active) {
      direction = this.props.order == "asc" ? <span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> : <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
    }
    return(
      <span onClick={this.handleSort.bind(this)}>
        {display_name}
        {direction}
      </span>
    );
  }
}
