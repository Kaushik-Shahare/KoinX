import React, { useRef } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

function Sentiment() {
  const scrollContainer = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += scrollOffset;
    }
  };

  const buyPercentage = 76; // replace with your actual value
  const holdPercentage = 8; // replace with your actual value
  const sellPercentage = 16; // replace with your actual value

  return (
    <div id="sentiments" className="Sentiment Card cardLeft">
      <h1>Sentiment</h1>
      <div>
        <p>Key Events</p>
        <div>
          <Carousel>
            <CarouselItem
              style={{
                backgroundColor: "	#cfecf7",
                borderRadius: "8%",
                padding: "50px",
              }}
            >
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </h1>
              <p>
                Lobortis scelerisque fermentum dui faucibus in ornare quam
                viverra. Egestas erat imperdiet sed euismod nisi porta lorem
                mollis aliquam. Viverra ipsum nunc aliquet bibendum enim
                facilisis gravida neque convallis. At lectus urna duis convallis
                convallis tellus id interdum. Sit amet consectetur adipiscing
                elit pellentesque habitant morbi tristique senectus. Eget mauris
                pharetra et ultrices neque ornare aenean euismod elementum.
                Donec massa sapien faucibus et molestie ac feugiat. Scelerisque
                in dictum non consectetur a erat. A pellentesque sit amet
                porttitor eget dolor morbi non. Sed blandit libero volutpat sed
                elit pellentesque habitant morbi tristique senectus. Eget mauris
                cras ornare arcu dui vivamus. Purus sit amet volutpat consequat
                mauris nunc. Bibendum arcu vitae elementum curabitur vitae nunc
                elit pellentesque habitant morbi tristique senectus. Eget mauris
                sed. Eu turpis egestas pretium aenean pharetra magna ac.
              </p>
            </CarouselItem>
            <CarouselItem
              style={{
                backgroundColor: "#9cffee",
                borderRadius: "8%",
                padding: "50px",
              }}
            >
              <h1>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ipsum dolor sit amet consectetur adipiscing. Porttitor rhoncus
                dolor purus non enim praesent elementum facilisis leo. Egestas
                congue quisque egestas diam in arcu. Imperdiet nulla malesuada
                pellentesque elit eget gravida. Mus mauris vitae ultricies leo.
                Turpis cursus in hac habitasse platea dictumst quisque sagittis.
                Morbi tempus iaculis urna id volutpat lacus. Nibh tortor id
                aliquet lectus proin nibh nisl condimentum id. Risus viverra
                adipiscing at in tellus integer feugiat scelerisque. Sit amet
                cursus sit amet. Pellentesque habitant morbi tristique senectus
                et netus et. Phasellus egestas tellus rutrum tellus pellentesque
                eu tincidunt tortor aliquam. Risus pretium quam vulputate
                dignissim suspendisse in est. In aliquam sem fringilla ut morbi
                tincidunt augue interdum. Est velit egestas dui id ornare arcu
                odio ut.
              </p>
            </CarouselItem>
            <CarouselItem
              style={{
                backgroundColor: "#ff9c9c",
                borderRadius: "8%",
                padding: "50px",
              }}
            >
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </h1>
              <p>
                Lobortis scelerisque fermentum dui faucibus in ornare quam
                viverra. Egestas erat imperdiet sed euismod nisi porta lorem
                mollis aliquam. Viverra ipsum nunc aliquet bibendum enim
                facilisis gravida neque convallis. At lectus urna duis convallis
                convallis tellus id interdum. Sit amet consectetur adipiscing
                elit pellentesque habitant morbi tristique senectus. Eget mauris
                pharetra et ultrices neque ornare aenean euismod elementum.
                Donec massa sapien faucibus et molestie ac feugiat. Scelerisque
                in dictum non consectetur a erat. A pellentesque sit amet
                porttitor eget dolor morbi non. Sed blandit libero volutpat sed
                elit pellentesque habitant morbi tristique senectus. Eget mauris
                cras ornare arcu dui vivamus. Purus sit amet volutpat consequat
                mauris nunc. Bibendum arcu vitae elementum curabitur vitae nunc
                elit pellentesque habitant morbi tristique senectus. Eget mauris
                sed. Eu turpis egestas pretium aenean pharetra magna ac.
              </p>
            </CarouselItem>
          </Carousel>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h1>Analyst Estimates</h1>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          <div
            style={{
              backgroundColor: "#e6ffe6",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "120px",
              // flexGrow: 1,
            }}
          >
            <p style={{ fontSize: "30px" }}>72%</p>
          </div>
          <div
            style={{ marginLeft: "50px", width: "50%" }}
            className="d-flex flex-column"
          >
            <div className="d-flex justify-content-left">
              <div style={{ width: "50px" }}>
                <p>Buy</p>
              </div>
              <div
                style={{
                  height: "5px",
                  width: `${buyPercentage}%`,
                  background: "lightgreen",
                  margin: "10px 10px",
                }}
              ></div>
              <p>{buyPercentage}%</p>
            </div>
            <div className="d-flex justify-content-left">
              <div style={{ width: "50px" }}>
                <p>Hold</p>
              </div>
              <div
                style={{
                  height: "5px",
                  width: `${holdPercentage}%`,
                  background: "grey",
                  margin: "10px 10px",
                }}
              ></div>
              <p>{holdPercentage}%</p>
            </div>
            <div className="d-flex justify-content-left">
              <div style={{ width: "50px" }}>
                <p>Sell</p>
              </div>
              <div
                style={{
                  height: "5px",
                  width: `${sellPercentage}%`,
                  background: "red",
                  margin: "10px 10px",
                }}
              ></div>
              <p>{sellPercentage}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sentiment;
