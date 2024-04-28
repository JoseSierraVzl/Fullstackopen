import { useState } from 'react'

const Statistics = ({ qualification }) => {
  const total = qualification.good + qualification.neutral + qualification.bad
  const average = (qualification.good - qualification.bad) / total || 0
  const positivePercentage = (qualification.good / total) * 100 || 0

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tr>
          <th>Type</th>
          <th>Value</th>
        </tr>
        <tbody>
          <StatisticLine text='Good' value={qualification.good} />
          <StatisticLine text='Neutral' value={qualification.neutral} />
          <StatisticLine text='Bad' value={qualification.bad} />
          <StatisticLine text='All' value={total} />
          <StatisticLine text='Average' value={average.toFixed(2)} />
          <StatisticLine text='Positive' value={`${positivePercentage}%`} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const ButtonQualification = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [qualification, setQualification] = useState({good: 0, neutral: 0, bad: 0})
  const [feedbackReceived, setFeedbackReceived] = useState(false)

  const handleQualificationChange = (type) => {
    setQualification({ ...qualification, [type]: qualification[type] + 1 })
    setFeedbackReceived(true)
  }

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <ButtonQualification handleClick={() => handleQualificationChange('good')} text='Good' />
        <ButtonQualification handleClick={() => handleQualificationChange('neutral')} text='neutral' />
        <ButtonQualification handleClick={() => handleQualificationChange('bad')} text='bad' />
      </div>
      { feedbackReceived ? <Statistics qualification={qualification} /> : <p>No feedback given.</p> }
    </div>
  )
}

export default App