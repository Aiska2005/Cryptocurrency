import React, { useState, useEffect } from "react";
import axios from "axios";

const calc = () => {
  const [item, setItem] = useState([]);
  const [initial, setInitial] = useState({
    currencies: ["USD", "KGS", "KZT", "RUB", "JPY", "INR", "CNY"],
    base: "USD",
    amount: "",
    converTO: "KGS",
    ressult: "",
    data: "",
  });
  const { currencies, base, amount, converTO, ressult, data } = initial;

  useEffect(() => {
    if (amount === isNaN) {
      return;
    } else {
      const getCalc = async () => {
        const res = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${base}`
        );
        setItem(res.data);

        const response = res.data;
        const ressult = (response.rates[converTO] * amount).toFixed(3);
        setInitial({
          ...initial,
          ressult,
          data,
        });
      };
      getCalc();
    }
  }, [amount, base, converTO]);

  const onChangeInput = (e) => {
    setInitial({
      ...initial,
      amount: e.target.value,
      ressult: null,
      date: null,
    });
  };

  const handleSelect = (e) => {
    setInitial({
      ...initial,
      [e.target.name]: e.target.value,
      ressult: null,
    });
  };

  const handleSweap = (e) => {
    e.preventDefault();
    setInitial({
      ...initial,
      converTO: base,
      base: converTO,
      ressult: null,
    });
  };
  return (
    <div>
      <div>
        <p>{item.date}</p>
        <br />
        <span>
          <h1>
            {amount} {base} равно
          </h1>
          <br />
          <p>
            {amount === "" ? "0" : ressult === null ? "Calculatin..." : ressult}
            <b style={{ padding: 10 }}>{converTO}</b>
          </p>
          <br />
        </span>
      </div>
      <div>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex" }}>
            <input
              className="inputOne"
              type="number"
              value={amount}
              placeholder="type"
              onChange={onChangeInput}
            />
            <select
              className="selectOne"
              name="base"
              value={base}
              onChange={handleSelect}
            >
              {currencies?.map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
          <div className="sweap-control-block">
            <p className="sweap-control" onClick={handleSweap}>
              &#x21C4;
            </p>
          </div>

          <div>
            <input
              className="inputSecond"
              disabled={true}
              value={
                amount === ""
                  ? "0"
                  : ressult === null
                  ? "Calculation..."
                  : ressult
              }
            />
            <select
              className="selectSecond"
              name="converTO"
              value={converTO}
              onChange={handleSelect}
            >
              {currencies?.map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default calc;
