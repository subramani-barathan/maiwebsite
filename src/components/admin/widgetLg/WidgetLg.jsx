import "./widgetlg.css"

function WidgetLg() {
  const Button =({type})=>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">User</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgRow">
          <td className="widgetLgUser">
              <img src="../assets/images/profile.jpg" alt="BS" className="topAvatar" />
              <span className="widgetLgUsername">Subramani</span>
          </td>
          <td className="widgetLgDate">22/11/1990</td>
          <td className="widgetLgAmount">$300</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgRow">
          <td className="widgetLgUser">
              <img src="../assets/images/profile.jpg" alt="BS" className="topAvatar" />
              <span className="widgetLgUsername">Subramani</span>
          </td>
          <td className="widgetLgDate">22/11/1990</td>
          <td className="widgetLgAmount">$300</td>
          <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetLgRow">
          <td className="widgetLgUser">
              <img src="../assets/images/profile.jpg" alt="BS" className="topAvatar" />
              <span className="widgetLgUsername">Subramani</span>
          </td>
          <td className="widgetLgDate">22/11/1990</td>
          <td className="widgetLgAmount">$300</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgRow">
          <td className="widgetLgUser">
              <img src="../assets/images/profile.jpg" alt="BS" className="topAvatar" />
              <span className="widgetLgUsername">Subramani</span>
          </td>
          <td className="widgetLgDate">22/11/1990</td>
          <td className="widgetLgAmount">$300</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgRow">
          <td className="widgetLgUser">
              <img src="../assets/images/profile.jpg" alt="BS" className="topAvatar" />
              <span className="widgetLgUsername">Subramani</span>
          </td>
          <td className="widgetLgDate">22/11/1990</td>
          <td className="widgetLgAmount">$300</td>
          <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgRow">
          <td className="widgetLgUser">
              <img src="../assets/images/profile.jpg" alt="BS" className="topAvatar" />
              <span className="widgetLgUsername">Subramani</span>
          </td>
          <td className="widgetLgDate">22/11/1990</td>
          <td className="widgetLgAmount">$300</td>
          <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg