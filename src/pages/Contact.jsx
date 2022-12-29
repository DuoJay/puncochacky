import React from 'react';
import { ReactComponent as AtIcon } from '../assets/svg/at.svg';
import { ReactComponent as PhoneIcon } from '../assets/svg/phone.svg';

function Contact() {
  return (
    <div className="contact__container">
      <h2 className="contact__heading h2">
        V případě zájmu nás prosím kontaktujte na
      </h2>
      <div className="contact__item">
        <AtIcon className="contact__item-icon"></AtIcon>
        <span className="contact__item-span">puncochacky@email.com</span>
      </div>
      <div className="contact__item">
        <PhoneIcon className="contact__item-icon"></PhoneIcon>
        <span className="contact__item-span">
          <a href="tel:+420-123-456-789">+420 123 465 789</a>
        </span>
      </div>
    </div>
  );
}

export default Contact;
