import MainSection from "./subcomponents/MainSection"
import Sidebar from "./subcomponents/Sidebar"

const Main = ({facts,setFacts,setFetchTrigger}) => {
  return (
    <main className="">
        <Sidebar/>
        <MainSection facts={facts} setFacts={setFacts} setFetchTrigger={setFetchTrigger}/>
    </main>
  )
}

export default Main