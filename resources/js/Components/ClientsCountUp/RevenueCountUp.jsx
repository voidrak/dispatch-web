import { useRef } from "react";
import CountUp from "react-countup";
import { useCountUp } from "react-countup";

export default function RevenueCountUp() {
  const revenue = useRef(null);
  const {} = useCountUp({
    ref: revenue,
    start: 0,
    end: 10000,
    duration: 3,
    scrollSpyOnce: true,
    enableScrollSpy: true,
  });
  return (
    <div>
      <div ref={revenue} />
    </div>
  );
}
