import React from "react";
import Navbar from "../components/Navbar";

const Articles = ({ id }) => {
  let articleComponent;

  switch (id) {
    case 1:
      articleComponent = <Article1 />;
      break;
    case 2:
      articleComponent = <Article2 />;
      break;
    case 3:
      articleComponent = <Article3 />;
      break;
    default:
      // Handle the case when id is not 1, 2, or 3
      articleComponent = <div>Article not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="page-content">{articleComponent}</div>
    </div>
  );
};

const Article1 = () => {
  return (
    <div className="article">
      <h1 className="purple">What is fast fashion and why is it so bad?</h1>
      <br/>
      <div className="info">
        <span>by Dariana</span>
        <span>Saturday, Feb 3rd, 2024</span>
      </div>
      <br/>
      <div>
        <h3 className="green">What is Fast Fashion? </h3>
        <br/>
        <p>
          Fast fashion is essentially affordable, trendy clothing that quickly
          transforms runway or celebrity-inspired ideas into garments to
          promptly meet consumer demands. The goal is to introduce the latest
          styles to the market at an accelerated pace, allowing shoppers to grab
          them while they're still highly popular. Unfortunately, this approach
          often leads to the disposal of these items after only a few wears due
          to their poor quality, reinforcing the notion that repeating outfits
          is a fashion mistake. This process contributes significantly to the
          harmful cycle of excessive production and consumption, making the
          fashion industry one of the leading contributors to environmental
          pollution.
        </p>
      </div>
      <br/>
      <div>
        <h3 className="blue">Why is it so bad?</h3>
        <br/>
        <p>
          Three of the main reasons are the polluting of our planet, harming of
          animals, and the exploitation of workers. To cut costs and speed up
          production, fast fashion often sacrifices environmental
          considerations. The industry's negative impact is evident in its use
          of cheap and toxic textile dyes, ranking it among the major
          contributors to global water pollution, alongside agriculture.
          Greenpeace has consistently advocated for the removal of harmful
          chemicals from fashion supply chains through its detoxing campaigns.
          Additionally, the reliance on cheap textiles exacerbates fast
          fashion's environmental footprint. Polyester, a widely used fabric,
          originates from fossil fuels, contributing to global warming.
          Moreover, it can release microfibers that further add to the growing
          plastic levels in oceans. Even "natural" fabrics, like conventional
          cotton, pose challenges due to their intensive water and pesticide
          usage, leading to drought risks and resource competition in countries
          such as India and China. Not only that but garment workers work in
          unsafe conditions, receiving low pay and lacking basic human rights.
          Down the supply chain, farmers may endure harmful chemicals and harsh
          practices, leading to severe impacts on their physical and mental
          well-being. Fast fashion also harms animals. The toxic dyes and
          microfibers released in waterways impact wildlife through the food
          chain. The use of animal-derived products like leather and fur poses
          risks to animal welfare, with instances of real fur, including cat and
          dog fur, being falsely labeled as faux fur to unsuspecting shoppers
          due to the affordability of poorly produced real fur from fur farms.
        </p>
      </div>
    </div>
  );
};

const Article2 = () => {
  return (
    <div className="article">
      <h1 className="purple">Why is supporting sustainable clothing brands valuable?</h1>
      <br/>
      <div className="info">
        <span>by Dariana</span>
        <span>Saturday, Feb 3rd, 2024</span>
      </div>
      <br/>

      <div>
        <p>
          Supporting ethical and sustainable brands is super crucial! By doing
          so, you contribute to reducing pollution, conserving resources, and
          promoting fair labor practices. Additionally, ethical and sustainable
          fashion brands often prioritize the well-being of workers and
          artisans, ensuring fair wages and safe working conditions. It also
          shows that you are taking social responsibility over your actions and
          allows you to ensure your clothes are of good quality and will last
          you a long time.
        </p>
        <br/>
        <br/>
        <p>
          How can you make sure you are supporting ethical brands?
        </p>
        <ol>
          <li>Educate yourself</li>
          <li>Use EcoChic to find sustainable brands in your area</li>
          <li>Choose Quality over quantity</li>
          <li>Buy second hand by going through thrift stores</li>
          <li>Rent your clothes by using services such as Rent the Runway</li>
          <li>Read labels and certifications</li>
          <li>Reduce, reuse, recycle</li>
          <li>Spread the word by educating your friends and family</li>
        </ol>
      </div>
    </div>
  );
};

const Article3 = () => {
  return (
    <div className="article">
      <h1 className="purple">How to spot a Fast Fashion Brand</h1>
      <div className="info">
        <span>by Dariana</span>
        <span>Saturday, Feb 3rd, 2024</span>
      </div>
      <br/>
      <div>
        <p>There are many ways to spot a Fast Fashion brands but below you will be able to find a few of the most common reasons</p>
        <ol>
          <li>When visiting the store, you will be able to find all the latest trends you see on social media</li>
          <li>The store does offshore manufacturing. Manufacturing across sea indicates cheaper labour often with the use of workers on low wages and in unsafe working conditions.</li>
          <li>Low stock on a specific item. Often when the items go viral they tend to sold out really quickly. If you notice this item doesn’t come back in stock, the store is most likely a fast fashion brand.</li>
          <li>Low prices. Affordable prices can often be seen as  a red flag.</li>
          <li>Constant sales and discounts can also be a big indicator!</li>
        </ol>
        <br/>
        <p>Some of the most common fast fashion brands are </p>
        <ol>
          <li>Zara</li>
          <li>H&M</li>
          <li>Shein</li>
          <li>GAP</li>
          <li>UNIQLO</li>
          <li>Forever 21</li>
          <li>Primark</li>
          <li>Fashion Nova</li>
          <li>ASOS</li>
        </ol>
        <br/>
        <p>So for your next shopping spree, be aware of these brands!</p>
      </div>
    </div>
  );
};

export default Articles;
