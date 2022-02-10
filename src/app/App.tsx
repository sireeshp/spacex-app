import { Launches } from "../components/Launches";
import RocketInfoDialog from "../components/RocketInfoModal";
import './App.css'
export default function App() {
  return (
    <div className="ag-theme-alpine">
      <Launches />
      <RocketInfoDialog />
    </div>
  )
}