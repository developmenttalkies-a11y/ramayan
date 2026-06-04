import { useNavigate, useParams } from "react-router-dom";

export default function DohaCard({id,doha,arth}) {
const navigate=useNavigate();
const {name}=useParams();
return(
    <div 
    onClick={()=>navigate(`/kand/${name}/${id}`)}
    className="bg-white p-6 rounded-2xl shadow-md mb-6 border border-orange-100">
    <p className="text-lg text-gray-800 font-medium leading-relaxed">
        {doha}
      </p>

          {/* Divider */}
      <div className="my-4 border-t border-orange-200"></div>

      {/* Arth */}
      <p className="text-gray-600 leading-relaxed">
        {arth}
      </p>
      
    </div>
);

}