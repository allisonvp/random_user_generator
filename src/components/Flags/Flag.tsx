import { countries } from "./data";
import { Country } from "./data";

interface Props {
  country: string;
}

function Flag({ country }: Props) {
  const countryFind = countries.find(
    (c: Country) => c.keyOnEnglish === country
  );
  return (
    <div className={`${countryFind?.class} w-6 h-6 translate-y-[1px]`}></div>
  );
}

export default Flag;
