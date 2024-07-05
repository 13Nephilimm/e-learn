import React from "react";
import "./LeaderboardComp.css";

const LeaderboardComp = () => {
  return (
    <>
      <section className="table__header">
        <h1>ლიდერბორდი</h1>
      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th>სახელი</th>
              <th>გვარი</th>
              <th>ლოკაცია</th>
              <th>ასაკი</th>
              <th>დონე</th>
              <th>ქულები</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> დავით </td>
              <td>ხიმშიაშვილი</td>
              <td>საქართველო</td>
              <td>28</td>
              <td>
                <p className="status delivered">სენიორი</p>
              </td>
              <td>
                <strong>500/500</strong>
              </td>
            </tr>
            <tr>
              <td> ნიკოლოზ </td>
              <td>მოსიძე</td>
              <td> საქართველო </td>
              <td> 25 </td>
              <td>
                <p className="status shipped">მიდლი</p>
              </td>
              <td>
                <strong>488/500</strong>
              </td>
            </tr>
            <tr>
              <td>გიორგი</td>
              <td>მახარაძე</td>
              <td> საქართველო </td>
              <td> 26 </td>
              <td>
                <p className="status shipped">მიდლი</p>
              </td>
              <td>
                <strong>470/500</strong>
              </td>
            </tr>
            <tr>
              <td>სტივ</td>
              <td>პალმერი</td>
              <td> კანადა </td>
              <td> 21 </td>
              <td>
                <p className="status pending">ჯუნიორი</p>
              </td>
              <td>
                <strong>350/500</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default LeaderboardComp;
