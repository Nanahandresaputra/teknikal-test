import { useState } from "react";

function Aplication() {
  const [data, setData] = useState([]);

  const handleInputChange = (event, index) => {
    event.preventDefault();
    const { name, value } = event.target;
    const newData = [{ ...data, [name]: value }];
    if (newData[index]) {
      newData[index][name] = value;
      setData(newData);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(data);
  };

  const renderInputFields = () => {
    const inputFields = [];
    for (let i = 0; i < 10; i++) {
      inputFields.push(
        <div key={i}>
          <h4>Mahasiswa {i + 1}</h4>
          <div>
            <label>Aspek 1:</label>
            <input type="number" name="aspek1" onChange={(e) => handleInputChange(e, i)} />
          </div>
          <div>
            <label>Aspek 2:</label>
            <input type="number" name="aspek2" onChange={(e) => handleInputChange(e, i)} />
          </div>
          <div>
            <label>Aspek 3:</label>
            <input type="number" name="aspek3" onChange={(e) => handleInputChange(e, i)} />
          </div>
        </div>
      );
    }
    return inputFields;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderInputFields()}
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}

export default Aplication;
