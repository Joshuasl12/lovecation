import React from "react";
import Fade from "react-reveal/Fade";

import ImageHero from "assets/images/picture@2x.jpg";
import ImageHero_ from "assets/images/frame@2x.jpg";

import Button from "elements/Button";

import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="d-none d-lg-block container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 550 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work, <br />
              Start Vacation With Lover
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with your lover.
              Time to make another memorable moment.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36"
                  height="36"
                  src="/images/icon_travellers.svg"
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36"
                  height="36"
                  src="/images/icon_treasure.svg"
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src="/images/icon_cities.svg"
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="container d-block d-lg-none"
        style={{ marginTop: -20, marginBottom: 40 }}
      >
        <Fade bottom>
          <div className="row align-items-center">
            <div className="col-12  text-center">
              <h1 className=" h3 font-weight-bold line-height-1 mb-3">
                Forget Busy Work, <br />
                Start Vacation With Lover
              </h1>
              <p
                className="mb-3 font-weight-light text-gray-500 "
                style={{ lineHeight: "170%" }}
              >
                We provide what you need to enjoy your holiday with your lover.
                Time to make another memorable moment.
              </p>
              <Button
                className="btn px-5"
                hasShadow
                isPrimary
                onClick={showMostPicked}
              >
                Show Me Now
              </Button>

              <div className="container pb-5">
                <div
                  className="row justify-content-center"
                  style={{ marginTop: 70 }}
                >
                  <div className="col-12 info-panel">
                    <div className="row">
                      <div className="col-lg">
                        <img
                          src="/images/icon_travellers.svg"
                          className="float-left"
                          alt={`${props.data.travelers} Travelers`}
                        />
                        <h6 className="mt-3" style={{ marginLeft: 30 }}>
                          {formatNumber(props.data.travelers)}{" "}
                          <span className="text-gray-500 font-weight-light">
                            Satisfied Travelers Around the World
                          </span>
                        </h6>
                      </div>
                      <div className="col-lg">
                        <img
                          src="/images/icon_treasure.svg"
                          className="float-left"
                          alt={`${props.data.treasures} Treasures`}
                        />
                        <h6 className="mt-3" style={{ marginLeft: 40 }}>
                          {formatNumber(props.data.treasures)}{" "}
                          <span className="text-gray-500 font-weight-light">
                            Amazing and Beauty Treasures
                          </span>
                        </h6>
                      </div>
                      <div className="col-lg">
                        <img
                          src="/images/icon_cities.svg"
                          className="float-left"
                          alt={`${props.data.cities} Cities`}
                        />
                        <h6 className="mt-3" style={{ marginLeft: 40 }}>
                          {formatNumber(props.data.cities)}{" "}
                          <span className="text-gray-500 font-weight-light">
                            Beauty Cities Around the World
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </Fade>
  );
}
