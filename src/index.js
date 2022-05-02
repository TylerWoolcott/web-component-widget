import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import PropTypes from 'prop-types';


const styles = `.si-widget-anchor {
    text-decoration: none;
  }
  
  .si-widget-container-default {
    display: flex;
    flex-direction: column;
    color: var(--textColor, #4a4b63);
    font-family: var(--fontFamily, Arial, Helvetica, sans-serif);
  }
  
  .si-widget-text-content {
    display: flex;
    flex-direction: column;
  }
  
  .si-widget-text-content-footer {
    display: flex;
    margin-top: auto;
    justify-content: flex-end;
  }
  
  .si-widget-content-map {
    height: 200px;
  }
  
  /* script section  */
  
  .si-widget-header-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .si-widget-title-container {
    padding-top: 2px;
  }
  
  .si-widget-logo-container {
    background-color: #f7f9f9; /* subtle colour needed so the logo appears to align with text when page is white */
    border-radius: 50%;
    padding: 2px;
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }
  
  .si-widget-wef-logo {
    height: 40px;
    width: 40px;
  }
  
  .si-widget-title {
    margin: 0px;
    font-weight: 300;
    font-size: 18px;
    line-height: 20px;
    color: var(--textColor, #4a4b63);
  }
  
  .si-widget-topic {
    margin: 0;
    font-size: 14px;
    font-weight: 100;
    line-height: 14px;
    color: var(--textColor, #4a4b63);
  }
  
  .si-widget-description {
    margin: 0;
    font-size: 14px;
    font-weight: 100;
    line-height: 14px;
    color: var(--textColor, #4a4b63);
  }
  
  .si-widget-description-container {
    padding-top: 20px;
    padding-right: 20px;
  }
  
  /* Fallback for IE11 */
  a:visited,
  a:link {
    color: #4a4b63;
  }
  
  .si-widget-map {
    display: block;
    object-fit: contain;
  }
  
  .si-widget-map-default {
    @extend .si-widget-map;
    min-height:1px;
    height: auto;
    width: 100%;
    border-radius: var(--thumbnailRadius, 0px);
    flex-shrink: 0;
  }
  
  .si-widget-map-wide {
    @extend .si-widget-map;
    height: 100%;
    width: auto;
    border-radius: var(--thumbnailRadius, 0px);
    margin-left: 10px;
  }
  
  
  .si-widget-footer-cta {
    margin: 0px;
    font-size: 15px;
    line-height: 17px;
  }
  
  .si-widget-footer-row {
    display: flex;
    flex-direction: row;
  
    flex-grow: 1;
    flex-shrink: 100%;
  
    align-items: center;
    color: var(--textColor, #4a4b63);
    -webkit-transition: color 1s;
    -moz-transition: color 1s;
    -o-transition: colour 1s;
    transition: color 1s;
    margin-top: 5px;
  }
  
  .si-widget-footer-row:hover {
    -webkit-filter: invert(35%);
    filter: invert(35%);
  }
  
  .si-icon {
    fill: var(--textColor, #4a4b63);
  }
  
  .si-widget-footer-cta-icon {
    margin-left: 10px;
  }
  `;

//   <basic-functional-demo> {/* The shadow root will be attached to this element */}
//   <ReactShadowRoot>
//     <style>{styles}</style>
//     <span>{cnt}</span>
//     <button onClick={() => setCount(cnt + 1)}>Click Me</button>
//   </ReactShadowRoot>
// </basic-functional-demo>


function MyCounter() {
  const [studentData, setStudentData] = useState([]);
  async function fetchURL(url) {
    const response = await fetch(url);
    const data = await response.json();
    const students = data.students;
    console.log(students[0].email)
    setStudentData(students);
  }

  //--------------- USE EFFECT

  useEffect(() => {
    fetchURL(`https://api.hatchways.io/assessment/students`);
  }, []);

  if(!studentData.length) return 'No widgets found';

  return (
    <>
  
            <style>{styles}</style>
            <div>Hi from React</div>
    {/* <BrowserRouter>
    <Routes>
    <Route path="/test" element={<Static />}/>
    </Routes>
    </BrowserRouter> */}
    <div>
      {/* {studentData.map(student => (
        <div key={student.id}>
          <h1>{student.firstName}</h1>
        </div>
      )
      )} */}
      </div>
      <div className="w-full sm:w-[400px]">
      <div 
        apikey='' 
        language=''
        topicId='' 
      >
        {/* shadow root styles will be applied here */}
        <a className="si-widget-anchor" target='_top' href='https://intelligence.weforum.org/topics/a1Gb0000000LGk6EAG?utm_source=57N0ECrQAg7ZPOUXugaGj2Zm9E2p50GR6bWV9jtt&utm_medium=intelligence-widget&utm_campaign=widget.intelligence.weforum.org&utm_content=/getting-started.html'>
          <div className='si-widget-container-default'>
            <div>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='119.999'
                  height='73.984'
                  viewBox='0 0 119.999 73.984'
                >
                  <g>
                    <path fill="#141414" d="M405.618 262.255a8.067 8.067 0 0 1-.276-1.791 4.841 4.841 0 0 1 5.1-5.1 8.134 8.134 0 0 1 1.929.276c.551-.413 1.24-.964 1.791-1.378a6.824 6.824 0 0 0-3.72-.964 7.2 7.2 0 0 0-6.338 11.022 1.375 1.375 0 0 1 .551-.689c.413-.551.689-.964.964-1.378" transform="translate(-364.148 -249.994)"></path>
                    <path fill="#141414" d="M414.8 254.6l-1.653 1.24a5.054 5.054 0 0 1 1.791 4.133 5 5 0 0 1-5.1 5.1 4.549 4.549 0 0 1-4-1.929c-.138.276-.413.413-.551.689a4.828 4.828 0 0 0-.689 1.1 7.37 7.37 0 0 0 5.373 2.2 7.18 7.18 0 0 0 7.44-7.164 7.737 7.737 0 0 0-2.611-5.369" transform="translate(-363.544 -249.503)"></path>
                    <path fill="#141414" d="M403.469 273.624a5.129 5.129 0 0 1-3.169 4.822v2.2a7.083 7.083 0 0 0 5.511-6.889 7.36 7.36 0 0 0-3.444-6.062c-.276.689-.413 1.378-.689 1.929a4.785 4.785 0 0 1 1.791 4" transform="translate(-365.168 -244.554)"></path>
                    <path fill="#141414" d="M401.315 279.062h-.415a5 5 0 0 1-5.1-5.1 4.841 4.841 0 0 1 5.1-5.1 5.036 5.036 0 0 1 2.067.413 10.816 10.816 0 0 1 .689-1.929 8.9 8.9 0 0 0-2.618-.551 7.353 7.353 0 0 0-7.44 7.164 7.18 7.18 0 0 0 7.44 7.164h.413v-1.24a1.747 1.747 0 0 1-.138-.827" transform="translate(-367.698 -244.894)"></path>
                    <path fill="#141414" d="M403.493 282.467a4.914 4.914 0 0 1 5.1 5.1 5.046 5.046 0 0 1-3.72 4.96c.413.551.689 1.24 1.1 1.791a7.114 7.114 0 0 0 4.96-6.751 7.516 7.516 0 0 0-10.333-6.613l.413 2.067a5.4 5.4 0 0 1 2.48-.551" transform="translate(-365.053 -239.757)"></path>
                    <path fill="#141414" d="M399.642 287.224a5.879 5.879 0 0 1 1.378-3.72c-.138-.689-.413-1.516-.551-2.2a7.008 7.008 0 0 0-3.169 5.924 7.18 7.18 0 0 0 7.44 7.164h.964c-.413-.689-.827-1.24-1.24-1.929a5.148 5.148 0 0 1-4.822-5.235" transform="translate(-366.3 -239.418)"></path>
                    <path fill="#004b86" d="M458.763 297.213a38.861 38.861 0 0 1-49.463-.413l-1.1 1.24a40.918 40.918 0 0 0 26.039 9.506 40.179 40.179 0 0 0 25.626-9.093l-1.1-1.24" transform="translate(-362.183 -233.563)"></path>
                    <path fill="#141414" d="M430.966 280.6v8.266c0 1.929-.689 3.72-3.031 3.72-2.48 0-3.031-1.791-3.031-3.72V280.6h-2.2v8.68a5.373 5.373 0 0 0 10.746 0v-8.68h-2.48" transform="translate(-356.705 -239.682)"></path>
                    <path fill="#141414" d="M430.6 265.248h6.2v1.929h-8.4V253.4h2.2v11.848" transform="translate(-354.554 -249.956)"></path>
                    <path fill="#141414" d="M374.8 267h7.991v2.067H377v3.169h5.649v2.064H377v4.409h5.786v2.067H374.8V267" transform="translate(-374.8 -244.819)"></path>
                    <path fill="#141414" d="M407.6 266.5l9.506 9.644v-8.955h2.2v14.328l-9.369-9.644v9.093H407.6V266.5" transform="translate(-362.41 -245.008)"></path>
                    <path fill="#141414" id="Rectangle_8" d="M0 0h2.204v13.777H0z" transform="translate(101.677 22.181)"></path>
                    <path fill="#141414" d="M391.542 282.529v3.307h4.822v2.064h-4.822v6.475H389.2V280.6h7.3v1.929h-4.96" transform="translate(-369.361 -239.682)"></path>
                    <path fill="#141414" d="M401.051 262.155l2.2-8.68h2.2L401.6 267.8l-4.822-10.333-4.82 10.333-3.858-14.324h2.2l2.2 8.68 4.271-8.955 4.271 8.955" transform="translate(-369.777 -250.032)"></path>
                    <path fill="#141414" d="M436.809 272.249l-2.2 8.68h-2.2l3.858-14.328 4.822 10.333L445.9 266.6l3.858 14.328h-2.2l-2.2-8.68-4.278 8.952-4.271-8.955" transform="translate(-353.041 -244.97)"></path>
                    <path fill="#141414" d="M437.709 285.849l-2.2 8.68h-2.2l3.858-14.328 4.822 10.333L446.8 280.2l3.858 14.328h-2.2l-2.2-8.68-4.278 8.952-4.271-8.955" transform="translate(-352.703 -239.833)"></path>
                    <path fill="#141414" d="M415.358 280.6a7.42 7.42 0 0 1 3.858.689 3.59 3.59 0 0 1 1.791 3.307 3.868 3.868 0 0 1-3.444 3.858l4.409 5.924h-2.618l-4.133-5.786H413.7v5.786h-2.2V280.6h3.858m-1.516 6.2h1.1c1.791 0 3.858 0 3.858-2.2s-2.342-2.067-4-2.067h-.964z" transform="translate(-360.938 -239.682)"></path>
                    <path fill="#141414" d="M420.882 253.4a7.42 7.42 0 0 1 3.858.689 3.589 3.589 0 0 1 1.791 3.307 3.868 3.868 0 0 1-3.444 3.858l4.409 5.924h-2.342l-4.133-5.786H419.5v5.786h-2.2V253.4h3.582m-1.516 6.2h1.1c1.791 0 3.858 0 3.858-2.2s-2.342-2.067-4-2.067h-.964z" transform="translate(-358.746 -249.956)"></path>
                    <path fill="#141414" d="M439.78 265.248h1.378c3.031 0 5.924-1.1 5.924-4.96 0-4-2.893-4.96-5.924-4.96h-1.378v9.92m-2.342-11.848h3.72c4.271 0 7.853 2.067 7.853 6.751 0 4.822-3.444 6.889-7.991 6.889h-3.72V253.4z" transform="translate(-351.192 -249.956)"></path>
                    <path fill="#141414" d="M463.857 278.511a4.718 4.718 0 0 1-2.48.551 5 5 0 0 1-5.1-5.1 4.841 4.841 0 0 1 5.1-5.1 6.582 6.582 0 0 1 2.48.551l1.1-1.653a8.276 8.276 0 0 0-3.72-.964 7.353 7.353 0 0 0-7.44 7.164 7.18 7.18 0 0 0 7.44 7.164 6.824 6.824 0 0 0 3.72-.964l-1.1-1.653" transform="translate(-344.96 -244.895)"></path>
                    <path fill="#141414" d="M393.657 278.511a4.717 4.717 0 0 1-2.48.551 5 5 0 0 1-5.1-5.1 4.841 4.841 0 0 1 5.1-5.1 6.581 6.581 0 0 1 2.48.551l1.1-1.653a8.277 8.277 0 0 0-3.72-.964 7.353 7.353 0 0 0-7.44 7.164 7.18 7.18 0 0 0 7.44 7.164 6.824 6.824 0 0 0 3.72-.964l-1.1-1.653" transform="translate(-371.475 -244.895)"></path>
                    <path fill="#004b86" d="M461.749 314.275a38.465 38.465 0 0 1-50.838-2.2 36.276 36.276 0 0 1-4.271-47.118 38.379 38.379 0 0 1 17.5-13.364l-.275-.689a38.761 38.761 0 0 0-17.773 13.64 36.954 36.954 0 0 0 4.409 48.083 38.471 38.471 0 0 0 27.141 11.022 39.011 39.011 0 0 0 24.661-8.68l-.551-.689" transform="translate(-365.583 -250.9)"></path>
                    <path fill="#141414" d="M432.037 273.964a4.841 4.841 0 0 0-5.1-5.1 4.914 4.914 0 0 0-5.1 5.1 5.1 5.1 0 0 0 10.2 0m2.342 0a7.445 7.445 0 0 1-14.88 0 7.266 7.266 0 0 1 7.44-7.164 7.353 7.353 0 0 1 7.441 7.164z" transform="translate(-357.914 -244.894)"></path>
                  </g>
                </svg>
              </div>
              <div>
                <h1>Strategic Intelligence</h1>
                <h2>{studentData[0].firstName}</h2>
              </div>
            </div>
            <img src='https://map-images-prod.contextualiq.org/map_a1Gb0000000LGk6EAG_artistic-snapshot.png?Expires=1651735368&Signature=DSk57gDX3EeZV4KCyP7maV7DBhAXFIdmuGbX4b9lgrAO9NTCMfxnBdt4hp1PUpNHeSaSHVLtdd8GFMICNKRNpyECkEocU909ZlSKTJ8TY0HWHb8mEYRxSL4Nv8IE7TD0skJ9LRQlSO8xsJTF2pDrRK-XEm34fPxLWTuwgb4VnLu8Iy6hAAnpB7N8LmXm6fiRZkvr0VpfVk2NTdJSkKZeoUlZbCfFMrj6ZF3-W~LXdKcb5p7OJOiTjZNEd19pcVUKnMu9HHaBrnyQEZ103BJPqyHC-IrB~v3qIiVqFuO-U5bjZywfLehMe3wql5NE4Zdnh0hOz8YIkEZky0F5RClYFA__&Key-Pair-Id=APKAJH7M2FE27DIOGT7Q' alt='si-widget' />
            <div>
              <div>Learn more about the latest strategic trends and research from the World Economic Forum
              </div>
              <div>
              <svg width="40" height="40" viewBox="-18 -18 572.00902 572" xmlns="http://www.w3.org/2000/svg">
                <path class="si-icon" d="m279.628906 143.855469c-4.851562-4.855469-12.722656-4.855469-17.582031 0-4.855469 4.851562-4.855469 12.726562 0 17.582031l94.164063 94.164062h-250.191407c-6.886719 0-12.472656 5.585938-12.472656 12.472657 0 6.890625 5.585937 12.472656 12.472656 12.472656h250.066407l-94.164063 94.164063c-2.335937 2.328124-3.648437 5.496093-3.648437 8.792968 0 3.300782 1.3125 6.460938 3.648437 8.792969 2.335937 2.355469 5.535156 3.660156 8.855469 3.617187 3.308594-.015624 6.484375-1.3125 8.851562-3.617187l115.367188-115.363281c2.347656-2.351563 3.65625-5.542969 3.621094-8.859375-.023438-3.308594-1.320313-6.472657-3.621094-8.851563zm0 0"></path>
                <path class="si-icon" d="m268.15625-.0742188c-108.457031-.0195312-206.242188 65.3085938-247.746094 165.5117188-41.496094 100.207031-18.542968 215.542969 58.171875 292.210938 104.703125 104.703124 274.453125 104.703124 379.152344 0 104.699219-104.695313 104.699219-274.445313 0-379.148438-50.167969-50.453125-118.429687-78.746094-189.578125-78.5742188zm0 511.3554688c-134.074219 0-243.203125-109.132812-243.203125-243.207031s109.128906-243.203125 243.203125-243.203125 243.207031 109.128906 243.207031 243.203125-109.132812 243.207031-243.207031 243.207031zm0 0"></path>
              </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    
   
    </>
  );
  }
//   const e = React.createElement;
 
//  const domContainer = document.querySelector('#reddit_widget');
// const root = ReactDOM.createRoot(domContainer);
// root.render(e);


MyCounter.propTypes = {
  name: PropTypes.string
}

// ReactDOM.render(<MyCounter />, document.getElementById('app'));
customElements.define('my-counter', reactToWebComponent(MyCounter, React, ReactDOM, { shadow: true }));