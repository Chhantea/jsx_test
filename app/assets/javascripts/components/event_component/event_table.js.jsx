var EventTable = React.createClass({
  handleDeleteRecord: function(event){
    this.props.handleDeleteRecord(event);
  },
  render: function() {
    var events = [];
    this.props.events.forEach(function(event) {
      events.push(<Event event={event}
                         key={'event' + event.id}
                         handleDeleteRecord={this.handleDeleteRecord} />);
    }.bind(this));
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th >Name</th>
            <th>Date</th>
            <th>Place</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {events}
        </tbody>
      </table>
    )
  }
});