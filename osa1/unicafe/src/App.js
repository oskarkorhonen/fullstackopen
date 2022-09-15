import { useState } from 'react'
const Button = ({ onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const StatisticLine = props => (
  <tr><td>{props.text}</td><td>{props.value}</td></tr>
)

const Statistics = (props) => {
  const all = (props.good+props.neutral+props.bad)
  if (all === 0) return <p>No feedback given</p>
  const average = (props.good-props.bad) / all
  let positive = (props.good / all)*100
  positive+=" %"
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text={'good'} value={props.good} />
          <StatisticLine text={'neutral'} value={props.neutral} />
          <StatisticLine text={'bad'} value={props.bad} />
          <StatisticLine text={'all'} value={all} />
          <StatisticLine text={'average'} value={average} />
          <StatisticLine text={'positive'} value={positive} />
        </tbody>
      </table>
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const goodClick = () => {
    setGood(good + 1)
  }
  
  const neutralClick = () => {
    setNeutral(neutral + 1)
  }
  
  const badClick = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodClick} text='good'/>
      <Button onClick={neutralClick} text='neutral'/>
      <Button onClick={badClick} text='bad'/>
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
  
}

export default App