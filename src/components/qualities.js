import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Row, Col
} from 'reactstrap'
import respons from './images/qualities/respons.jpg'
import work from './images/qualities/work.jpg'
import group from './images/qualities/group.jpg'
import attention from './images/qualities/attention.jpg'

import './styles/qualities.css'

const items = [
  {
    src: respons,
    altText: 'respons'
  },
  {
    src: work,
    altText: 'work'
  },
  {
    src: group,
    altText: 'group'
  },
  {
    src: attention,
    altText: 'attention'
  }
];
  
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <div className='qualities'>
        <h2>Личные качества</h2>
        <Row>
          <Col className='col-lg-5 col-md-12 col-sm-12'>
            <div className='desc2'>
                <h3 className='mb-0'>"Трудолюбие — душа всякого дела и залог благосостояния."</h3>
                <p><i>Чарльз Диккенс</i></p>
            </div>
          </Col>
          <Col className='col-lg-7 col-md-12 col-sm-12'>
            <Carousel 
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
              <CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
            </Carousel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Example;