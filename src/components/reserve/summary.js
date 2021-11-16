import React from 'react'
import summary from '../../local-json/summary.json'
import '../../styles/calender.scss'

function SitterSummary(props) {
  const [summaryData, setSummaryState] = React.useState(summary)
  return (
    <>
      {summaryData &&
        summaryData.map(({ introduction, skill, id }) => (
          <table key={id} className="mt-3 my-2 summary-list-styled">
            <tr>
              <td>
                <h3>簡介</h3>
                <p>{introduction}</p>
                <h3>技能</h3>
                <p>{skill}</p>
              </td>
            </tr>
          </table>
        ))}
    </>
  )
}

export default SitterSummary
