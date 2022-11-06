import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation,useNavigate } from "react-router";

const LocationContext = React.createContext(null);

export function LocationContextProvider({ children }) {
  const lastVisitedLocation = React.useRef(null);
  function registerLocation(location) {
    lastVisitedLocation.current = location;
  }
  return (
    <LocationContext.Provider value={{ registerLocation, lastVisitedLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export const BlockedSlashLinker = React.forwardRef((props, ref) => {
  const { registerLocation } = React.useContext(LocationContext);
  return (
    <Link onClick={() => registerLocation(props.to)} ref={ref} {...props} />
  );
});

const PUBLIC_ALLOWED_ROUTES = ["/home", "/"];

export function useInvalidUrlAccess() {
  const currentLocation = useLocation();
  const navigate = useNavigate()
  const { lastVisitedLocation } = React.useContext(LocationContext); 

  if (
    lastVisitedLocation.current === null &&
    !PUBLIC_ALLOWED_ROUTES.includes(currentLocation.pathname)
  ) {
    navigate("/");
  }
}