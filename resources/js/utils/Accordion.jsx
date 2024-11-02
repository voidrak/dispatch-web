import { createContext, useContext, useRef, useEffect, useState } from "react";

const AccordianContext = createContext();
export default function Accordion({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value);

  useEffect(() => {
    onChange?.(selected);
  }, [selected]);
  return (
    <ul {...props} className="list-none">
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === value;
  const ref = useRef(null);
  return (
    <li className="" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex items-start justify-between gap-x-2 py-2 font-medium sm:text-xl md:text-2xl lg:items-center lg:text-4xl 2xl:text-5xl"
      >
        {trigger}
        <svg
          className={`min-w-3 max-w-3 -rotate-45 fill-bg-light transition-transform duration-500 sm:max-w-5 ${open ? "rotate-0" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      </header>
      <div
        className="overflow-y-hidden transition-all duration-500"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="px-2 text-gray-400 sm:text-lg lg:text-xl" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
