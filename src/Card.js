import React, { Component, PropTypes } from 'react';
import './Card.scss';
import { se, de } from './setStateWithTimeline';
import c from 'classnames';
import { Motion } from 'react-motion';
import { initialState,
  mouseOverState,
  mouseLeaveState,
  onRenderMotion } from './CardMotion';

export default class Card extends Component {
  static propTypes = {
    hide: PropTypes.bool,
    reverseDirection: PropTypes.bool,
    cardClassName: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.initialState = this.state = initialState();
  }

  onMouseOver = () => {
    this.setState(mouseOverState());
  };

  onMouseLeave = () => {
    this.setState(mouseLeaveState());
  }

  render() {
    const {
      cardClassName
    } = this.props;

    return (
      <Motion style={se(onRenderMotion(this.props, this.state))}>
        {(rawStyle) => (({card, year, title, smallTitle, line, tags, background}) =>
          <div className={'card__frame'} style={{
            height: 200 + card.y
          }}>
            <div
              onMouseOver={this.onMouseOver}
              onMouseLeave={this.onMouseLeave}
              className={c('card')}
              style={{
                transform: `skew(${card.skewX}deg, ${card.skewY}deg) translate(${card.x}px, ${card.y}px)`,
                opacity: card.opacity
              }}>
              <div
                style={{
                  transform: `scale(${background.scale}) rotateZ(${background.rotateZ}deg)`,
                  boxShadow: `rgb(204, 204, 204) 0px ${background.shadow.y}px ${background.shadow.blur}px 0px`
                }}
                className={c('background', cardClassName)}></div>
              <div className="year" style={{
                transform: `translate(${year.x}px, ${year.y}px) rotateZ(${year.rotateZ}deg)`,
                left: year.left
              }}>
                <h3>2017</h3>
              </div>
              <div className="content">
                <h1 className="title" style={{
                  transform: `translateX(${title.x}px)`
                }}>Son Chu</h1>
                <h3 className="smallTitle" style={{
                  transform: `translateX(${smallTitle.x}px)`
                }}>Developer</h3>
                <div className="line" style={{
                  transform: `translate(${line.x}px, ${line.y}px) rotateZ(${line.rotateZ}deg)`
                }}></div>
                <div className="tags" style={{
                  transform: `translateX(${tags.x}px)`
                }}>
                  <p>#coolthings #animation</p>
                </div>
              </div>
            </div>
          </div>
        )(de(rawStyle))}
      </Motion>
    );
  }
}
