import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousels.css"

export const Carousels = () => (
  <Carousel autoPlay>
    <div>
      <img className="pic" alt="" src="https://upload.wikimedia.org/wikipedia/en/9/91/WoW_Box_Art1.jpg" />
      <p className="title">Legend 1</p>
    </div>
    <div>
      <img className="pic" alt="" src="https://upload.wikimedia.org/wikipedia/en/d/db/Modern_Warfare_2_cover.PNG" />
      <p className="title">Legend 2</p>
    </div>
    <div>
      <img className="pic" alt="" src="https://upload.wikimedia.org/wikipedia/en/9/9d/Cover_Art_of_Doom_Eternal.png" />
      <p className="title">Legend 3</p>
    </div>
    <div>
      <img className="pic" alt="" src="https://upload.wikimedia.org/wikipedia/en/8/83/Fallout_3_cover_art.PNG" />
      <p className="title" className="pic">Legend 4</p>
    </div>
    <div>
      <img className="pic" alt="" src="https://upload.wikimedia.org/wikipedia/en/f/f1/Fableiii.jpg" />
      <p className="title">Legend 5</p>
    </div>
    <div>
      <img className="pic" alt="" src="https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_cover_art.jpg" />
      <p className="title">Legend 6</p>
    </div>
    <div>
      <img className="pic" alt="" src="https://upload.wikimedia.org/wikipedia/en/1/10/Surviving_Mars_cover_art.png" />
      <p className="title">Legend 7</p>
    </div>
    <div>
      <img className="pic" alt="" src="https://upload.wikimedia.org/wikipedia/en/5/52/Cultist_simulator_cover.png" />
      <p className="title">Legend 8</p>
    </div>
    <div>
      <img className="pic" alt="" src="https://upload.wikimedia.org/wikipedia/en/f/ff/Crusader_Kings_II_box_art.jpg" />
      <p className="title">Legend 9</p>
    </div>
    <div>
      <img className="pic" alt="" src="https://www.darkestdungeon.com/wp-content/uploads/2017/09/CC_deets.jpg" />
      <p className="title">Legend 10</p>
    </div>
    <div>
      <img className="pic" alt="" src="https://upload.wikimedia.org/wikipedia/en/a/a3/Frostpunk_cover_art.jpg" />
      <p className="title">Legend 11</p>
    </div>
    <div>
      <img className="pic" alt="" src="https://lofigames.com/wp-content/uploads/Kenshi-logo.jpg" />
      <p className="title">Legend 12</p>
    </div>
    <div>
      <img className="pic" alt="" src="https://upload.wikimedia.org/wikipedia/en/c/c1/Risk_of_Rain_2.jpg" />
      <p className="title">Legend 13</p>
    </div>
    <div>
      <img className="pic" alt="" src="https://upload.wikimedia.org/wikipedia/en/e/e3/Shogun_2_Total_War_box_art.jpg" />
      <p className="title">Legend 14</p>
    </div>
    <div>
      <img className="pic" alt="" src="https://upload.wikimedia.org/wikipedia/en/b/b3/Deep_rock_galactic_cover_art.jpg" />
      <p className="title">Legend 15</p>
    </div>
  </Carousel>
);
