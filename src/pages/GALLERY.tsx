import React from 'react'

const GALLERY:React.FC = () => {
  const gallery = [
    'https://sun1-21.userapi.com/c635105/v635105931/33664/GyO4FIXT8ug.jpg',
    'https://sun1-18.userapi.com/c635105/v635105931/33637/YR5uUFcg7Fc.jpg',
    'https://sun1-47.userapi.com/c635105/v635105931/33640/PYpBKQ40KGw.jpg',
    'https://sun1-25.userapi.com/c635105/v635105931/3362e/FmH8ei4Ab5g.jpg',
    'https://sun1-30.userapi.com/c635105/v635105931/3361c/vDr5DZmRBy8.jpg',
    'https://sun1-27.userapi.com/c635105/v635105931/33625/tF7bui85Aq4.jpg',
  ]

  return (
    <section className="page_gallery">
      <div className="container">
        <div className="wrapper">
          <h1 className="col col-12 section__title">Галерея</h1>
          {gallery.map((item, index) => (
            <div className="col col-3 gallery__item" key={index}>
              <img src={item} alt=""/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GALLERY