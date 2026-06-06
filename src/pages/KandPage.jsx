import {useParams} from "react-router-dom";
import DohaCard from "../components/DohaCard";
import ramayanData from "../data/ramayanData";
import VerseCard from "../components/VerseCard";
import kandNames from "../data/kandNames";
export default function KandPage() {

    const {name}=useParams();

    // temporary static data

    const kand=ramayanData[name]||{};

    const header = kand.header || { lines: [] };
    const verses=kand.verses||[];

        
    return (
        <>
        <div className="p-6">
            <div className="text-center">
            {header.lines?.map((line, index) => (
            <p
                key={index}
                className={
                index === 2
                    ? "text-2xl font-bold text-secondary"
                    : "text-lg text-gray-700"
                }
            >
                {line}
            </p>
            ))}
        </div>
        
            <h2 className="text-2xl font-bold text-secondary mb-6 text-center">
                {kandNames[name]}
            </h2>
            <div className="text-center">
            {verses.length===0 ? (
                <p className="text-center text-gray-600">No data available</p>
            ):(verses.map((d)=>(
                <VerseCard key={d.id} id={d.id} type={d.type} text={d.text} arth={d.arth} />
            )))}
            </div>
        </div>
</>
    );

}