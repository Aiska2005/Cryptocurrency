import { useState } from "react";
import Calc from "./components/calc";
import "./index.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div>
          <div style={{ width: 200 }}>
            <img
              style={{ width: "200px" }}
              src="https://s.yimg.com/ny/api/res/1.2/PQ4tNN67bGrNTFCOmGTBTg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTQ3MA--/https://media.zenfs.com/en/fx_empire_176/4a666ddb0e1fee1d38e9d00206491a6c"
              alt=""
            />
            <h2>
              <a href="" style={{ fontSize: 18 }}>
                GBP/JPY Weekly Forecast – British Pound Continues to Skyrocket
              </a>
            </h2>
          </div>
          <div style={{ width: 200, paddingTop: 20 }}>
            <img
              style={{ width: "200px" }}
              src="https://s.yimg.com/ny/api/res/1.2/S_p6ebXlyLu5oAH1e_kuSQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTQ3MA--/https://media.zenfs.com/en/fx_empire_176/1c57f40d246703de7c9bc535e41a5b94"
              alt=""
            />
            <h2>
              <a href="" style={{ fontSize: 18 }}>
                USD/JPY Weekly Forecast – US Dollar Continues to Power Higher
              </a>
            </h2>
          </div>
        </div>
        <div className="calc">
          <Calc />
        </div>
        <div>
          <div style={{ width: 200 }}>
            <img
              style={{ width: "200px" }}
              src="https://s.yimg.com/ny/api/res/1.2/GsqDDXhWYoNX0xGFWLRugQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTQ3MA--/https://media.zenfs.com/en/fx_empire_176/e07be04c9a90040988b4a164f987cb89"
              alt=""
            />
            <h2>
              <a href="" style={{ fontSize: 18 }}>
                AUDUSD Weekly Forecast – Aussie Dollar Breaks Through Resistance
              </a>
            </h2>
          </div>
          <div style={{ width: 200, paddingTop: 20 }}>
            <img
              style={{ width: "200px" }}
              src="https://s.yimg.com/ny/api/res/1.2/TK_s4q7R1UORVa5zYux9tw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTQ3MA--/https://media.zenfs.com/en/fx_empire_176/16eaa78bf0148b247f17086a16ed9358"
              alt=""
            />
            <h2>
              <a href="" style={{ fontSize: 18 }}>
                GBP/JPY Forecast – British Pound Continues to Launch Into the
                Stratosphere
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
// https://finance.yahoo.com/news/gbp-jpy-weekly-forecast-british-140949589.html
