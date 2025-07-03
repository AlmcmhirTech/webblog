import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface Coordinates {
    lat: number;
    lng: number;
}

export function RenderMap({lat, lng}: Coordinates){

    const mapStyles = {
    height: "300px",
    width: "700px",
    };

    const defaultCenter = {lat, lng};

    return(
        <LoadScript  googleMapsApiKey="AIzaSyBFyNhMXTf-GAy83RT4hw-7Pc_mp2stXIs">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13} // Zoom level (1-20)
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    )
}