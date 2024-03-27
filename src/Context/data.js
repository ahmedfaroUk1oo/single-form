import { createContext, useState } from "react";
import img1 from "../Assets/images/icon-arcade.svg"
import img2 from "../Assets/images/icon-advanced.svg"
import img3 from "../Assets/images/icon-pro.svg"



export let data = createContext();

export default function DataProvider(props) {

    const [checked, setChecked] = useState(true);

    let [personalInfo ,setPersonalInfo] = useState (null);
    const [selectedCard , setSelectedCard] = useState(null);
    const [addOns , setAddOns] = useState([]);
    const [protectPersonalInfo , setProtectPersonalInfo] = useState(false);
    const [protectSelectPlan , SetProtectSelectPlan] = useState(false);
    const [protectAdds , setProtectAdds] = useState(false);
    const [ProtectSummarySec , setProtectSummarySec] = useState(false);



    const cards = [
        {
            id : 0 ,
            name : "Arcade",
            price : 9 ,
            price2 : 90 ,
            time : "Monthly",
            time2 : "Yearly",
            img : img1,
           
        },
        {
            id : 1 ,
            name : "Advanced",
            price : 12 ,
            price2 : 120 ,
            time : "Monthly",
            time2 : "Yearly",
            img : img2,
        },
        {
            id : 2 ,
            name : "Pro",
            price : 15 ,
            price2 : 150 ,
            time : "Monthly",
            time2 : "Yearly",
            img : img3,
        },
    ]


    const adds = [
        {
            id : 0 ,
            name : "Online service",
            content: "Access to multiplayer games",
            price : 1 ,
            price2: 10 ,
            time : "Monthly",
            time2 : "Yearly",
        },
        {
            id : 1 ,
            name : "Larger storage",
            content: "Extra 1TB of cloud save",
            price : 2 ,
            price2: 20 ,
            time : "Monthly",
            time2 : "Yearly",}
            ,{
                id : 2 ,
                name : "Customizable profile",
                content: "Custom theme on your profile",
                price : 2 ,
                price2: 20 ,
                time : "Monthly",
                time2 : "Yearly",
            }
    ]

    function StorePersonalInfo() {
        if (localStorage.getItem("personalInfo")) {
            setPersonalInfo(JSON.parse(localStorage.getItem("personalInfo")));
        }
    }

    function StoreSelectedCard() {
        if (localStorage.getItem("selectedCard")) {
            setSelectedCard(JSON.parse(localStorage.getItem("selectedCard")));
        }
    }

    function StoreAddOns() {
        if (localStorage.getItem("addOns")) {
            setAddOns(JSON.parse(localStorage.getItem("addOns")));
        }
    }

    return <>
    
    <data.Provider value={{personalInfo , setPersonalInfo ,checked , setChecked,cards,selectedCard,setSelectedCard ,adds , setAddOns,addOns ,StorePersonalInfo,StoreSelectedCard,StoreAddOns ,protectPersonalInfo,ProtectSummarySec ,protectSelectPlan,protectAdds}} >
        {props.children}
    </data.Provider>
    </>
}