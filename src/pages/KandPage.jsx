import {useParams} from "react-router-dom";
import DohaCard from "../components/DohaCard";
export default function KandPage() {

    const {name}=useParams();

    // temporary static data

    const dohas=[
        {
            id:1,
            doha:"श्रीगुरु चरण सरोज रज...",
            arth:"गुरु के चरणों की धूल से मन को पवित्र करता हूँ..."
        },

         {
      id: 2,
      doha: "बुद्धिहीन तनु जानिके...",
      arth: "मैं अपनी बुद्धि को छोटा जानकर प्रभु से प्रार्थना करता हूँ..."
        },

    ];

    return (

        <div 
        className="p-6">
            <h2 className="text-2xl font-bold text-secondary mb-6 text-center">
                {name}
            </h2>
            <div className="text-center">
            {dohas.map((d)=>(
                <DohaCard key={d.id} doha={d.doha} arth={d.arth} />
            ))}
            </div>
        </div>

    );

}