import "./LightweightSite.css";

export default function LightweightSite() {
    return <div className="_background">
        <div className="_site">
            <Frontpage/>
        </div>
    </div>;
  }
  
function Frontpage() {
    return <>
        <h1>Randall Kent Brown Jr.</h1>
        Kent Brown is a Software Developer living in Madison, Wisconsin.
        He currently works at Epic, an electronic health records company.
    </>;
}