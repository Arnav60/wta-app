import React, { useEffect, useState } from "react";
import { CREATE_STORY_ROUTE } from "../../utils/constants";
import { Link, Redirect } from "react-router-dom";
import StoryItem from "./adapter/StoryItem";
import { connect } from "react-redux";
import axios from "axios";


const _d_data = [
  {
    "name": "Shopify",
    "url": 'https://www.shopify.com',
    "data": {
      "engagement": {
          "avgVisitDuration": 195,
          "bounceRate": 0.5679,
          "pagesPerVisit": 2.88,
          "totalVisits": 55972000
      },
      "monthlyVisitsEstimate": {
          "2021-08-01": 57120000,
          "2021-09-01": 54860000,
          "2021-10-01": 57460000,
          "2021-11-01": 62270000,
          "2021-12-01": 55850000,
          "2022-01-01": 55970000
      },
      "name": "shopify.com",
      "trafficShareByCountry": [
          {
              "United States": 0.3612
          },
          {
              "United Kingdom": 0.0528
          },
          {
              "Canada": 0.0504
          },
          {
              "China": 0.0462
          },
          {
              "Australia": 0.0395
          }
      ],
      "trafficSources": {
          "Direct": 0.3976,
          "Mail": 0.0282,
          "Paid Referrals": 0.0034,
          "Referrals": 0.2826,
          "Search": 0.2571,
          "Social": 0.0308
      }
    }
  },
  
  {
    "name": "YouTube",
    "url": "https://www.youtube.com/",
    "data": {
      "engagement": {
          "avgVisitDuration": 1289,
          "bounceRate": 0.2077,
          "pagesPerVisit": 11.4,
          "totalVisits": 35917000000
      },
      "monthlyVisitsEstimate": {
          "2021-08-01": 35110000000,
          "2021-09-01": 33770000000,
          "2021-10-01": 34550000000,
          "2021-11-01": 33990000000,
          "2021-12-01": 35620000000,
          "2022-01-01": 35910000000
      },
      "name": "youtube.com",
      "trafficShareByCountry": [
          {
              "United States": 0.2096
          },
          {
              "Russian Federation": 0.0552
          },
          {
              "Brazil": 0.044
          },
          {
              "India": 0.0406
          },
          {
              "Japan": 0.0384
          }
      ],
      "trafficSources": {
          "Direct": 0.808,
          "Mail": 0.0055,
          "Paid Referrals": 0.0004,
          "Referrals": 0.0114,
          "Search": 0.1488,
          "Social": 0.0256
      }
  }
  },
  {
    "name": "Facebook",
    "url": "https://www.facebook.com/",
    "data": {
      "engagement": {
          "avgVisitDuration": 605,
          "bounceRate": 0.3252,
          "pagesPerVisit": 8.52,
          "totalVisits": 21145000000
      },
      "monthlyVisitsEstimate": {
          "2021-08-01": 21990000000,
          "2021-09-01": 20950000000,
          "2021-10-01": 21060000000,
          "2021-11-01": 20600000000,
          "2021-12-01": 21150000000,
          "2022-01-01": 21140000000
      },
      "name": "facebook.com",
      "trafficShareByCountry": [
          {
              "United States": 0.2218
          },
          {
              "Viet Nam": 0.0431
          },
          {
              "Brazil": 0.0392
          },
          {
              "Poland": 0.0382
          },
          {
              "United Kingdom": 0.038
          }
      ],
      "trafficSources": {
          "Direct": 0.8312,
          "Mail": 0.0099,
          "Paid Referrals": 0.0011,
          "Referrals": 0.024,
          "Search": 0.1136,
          "Social": 0.0199
      }
  }

  },
  {
    "name": "Flipkart",
    "url": "https://www.flipkart.com/",
    "data": {
      "engagement": {
          "avgVisitDuration": 298,
          "bounceRate": 0.4793,
          "pagesPerVisit": 6.41,
          "totalVisits": 212230000
      },
      "monthlyVisitsEstimate": {
          "2021-08-01": 194500000,
          "2021-09-01": 194200000,
          "2021-10-01": 289100000,
          "2021-11-01": 198500000,
          "2021-12-01": 203500000,
          "2022-01-01": 212200000
      },
      "name": "flipkart.com",
      "trafficShareByCountry": [
          {
              "India": 0.9545
          },
          {
              "United States": 0.0112
          },
          {
              "United Kingdom": 0.0026
          },
          {
              "United Arab Emirates": 0.0026
          },
          {
              "Canada": 0.0015
          }
      ],
      "trafficSources": {
          "Direct": 0.595,
          "Mail": 0.0048,
          "Paid Referrals": 0.0062,
          "Referrals": 0.0086,
          "Search": 0.3671,
          "Social": 0.018
      }
  }
  },
  {
    "name": "Bookmyshow",
    "url": "https://in.bookmyshow.com/",
    "data": {
      "engagement": {
          "avgVisitDuration": 294,
          "bounceRate": 0.5026,
          "pagesPerVisit": 2.85,
          "totalVisits": 20550000
      },
      "monthlyVisitsEstimate": {
          "2021-08-01": 14080000,
          "2021-09-01": 19750000,
          "2021-10-01": 29330000,
          "2021-11-01": 39590000,
          "2021-12-01": 75350000,
          "2022-01-01": 20550000
      },
      "name": "bookmyshow.com",
      "trafficShareByCountry": [
          {
              "India": 0.9346
          },
          {
              "United States": 0.0152
          },
          {
              "Sri Lanka": 0.01
          },
          {
              "United Arab Emirates": 0.0053
          },
          {
              "Pakistan": 0.0037
          }
      ],
      "trafficSources": {
          "Direct": 0.4911,
          "Mail": 0.0025,
          "Paid Referrals": 0.0031,
          "Referrals": 0.0085,
          "Search": 0.4749,
          "Social": 0.0197
      }
  }
  },
  {
    "name": "Github",
    "url": "https://github.com/",
    "data": {
      "engagement": {
          "avgVisitDuration": 470,
          "bounceRate": 0.3567,
          "pagesPerVisit": 7.46,
          "totalVisits": 387770000
      },
      "monthlyVisitsEstimate": {
          "2021-08-01": 359900000,
          "2021-09-01": 355500000,
          "2021-10-01": 375200000,
          "2021-11-01": 374800000,
          "2021-12-01": 374700000,
          "2022-01-01": 387700000
      },
      "name": "github.com",
      "trafficShareByCountry": [
          {
              "United States": 0.1567
          },
          {
              "China": 0.1477
          },
          {
              "India": 0.0924
          },
          {
              "Germany": 0.0397
          },
          {
              "Japan": 0.0354
          }
      ],
      "trafficSources": {
          "Direct": 0.4689,
          "Mail": 0.0085,
          "Paid Referrals": 0.0003,
          "Referrals": 0.1622,
          "Search": 0.2948,
          "Social": 0.0649
      }
  }

  }
]

const RankingChart = () => {
  // https://data.similarweb.com/api/v1/data?domain=github.com

  let [siteRanks, setSiteRanks] = useState([]);

  let [websiteList, setWebsiteList] = useState(_d_data);
  let [showResults, setShowResults] = useState({});

  useEffect(async () => {


    // API 1
    setShowResults(websiteList[0].data)  
    // var options = {
    //   method: 'GET',
    //   url: 'https://similarweb2.p.rapidapi.com/trafficoverview',
    //   params: {website: websiteList[0].url},
    //   headers: {
    //     'x-rapidapi-host': 'similarweb2.p.rapidapi.com',
    //     'x-rapidapi-key': 'a9b83e19acmshaeaf4a0650d987ep13efd4jsnb7a4b5500861'
    //   }
    // };

    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });


    // API 2
    // let sites = [
    //   "google.com",
    //   "facebook.com",
    //   "youtube.com",
    //   "twitter.com",
    //   "instagram.com",
    // ];
    // let sitePromises = sites.map(async (site) => {
    //   let tmpsitepromise = await axios.get(
    //     `https://rapidapi.com/apifactory/api/similarweb2/=${site}`
    //   );
    //   return tmpsitepromise;
    // });
    // let siteInfos = await Promise.all(sitePromises);
    // siteInfos = siteInfos.map((s) => s.data);
    // setSiteRanks(siteInfos);
  }, []);


  const handleWebClick = (web) => {
    console.log('web.name', web.data)
    setShowResults(web.data)
  }

  return (
    <div className="bg-white rounded p-4 mt-4 bg-gray-100"
    style={{
      width: '100vw',
      height: "100vh"
    }}
    >
      <p className="font-sen text-black text-xl md:text-2xl font-bold">
        Rankings
      </p>

      <div
      style={{
        width: '100%',
        overflowY:"auto",
        
      }}  
      >
        <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row'
        }}>
        {websiteList.map(web=> {
          return (
            <div
            onClick={() => handleWebClick(web)}
            className="border-white border-2 shadow-sm cursor-pointer border-2 bg-white"
              style={{
                padding: "12px",
                marginRight: "12px",
                borderRadius: "8px",
                marginBottom: "12px"
              }}  
              >
              {web.name}   
            </div>
        )
        })}

      </div>
        
      </div>


      <div
      style={{
        width: '100%',
        overflowY:"auto"
      }}  
      >
        <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row'
        }}>
        <div
         className="border-white border-2 shadow-sm cursor-pointer  border-2 p-16 bg-white"
         style={{
          borderRadius: "8px",
          marginBottom: "12px",
          marginRight: "12px",

         }}
         >

           <div>Avg Visit Duration</div>
           <div>{showResults?.engagement?.avgVisitDuration}</div>


        </div>

        <div
        className="border-white border-2 shadow-sm cursor-pointer border-2 p-16 bg-white"
        style={{
          borderRadius: "8px",
          marginBottom: "12px",
          marginRight: "12px",
         }}
        >

          <div>Avg Visit Duration</div>
          <div>{showResults?.engagement?.bounceRate}</div>
          
        </div>

        <div
        className="border-white border-2 shadow-sm cursor-pointer border-2 p-16 bg-white"
        style={{
          borderRadius: "8px",
          marginBottom: "12px",
          marginRight: "12px",
         }}
        >

        
        <div>Pages Per Visit</div>
        <div>{showResults?.engagement?.pagesPerVisit}</div>
          
        </div>


        <div
        className="border-white border-2 shadow-sm cursor-pointer border-2 p-16 bg-white"
        style={{
          borderRadius: "8px",
          marginBottom: "12px",
          marginRight: "12px",
         }}
        >

        
        <div>Total Visits</div>
        <div>{showResults?.engagement?.totalVisits}</div>
          
        </div>

      </div>
        
      </div>


      <div
      style={{
        width: '100%',
        overflowY:"auto"
      }}  
      >
        <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row'
        }}>
        {showResults?.trafficShareByCountry?.map(country => {
          return (
            <div>
              {
                Object.keys(country).map(key=>{
                  return (
                    <div
                    className="border-white border-2 shadow-sm cursor-pointer border-2 p-16 bg-white"
                    style={{
                      borderRadius: "8px",
                      marginBottom: "12px",
                      marginRight: "12px",
                     }}
                    >
                    <div>{key}</div>
                    <div>{country[key]}</div>
                    </div>
                  )
                })
              }
            </div>
          )
          
        })}

      </div>
        
      </div>

      {/* <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Site</th>
            <th>Rank</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {siteRanks[0] &&
            siteRanks.maps((rank) => (
              <tr>
                <td>{rank.siteName}</td>
                <td>{rank.globalRank.Rank}</td>
                <td>{rank.Category}</td>
              </tr>
            ))}
        </tbody>
      </table> */}
    </div>
  );
};

const Stories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="md:px-16 px-2 bg-gray-200 min-h-screen pb-6">
      <div className="md:flex-row -mx-2 flex flex-col">
        <div className="md:w-1/4 px-2 w-full">
          <div className="sticky top-story">
            <div className="bg-white rounded p-4 mt-4">
              <p className="font-sen text-black text-xl md:text-2xl font-bold">
                Popular Web Domains
              </p>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ante massa, porttitor bibendum odio et, aliquam eleifend enim.
              </p>
              <Link
                to={`${CREATE_STORY_ROUTE}/0`}
                to={CREATE_STORY_ROUTE}
                className="app-color hover:text-white rounded text-white py-2 px-4 focus:outline-none hover:shadow-md shadow transition duration-500 ease-in-out"
              >
                Check out!
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-3/4 px-2 w-full">
          {/* Tab Section */}
          {/* <div className="sticky top-story-data bg-gray-200">
            <div className="w-full h-4 bg-gray-200"></div>
            <div className="bg-white rounded mt-4 md:mt-0 flex flex-wrap text-sm text-gray-700">
              <button
              className="px-4 h-10 app-font-color border-b-2 app-border-bottom font-extrabold">
                <span className="font-semibold">POPULAR</span>
              </button>
              <button
              className="px-4 h-10"
              >
                <span className="font-semibold">FEATURED</span>
              </button>
              <button
              className="px-4 h-10">
                <span className="font-semibold">RECENT</span>
              </button>
            </div>
          </div> */}

          {/* Story List Section */}
          {/* <div className="mx-auto loader mt-56"></div> */}
          {/* {storyList} */}
          {/* <StoryItem/> */}
          {/* <RankingChart /> */}
        </div>
      </div>
    </div>
  );
};

RankingChart.propTypes = {
  // getAllStories: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const allActions = {};

export default connect(mapStateToProps, allActions)(RankingChart);
