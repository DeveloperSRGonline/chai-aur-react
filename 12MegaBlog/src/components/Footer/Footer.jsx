import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../index'
import './Footer.scss'

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__wrapper">
          <div className="footer__column footer__column--logo">
            <div className="footer__logo-wrapper">
              <div className="footer__logo">
                <Logo width="100px" />
              </div>
              <div>
                <p className="footer__copyright">
                  &copy; Copyright 2023. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="footer__column footer__column--links">
            <div className="footer__links">
              <h3 className="footer__heading">
                Company
              </h3>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <Link
                    className="footer__link"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    className="footer__link"
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    className="footer__link"
                    to="/"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    className="footer__link"
                    to="/"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__column footer__column--links">
            <div className="footer__links">
              <h3 className="footer__heading">
                Support
              </h3>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <Link
                    className="footer__link"
                    to="/"
                  >
                    Account
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    className="footer__link"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    className="footer__link"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    className="footer__link"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__column footer__column--legals">
            <div className="footer__links">
              <h3 className="footer__heading">
                Legals
              </h3>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <Link
                    className="footer__link"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    className="footer__link"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link
                    className="footer__link"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer