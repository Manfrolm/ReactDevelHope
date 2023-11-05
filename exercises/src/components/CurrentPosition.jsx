import { useCurrentLocation } from "./UseCurrentLocation";

export const CurrentPosition = () => {
  const { findMe, latitude, longitude, positionLink } = useCurrentLocation();

  return (
    <>
      {latitude ? (
        <div>
          <a href={positionLink}>Map</a>
          <p>
            Latitude: {latitude} <hr /> Longitude: {longitude}
          </p>
        </div>
      ) : null}

      <button onClick={findMe}>Find Me</button>
    </>
  );
};