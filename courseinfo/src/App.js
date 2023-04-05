const Header = (props) => {
    return (
        <h1>{props.name}</h1>
    )
}

const Part = (prop) => {
    return (
        <p>{prop.part} {prop.exercise}</p>
    )
}

const Content = (prop) => {
    return (
        <div>
            <Part part={prop.parts[0]} exercise={[prop.exercise[0]]} />
            {/* <Part/> */}
            {/* <Part/> */}
        </div>


        // <p>{prop.part} {prop.exercise}</p>
    )
}
const Total = (p) => {
    return (
        <p>Number of exercises {p.ex1 + p.ex2 + p.ex3}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header name={course} />
            <Content parts={[part1, part2, part3]} exercise={[exercises1, exercises2, exercises3]} />

            <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />

        </div>
    )
}

export default App