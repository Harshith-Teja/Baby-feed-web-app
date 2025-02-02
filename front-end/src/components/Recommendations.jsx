import { useEffect, useState } from "react";

export const Recommendations = ({ name, age, weight, timesFeeded, temp }) => {
  const [developments, setDevelopments] = useState("");

  const ageVal = parseInt(age);
  const handleRecommendations = () => {
    switch (true) {
      case ageVal > 4 && ageVal <= 6:
        setDevelopments(
          "Make first cereal feedings very soupy and thicken slowly, feed babies exclusively with breast milk (i.e. give them no other food or drink) and feed them on demand (i.e. as often as they want, day and night)"
        );
        break;
      case ageVal == 7:
        setDevelopments("Start feeding small and bite sized pieces of foods");
        break;
      case ageVal == 8:
        setDevelopments(
          "Decrease the milk intake and increase the solid food intake"
        );
        break;
      case ageVal == 9:
        setDevelopments(
          "Start feeding more soft foods, and make sure the diet has a good variety"
        );
        break;
      default:
        setDevelopments("Baby may change to soft food");
    }
  };

  useEffect(() => {
    handleRecommendations();
  }, [age]);

  return (
    <div className="w-full h-dvh">
      <section className="flex flex-col items-center mt-8 text-xl">
        <h1 className="font-bold">{`Recommendations for baby ${name}`}</h1>
        {name && age && weight && timesFeeded && temp ? (
          <ul className="list-disc mt-4 w-5/6 sm:w-1/2 border-2 border-black rounded-2xl bg-slate-300 px-8 py-4">
            <li className="my-2">{developments}</li>
            <li className="my-2">
              Gradually increase food consistency and variety as the infant gets
              older
            </li>
            <li className="my-2">
              Avoid foods in a form that may cause choking, such as whole grapes
              or raw carrots
            </li>
            <li className="my-2">
              Avoid giving drinks with low nutrient value, such as tea, coffee
              and sugary soft drinks
            </li>
            <li className="my-2">
              Limit the amount of juice offered, to avoid displacing more
              nutrient-rich foods
            </li>
            <li className="my-2">
              Do not add salt or sugars to foods for babies
            </li>
          </ul>
        ) : (
          <h2>Complete the Questionarrie part first</h2>
        )}
      </section>
    </div>
  );
};
