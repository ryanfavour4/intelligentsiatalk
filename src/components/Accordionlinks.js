import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Accordionlinks({ closeNav }) {
  return (
    <Accordion className="drop_down_accordion" flush>
      <Accordion.Item className="accordion_item" eventKey="0">
        <Accordion.Header>
          <h4 className="watch-text-grey">INTELLIGENTSIA</h4>
        </Accordion.Header>
        <Accordion.Body onClick={closeNav}>
          <ul className="watch-videos-ul">
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Events">Events</Link>
            </li>
            <li>
              <Link to="/Videos">Videos</Link>
            </li>
            <li>
              <Link to="/Speakers">Speakers</Link>
            </li>
            <li>
              <Link to="/Wall">Wall Quotes</Link>
            </li>
            <li>
              <Link to="/Team">Team</Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item className="accordion_item" eventKey="1">
        <Accordion.Header>
          <h4 className="watch-text-grey">WATCH</h4>
        </Accordion.Header>
        <Accordion.Body onClick={closeNav}>
          <ul className="watch-videos-ul">
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Events">Events</Link>
            </li>
            <li>
              <Link to="/Videos">Videos</Link>
            </li>
            <li>
              <Link to="/Speakers">Speakers</Link>
            </li>
            <li>
              <Link to="/Wall">Wall Quotes</Link>
            </li>
            <li>
              <Link to="/Team">Team</Link>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordionlinks;
