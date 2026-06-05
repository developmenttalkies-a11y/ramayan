import {useParams} from "react-router-dom";
import DohaCard from "../components/DohaCard";
import ramayanData from "../data/ramayanData";
import VerseCard from "../components/VerseCard";
export default function KandPage() {

    const {name}=useParams();

    // temporary static data

    const dohas=ramayanData[name]||[];
        
    return (

        <div 
        className="p-6">
            <h2 className="text-2xl font-bold text-secondary mb-6 text-center">
                {name}
            </h2>
            <div className="text-center">
            {dohas.length===0 ? (
                <p className="text-center text-gray-600">No data available</p>
            ):(dohas.map((d)=>(
                <VerseCard key={d.id} id={d.id} type={d.type} text={d.text} arth={d.arth} />
            )))}
            </div>
        </div>

    );

}