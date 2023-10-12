import React, { useState } from 'react';
import './index.css';
import Index from '../components/index';

    const initialDestinationsList = [
        {
            uniqueNo: 1,
          name: 'Melaka Mosque',
          imgUrl: 'https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png',
        },
        {
            uniqueNo: 2,
          name: 'Shrubland',
          imgUrl: 'https://assets.ccbp.in/frontend/react-js/shrubland-img.png',
        },
        {
            uniqueNo: 3,
          name: 'New York',
          imgUrl: 'https://assets.ccbp.in/frontend/react-js/new-york-img.png',
        },
        {
            uniqueNo: 4,
          name: 'Escarpment',
          imgUrl: 'https://assets.ccbp.in/frontend/react-js/escarpment-img.png',
        },
        {
            uniqueNo: 5,
          name: 'Westminster Abbey',
          imgUrl:
            'https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png',
        },
        {
            uniqueNo: 6,
          name: 'South Downs National Park',
          imgUrl:
            'https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png',
        },
        {
            uniqueNo: 7,
          name: 'National Historic Site',
          imgUrl:
            'https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png',
        },
        {
            uniqueNo: 8,
          name: 'Tower Bridge',
          imgUrl: 'https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png',
        },
        {
            uniqueNo: 9,
          name: 'Arc Here',
          imgUrl: 'https://assets.ccbp.in/frontend/react-js/arc-here-img.png',
        },
        {
            uniqueNo: 10,
          name: 'Steeple',
          imgUrl: 'https://assets.ccbp.in/frontend/react-js/steeple-img.png',
        },
        {
            uniqueNo: 11,
          name: 'Glaciokarst',
          imgUrl: 'https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png',
        },
        {
            uniqueNo: 12,
          name: 'Parco Nazionale delle Cinque Terre',
          imgUrl:
            'https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png',
        },
      ]
      
   
    function Destination() {
      const [destinationList, setDestinationList] = useState(initialDestinationsList);
      const [searchInput, setSearchInput] = useState('');
    
      const onChangeDestinationsList = (e) => {
        setSearchInput(e.target.value);
      };
    
      const filteredDestinations = destinationList.filter((destination) =>
        destination.name.toLowerCase().includes(searchInput)
      );
    
      return (
        <div className="destiny">
          <h1 style={{marginTop:"20px", fontFamily:"sans-serif", marginBottom:"10px"}}>Destination Search</h1>
          <input
            type="search"
            className="form-control"
            placeholder="search name"
            onChange={onChangeDestinationsList}
            value={searchInput}
          />
          <div>
            {filteredDestinations.length > 0 ? (
              <ul className='dest-container'>
                {filteredDestinations.map((eachDestination) => (
                  <Index
                    key={eachDestination.uniqueNo}
                    destinationDetails={eachDestination}
                  />
                ))}
              </ul>
            ) : (
              <p>no destinations found</p>
            )}
          </div>
        </div>
      );
    }
    
    export default Destination;

 