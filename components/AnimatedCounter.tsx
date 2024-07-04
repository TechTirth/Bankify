"use client";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp className="w-full"
        decimals={2}
        duration={2.75}
        prefix="₹"
        decimal="."
        end={amount}
      />
    </div>
  );
};

export default AnimatedCounter;
