export default function DohaCard({doha,arth}) {

return(
    <div className="bg-white p-6 rounded-2xl shadow-md mb-6 border border-orange-100">
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