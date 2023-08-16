import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}
export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer?: (manufacturer: string) => void;
    selected: boolean;
    setSelected: (selected: boolean) => void;
}
export interface SearchbarProps {
    setManufacturer?: (manufacturer: string) => string;
    setModel: (model: string) => string;
}
export interface OptionProps {
    title: string;
    value: string;
}
export interface CustomFilterProps {
    title: string;
    options?: OptionProps[];
    setFilter: (fuel: string) => void;
}
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}
export interface FilterProps {
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string,
}

export interface ShowMoreProps {
    pageNumber: number,
    isNext: boolean,
    setLimit: (limit: number) => void
}