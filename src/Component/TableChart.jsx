import Table from "react-bootstrap/Table";

function TableChart() {
  return (
    <Table striped responsive bordered>
      <thead>
        <tr>
          <th></th>
          <th>Pregnancies</th>
          <th>Glucose</th>
          <th>Blood Pressure</th> 
          <th>Skin Thikness</th>
          <th>Insulin</th>
          <th>BMI</th>
          <th>Age</th>
          <th>Diabetes Pedigree </th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>Mean</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Mark</td>
          <td>Mark</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
        <td>Mean</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Mark</td>
          <td>Mark</td>
          <td>Mark</td>
          <td>Mark</td>
          <td>Otto</td>
          
          
          
        </tr>
      </tbody>
    </Table>
  );
}

export default TableChart;
