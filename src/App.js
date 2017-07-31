import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../public/cog.png';
import './App.css';
import * as ReactBootstrap from 'react-bootstrap';
// import { Button, DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';
//import Dimensions from 'react-dimensions';
// import from './app.css';
//const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.AddWidget = this.AddWidget.bind(this);
  }


    AddWidget() {
        ReactDOM.render(<Widget />, document.getElementById('widgetArea'));
    }
    AddWidget1() {
       ReactDOM.render(<Widget />, document.getElementById('widgetArea1'));
    }
    AddWidget2() {
        ReactDOM.render(<Widget />, document.getElementById('widgetArea2'));
    }
    
   render() {
      return (
         <div>
            <Header/>
            <ReactBootstrap.Row>
    <ReactBootstrap.Col sm={8}>
             <Content/>
            <Content2/>
            <Content3/>
            <div id="widgetArea"></div>
        </ReactBootstrap.Col>
        <ReactBootstrap.Col sm={4}>
            
            <div className="pull-right" id="widgetArea1"></div>
            <div className="pull-right" id="widgetArea2"></div>
            </ReactBootstrap.Col>
           </ReactBootstrap.Row> 
            <Footer />
         </div>
        
      );
   }
}

class Header extends App {
   render() {
      return (
         <div className="header-container">
            <h1>Header</h1>
            <Example/>
             <ReactBootstrap.Grid>
      <ReactBootstrap.Row>
      <ReactBootstrap.Col xs={6} md={3}>
        <ReactBootstrap.Thumbnail onClick={this.AddWidget} className="logo" alt="171x180" src={logo} />
      </ReactBootstrap.Col>
      <ReactBootstrap.Col xs={6} md={3}>
        <ReactBootstrap.Thumbnail onClick={this.AddWidget1} className="logo"  alt="171x180" src={logo} />
      </ReactBootstrap.Col>
      <ReactBootstrap.Col xs={6} md={3}>
        <ReactBootstrap.Thumbnail onClick={this.AddWidget2} className="logo"  alt="171x180" src={logo} />
      </ReactBootstrap.Col>
      </ReactBootstrap.Row>
    </ReactBootstrap.Grid>
         </div>
      );
   }
}

class Footer extends React.Component {
   render() {
      return (
         <div className="footer-container">
            <h1>footer</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() { 
   	// var style= {
   		
   	// 	height:80;
   	// }
      return (
         <div className="content content1">
            <h2>Content1</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

class Content2 extends React.Component {
   render() { 
    // var style= {
      
    //  height:80;
    // }
      return (
         <div className="content content2">
            <h2>Content2</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

class Content3 extends React.Component {
   render() { 
    // var style= {
      
    //  height:80;
    // }
      return (
         <div className="content content3">
            <h2>Content3</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

class Widget extends React.Component {
   render() { 
    // var style= {
      
    //  height:80;
    // }
      return (
         <div className="contentRight content">
            <h2>Content1</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
     this.setState({show : true});
  }

  hideModal() {
    this.setState({show : false});
  }

  render() {
    return (
      <ReactBootstrap.ButtonToolbar>
        <ReactBootstrap.Button bsStyle="primary" onClick={this.showModal}>
          Add Widgets
        </ReactBootstrap.Button>

        <ReactBootstrap.Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          ClassName="custom-modal">
          <ReactBootstrap.Modal.Header>
            <ReactBootstrap.Button onClick={this.hideModal}>Close</ReactBootstrap.Button>
          </ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Body>
            <h4>Wrapped Text</h4>
            <p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem!
             Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem! Dolores debitis voluptatibus ipsum dicta. Dolor quod amet ab sint esse distinctio tenetur. Veritatis laudantium quibusdam quidem corporis architecto veritatis. Ex facilis minima beatae sunt perspiciatis placeat. Quasi corporis
             odio eaque voluptatibus ratione magnam nulla? Amet cum maiores consequuntur totam dicta! Inventore adipisicing vel vero odio modi doloremque? Vitae porro impedit ea minima laboriosam quisquam neque. Perspiciatis omnis obcaecati consequatur sunt deleniti similique facilis sequi. Ipsum harum vitae modi reiciendis officiis.
             Quas laudantium laudantium modi corporis nihil provident consectetur omnis, natus nulla distinctio illum corporis. Sit ex earum odio ratione consequatur odit minus laborum? Eos? Sit ipsum illum architecto aspernatur perspiciatis error fuga illum, tempora harum earum, a dolores. Animi facilis inventore harum dolore accusamus
             fuga provident molestiae eum! Odit dicta error dolorem sunt reprehenderit. Sit similique iure quae obcaecati harum. Eum saepe fugit magnam dicta aliquam? Sapiente possimus aliquam fugiat officia culpa sint! Beatae voluptates voluptatem excepturi molestiae alias in tenetur beatae placeat architecto. Sit possimus rerum
             fugiat sapiente aspernatur. Necessitatibus tempora animi dicta perspiciatis tempora a velit in! Doloribus perspiciatis doloribus suscipit nam earum. Deleniti veritatis eaque totam assumenda fuga sapiente! Id recusandae. Consectetur necessitatibus eaque velit nobis aliquid? Fugit illum qui suscipit aspernatur alias ipsum
             repudiandae! Quia omnis quisquam dignissimos a mollitia. Suscipit aspernatur eum maiores repellendus ipsum doloribus alias voluptatum consequatur. Consectetur quibusdam veniam quas tenetur necessitatibus repudiandae? Rem optio vel alias neque optio sapiente quidem similique reiciendis tempore. Illum accusamus officia
             cum enim minima eligendi consectetur nemo veritatis nam nisi! Adipisicing nobis perspiciatis dolorum adipisci soluta architecto doloremque voluptatibus omnis debitis quas repellendus. Consequuntur assumenda illum commodi mollitia asperiores? Quis aspernatur consequatur modi veritatis aliquid at? Atque vel iure quos.
             Amet provident voluptatem amet aliquam deserunt sint, elit dolorem ipsa, voluptas? Quos esse facilis neque nihil sequi non? Voluptates rem ab quae dicta culpa dolorum sed atque molestias debitis omnis! Sit sint repellendus deleniti officiis distinctio. Impedit vel quos harum doloribus corporis. Laborum ullam nemo quaerat
             reiciendis recusandae minima dicta molestias rerum. Voluptas et ut omnis est ipsum accusamus harum. Amet exercitationem quasi velit inventore neque doloremque! Consequatur neque dolorem vel impedit sunt voluptate. Amet quo amet magni exercitationem libero recusandae possimus pariatur. Cumque eum blanditiis vel vitae
             distinctio! Tempora! Consectetur sit eligendi neque sunt soluta laudantium natus qui aperiam quisquam consectetur consequatur sit sint a unde et. At voluptas ut officiis esse totam quasi dolorem! Hic deserunt doloribus repudiandae! Lorem quod ab nostrum asperiores aliquam ab id consequatur, expedita? Tempora quaerat
             ex ea temporibus in tempore voluptates cumque. Quidem nam dolor reiciendis qui dolor assumenda ipsam veritatis quasi. Esse! Sit consectetur hic et sunt iste! Accusantium atque elit voluptate asperiores corrupti temporibus mollitia! Placeat soluta odio ad blanditiis nisi. Eius reiciendis id quos dolorum eaque suscipit
             magni delectus maxime. Sit odit provident vel magnam quod. Possimus eligendi non corrupti tenetur culpa accusantium quod quis. Voluptatum quaerat animi dolore maiores molestias voluptate? Necessitatibus illo omnis laborum hic enim minima! Similique. Dolor voluptatum reprehenderit nihil adipisci aperiam voluptatem soluta
             magnam accusamus iste incidunt tempore consequatur illo illo odit. Asperiores nesciunt iusto nemo animi ratione. Sunt odit similique doloribus temporibus reiciendis! Ullam. Dolor dolores veniam animi sequi dolores molestias voluptatem iure velit. Elit dolore quaerat incidunt enim aut distinctio. Ratione molestiae laboriosam
             similique laboriosam eum et nemo expedita. Consequuntur perspiciatis cumque dolorem.</p>
          </ReactBootstrap.Modal.Body>
          <ReactBootstrap.Modal.Footer>
            
          </ReactBootstrap.Modal.Footer>
        </ReactBootstrap.Modal>
      </ReactBootstrap.ButtonToolbar>
    );
  }
};


export default App;