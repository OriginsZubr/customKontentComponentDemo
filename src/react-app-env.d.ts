/// <reference types="react-scripts" />
interface CustomElementType {
    init: (cb: function) => void;
    setHeight: (number) => void;
}
interface Window { 
    CustomElement: CustomElementType; 
}
