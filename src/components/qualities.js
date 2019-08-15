import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row, Col, Container
} from 'reactstrap'
import respons from './images/qualities/respons.png'
import work from './images/qualities/work.png'
import group from './images/qualities/group.png'
import attention from './images/qualities/attention.png'

import './styles/qualities.css'

const items = [
    {
        src: respons,
        altText: 'respons',
        caption: 'Ответственно подхожу к работе и задачам.'
    },
    {
        src: work,
        altText: 'work',
        caption: 'Люблю интересную и сложную работу.'
        
    },
    {
        src: group,
        altText: 'group',
        caption: 'Умею слушать и учитывать разные точки зрения.'
    },
    {
        src: attention,
        altText: 'attention',
        caption: 'Всегда обращаю внимание на детали.'
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
  
      const slides = items.map((item) => {
        return (
          <CarouselItem carousel-caption d-none d-block w='100' h='50'
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} />
          </CarouselItem>
        );
      });
  
      return (
        <div className='qualities' href='/qualities/'>
            <Row>
                <Col col-md='12'>
                    <Carousel 
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                </Col>
            </Row>
        </div>
      );
    }
  }
  
  
  export default Example;