import KandCard from "../components/KandCard";

function Home() {

     const kands=[
    "बाल काण्ड",
    "अयोध्या काण्ड",
    "अरण्य काण्ड",
    "किष्किंधा काण्ड",
    "सुंदर काण्ड",
    "लंका काण्ड",
    "उत्तर काण्ड"

        ];

    return(
        <div className="p-6">
       <h2 className="text-center text-2xl font-bold text-secondary mb-6">Select the kand</h2>
       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
       {kands.map((k,i)=>(
        <KandCard key={i} name={k} />
       ))}
       </div>
        </div>

    );
}

export default Home;