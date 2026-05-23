"use client";
import IdeaCard from "@/components/IdeaCard";
import { Select, Label, SearchField, ListBox, InputGroup } from "@heroui/react";
import { Funnel } from "lucide-react";
import { useState } from "react";

// send query to get search results
const searchIdeas = async (query) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/search-ideas?search=${query}`,
  );
  return await res.json();
};
// categories for filter
const filterIdeas = async (category) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/filter-ideas?category=${category}`,
  );
  return await res.json();
};

const categories = [
  "Tech",
  "Health",
  "AI",
  "Education",
  "E-commerce",
  "Environment",
  "Finance",
  "Social",
];

const IdeasPage = ({ allIdeas }) => {
  const [ideas, setIdeas] = useState(allIdeas);
  // search handler
  const handleSearch = async (e) => {
    const query = e.target.value;
    if (e.code !== "Enter") return;
    console.log(query);
    if (!query) return setIdeas(allIdeas);
    const searchResults = await searchIdeas(query);
    console.log(searchResults);
    setIdeas(searchResults);
  };
  // filter handler
  const handleFilter = async (category) => {
    if (category === "all") return setIdeas(allIdeas);
    const filteredIdeas = await filterIdeas(category);
    setIdeas(filteredIdeas);
  };

  return (
    <section className="container mx-auto py-12 px-4 mt-2">
      <header>
        <h1 className="text-4xl sm:text-5xl dark:text-white text-center">
          All Ideas
        </h1>
        <p className="text-gray-500 mt-2 dark:text-slate-50 text-xl text-center">
          Browse through thousands of innovative startup ideas
        </p>
      </header>

      {/* search and filter container */}
      <section className="flex  shadow-lg rounded-xl p-6 bg-gray-100 border-2 border-yellow-100/80 dark:bg-slate-800 dark:border-slate-700 my-6 gap-4  flex-col sm:flex-row items-center *:flex-1">
        {/* search */}
        <SearchField
          aria-label="Search Ideas"
          name="search"
          className=" w-full sm:max-w-md">
          <SearchField.Group className="dark:bg-slate-800 py-6 border-2 border-gray-200">
            <SearchField.SearchIcon />
            <SearchField.Input
              className="text-md"
              placeholder="Search Ideas By Title "
              onKeyUp={handleSearch}
            />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>

        {/* filter */}

        <Select
          name="category"
          variant="bordered"
          aria-label="filter by category"
          color="warning"
          defaultValue="all"
          onChange={(key) => handleFilter(key)}
          className="w-full sm:max-w-md">
          <Select.Trigger className="p-3 gap-4 border-2 border-gray-200 rounded-xl flex items-center justify-between dark:bg-slate-800 dark:text-white">
            <Funnel className="text-gray-400" />
            <Select.Value className="dark:text-white text-md text-gray-500" />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox className="dark:bg-slate-800 dark:text-white">
              <ListBox.Item id="all" key="all" textValue="All Categories">
                All Categories
                <ListBox.ItemIndicator />
              </ListBox.Item>
              {categories.map((name, i) => (
                <ListBox.Item id={name} key={i} textValue={name}>
                  {name}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </section>

      {/* card container */}
      <section className="">
        <div className="text-gray-500 dark:text-slate-50">
          Showing <span className="font-bold">{ideas.length}</span> ideas
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-8">
          {ideas.map((idea) => (
            <IdeaCard key={idea._id} data={idea} />
          ))}
        </div>
      </section>
    </section>
  );
};
export default IdeasPage;
