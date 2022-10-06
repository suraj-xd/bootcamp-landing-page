import { useState, useEffect } from "react";

const useGeoLocation = () => {
    try{

        const [location, setLocation] = useState({
            loaded: false,
            coordinates: { lat: "", lng: "" },
        });
        const onSuccess = (location) => {
            setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };
    
    const onError = (error) => {
        setLocation({
            loaded: true,
            error: {
                code: error.code,
                message: error.message,
            },
        });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }
        
        navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 });
    }, []);
    
    return location;
    }   
    catch{}
};

export default useGeoLocation;