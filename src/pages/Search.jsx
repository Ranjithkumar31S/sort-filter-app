import { useState } from "react";

export default function Search() {
  const data = [
    {
      name: "Ram Kumar",
      age: 21,
      department: "HR",
    },
    {
      name: "Yuvaraj",
      age: 25,
      department: "Finance",
    },
    {
      name: "Kushal",
      age: 23,
      department: "Development",
    },
    {
      name: "Ram Raj",
      age: 21,
      department: "Sales",
    },
    {
      name: "Ezhilarasan",
      age: 22,
      department: "Sales",
    },
  ];
  const [field, setField] = useState("");
  const [filteredData, setfilteredData] = useState(data);

  const handleOnChange = (e) => {
    const value = e.target.value;

    setField(value);

    let filtereddata = [];

    if (/^\d+$/.test(value)) {
      filtereddata = data.filter((d) => {
        return d.age === Number(value);
      });
    } else {
      filtereddata = data.filter((d) => {
        return (
          d.name.toLowerCase().includes(value.toLowerCase()) ||
          d.department.toLowerCase().includes(value.toLowerCase())
        );
      });
    }
    setfilteredData(filtereddata);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "250px",
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Search any user by name, age, department"
            size={30}
            values={field}
            onChange={(e) => handleOnChange(e)}
            style={{ padding: "10px" }}
          />
        </div>

        <div style={{ padding: "20px" }}>
          { filteredData.length > 0 ?(
            <table>
              <thead>
                <th style={{ padding: "12px 16px", textAlign: "left" }}>
                  Name
                </th>
                <th style={{ padding: "12px 16px", textAlign: "left" }}>Age</th>
                <th style={{ padding: "12px 16px", textAlign: "left" }}>
                  Department
                </th>
              </thead>
              <tbody>
                {filteredData.map((d, i) => {
                  return (
                    <tr key={i}>
                      <td
                        style={{
                          padding: "12px 16px",
                          verticalAlign: "middle",
                        }}
                      >
                        {d.name}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          verticalAlign: "middle",
                        }}
                      >
                        {d.age}
                      </td>
                      <td
                        style={{
                          padding: "12px 16px",
                          verticalAlign: "middle",
                        }}
                      >
                        {d.department}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p>No data found.....</p>
          )}
        </div>
      </div>
    </>
  );
}
