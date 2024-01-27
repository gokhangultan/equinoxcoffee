import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const defaultProps = {
    center: {
      lat: 38.435150146484375,
      lng: 27.1451358795166
    },
    zoom: 17
  };

  return (
    <div style={{ height: '450px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyBOmfKtT9sKYy4Qfztq6V9lqYuBBUkTUOA'
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={38.435150146484375}
          lng={27.1451358795166}
          text="EQUİ"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;