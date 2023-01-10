import React from 'react';
import { ReactComponent as AtIcon } from '../assets/svg/at.svg';
import { ReactComponent as PhoneIcon } from '../assets/svg/phone.svg';
import { ReactComponent as FacebookIcon } from '../assets/svg/facebook.svg';
import { ReactComponent as InstagramIcon } from '../assets/svg/instagram.svg';

function Contact() {
  return (
    <div className="contact__container">
      <div className="contact__item">
        <AtIcon className="contact__item-icon"></AtIcon>
        <span className="contact__item-span" id="contact-page-email">
          <a href="mailto: puncochacky.com@seznam.cz">
            puncochacky.com@seznam.cz
          </a>
        </span>
      </div>
      <div className="contact__item">
        <PhoneIcon className="contact__item-icon"></PhoneIcon>
        <span className="contact__item-span">
          <a href="tel:+420-792-640-893">+420 792 640 893</a>
        </span>
      </div>
      <div className="contact__item">
        <FacebookIcon className="contact__item-icon"></FacebookIcon>
        <span className="contact__item-span">
          <a
            href="https://m.facebook.com/profile.php?id=100068532589889"
            target="_blank"
            rel="noreferrer"
          >
            Punčocháčky.com
          </a>
        </span>
      </div>
      <div className="contact__item">
        <InstagramIcon className="contact__item-icon"></InstagramIcon>
        <span className="contact__item-span">
          <a
            href="https://www.instagram.com/puncochacky/"
            target="_blank"
            rel="noreferrer"
          >
            @puncochacky.com
          </a>
        </span>
      </div>
    </div>
  );
}

export default Contact;
