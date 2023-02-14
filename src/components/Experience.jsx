import React from "react";
import Feature from "./Feature";

function Experience() {
  return (
    <div className="flex flex-col w-full">
      {/* titld icon */}
      <img src={require("../img/Path 318.png")} alt=""  />
      {/* heading */}

      <div className="hero">
          <div className="hero-overlay bg-opacity-60">
            <div className="hero-content text-center text-neutral-content">
                <span>
                  An Amazing App Can Change Your Daily Life
                </span>
                <span>
                  <b>Music Experience</b>
                </span>
            </div>
          </div>
      </div>
      {/* features  */}

      <div className="hero min-h-screen bg-base-200">     
          <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <Feature icon="Group 2" title="For Live Music" />
                    </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                              <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                              </div>
                        </div>
                </div>

              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-20">
                  <Feature icon="music icon" title="For Daily Music" />
                </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
              </div>
                
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <Feature icon="Group 4" title="For Artists" />
                </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>

  );
}

export default Experience;
