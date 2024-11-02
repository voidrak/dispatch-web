import { useRef } from "react";
import CountUp from "react-countup";
import { useCountUp } from "react-countup";

export default function BookedCountUp() {
  const booked = useRef(null);
  const {} = useCountUp({
    ref: booked,
    start: 0,
    end: 30000,
    duration: 3,
    scrollSpyOnce: true,
    enableScrollSpy: true,
  });
  return (
    <div>
      <div ref={booked} />
    </div>
  );
}
