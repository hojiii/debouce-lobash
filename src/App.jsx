import "./App.css";
import { useState, useCallback } from "react";
import _ from "lodash";

function App() {
  const [searchText, setSerchText] = useState("");
  const [inputText, setInputText] = useState("");

  //디바운스 나 스로틀링을 쓸때는 usecallback 으로 감싸줘야한다.
  //_.debounce => 처음자리 함수,두번째 자리 걸리는시간
  const handleSearchText = useCallback(
    _.debounce((text) => {
      setSerchText(text);
    }, 2000),
    []
  );
  //공통함수
  const handlechange = (e) => {
    setInputText(e.target.value);
    handleSearchText(e.target.value);
  };

  return (
    <div
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <h1>디바운싱 예제</h1>
      <input
        placeholder="입력값을 넣고 디바운싱 테스트를 해보세요"
        type="text"
        style={{ width: "300px" }}
        onChange={handlechange}
      />
      <p>search Text : {searchText}</p>
      <p>Input Text : {inputText}</p>
    </div>
  );
}

export default App;
