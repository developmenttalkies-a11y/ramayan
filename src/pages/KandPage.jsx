import {useParams} from "react-router-dom";
export default function KandPage() {

    const {name}=useParams();

    return (

        <div 
        className="">
            Welcome to {name}
        </div>

    );

}