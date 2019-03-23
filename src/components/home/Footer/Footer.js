import './Footer.css';

import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { scroller } from 'react-scroll';

class ChapterInfo extends React.Component {
  render() {
    return (
      <Col xs={{ span: 8, offset: 2 }} sm={{ span: 6, offset: 0 }} md={4} className="widget">
        <div className="widget-header">Want to Learn More?</div>
        <br />
        <p>
          Outside of the Epsilon Delta chapter at UCSD, Theta Tau is the oldest and largest professional engineering
          fraternity in the United States, with chapters everywhere from coast to coast!
        </p>
        <p>
          For more information, visit Theta Tau's national site:
          <a className="footer-links" href="http://thetatau.org/">
            {' '}
            thetatau.org
          </a>
        </p>
      </Col>
    );
  }
}

class ContactInfo extends React.Component {
  render() {
    return (
      <Col xs={{ span: 8, offset: 2 }} sm={{ span: 6, offset: 0 }} md={4} className="widget">
        <div className="widget-header">Contact Us</div>
        <br />
        {/* <div>
          For any questions or queries, you can find our FAQS and contact details
          <p className="footer-links footer-contact" onClick={() => scroller.scrollTo('faq', { smooth: true })}>
            {' '}
            here
          </p>
        </div> */}
        <p>And you can find our social media links here:</p>
        <div className="media-icons">
          <a href="https://www.facebook.com/thetatau.ucsd/" target="_blank" rel="noopener noreferrer">
            <i className="icon-facebook" />
          </a>
          <a href="https://instagram.com/thetatau_ucsd/" target="_blank" rel="noopener noreferrer">
            <i className="icon-instagram" />
          </a>
        </div>
      </Col>
    );
  }
}

class WebsiteCredits extends React.Component {
  render() {
    return (
      <Col xs={{ span: 8, offset: 2 }} sm={{ span: 6, offset: 3 }} md={{ span: 4, offset: 0 }} className="widget">
        <div className="widget-header">Website Credits</div>
        <br />
        <ul>
          <li>
            <a className="footer-links" href="https://github.com/bchann/" target="_blank" rel="noopener noreferrer">
              Brian Chan
            </a>
          </li>
          <li>
            <a className="footer-links" href="https://github.com/hillary/" target="_blank" rel="noopener noreferrer">
              Hillary Fan
            </a>
          </li>
          <li>
            <a className="footer-links" href="https://github.com/3605031/" target="_blank" rel="noopener noreferrer">
              Blake Huynh
            </a>
          </li>
          <li>
            <a className="footer-links" href="https://github.com/kaiserpk/" target="_blank" rel="noopener noreferrer">
              Kaiser Kim
            </a>
          </li>
          <li>
            <a
              className="footer-links"
              href="https://github.com/jeffreyzlee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jeffrey Lee
            </a>
          </li>
          <li>
            <a className="footer-links" href="https://joshchao.herokuapp.com" target="_blank" rel="noopener noreferrer">
              Joshua Chao
            </a>
          </li>
          <li>
            <a className="footer-links" href="http://clarkphan.com/" target="_blank" rel="noopener noreferrer">
              Clark Phan
            </a>
          </li>
        </ul>
      </Col>
    );
  }
}

class Footer extends Component {
  scrollToComp(name) {
    scroller.scrollTo(name, {
      offset: 0,
      smooth: true
    });
  }

  render() {
    return (
      <div className="footer">
        <Container className="footer-padding">
          <Row className="show-grid">
            <ChapterInfo />
            <ContactInfo />
            <WebsiteCredits />
          </Row>
        </Container>
      </div>
    );
  }
}

export { Footer };
