import { useRef } from "react";
import CountUp from "react-countup";
import { useCountUp } from "react-countup";
export default function ClientsCountUp() {
  const clients = useRef(null);

  const {} = useCountUp({
    ref: clients,
    start: 0,
    end: 500,
    duration: 3,
    scrollSpyOnce: true,
    enableScrollSpy: true,
  });
  return (
    <div>
      <div ref={clients} />
    </div>
  );
}
