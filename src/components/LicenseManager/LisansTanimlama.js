import React from "react";

function LisansTanimlama() {
  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
        display: "flex",
        width: "800px",
        height: "700px",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontFamily: "arial", color: "#5C5C5C" }}>
          Lisans Tanımlama
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          width: "300px",
          height: "550px",
          margin: "0 auto",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        <label
          style={{
            fontWeight: "bold",
            fontSize: "13px",
            color: "#5C5C5C",
            fontFamily: "arial",
            marginBottom: "8px",
          }}
        >
          Müşteri Seçiniz
        </label>
        <select
          style={{
            width: "303px",
            height: "39px",
            paddingLeft: "5px",
            marginBottom: "30px",
            borderRadius: "8px",
          }}
          name="seç"
          id="musteri-firma"
          defaultValue={2}
        >
          <option disabled value="seçiniz">
            Tenant Seçiniz
          </option>
          <option value="bmw">BMW</option>
          <option value="audi">AUDI</option>
          <option value="merso">MERSO</option>
          <option value="volkswagen">VOLKSWAGEN</option>
        </select>

        <label
          style={{
            fontWeight: "bold",
            fontSize: "13px",
            color: "#5C5C5C",
            fontFamily: "arial",
            marginBottom: "8px",
          }}
        >
          Uygulama Seçiniz
        </label>
        <select
          style={{
            width: "303px",
            height: "39px",
            paddingLeft: "5px",
            marginBottom: "30px",
            borderRadius: "8px",
          }}
          name="seç"
          id="musteri-firma"
          defaultValue={2}
        >
          <option disabled value="seçiniz">
            Tenant Seçiniz
          </option>
          <option value="bmw">BMW</option>
          <option value="audi">AUDI</option>
          <option value="merso">MERSO</option>
          <option value="volkswagen">VOLKSWAGEN</option>
        </select>

        <label
          style={{
            fontWeight: "bold",
            fontSize: "13px",
            color: "#5C5C5C",
            fontFamily: "arial",
            marginBottom: "8px",
          }}
        >
          Lisans Türü
        </label>
        <select
          style={{
            width: "303px",
            height: "39px",
            paddingLeft: "5px",
            marginBottom: "30px",
            borderRadius: "8px",
          }}
          name="seç"
          id="musteri-firma"
          defaultValue={2}
        >
          <option disabled value="seçiniz">
            Tenant Seçiniz
          </option>
          <option value="bmw">BMW</option>
          <option value="audi">AUDI</option>
          <option value="merso">MERSO</option>
          <option value="volkswagen">VOLKSWAGEN</option>
        </select>

        <label
          style={{
            fontWeight: "bold",
            fontSize: "13px",
            color: "#5C5C5C",
            fontFamily: "arial",
            marginBottom: "8px",
          }}
        >
          Lisans Yenileme Periyodu
        </label>
        <select
          style={{
            width: "303px",
            height: "39px",
            paddingLeft: "5px",
            marginBottom: "30px",
            borderRadius: "8px",
          }}
          name="seç"
          id="musteri-firma"
          defaultValue={2}
        >
          <option disabled value="seçiniz">
            Tenant Seçiniz
          </option>
          <option value="bmw">BMW</option>
          <option value="audi">AUDI</option>
          <option value="merso">MERSO</option>
          <option value="volkswagen">VOLKSWAGEN</option>
        </select>
      </div>
    </div>
  );
}

export default LisansTanimlama;
