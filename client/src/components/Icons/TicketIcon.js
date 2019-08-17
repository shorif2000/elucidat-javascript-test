import React, { Component } from "react";
import PropTypes from "prop-types";

class TicketIcon extends Component {
  render() {
    const { width, seatNumber, price, available } = this.props;
    return (
      <svg
        version="1.1"
        x="0px"
        y="0px"
        width={width + "px"}
        viewBox="0 0 512 512"
        style={{ enableBackground: "new 0 150 512 352",marginTop: '-152px' }}
      >
        <g>
          <g>
            <rect x="408.191" y="187.968" width="15.77" height="16.008" />
          </g>
        </g>
        <g>
          <g>
            <rect x="408.191" y="211.98" width="15.77" height="16.008" />
          </g>
        </g>
        <g>
          <g>
            <rect x="408.191" y="235.993" width="15.77" height="16.008" />
          </g>
        </g>
        <g>
          <g>
            <rect x="408.191" y="260.005" width="15.77" height="16.008" />
          </g>
        </g>
        <g>
          <g>
            <rect x="408.191" y="284.007" width="15.77" height="16.008" />
          </g>
        </g>
        <g>
          <g>
            <rect x="408.191" y="308.02" width="15.77" height="16.008" />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M0,156.072v199.856h512V156.072H0z M496.23,340.157h-72.271v-8.123h-15.77v8.123H15.77V171.842h392.419v8.123h15.77
                        v-8.123h72.271V340.157z"
            />
          </g>
        </g>
        <g>
          <g>
            <rect x="39.899" y="188.083" width="176.078" height="15.77" />
            <text
              x="39.899"
              y="200.083"
              fontFamily="Verdana"
              fontSize="10"
              fill="white"
            >
              Seat: {seatNumber}
            </text>
          </g>
        </g>
        <g>
          <g>
            <rect x="39.899" y="220.096" width="176.078" height="15.77" />
            <text
              x="39.899"
              y="232.096"
              fontFamily="Verdana"
              fontSize="10"
              fill="white"
            >
              {available ? "Available" : ""}
            </text>
          </g>
        </g>
        <g>
          <g>
            <rect x="39.899" y="252.12" width="80.038" height="15.77" />
            <text
              x="39.899"
              y="264.12"
              fontFamily="Verdana"
              fontSize="10"
              fill="white"
            >
              Price: {price}
            </text>
          </g>
        </g>
        <g>
          <g>
            <rect x="39.899" y="300.135" width="16.009" height="15.77" />
          </g>
        </g>
        <g>
          <g>
            <rect x="71.911" y="300.135" width="16.008" height="15.77" />
          </g>
        </g>
        <g>
          <g>
            <rect x="103.924" y="300.135" width="16.009" height="15.77" />
          </g>
        </g>
        <g>
          <g>
            <rect x="135.948" y="300.135" width="16.008" height="15.77" />
          </g>
        </g>
        <g>
          <g>
            <rect x="167.961" y="300.135" width="16.009" height="15.77" />
          </g>
        </g>
        <g>
          <g>
            <rect x="199.974" y="300.135" width="16.008" height="15.77" />
          </g>
        </g>
        <g>
          <g>
            <rect x="440.089" y="188.083" width="40.014" height="15.77" />
          </g>
        </g>
        <g>
          <g>
            <rect x="440.089" y="220.096" width="40.014" height="15.77" />
          </g>
        </g>
        <g>
          <g>
            <rect x="440.089" y="252.12" width="24.011" height="15.77" />
          </g>
        </g>
        <g>
          <g>
            <rect x="135.948" y="252.12" width="32.014" height="15.77" />
          </g>
        </g>
        <g>
          <g>
            <rect x="247.999" y="300.135" width="64.029" height="15.77" />
          </g>
        </g>
        <g>
          <g>
            <rect x="328.037" y="300.135" width="64.029" height="15.77" />
          </g>
        </g>
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
      </svg>
    );
  }
}

TicketIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  seatNumber: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired
};

TicketIcon.defaultProps = {
  width: "200",
  height: "200"
};

export default TicketIcon;

