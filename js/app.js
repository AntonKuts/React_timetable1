
var info = [{
  "1":"Дело №1",

},
{
  "1":"Дело №2",

},
{
  "1":"Дело №3",
}];


var Table = React.createClass({
  render: function(){
    var data = this.props.data;
    var work;
    work = data.map(function(item, index){
      return (
        <div key={index} style = {{height:'35px', width: '500px', padding: '10px'}}>
        <input style={{float:'left', margin:'0', height:'30px', width:'30px', borderRadius:'30px', color:'rgb(200, 47, 47)'}} type="checkbox" name="" value="" />
          <h5 style = {{width: '60px', float: 'left', margin:'0'}}>{item['1']}</h5>
          <p style = {{width: '60px', float: 'left', margin:'0'}}>time</p>
          <button type="button" name="button" style = {{border:'1px solid black', float: 'left', margin:'0'}}>Start</button>
          <img src="https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_close-20.png" alt=""/>
        </div>
      )
    })

    return (
      <div className="front">
        {work}
        <p> </p>
      </div>
    );

  }

});

var App = React.createClass({
  render: function() {
    return (
      <div style = {{display: 'table', margin: 'auto', textAlign:'center'}}>
      <h1 style = {{color:'#cce6fa', fontSize:'60px', font:'Helvetica Neue, Helvetica, Arial, sans-serif'}}>Create your plans</h1>
      <input type="text" name="" value="" style={{height:'40px', width: '500px', border:'0 solid black'}}/>
        <Table data={info}/>
      </div>
    )
  }
});

ReactDOM.render(<App/>, document.getElementById('root'));
