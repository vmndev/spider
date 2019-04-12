import React, { Fragment } from 'react'
import Header from 'containers/Header';
import { useRouteData } from 'react-static'

import '../style/index.scss'

export default () => {
  const { language } = useRouteData();

  return (
    <Fragment>
      <Header language={language} />

      <content className="content">
        <div className="about content-wrapper">
          <div className="hero">
            <h1>scanning</h1>
            <h2>a s234 234 232 df asdf</h2>
            <iframe id="771d28cf-a92a-45b7-8c59-8bea0060faa5" src={`https://www.vectary.com/embed/viewer/viewer.html?model=771d28cf-a92a-45b7-8c59-8bea0060faa5&env=monkforest`} frameBorder="0" width="100%" height="480"></iframe>
          </div>
        </div>
      </content>
    </Fragment>
  )
}
