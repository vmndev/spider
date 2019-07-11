import React, { Fragment, Component } from 'react'
import Header from 'containers/Header';
import { useRouteData } from 'react-static'

import '../style/index.scss'

class Index extends Component{
  render(){
    return (
      <Fragment>
        <Header language={this.props.language} />
  
        <content className="content">
          <div className="home content-wrapper">
            <div className="hero">
              <div className="hero-content">
                <h1>World of 3D content</h1>
                <h2>a sdf asdf asdf asdf asdf</h2>
              </div>
              <div class="sketchfab-embed-wrapper">
                <iframe width="640" height="480" src="https://sketchfab.com/models/8a61813962f94a8084db15598b655208/embed" frameBorder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
              </div>
              <iframe id="771d28cf-a92a-45b7-8c59-8bea0060faa5" src={`https://www.vectary.com/embed/viewer/viewer.html?model=771d28cf-a92a-45b7-8c59-8bea0060faa5&env=monkforest`} frameBorder="0" width="100%" height="480"></iframe>
            </div>
          </div>
        </content>
      </Fragment>
    )
  }
}
export default Index;