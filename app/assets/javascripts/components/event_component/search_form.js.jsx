var SearchForm = React.createClass({
  handleSearch: function() {
    console.log("s");
    var query = ReactDOM.findDOMNode(this.refs.query).value;
    var self = this;
    $.ajax({
      url: '/events/search',
      data: { query: query },
      success: function(data) {
        self.props.handleSearch(data);
      },
      error: function(xhr, status, error) {
        alert('Search error: ', error);
      }
    });
  },
  render: function() {
    return(
      <input onChange={this.handleSearch}
             type="text"
             className="form-control"
             placeholder="Type a search phrase..."
             ref="query" />
    )
  }
});