export default function VerseCard({text,type,arth }){

    const getTitle=()=>{
        switch(type){
      case "doha": return "दोहा";
      case "chaupai": return "चौपाई";
      case "chhand": return "छंद";
      case "shlok": return "श्लोक";
      default: return "";

        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md mb-6 border border-orange-100">
            {/* Type Label */}
            <h3 className="text-sm text-orange-500 font-semibold mb-2">
                {getTitle()}
            </h3>

            {/* text */}

            <p className="text-lg leading-relaxed font-medium text-center"
            >
                {text}

            </p>
<div className="my-4 border-t"></div>
            {/* arth */}

            <p className="text-gray-700 leading-relaxed text-justify">
                {arth}
            </p>

        </div>
    );

}