import "./index.css";

const PlantTabs = () => {
  return (
    <div>
      <div className="search-bar container">
        <div className="search-wrapper">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search Plant" />
          <i className="fas fa-leaf"></i>
        </div>
      </div>
      <div className="plant-tabs container">
        <button className="tab active">Plants</button>
        <button className="tab">Pots</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
        necessitatibus enim ut internos accusantium a numquam autem ab rerum
        omnis. Non molestiae ratione et laborum doloribus aut molestiae
        voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
        est voluptatem eius. Et architecto nihil id labore omnis hic iste
        deleniti et porro aspernatur.
      </p>
    </div>
  );
};
export default PlantTabs;
