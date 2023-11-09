import "./App.scss";
import cards from "./data/run/cards.json";
import Location from "./svg/location2.icon.svg";

function App() {
  return (
    <div className="wrap">
      {cards.cards.list.map((item) => (
        <article className="card" key={item.id}>
          <figure className="card__figure">
            <a href="#" className="card__thumb-link">
              <img
                className="card__thumb"
                srcSet={`/static/img/article-img/${item.imgName}-1x.jpg, 
                         /static/img/article-img/${item.imgName}-2x.jpg 2x, 
                         /static/img/article-img/${item.imgName}-3x.jpg 3x, 
                         /static/img/article-img/${item.imgName}-3x.jpg 4x`}
                src={`/static/img/article-img/${item.imgName}-2x.jpg`}
                alt={item.title}
                title={item.title}
              />
            </a>
          </figure>
          <div className="card__content">
            <div className="card__content-top">
              <span className="title-description">{item.supTitle}</span>
              <h2 className="post-title">
                <a href="#" className="post-title__link">
                  <span className="post-title__link-txt">{item.title}</span>
                </a>
                <span className="price">$ {item.price}</span>
              </h2>
              {item?.tags?.length && (
                <div className="tag-list">
                  {item?.tags?.map((item) => (
                    <a href={item.link} className="tag-link" key={item.id}>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="card__content-bottom">
              <img src={Location} alt="" width="14" />
              <div className="location">{item.location}</div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default App;
