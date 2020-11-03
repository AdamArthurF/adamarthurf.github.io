/*
 * Copyright (c) 2020. Adam Arthur Faizal.
 */
import React, {useState} from 'react';
import {
    Carousel,
    CarouselCaption, CarouselControl,
    CarouselIndicators,
    CarouselItem,
    Col,
    Container,
    Row,
} from "reactstrap";

function Testimonials(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const items = [
        {
            id: 1,
            altText: 'Slide 1',
            caption: 'Slide 1',
            src: 'https://picsum.photos/id/113/1150/500'
        },
        {
            id: 2,
            altText: 'Slide 2',
            caption: 'Slide 2',
            src: 'https://picsum.photos/id/137/1150/500'
        },
        {
            id: 3,
            altText: 'Slide 3',
            caption: 'Slide 3',
            src: 'https://picsum.photos/id/147/1150/500'
        }
    ];

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img src={item.src} alt={item.altText}/>
                <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <section className="testimonials" id="testimonials">
            <Container className="themed-container">
                <Row>
                    <Col sm="12">
                        <h2 className="text-center font-weight-bold">Testimonials</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                        >
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Testimonials;
