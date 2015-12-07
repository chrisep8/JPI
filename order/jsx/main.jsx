var json = [{
    section:"Barang",
    design:[{
        image: "img/packaging/askul_garbage_bag.jpg",
        details:{
            name: "Askul Garbage Bag",
            date: "2014-12-10",
            price: "200"
        }
    },{
        image: "img/packaging/ge_energy_smart.jpg",
        details:{
            name: "General Electric Energy Smart Bulb",
            date: "2015-04-01",
            price: "200"
        }
    },{
        image: "img/packaging/lucratives_ac_adapter.jpg",
        details:{
            name: "Lucratives AC Adapter",
            date: "2015-07-29",
            price: "300"
        }
    }]
},{
    section:"Makanan",
    design:[{
        image: "img/packaging/doritos_toasted_corn.jpg",
        details:{
            name: "Doritos Toasted Corn",
            date: "2015-03-11",
            price: "250"
        }
    },   {
        image: "img/packaging/passion_shed.jpg",
        details:{
            name: "Passion SHED",
            date: "2015-08-15",
            price: "250"
        }
    }, {
        image: "img/packaging/world_classic_coffee.jpg",
        details:{
            name: "World Classic Coffee",
            date: "2015-11-27",
            price: "250"
        }
    }]
}];

var Details = React.createClass({
   render:function(){
       return(
           <div className="details">
               <span className="name">{this.props.details.name}</span><br/>
               <span className="date">{this.props.details.date}</span>
           </div>
       )
   }
});

var Design = React.createClass({
    render: function(){
        return(
            <div className="design">
                <img className="thumbnail" src={this.props.design.image}/>
                <Details details={this.props.design.details}/>
            </div>
        )
    }
});

var Section = React.createClass({
   render: function(){
       var designs = this.props.section.design.map(function(design){
          return(<Design design={design}/>)
       });

       return(
           <div className="section">
               <div className="id">
                   {this.props.section.section}
               </div>
               {designs}
           </div>
       )
   }
});

var Main = React.createClass({
    render: function () {
       return (
          <div>
              {this.props.data.map(function (section) {return <Section section={section}/>                })}
          </div>
       );
   }
});

ReactDOM.render(
    <Main data={json}/>,
    document.getElementById('order')
);