import React from "react";
import "./CategoryScroller.css";
import { v4 as uuid } from "uuid";
import { useSelectedCategory } from "../../Context/selected-category-context";

const categories = [
  {
    topic: "All",
    id: uuid(),
    route: "/categories",
  },
  {
    topic: "DSA",
    id: uuid(),
    route: "/categories/dsa",
  },
  {
    topic: "DevOps",
    id: uuid(),
    route: "/categories/devops",
  },
  {
    topic: "Cloud",
    id: uuid(),
    route: "/categories/cloud",
  },
  {
    topic: "React",
    id: uuid(),
    route: "/categories/react",
  },
  {
    topic: "JavaScript",
    id: uuid(),
    route: "/categories/javascript",
  },
  {
    topic: "CompetitiveProgramming",
    id: uuid(),
    route: "/categories/competitive-programming",
  },
  {
    topic: "MachineLearning",
    id: uuid(),
    route: "/categories/machine-learning",
  },
  {
    topic: "DataScience",
    id: uuid(),
    route: "/categories/data-science",
  },
  {
    topic: "Blockchain",
    id: uuid(),
    route: "/categories/blockchain",
  },
  {
    topic: "GameDevelopment",
    id: uuid(),
    route: "/categories/game-development",
  },
  {
    topic: "SystemDesign",
    id: uuid(),
    route: "/categories/system-design",
  },
];

function CategoryScroller() {
  const { selectedCategory, setSelectedCategory } = useSelectedCategory();

  return (
    <div className="categoriesList">
      {categories.map((category) => {
        return (
          <p
            onClick={() => setSelectedCategory(category.topic)}
            style={{
              backgroundColor:
                category.topic === selectedCategory ? "gray" : null,
              color: category.topic === selectedCategory ? "white" : null,
            }}
            className="category__Pill"
            key={category.id}
          >
            {category.topic}
          </p>
        );
      })}
    </div>
  );
}

export default CategoryScroller;
