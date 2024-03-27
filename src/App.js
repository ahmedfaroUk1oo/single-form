import logo from './logo.svg';
import './App.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import SelectPlan from './Components/SelectPlan/SelectPlan';
import AddsOns from './Components/AddsOns/AddsOns';
import Summary from './Components/Summary/Summary';
import PersonalInfo from './Components/PersonalInfo/PersonalInfo';
import End from './Components/End/End';
import Protect from './Components/Protect/Protect';
import ProtectSelectPlan from './Components/Protect/ProtectSelectPlan';
import ProtectAdds from './Components/Protect/ProtectAdds';

function App() {

  const router = createHashRouter ([
{path :"" , element: <Home /> , children : [
  {index : true , element : <PersonalInfo />},

  {path : "select-plan", element :<ProtectSelectPlan> <SelectPlan /></ProtectSelectPlan>}, 
  {path : "AddsOns", element :<ProtectAdds> <AddsOns /></ProtectAdds>}, 
  {path : "Summary", element : <Protect><Summary /></Protect>}, 
  {path : "End", element : <End />}, 
] }
  ])
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
