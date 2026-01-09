import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faHeart,
  faCircle,
  faCompass,
} from '@fortawesome/free-regular-svg-icons';
import './AramaCubugu.css';

const AramaCubugu = (props) => {
  const { aramaKriteri, aramaHandler } = props;
  /* ADIM 3: gönderdiğin propları buradan alabilirsin */

  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input type="text" placeholder="Arama" onChange={aramaHandler} />{' '}
        {/* ADIM 4: input alanındak, value ve hangi event'i dinleyeceksen ona göre gelen propları burada kullanabilirsin. */}
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default AramaCubugu;
