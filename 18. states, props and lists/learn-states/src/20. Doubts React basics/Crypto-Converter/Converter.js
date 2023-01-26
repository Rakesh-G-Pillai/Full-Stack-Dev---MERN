import React, { useEffect, useState } from "react";
import { Button, Card, Form, Input, Select } from "antd";
import { RiCoinsLine } from "react-icons/ri";

function Converter() {
  const apiUrl = "https://api.coingecko.com/api/v3/exchange_rates";

  const [cryptoList, setCryptoList] = useState([]);

  const defaultfirstSelectValue = "Bitcoin";
  const defaultsecondSelectValue = "Ether";

  const [inputValue, SetInputValue] = useState("0");
  const [firstSelectValue, SetFirstSelectValue] = useState(
    defaultfirstSelectValue
  );
  const [secondSelectValue, SetSecondSelectValue] = useState(
    defaultsecondSelectValue
  );

  const [result, SetResult] = useState("0");

  useEffect(() => {
    if (cryptoList.length == 0) return;

    const firstSelectObj = cryptoList.find((item) => {
      return item.value === firstSelectValue;
    }).rate;

    const secondSelectObj = cryptoList.find((item) => {
      return item.value === secondSelectValue;
    }).rate;

    const resultValue = (inputValue * secondSelectObj) / firstSelectObj;
    SetResult(resultValue.toFixed(6));
  }, [inputValue, firstSelectValue, secondSelectValue]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    const data = jsonData.rates;
    const tempArray = Object.entries(data).map((item) => {
      return {
        value: item[1].name,
        label: item[1].name,
        rate: item[1].value,
      };
    });
    setCryptoList(tempArray);
  }

  return (
    <div className="container">
      <Card
        className="crypto-card"
        title={
          <h1>
            <RiCoinsLine />
            Crypto-Converter
          </h1>
        }
      >
        <Form>
          <Form.Item>
            <Input onChange={(event) => SetInputValue(event.target.value)} />
          </Form.Item>
        </Form>
        <div className="select-box">
          <Select
            style={{ width: "190px" }}
            defaultValue={defaultfirstSelectValue}
            className="select"
            options={cryptoList}
            onSelect={(value) => SetFirstSelectValue(value)}
          />
          <Select
            style={{ width: "190px" }}
            defaultValue={defaultsecondSelectValue}
            className="select"
            options={cryptoList}
            onChange={(value) => SetSecondSelectValue(value)}
          />
        </div>
        <p>
          {inputValue} {firstSelectValue} = {result} {secondSelectValue}
        </p>
      </Card>
    </div>
  );
}

export default Converter;
