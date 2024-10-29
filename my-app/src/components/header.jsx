import NEES from "../assets/svgs/NEES.svg";
import Navigation from "../assets/svgs/Navigation.svg";
import Search from "../assets/svgs/Search.svg";

export default function components() {
  return (
    <div className="bg-header h-24 flex justify-around items-center mb-8">
      <img src={NEES} alt="NEES Logo" />
      <div className="flex gap-4">
        <img src={Search} alt="Search" className="invisible sm:visible" />
        <img src={Navigation} alt="Navigation" />
      </div>
    </div>
  );
}
