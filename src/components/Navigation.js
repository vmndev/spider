import React from 'react';
import { Link, navigate } from 'components/Router';
import translations from 'content/translations';

const Navigation = (props) => {
    const { closeMenu } = props;
    const language = props.language || 'en';
    const url_lang = props.language === 'he' ? props.language : '';

    const changeLanguage = (lang) => {
      if(lang === language) return;
      if(lang === 'he' ){
        navigate(`/${lang}${window.location.pathname.replace('/en', '') || ''}`);
      }
      if(lang === 'en'){
        navigate(`${window.location.pathname.replace('/he', '/en') || ''}`);
      }
    }

    return(
        <ul className={`navigation-links`}>
          {/* <Link onClick={closeMenu} to={`${url_lang}/`}><li>Home</li></Link> */}
          <Link onClick={closeMenu} to={`${url_lang}/scanning`}><li>{translations.navigation.scanning[language]}</li></Link>
          <Link onClick={closeMenu} to={`${url_lang}/web_content`}><li>{translations.navigation.web_content[language]}</li></Link>
          <Link onClick={closeMenu} to={`${url_lang}/services`}><li>{translations.navigation.services[language]}</li></Link>
          <Link onClick={closeMenu} to={`${url_lang}/gallery`}><li>{translations.navigation.gallery[language]}</li></Link>
          <Link onClick={closeMenu} to={`${url_lang}/about`}><li>{translations.navigation.about[language]}</li></Link>

          <li className="language-nemu">
            <div className="current-language">{ language === 'he' ? 'עברית' : 'English' }</div>
            <div className="menu">
              { language === 'he' ? <div className="menu-item" onClick={() => {changeLanguage('en')}}>English</div> :
              <div className="menu-item" onClick={() => {changeLanguage('he')}}>עברית</div> }
            </div>
          </li>
          <li className="language-nemu mobile-menu">
            <div className="menu">
              <div className={`menu-item ${language !== 'he' && 'current'}`} onClick={() => {changeLanguage('en')}}>English</div>
              <div className={`menu-item ${language === 'he' && 'current'}`} onClick={() => {changeLanguage('he')}}>עברית</div>
            </div>
          </li>
          {/* <Link onClick={closeMenu} to="/dynamic"><li>Dynamic</li></Link> */}
        </ul>
    )
}

export default Navigation;