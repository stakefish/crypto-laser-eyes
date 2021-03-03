import React from "react"

import { Laser } from "../helpers/types"
import { useSetState } from "../helpers/hooks"

import { Layout } from "../layouts/"

import Header from "../containers/Header"
import Lasers from "../containers/Lasers"
import Playground from "../containers/Playground"
import Main from "../components/Main"

/**
 * Types
 */
interface State {
  laser?: Laser
  portrait?: string
}

const App: React.FC = () => {
  const [state, setState] = useSetState<State>({
    laser: Laser.Yellow,
    portrait: undefined,
  })

  const onClick = (laser: Laser): void => {
    setState({
      laser,
    })
  }

  const onDrop = ([file]: File[]): void => {
    setState({
      portrait: URL.createObjectURL(file),
    })
  }

  return (
    <Layout>
      <Main>
        <Header />
        <Playground laser={state.laser} portrait={state.portrait} onDrop={onDrop} />
        <Lasers onClick={onClick} />
      </Main>
    </Layout>
  )
}

export default App
