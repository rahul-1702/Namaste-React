import type { IsVeg } from "./FoodItem";
import * as React from "react";

interface VegTagProps {
    vegClassifier: IsVeg;
}

const VegTag: React.FC<VegTagProps> = ({ vegClassifier }) => {
    return (
        <span className={`w-8 h-8 flex items-center justify-center border-4 bg-white ${(vegClassifier === 'VEG') ? 'border-green-500' : 'border-red-500'}`}>
                        <span className={`w-4 h-4 rounded-full ${(vegClassifier === 'VEG') ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    </span>
    )
}

export default VegTag;