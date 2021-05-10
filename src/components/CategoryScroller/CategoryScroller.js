import React from "react";
import "./CategoryScroller.css";
import { v4 as uuid } from "uuid";
import { useSelectedCategory } from "../../Context/selected-category-context";

const categories = [
  {
    topic: "All",
    route: "/categories",
  },
  {
    topic: "DSA",
    route: "/categories/dsa",
  },
  {
    topic: "DevOps",
    route: "/categories/devops",
  },
  {
    topic: "Cloud",
    route: "/categories/cloud",
  },
  {
    topic: "React",
    route: "/categories/react",
  },
  {
    topic: "JavaScript",
    route: "/categories/javascript",
  },
  {
    topic: "CompetitiveProgramming",
    route: "/categories/competitive-programming",
  },
  {
    topic: "MachineLearning",
    route: "/categories/machine-learning",
  },
  {
    topic: "DataScience",
    route: "/categories/data-science",
  },
  {
    topic: "Blockchain",
    route: "/categories/blockchain",
  },
  {
    topic: "GameDevelopment",
    route: "/categories/game-development",
  },
  {
    topic: "SystemDesign",
    route: "/categories/system-design",
  },
];

export function CategoryScroller() {
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
            key={uuid()}
          >
            {category.topic}
          </p>
        );
      })}
    </div>
  );
}
