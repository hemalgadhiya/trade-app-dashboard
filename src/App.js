import './App.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useState, useEffect, useMemo } from "react";

function App() {
  // const URL = process.env.REACT_APP_URL
  const URL = 'https://k87fqy6frh.execute-api.us-east-1.amazonaws.com/prod/get-data'
  console.log(URL)
  const [data, setData] = useState({
    'trade-matching-in-trade-table': 0,
    'trade-matching-ingress-trade-table': 0,
    'trade-matching-egress-trade-table': 0,
    'trade-matching-out-trade-table': 0,
    'trade-matching-egress-settlement-table': 0,
    'trade-matching-out-settlement-table': 0,
    'settlement-inbound-gateway-table': 0,
    'settlement-ingress-table': 0,
    'settlement-egress-table': 0,
    'settlement-outbound-gateway-table': 0,
    'trade-matching-in-settlement-table': 0,
    'trade-matching-ingress-settlement-table': 0,
    'trade-total': 0,
    'trade-unmatched': 0,
    'trade-settled': 0,
    'trade-matched': 0,
    'trade-mismatched': 0,
    'settlement-total': 0,
    'settlement-matched': 0,
    'settlement-mismatched': 0,
    'settlement-unmatched': 0,
    'generated-trades-table': 0
  }
  )

  useEffect(() => {
    getTradeData(URL)
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <p className='h2'>
          Advanced Disaster Recovery Patterns Workshop
        </p>
        <p>
          Total Trades Generated: {data['generated-trades-table']}
        </p>
      </header>
      <div className='container'>
            <div className='row justify-content-center mt-2' >
              <div className='col-6 border h3 main-heading'>
                Trade Matching
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Inbound Gateway
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 h5 main-box'>
                Trades: {data["trade-matching-in-trade-table"]}
              </div>
              <div className='col-2 h5 main-box'>
                settlements: {data["trade-matching-in-settlement-table"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Ingress
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 h5 main-box'>
                Trades: {data["trade-matching-ingress-trade-table"]}
              </div>
              <div className='col-2 h5 main-box'>
                settlements: {data["trade-matching-ingress-settlement-table"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Core Matching
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 h5 main-box'>
                Settled: {data["trade-settled"]? data["trade-settled"] : 0}
              </div>
              <div className='col-2 h5 main-box'>
                Matched: {data["trade-matched"]? data["trade-matched"] : 0}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 h5 main-box'>
                Unmatched: {data["trade-unmatched"]? data["trade-unmatched"] : 0 }
              </div>
              <div className='col-2 h5 main-box'>
                Mismatched: {data["trade-mismatched"]? data["trade-mismatched"] : 0}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 main-box'>
                Total: {data["trade-total"]? data["trade-total"] : 0}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Egress
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 h5 main-box'>
                Trades: {data["trade-matching-egress-trade-table"]}
              </div>
              <div className='col-2 h5 main-box'>
                settlements: {data["trade-matching-egress-settlement-table"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Outbound Gateway
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 h5 main-box'>
                Trades: {data["trade-matching-out-trade-table"]}
              </div>
              <div className='col-2 h5 main-box'>
                settlements: {data["trade-matching-out-settlement-table"]}
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row justify-content-center mt-2' >
              <div className='col-6 border h3 main-heading'>
                Settlement Matching
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Inbound Gateway
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 main-box'>
                Settlements: {data["settlement-inbound-gateway-table"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Ingress
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 main-box'>
                Settlements: {data["settlement-ingress-table"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Core Matching
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 h5 main-box'>
                Total: {data["settlement-total"]? data["settlement-total"] : 0 }
              </div>
              <div className='col-2 h5 main-box'>
                Matched: {data["settlement-matched"]? data["settlement-matched"] : 0}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 h5 main-box'>
                Unmatched: {data["settlement-unmatched"]? data["settlement-unmatched"] : 0}
              </div>
              <div className='col-2 h5 main-box'>
                Mismatched: {data["settlement-mismatched"]? data["settlement-mismatched"] : 0}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Egress
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 main-box'>
                Settlements: {data["settlement-egress-table"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Outbound Gateway
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 main-box'>
                Settlements: {data["settlement-outbound-gateway-table"]}
              </div>
            </div>
          </div>
      {/* <div className='row justify-content-center'>
        <div className='col-6'>
          <div className='container'>
            <div className='row justify-content-center mt-2' >
              <div className='col-6 border h3 main-heading'>
                Trade Matching
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Inbound Gateway
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 h5 main-box'>
                Trades: {data["trade-matching-in-trade-table"]}
              </div>
              <div className='col-2 h5 main-box'>
                settlements: {data["trade-matching-in-settlement-table"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Ingress
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 h5 main-box'>
                Trades: {data["trade-matching-ingress-trade-table"]}
              </div>
              <div className='col-2 h5 main-box'>
                settlements: {data["trade-matching-ingress-settlement-table"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Core Matching
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 h5 main-box'>
                Settled: {data["trade-settled"]}
              </div>
              <div className='col-2 h5 main-box'>
                Matched: {data["trade-matched"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 h5 main-box'>
                Unmatched: {data["trade-unmatched"]}
              </div>
              <div className='col-2 h5 main-box'>
                Mismatched: {data["trade-mismatched"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 main-box'>
                Total: {data["trade-total"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Egress
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 h5 main-box'>
                Trades: {data["trade-matching-egress-trade-table"]}
              </div>
              <div className='col-2 h5 main-box'>
                settlements: {data["trade-matching-egress-settlement-table"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Outbound Gateway
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 h5 main-box'>
                Trades: {data["trade-matching-out-trade-table"]}
              </div>
              <div className='col-2 h5 main-box'>
                settlements: {data["trade-matching-out-settlement-table"]}
              </div>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='container'>
            <div className='row justify-content-center mt-2' >
              <div className='col-6 border h3 main-heading'>
                Settlement Matching
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Inbound Gateway
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 main-box'>
                Settlements: {data["settlement-inbound-gateway-table"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Ingress
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 main-box'>
                Settlements: {data["settlement-ingress-table"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Core Matching
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 h5 main-box'>
                Total: {data["settlement-total"]}
              </div>
              <div className='col-2 h5 main-box'>
                Matched: {data["settlement-matched"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-2 h5 main-box'>
                Unmatched: {data["settlement-unmatched"]}
              </div>
              <div className='col-2 h5 main-box'>
                Mismatched: {data["settlement-mismatched"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Egress
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 main-box'>
                Settlements: {data["settlement-egress-table"]}
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 border component-box'>
                Outbound Gateway
              </div>
            </div>
            <div className='row justify-content-center'>
              <div className='col-4 h5 main-box'>
                Settlements: {data["settlement-outbound-gateway-table"]}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );

  function getTradeData(url) {
    // const url = 'https://k87fqy6frh.execute-api.us-east-1.amazonaws.com/prod/get-data'

    const requestOption = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch(url, requestOption)
      .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();
        console.log(data);
        setData(data["body"])
      })

  }

}


export default App;
