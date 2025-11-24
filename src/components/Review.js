import React, { useState } from 'react';

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
    },
  ];

  // index in reviews array (0-based)
  const [index, setIndex] = useState(0);

  const current = reviews[index];

  // go to next review (wrap-around)
  function handleNext() {
    setIndex((prev) => (prev + 1) % reviews.length);
  }

  // go to previous review (wrap-around)
  function handlePrev() {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }

  // surprise me -> pick a random index different from current
  function handleRandom() {
    if (reviews.length <= 1) return;
    let rand;
    do {
      rand = Math.floor(Math.random() * reviews.length);
    } while (rand === index);
    setIndex(rand);
  }

  return (
    <article className="review" aria-live="polite">
      <img src={current.image} alt={current.name} className="person-img" />

      {/* author must have id formatted as author-<id> */}
      <h4 className="author" id={`author-${current.id}`}>
        {current.name}
      </h4>

      <p className="job">{current.job}</p>

      <p className="info">{current.text}</p>

      <div style={{ marginTop: 12 }}>
        <button className="prev-btn" onClick={handlePrev} aria-label="Previous review">
          Prev
        </button>

        <button className="next-btn" onClick={handleNext} aria-label="Next review" style={{ marginLeft: 8 }}>
          Next
        </button>
      </div>

      <div style={{ marginTop: 10 }}>
        <button className="random-btn" onClick={handleRandom}>
          surprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
