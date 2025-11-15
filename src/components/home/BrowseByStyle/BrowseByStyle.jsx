import "./BrowseByStyle.scss";

const items = [
  { id: 1, title: "Casual", image: "/images/categories/casual.png" },
  { id: 2, title: "Formal", image: "/images/categories/formal.png" },
  { id: 3, title: "Party", image: "/images/categories/party.png" },
  { id: 4, title: "Gym", image: "/images/categories/gym.png" },
];

export default function BrowseByStyle() {
  return (
    <section className="browse-style">
      <div className="container">
        <div className="browse-style__wrap">
          <h2 className="browse-style__title">BROWSE BY DRESS STYLE</h2>

          <div className="browse-style__grid">
            {/* order kept natural in HTML */}
            <div className="browse-style__card card-1">
              <img src={items[0].image} alt={items[0].title} />
              <h3>{items[0].title}</h3>
            </div>

            <div className="browse-style__card card-2">
              <img src={items[1].image} alt={items[1].title} />
              <h3>{items[1].title}</h3>
            </div>

            <div className="browse-style__card card-3">
              <img src={items[2].image} alt={items[2].title} />
              <h3>{items[2].title}</h3>
            </div>

            <div className="browse-style__card card-4">
              <img src={items[3].image} alt={items[3].title} />
              <h3>{items[3].title}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
