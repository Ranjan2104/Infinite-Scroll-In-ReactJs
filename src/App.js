import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
import { useState } from 'react';

const style = {
  height: 30,
  border: "1px solid black",
  margin: 6,
  padding: 8
};

function App() {
  const [data, setData] = useState(Array.from({ length: 20 }));
  const [hasMore, sethasmore] = useState(true);
  const fetchMoreData = () => {
    if (data.length < 200) {
      setTimeout(() => {
        setData(data.concat(Array.from({ length: 20 })))
      }, 1500);
    }
    else {
      sethasmore(false);
    }
  }
  return (
    <div className="App">
      <h1>demo: react-infinite-scroll-component</h1>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<h4>Data Ended!...</h4>}
      >
        {
          data.map((ele, index) => {
            return (
              <div style={style} key={index}>
                div - #{index + 1}
              </div>
            )
          })
        }
      </InfiniteScroll>
    </div>
  );
}

export default App;
