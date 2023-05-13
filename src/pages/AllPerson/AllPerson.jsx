import React from "react";
import { useEffect } from "react";
import { getPerson } from "../../APIRequiest/movieApiRequest";
import { useSelector } from "react-redux";

const AllPerson = () => {
  const persons = useSelector((state) => state.movies.persons);
  console.log(persons);

  useEffect(() => {
    getPerson();
  }, []);
  return (
    <div className="px-4 p-4 md:px-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {persons.map((person, i) => (
          <div key={i} className="shadow p-1">
            <div className="w-full h-[300px]">
              <img
                src={person.profile_pic}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2">
              <p className="text-[20px] font-medium capitalize">
                {person.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPerson;
